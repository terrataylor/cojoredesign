'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  useEffect(() => {
    // Initialize AOS for this section
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })
    }
  }, [])

  return (
    <section id="hero" className="hero section accent-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Courtney Johnson</h1>
            <h2>CoJo LLC</h2>
            <p>
              Business Owner / Business Consultant / Board member<br />
              Diversity & Inclusion Champion / Community Volunteer<br />
              Vice President, Atlanta Life Insurance Company<br />
              Vice Chair, Teachers Supply Closet & YWCA<br />
              Podcast Hostess of Courtney&apos;s Corner
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <Image
              src="/assets/img/hero-img.jpg"
              alt="Courtney Johnson"
              width={600}
              height={600}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
