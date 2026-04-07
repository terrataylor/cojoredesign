'use client'

import { useEffect } from 'react'
import about from '../../../site/content/about.json'
import './ExecutiveSummarySection.css'

export default function ExecutiveSummarySection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="executive-summary" className="section light-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-10 mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              {about.executiveSummary.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
