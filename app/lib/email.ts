/**
 * Email utility functions
 * Centralized email configuration and helpers
 */

export const EMAIL_CONFIG = {
  from: process.env.FROM_EMAIL || 'contactme@cojollc.com',
  to: process.env.TO_EMAIL || 'CoJo.dreamhomes@gmail.com',
  replyTo: (email: string) => email,
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Create HTML email template
 */
export function createEmailTemplate(data: {
  name: string
  email: string
  subject: string
  message: string
}): string {
  const { name, email, subject, message } = data
  const sanitizedMessage = sanitizeInput(message).replace(/\n/g, '<br>')
  const timestamp = new Date().toLocaleString()

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .email-container {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #5846f9 0%, #7c3aed 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .header p {
            margin: 5px 0 0 0;
            opacity: 0.9;
            font-size: 14px;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 25px;
          }
          .field-label {
            font-weight: 600;
            color: #5846f9;
            margin-bottom: 8px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .field-value {
            background-color: #f9f9f9;
            padding: 12px 15px;
            border-radius: 5px;
            border-left: 3px solid #5846f9;
            font-size: 14px;
            word-wrap: break-word;
          }
          .message-box {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            border-left: 3px solid #5846f9;
            white-space: pre-wrap;
            font-size: 14px;
            line-height: 1.8;
            min-height: 100px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #f0f0f0;
            font-size: 11px;
            color: #999;
            text-align: center;
          }
          .footer p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>CoJo LLC Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">From</div>
              <div class="field-value">${sanitizeInput(name)}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${sanitizeInput(email)}</div>
            </div>
            <div class="field">
              <div class="field-label">Subject</div>
              <div class="field-value">${sanitizeInput(subject)}</div>
            </div>
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${sanitizedMessage}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the contact form on cojollc.com</p>
            <p>Sent at: ${timestamp}</p>
          </div>
        </div>
      </body>
    </html>
  `.trim()
}

/**
 * Create plain text email template
 */
export function createTextEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}): string {
  const { name, email, subject, message } = data
  const timestamp = new Date().toLocaleString()

  return `
New Contact Form Submission - CoJo LLC Website

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on cojollc.com
Sent at: ${timestamp}
  `.trim()
}
