'use client'

import { useEffect, useState } from 'react'
import { useMylaContent } from '../content'
import InquiryForm from './InquiryForm'

export default function TransportInterest() {
  const myla = useMylaContent()
  const [open, setOpen] = useState(false)
  const { form } = myla.transport
  const comingSoon = myla.transportStatus !== 'live'

  useEffect(() => {
    if (open) document.getElementById('myla-transport-name')?.focus()
  }, [open])

  if (open) {
    return (
      <div id="myla-transport-interest" className="myla-transport-form">
        <h3>{form.heading}</h3>
        <InquiryForm type="transport" />
      </div>
    )
  }

  return (
    <div className="myla-transport-cta">
      <button
        type="button"
        className="myla-btn myla-btn-primary"
        aria-expanded={false}
        aria-controls="myla-transport-interest"
        onClick={() => setOpen(true)}
      >
        {form.submitLabel}
      </button>
      {comingSoon && <p className="myla-form-note">{form.comingSoonNote}</p>}
    </div>
  )
}
