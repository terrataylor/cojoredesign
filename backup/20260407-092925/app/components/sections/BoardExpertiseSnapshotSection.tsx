'use client'

import { useEffect } from 'react'
import './BoardExpertiseSnapshotSection.css'

export default function BoardExpertiseSnapshotSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  const expertiseItems = [
    'Insurance & Risk Governance',
    'Workforce Strategy & Benefits Innovation',
    'Growth Partnerships & Distribution',
    'Operational Scaling',
    'Market Expansion Strategy',
    'Governance in Regulated Industries',
  ]

  return (
    <section id="board-expertise" className="board-expertise section light-background">
      <div className="container">
        <div className="expertise-card" data-aos="fade-up" data-aos-delay="100">
          <h2>Board Expertise Snapshot</h2>
          <div className="expertise-grid">
            {expertiseItems.map((item, index) => (
              <div key={index} className="expertise-badge">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
