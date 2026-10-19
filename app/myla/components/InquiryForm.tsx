'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMylaContent } from '../content'

type InquiryType = 'stays' | 'transport'

interface InquiryFormValues {
  name: string
  email: string
  phone: string
  arrival: string
  departure: string
  guests: string
  questions: string
  contact: string
  deliveryNeed: string
  website: string
}

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/

function isPhone(value: string) {
  return PHONE_PATTERN.test(value) && value.replace(/\D/g, '').length >= 7
}

function localToday() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export default function InquiryForm({ type }: { type: InquiryType }) {
  const myla = useMylaContent()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({ defaultValues: { guests: '1' } })

  const isStays = type === 'stays'
  const copy = isStays ? myla.stays.form : myla.transport.form
  const showComingSoonNote = !isStays && myla.transportStatus !== 'live'
  const id = (field: string) => `myla-${type}-${field}`

  const onSubmit = async (values: InquiryFormValues) => {
    setStatus('loading')

    const payload = isStays
      ? {
          type,
          name: values.name,
          email: values.email,
          phone: values.phone,
          arrival: values.arrival,
          departure: values.departure,
          guests: Number(values.guests),
          questions: values.questions,
          website: values.website,
        }
      : {
          type,
          name: values.name,
          contact: values.contact,
          deliveryNeed: values.deliveryNeed,
          website: values.website,
        }

    try {
      const endpoint = process.env.NEXT_PUBLIC_MYLA_FORM_URL
      if (!endpoint) throw new Error('NEXT_PUBLIC_MYLA_FORM_URL is not set')

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)

      setStatus('success')
      reset()
    } catch (error) {
      console.error('MyLa inquiry failed:', error)
      setStatus('error')
    }
  }

  return (
    <form className="myla-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="hidden" name="type" value={type} />
      <div className="myla-honeypot" aria-hidden="true">
        <label htmlFor={id('website')}>Website</label>
        <input id={id('website')} type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="myla-form-grid">
        <div className="myla-field">
          <label htmlFor={id('name')}>Name</label>
          <input
            id={id('name')}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="myla-error">{errors.name.message}</span>}
        </div>

        {isStays ? (
          <>
            <div className="myla-field">
              <label htmlFor={id('email')}>Email</label>
              <input
                id={id('email')}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' },
                })}
              />
              {errors.email && <span className="myla-error">{errors.email.message}</span>}
            </div>

            {myla.visibility?.phoneField && (
              <div className="myla-field">
                <label htmlFor={id('phone')}>Phone <span className="myla-optional">(optional)</span></label>
                <input
                  id={id('phone')}
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  aria-invalid={!!errors.phone}
                  {...register('phone', {
                    validate: (v) => !v || isPhone(v) || 'Enter a valid phone number',
                  })}
                />
                {errors.phone && <span className="myla-error">{errors.phone.message}</span>}
              </div>
            )}

            <div className="myla-field">
              <label htmlFor={id('arrival')}>Arrival</label>
              <input
                id={id('arrival')}
                type="date"
                aria-invalid={!!errors.arrival}
                {...register('arrival', {
                  required: 'Arrival date is required',
                  validate: (v) => v >= localToday() || 'Arrival cannot be in the past',
                })}
              />
              {errors.arrival && <span className="myla-error">{errors.arrival.message}</span>}
            </div>

            <div className="myla-field">
              <label htmlFor={id('departure')}>Departure</label>
              <input
                id={id('departure')}
                type="date"
                aria-invalid={!!errors.departure}
                {...register('departure', {
                  required: 'Departure date is required',
                  validate: (v) => {
                    const arrival = getValues('arrival')
                    return !arrival || v > arrival || 'Departure must be after arrival'
                  },
                })}
              />
              {errors.departure && <span className="myla-error">{errors.departure.message}</span>}
            </div>

            <div className="myla-field">
              <label htmlFor={id('guests')}>Guests</label>
              <input
                id={id('guests')}
                type="number"
                min={1}
                max={20}
                inputMode="numeric"
                aria-invalid={!!errors.guests}
                {...register('guests', {
                  required: 'Number of guests is required',
                  validate: (v) => {
                    const n = Number(v)
                    return (Number.isInteger(n) && n >= 1 && n <= 20) || 'Enter 1 to 20 guests'
                  },
                })}
              />
              {errors.guests && <span className="myla-error">{errors.guests.message}</span>}
            </div>

            {myla.visibility?.questionsField && (
              <div className="myla-field myla-field-full">
                <label htmlFor={id('questions')}>Questions <span className="myla-optional">(optional)</span></label>
                <textarea
                  id={id('questions')}
                  rows={3}
                  placeholder="Anything we should know about your stay?"
                  {...register('questions')}
                />
              </div>
            )}
          </>
        ) : (
          <>
            <div className="myla-field">
              <label htmlFor={id('contact')}>Email or phone</label>
              <input
                id={id('contact')}
                type="text"
                autoComplete="email"
                placeholder="you@example.com or (555) 555-5555"
                aria-invalid={!!errors.contact}
                {...register('contact', {
                  required: 'An email or phone number is required',
                  validate: (v) =>
                    EMAIL_PATTERN.test(v.trim()) || isPhone(v.trim()) || 'Enter a valid email or phone number',
                })}
              />
              {errors.contact && <span className="myla-error">{errors.contact.message}</span>}
            </div>

            <div className="myla-field myla-field-full">
              <label htmlFor={id('deliveryNeed')}>What do you need delivered?</label>
              <textarea
                id={id('deliveryNeed')}
                rows={3}
                placeholder="Describe the goods, pickup and drop-off areas, and timing."
                aria-invalid={!!errors.deliveryNeed}
                {...register('deliveryNeed', { required: 'Please describe your delivery need' })}
              />
              {errors.deliveryNeed && <span className="myla-error">{errors.deliveryNeed.message}</span>}
            </div>
          </>
        )}
      </div>

      <button type="submit" className="myla-btn myla-btn-primary myla-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : copy.submitLabel}
      </button>

      {/* Hidden to match the approved mockup, which shows this note under the heading only.
      {isStays && <p className="myla-form-note">{myla.stays.form.note}</p>}
      */}
      {showComingSoonNote && <p className="myla-form-note">{myla.transport.form.comingSoonNote}</p>}

      <div aria-live="polite" role="status">
        {status === 'success' && <p className="myla-alert myla-alert-success">{copy.successMessage}</p>}
        {status === 'error' && <p className="myla-alert myla-alert-error">{copy.errorMessage}</p>}
      </div>
    </form>
  )
}
