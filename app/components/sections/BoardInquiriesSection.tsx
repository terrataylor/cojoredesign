'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import './BoardInquiriesSection.css'

export default function BoardInquiriesSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="board-inquiries" className="board-inquiries section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8 mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="inquiries-content">
              <h2>Board Inquiries</h2>
              <p>
                For Board Opportunities or Advisory Engagements:
              </p>
              <p>
                Please contact via email or submit an inquiry through the website contact form.
              </p>
              <div className="cta-buttons">
                <Link href="/#contact" className="btn-primary">
                  Submit Inquiry
                </Link>
                <a href="mailto:CoJo.dreamhomes@gmail.com" className="btn-secondary">
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
