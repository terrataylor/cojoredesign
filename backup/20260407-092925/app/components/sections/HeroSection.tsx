'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import home from '../../../site/content/home.json'
import './HeroSection.css'

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
            <h1>{home.hero.name}</h1>
            <h2>{home.hero.organization}</h2>
            <p>
              {home.hero.tagline}
            </p>
            <div className="mt-3">
              <a
                href={home.hero.primaryCta.href}
                className="btn btn-board-bio"
                download
              >
                {home.hero.primaryCta.label}
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <Image
              src={home.hero.image.src}
              alt={home.hero.image.alt}
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
