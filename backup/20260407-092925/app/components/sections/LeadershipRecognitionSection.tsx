'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import leadership from '../../../site/content/leadership.json'
import './LeadershipRecognitionSection.css'

export default function LeadershipRecognitionSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section
      id="leadership-recognition"
      className="leadership-recognition section light-background"
    >
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{leadership.heading}</h2>
          <p>{leadership.subheading}</p>
        </div>

        <div className="leadership-grid">
          {leadership.cards.map((card, index) => (
          <div className="leadership-card" key={card.title}>
            <div className="leadership-card-image">
              <Image 
                src={card.image}
                alt={`${card.title} image`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="leadership-card-body">
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

