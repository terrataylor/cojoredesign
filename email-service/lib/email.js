function sanitizeInput(input) {
  return String(input)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email))
}

function createEmailTemplate({ name, email, subject, message }) {
  const safeName = sanitizeInput(name)
  const safeEmail = sanitizeInput(email)
  const safeSubject = sanitizeInput(subject)
  const safeMessage = sanitizeInput(message).replace(/\n/g, '<br>')
  const timestamp = new Date().toLocaleString()

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; padding: 20px; }
      .wrap { max-width: 640px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
      .header { background: linear-gradient(135deg, #5846f9 0%, #7c3aed 100%); color: #fff; padding: 24px 20px; text-align: center; }
      .header h1 { margin: 0; font-size: 20px; }
      .header p { margin: 6px 0 0; opacity: 0.9; font-size: 13px; }
      .content { padding: 22px 20px; }
      .label { font-size: 12px; font-weight: 700; color: #5846f9; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
      .value { background: #f9f9ff; border-left: 3px solid #5846f9; padding: 10px 12px; border-radius: 6px; font-size: 14px; word-break: break-word; }
      .field { margin-bottom: 16px; }
      .footer { border-top: 1px solid #eee; padding: 14px 20px; font-size: 11px; color: #777; text-align: center; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>CoJo LLC Website</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">From</div>
          <div class="value">${safeName}</div>
        </div>
        <div class="field">
          <div class="label">Email</div>
          <div class="value">${safeEmail}</div>
        </div>
        <div class="field">
          <div class="label">Subject</div>
          <div class="value">${safeSubject}</div>
        </div>
        <div class="field">
          <div class="label">Message</div>
          <div class="value">${safeMessage}</div>
        </div>
      </div>
      <div class="footer">
        Sent at: ${timestamp}
      </div>
    </div>
  </body>
</html>`
}

function createTextEmail({ name, email, subject, message }) {
  const timestamp = new Date().toLocaleString()
  return [
    'New Contact Form Submission - CoJo LLC Website',
    '',
    `From: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    String(message),
    '',
    '---',
    `Sent at: ${timestamp}`,
  ].join('\n')
}

function createConfirmationEmailTemplate({ name, subject }) {
  const safeName = sanitizeInput(name)
  const safeSubject = sanitizeInput(subject)

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; padding: 20px; }
      .wrap { max-width: 640px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
      .header { background: linear-gradient(135deg, #5846f9 0%, #7c3aed 100%); color: #fff; padding: 24px 20px; text-align: center; }
      .header h1 { margin: 0; font-size: 20px; }
      .header p { margin: 6px 0 0; opacity: 0.9; font-size: 13px; }
      .content { padding: 30px 20px; }
      .greeting { font-size: 16px; margin-bottom: 20px; color: #333; }
      .message { font-size: 14px; line-height: 1.8; color: #555; margin-bottom: 20px; }
      .subject-box { background: #f9f9ff; border-left: 3px solid #5846f9; padding: 12px 15px; border-radius: 6px; margin: 20px 0; }
      .subject-label { font-size: 12px; font-weight: 700; color: #5846f9; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
      .subject-value { font-size: 14px; color: #333; }
      .footer { border-top: 1px solid #eee; padding: 20px; background: #fafafa; }
      .footer p { margin: 8px 0; font-size: 13px; color: #666; }
      .signature { margin-top: 20px; font-size: 14px; color: #333; }
      .signature strong { color: #5846f9; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="header">
        <h1>Thank You for Contacting Us!</h1>
        <p>CoJo LLC</p>
      </div>
      <div class="content">
        <div class="greeting">
          Hello ${safeName},
        </div>
        <div class="message">
          <p>Thank you for reaching out to CoJo LLC! We have successfully received your message and appreciate you taking the time to contact us.</p>
          <p>We have received the following information:</p>
        </div>
        <div class="subject-box">
          <div class="subject-label">Your Subject</div>
          <div class="subject-value">${safeSubject}</div>
        </div>
        <div class="message">
          <p>Our team will review your message and get back to you as soon as possible. We typically respond within 1-2 business days.</p>
          <p>We look forward to connecting with you soon!</p>
        </div>
        <div class="signature">
          <p>Best regards,<br><strong>The CoJo LLC Team</strong></p>
        </div>
      </div>
      <div class="footer">
        <p><strong>CoJo LLC</strong></p>
        <p>This is an automated confirmation email. Please do not reply to this message.</p>
        <p>If you have any urgent questions, please contact us directly at CoJo.dreamhomes@gmail.com</p>
      </div>
    </div>
  </body>
</html>`
}

function createConfirmationTextEmail({ name, subject }) {
  return [
    'Thank You for Contacting CoJo LLC!',
    '',
    `Hello ${name},`,
    '',
    'Thank you for reaching out to CoJo LLC! We have successfully received your message and appreciate you taking the time to contact us.',
    '',
    'We have received the following information:',
    '',
    `Subject: ${subject}`,
    '',
    'Our team will review your message and get back to you as soon as possible. We typically respond within 1-2 business days.',
    '',
    'We look forward to connecting with you soon!',
    '',
    'Best regards,',
    'The CoJo LLC Team',
    '',
    '---',
    '',
    'This is an automated confirmation email. Please do not reply to this message.',
    'If you have any urgent questions, please contact us directly at CoJo.dreamhomes@gmail.com',
  ].join('\n')
}

module.exports = {
  sanitizeInput,
  isValidEmail,
  createEmailTemplate,
  createTextEmail,
  createConfirmationEmailTemplate,
  createConfirmationTextEmail,
}

