'use client'

import { useEffect } from 'react'
import './ValueForBoardsSection.css'

export default function ValueForBoardsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  const contributionAreas = [
    'Enterprise Risk & Insurance Strategy',
    'Growth Partnerships & Distribution Channels',
    'Operational Scaling & Execution',
    'Workforce & Benefits Innovation',
    'Stakeholder Strategy & Brand Positioning',
    'Governance During Growth Phases',
  ]

  return (
    <section id="value-for-boards" className="value-for-boards section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <h2>Value for For-Profit Boards</h2>
              <p>
                Courtney brings a commercial governance lens shaped by executive leadership in insurance, operations, and 
                partnership development. Her experience spans enterprise risk strategy, workforce benefits innovation, and 
                market expansion initiatives across complex organizational environments.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="contribution-areas">
              <h3>Board Contribution Areas</h3>
              <ul>
                {contributionAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
