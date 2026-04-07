'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import highlights from '../../../site/content/highlights.json'
import './RecentEventsSection.css'

export default function RecentEventsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="highlights" className="highlights section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{highlights.recentEvents.heading}</h2>
        <p>{highlights.recentEvents.subheading}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <div>
                <Image
                  src={highlights.recentEvents.items[0].image}
                  alt={highlights.recentEvents.items[0].title}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
              <h3 className="mt-3">{highlights.recentEvents.items[0].title}</h3>
              <h5>{highlights.recentEvents.items[0].meta}</h5>
              <p>{highlights.recentEvents.items[0].description}</p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-item featured">
              <div>
                <Image
                  src={highlights.recentEvents.items[1].image}
                  alt={highlights.recentEvents.items[1].title}
                  width={500}
                  height={300}
                  style={{ width: '105%', maxWidth: '105%', margin: 'auto' }}
                  className="img-fluid"
                />
              </div>
              <h3 className="mt-3"><a href={highlights.recentEvents.items[1].link}> {highlights.recentEvents.items[1].title}</a></h3>
              <h5>{highlights.recentEvents.items[1].meta}</h5>
              <p>{highlights.recentEvents.items[1].description}</p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item">
              <div>
                <Image
                  src={highlights.recentEvents.items[2].image}
                  alt={highlights.recentEvents.items[2].title}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
              <h3 className="mt-3">{highlights.recentEvents.items[2].title}</h3>
              <h5>{highlights.recentEvents.items[2].meta}</h5>
              <p>{highlights.recentEvents.items[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
