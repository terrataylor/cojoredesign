import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createEmailTemplate, createTextEmail, EMAIL_CONFIG } from '../../lib/email'

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const fromEmail = EMAIL_CONFIG.from
    const toEmail = EMAIL_CONFIG.to

    // Create email content using utility functions
    const htmlContent = createEmailTemplate({ name, email, subject, message })
    const textContent = createTextEmail({ name, email, subject, message })

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email, // Allow replying directly to the sender
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
      text: textContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
