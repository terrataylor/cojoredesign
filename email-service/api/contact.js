const { Resend } = require('resend')
const { 
  createEmailTemplate, 
  createTextEmail, 
  createConfirmationEmailTemplate,
  createConfirmationTextEmail,
  isValidEmail 
} = require('../lib/email')
const { handleCors, parseJsonBody } = require('../lib/cors')

/**
 * Standalone Vercel Serverless Function
 * POST /api/contact
 *
 * CORS:
 * - Set ALLOWED_ORIGINS to a comma-separated list (e.g. "http://localhost:3000,https://cojollc.com")
 * - If not set, defaults to allowing localhost only.
 */
module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = parseJsonBody(req)
  if (body === undefined) {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  const name = body?.name
  const email = body?.email
  const subject = body?.subject
  const message = body?.message

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const fromEmail = process.env.FROM_EMAIL || 'contactme@cojollc.com'
  const fromName = process.env.FROM_NAME || 'COJOLLC'
  const toEmail = process.env.TO_EMAIL || 'CoJo.dreamhomes@gmail.com'

  // Format: "Display Name" <email@domain.com>
  const fromAddress = `${fromName} <${fromEmail}>`

  // Create email templates
  const notificationHtml = createEmailTemplate({ name, email, subject, message })
  const notificationText = createTextEmail({ name, email, subject, message })
  const confirmationHtml = createConfirmationEmailTemplate({ name, subject })
  const confirmationText = createConfirmationTextEmail({ name, subject })

  try {
    // Send notification email to recipient
    const notificationResult = await resend.emails.send({
      from: fromAddress,
      to: [toEmail],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: notificationHtml,
      text: notificationText,
    })

    if (notificationResult.error) {
      console.error('Resend error (notification):', notificationResult.error)
      // Still try to send confirmation even if notification fails
    }

    // Send confirmation email to sender
    const confirmationResult = await resend.emails.send({
      from: fromAddress,
      to: [email], // Send to the person who submitted the form
      subject: `We've received your message: ${subject}`,
      html: confirmationHtml,
      text: confirmationText,
    })

    if (confirmationResult.error) {
      console.error('Resend error (confirmation):', confirmationResult.error)
      // If notification succeeded but confirmation failed, still return success
      // since the main email was delivered
      if (notificationResult.error) {
        return res.status(500).json({ error: 'Failed to send emails' })
      }
    }

    // Return success if at least the notification email was sent
    if (notificationResult.error && confirmationResult.error) {
      return res.status(500).json({ error: 'Failed to send emails' })
    }

    return res.status(200).json({ 
      message: 'Email sent', 
      notificationId: notificationResult.data?.id,
      confirmationId: confirmationResult.data?.id,
    })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

