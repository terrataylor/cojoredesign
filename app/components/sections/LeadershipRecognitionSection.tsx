'use client'

import { useEffect } from 'react'
import Image from 'next/image'
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
          <h2>Leadership, Governance &amp; Community Recognition</h2>
          <p>
            Selected board roles, community leadership, and recognitions that reflect Courtney
            Johnson&apos;s governance and engagement across organizations and sectors.
          </p>
        </div>

        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="leadership-card-image">
              <Image
                src="/assets/img/march2026/courtneywhiteblazerspeaking.png"
                alt="Courtney Johnson speaking at a leadership event"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="leadership-card-body">
              <h3>Board &amp; Governance Roles</h3>
              <ul>
                <li>Board Chair/Vice Chair/Executive Treasurer – YWCA Greater Charleston</li>
                <li>Vice Chair – Teachers’ Supply Closet- Charleston</li>
                <li>President of the Congregation – St. Paul Lutheran Church</li>
              </ul>
            </div>
          </div>

          <div className="leadership-card">
            <div className="leadership-card-image">
              <Image
                src="/assets/img/march2026/courtneypanel.jpg"
                alt="Panel setting reflecting professional recognition"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="leadership-card-body">
              <h3>Awards &amp; Honors</h3>
              <ul>
                <li>American Heart Association – Woman of Impact Nominee 2024</li>
                <li>2025 Most Influential Woman of the Year – Southeastern Chamber of Commerce</li>
              </ul>
            </div>
          </div>

          <div className="leadership-card">
            <div className="leadership-card-image">
              <Image
                src="/assets/img/march2026/courtneybooth.jpg"
                alt="Community engagement and outreach setting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="leadership-card-body">
              <h3>Community Engagement &amp; Service</h3>
              <ul>
                <li>United Way</li>
                <li>Schools on Wheels</li>
                <li>Teammates Mentoring</li>
                <li>Youth Track &amp; Field</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

