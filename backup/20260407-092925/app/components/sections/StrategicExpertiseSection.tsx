'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import './StrategicExpertiseSection.css'

export default function StrategicExpertiseSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  const expertiseAreas = [
    {
      title: 'Enterprise Risk & Benefits Strategy',
      description: 'Advising organizations on workforce protection, insurance strategy, and risk-aligned growth.',
      icon: 'bi-shield-check',
    },
    {
      title: 'Growth & Market Expansion',
      description: 'Developing partnerships and strategic initiatives that unlock new revenue channels.',
      icon: 'bi-graph-up-arrow',
    },
    {
      title: 'Operational Leadership',
      description: 'Driving scalable execution across cross-functional environments.',
      icon: 'bi-gear',
    },
    {
      title: 'Stakeholder & Public-Private Strategy',
      description: 'Bridging commercial objectives with evolving workforce and community dynamics.',
      icon: 'bi-people',
    },
  ]

  return (
    <section id="strategic-expertise" className="strategic-expertise section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Strategic Expertise</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="expertise-item">
                <div className="icon">
                  <i className={`bi ${area.icon}`}></i>
                </div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
