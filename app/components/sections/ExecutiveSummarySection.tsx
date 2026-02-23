'use client'

import { useEffect } from 'react'
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
              <p>
                Courtney Johnson is a senior executive and strategic operator with deep expertise in group benefits, 
                reinsurance strategy, and commercial partnerships. She has led cross-functional initiatives focused on 
                growth, operational efficiency, and risk management within highly regulated industries.
              </p>
              <p>
                Her leadership experience includes building scalable programs, advising on enterprise partnerships, and 
                aligning business strategy with workforce and market dynamics. Through her private investment platform, 
                CoJo LLC, she oversees strategic assets and operating initiatives that reflect a disciplined approach to 
                growth and long-term value creation.
              </p>
              <p>
                Courtney offers boards a unique blend of operational insight, governance perspective, and 
                partnership-driven strategy — particularly valuable to organizations navigating expansion, workforce 
                transformation, or complex stakeholder environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
