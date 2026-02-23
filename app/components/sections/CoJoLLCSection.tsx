'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import './CoJoLLCSection.css'

export default function CoJoLLCSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="cojo-llc" className="cojo-llc section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <i className="bi bi-building"></i>
                <span>CoJo LLC</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h2>CoJo LLC — Investment & Operating Platform</h2>
              <p>
                CoJo LLC serves as Courtney Johnson&apos;s private investment and operating platform, focused on strategic 
                assets, real estate holdings, and business initiatives that support long-term value creation.
              </p>
              <p>
                The platform reflects a disciplined approach to capital stewardship, operational oversight, and 
                partnership-driven growth — perspectives she brings into corporate governance environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
