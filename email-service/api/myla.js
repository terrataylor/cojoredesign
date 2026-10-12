const { Resend } = require('resend')
const { isValidEmail } = require('../lib/email')
const { handleCors, parseJsonBody } = require('../lib/cors')
const {
  LABELS,
  createMylaNotificationHtml,
  createMylaNotificationText,
  createMylaConfirmationHtml,
  createMylaConfirmationText,
} = require('../lib/myla-email')

/**
 * POST /api/myla
 *
 * Body: { type: 'stays' | 'transport', ...fields }
 * Routes stays inquiries to MYLA_STAYS_INQUIRY_TO and transport interest to MYLA_TRANSPORT_INQUIRY_TO.
 */

const RECIPIENT_ENV = {
  stays: 'MYLA_STAYS_INQUIRY_TO',
  transport: 'MYLA_TRANSPORT_INQUIRY_TO',
}

const MAX_LENGTH = 5000
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

function str(value) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_LENGTH) : ''
}

function isValidPhone(value) {
  return /^\+?[\d\s().-]{7,20}$/.test(value) && value.replace(/\D/g, '').length >= 7
}

function validateStays(body) {
  const data = {
    name: str(body.name),
    email: str(body.email),
    phone: str(body.phone),
    arrival: str(body.arrival),
    departure: str(body.departure),
    guests: Number(body.guests),
    questions: str(body.questions),
  }

  if (!data.name) return { error: 'Name is required' }
  if (!data.email || !isValidEmail(data.email)) return { error: 'A valid email is required' }
  if (data.phone && !isValidPhone(data.phone)) return { error: 'Invalid phone number' }
  if (!DATE_PATTERN.test(data.arrival) || !DATE_PATTERN.test(data.departure)) {
    return { error: 'Arrival and departure dates are required' }
  }
  if (data.departure <= data.arrival) return { error: 'Departure must be after arrival' }
  if (!Number.isInteger(data.guests) || data.guests < 1 || data.guests > 20) {
    return { error: 'Guests must be between 1 and 20' }
  }

  return { data, replyTo: data.email }
}

function validateTransport(body) {
  const data = {
    name: str(body.name),
    contact: str(body.contact),
    deliveryNeed: str(body.deliveryNeed),
  }

  if (!data.name) return { error: 'Name is required' }
  const contactIsEmail = isValidEmail(data.contact)
  if (!contactIsEmail && !isValidPhone(data.contact)) {
    return { error: 'A valid email or phone number is required' }
  }
  if (!data.deliveryNeed) return { error: 'Please describe the delivery need' }

  return { data, replyTo: contactIsEmail ? data.contact : undefined }
}

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = parseJsonBody(req)
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  const type = body.type
  if (type !== 'stays' && type !== 'transport') {
    return res.status(400).json({ error: 'type must be "stays" or "transport"' })
  }

  // Honeypot: real users never fill this hidden field.
  if (str(body.website)) {
    return res.status(200).json({ message: 'Received' })
  }

  const { data, replyTo, error } = type === 'stays' ? validateStays(body) : validateTransport(body)
  if (error) {
    return res.status(400).json({ error })
  }

  const recipientVar = RECIPIENT_ENV[type]
  const recipients = (process.env[recipientVar] || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  if (recipients.length === 0) {
    console.error(`${recipientVar} is not set`)
    return res.status(500).json({ error: `Inquiry recipient not configured (${recipientVar})` })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const fromEmail = process.env.FROM_EMAIL || 'contactme@cojollc.com'
  const fromName = process.env.MYLA_FROM_NAME || 'MyLa'
  const fromAddress = `${fromName} <${fromEmail}>`

  const subject =
    type === 'stays'
      ? `[${LABELS.stays}] Inquiry from ${data.name}`
      : `[${LABELS.transport}] Interest from ${data.name}`

  try {
    const notification = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      ...(replyTo ? { replyTo } : {}),
      subject,
      html: createMylaNotificationHtml(type, data),
      text: createMylaNotificationText(type, data),
    })

    if (notification.error) {
      console.error('Resend error (myla notification):', notification.error)
      return res.status(500).json({ error: 'Failed to send inquiry' })
    }

    if (replyTo) {
      const confirmation = await resend.emails.send({
        from: fromAddress,
        to: [replyTo],
        subject: `We've received your ${LABELS[type]} message`,
        html: createMylaConfirmationHtml(type, data.name),
        text: createMylaConfirmationText(type, data.name),
      })
      if (confirmation.error) {
        console.error('Resend error (myla confirmation):', confirmation.error)
      }
    }

    return res.status(200).json({ message: 'Inquiry sent', id: notification.data?.id })
  } catch (err) {
    console.error('Unexpected error (myla):', err)
    return res.status(500).json({ error: 'Failed to send inquiry' })
  }
}
