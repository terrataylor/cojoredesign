'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import './RecentEventsSection.css'

export default function RecentEventsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Events</h2>
        <p>Some of my recent events</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <div>
                <Image
                  src="/assets/img/cheryl.png"
                  alt="Cheryl Manigo"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
              <h3 className="mt-3">Cheryl Manigo</h3>
              <h5>Lifestyle Manager</h5>
              <p>
                I am excited to share some great news with you! CoJo LLC is growing, and to better serve our expanding
                operations, we&apos;ve brought on a Lifestyle Manager, Cheryl Manigo, to help manage our properties,
                streamline our various ventures, and personal growth for the future.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-item featured">
              <div>
                <Image
                  src="/assets/img/shelbyJ.png"
                  alt="Shelby J Concert"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
              <h3 className="mt-3">Shelby J Concert</h3>
              <h5>Go Red - Woman of Impact 2025</h5>
              <p>
                Join us for an unforgettable evening with Shelby J, a powerful voice for women&apos;s health and
                empowerment. This concert is part of the Go Red - Woman of Impact 2025 campaign, raising awareness and
                funds for heart disease research and prevention.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item">
              <div>
                <Image
                  src="/assets/img/acknowledgement.jpg"
                  alt="Go Red for Women"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
              <h3 className="mt-3">Go Red for Women</h3>
              <h5>Woman of Impact Campaign</h5>
              <p>
                Each year a select group of individuals from communities across the country are nominated to be a part
                of this 9-week blind competition because of their passion and drive to make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
