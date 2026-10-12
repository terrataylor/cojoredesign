const LABELS = {
  stays: 'MyLa Stays',
  transport: 'MyLa Transport',
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function fieldRows(type, data) {
  if (type === 'stays') {
    return [
      ['Name', data.name],
      ['Email', data.email],
      ['Phone', data.phone || 'Not provided'],
      ['Arrival', data.arrival],
      ['Departure', data.departure],
      ['Guests', data.guests],
      ['Questions', data.questions || 'None'],
    ]
  }
  return [
    ['Name', data.name],
    ['Email or phone', data.contact],
    ['Delivery need', data.deliveryNeed],
  ]
}

function layout(title, subtitle, bodyHtml) {
  return `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
  <body style="margin:0;padding:20px;background:#faf6ec;font-family:Arial,sans-serif;color:#1d2420;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #f3e3b5;">
      <div style="background:#0f4d34;color:#fff;padding:24px 20px;text-align:center;border-bottom:4px solid #d4a63a;">
        <h1 style="margin:0;font-size:22px;">${escapeHtml(title)}</h1>
        <p style="margin:6px 0 0;font-size:14px;color:#f3e3b5;">${escapeHtml(subtitle)}</p>
      </div>
      <div style="padding:24px;">${bodyHtml}</div>
      <div style="padding:16px;text-align:center;font-size:11px;color:#888;border-top:1px solid #f1ead8;">
        Sent ${escapeHtml(new Date().toUTCString())}
      </div>
    </div>
  </body>
</html>`
}

function createMylaNotificationHtml(type, data) {
  const rows = fieldRows(type, data)
    .map(
      ([label, value]) => `
        <div style="margin-bottom:16px;">
          <div style="font-size:12px;font-weight:bold;color:#0f4d34;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">${escapeHtml(label)}</div>
          <div style="background:#faf6ec;padding:10px 12px;border-left:3px solid #d4a63a;border-radius:4px;white-space:pre-wrap;">${escapeHtml(value)}</div>
        </div>`
    )
    .join('')
  const title = type === 'stays' ? 'New Stays Inquiry' : 'New Transport Interest'
  return layout(title, `${LABELS[type]} website form`, rows)
}

function createMylaNotificationText(type, data) {
  const rows = fieldRows(type, data)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')
  return `New ${LABELS[type]} form submission\n\n${rows}\n`
}

function createMylaConfirmationHtml(type, name) {
  const body =
    type === 'stays'
      ? 'Thank you for your interest in MyLa Stays. We received your inquiry and will follow up to confirm availability for your dates.'
      : 'Thank you for your interest in MyLa Transport. We are collecting interest now and will reach out about your delivery need. Delivery bookings are not yet open.'
  return layout(
    `Thanks, ${name}!`,
    LABELS[type],
    `<p style="font-size:15px;line-height:1.6;">${escapeHtml(body)}</p>
     <p style="font-size:15px;line-height:1.6;">Warmly,<br>The MyLa team</p>`
  )
}

function createMylaConfirmationText(type, name) {
  const body =
    type === 'stays'
      ? 'Thank you for your interest in MyLa Stays. We received your inquiry and will follow up to confirm availability for your dates.'
      : 'Thank you for your interest in MyLa Transport. We are collecting interest now and will reach out about your delivery need. Delivery bookings are not yet open.'
  return `Hi ${name},\n\n${body}\n\nWarmly,\nThe MyLa team\n`
}

module.exports = {
  LABELS,
  createMylaNotificationHtml,
  createMylaNotificationText,
  createMylaConfirmationHtml,
  createMylaConfirmationText,
}
