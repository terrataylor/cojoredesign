'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import engagementsContent from '../../../site/content/engagements.json'
import './EngagementsSection.css'

export default function EngagementsSection() {
  const isotopeRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Isotope and imagesLoaded
      const loadIsotope = async () => {
        const Isotope = (await import('isotope-layout')).default
        const imagesLoaded = (await import('imagesloaded')).default

        const container = document.querySelector('.isotope-container')
        if (container && container instanceof HTMLElement) {
          imagesLoaded(container, () => {
            isotopeRef.current = new Isotope(container, {
              itemSelector: '.isotope-item',
              layoutMode: 'masonry',
              filter: '*',
              sortBy: 'original-order',
            })
          })
        }
      }

      loadIsotope()

      // Initialize GLightbox
      if (window.GLightbox) {
        window.GLightbox({
          selector: '.glightbox',
        })
      }

      // Initialize AOS
      if (window.AOS) {
        window.AOS.refresh()
      }
    }
  }, [])

  const engagements = engagementsContent.images

  return (
    <section id="engagements" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{engagementsContent.heading}</h2>
        <p>{engagementsContent.subheading}</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {engagements.map((engagement, index) => (
              <div key={index} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <a
                    href={engagement.src}
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image
                      src={engagement.src}
                      alt={engagement.alt}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
