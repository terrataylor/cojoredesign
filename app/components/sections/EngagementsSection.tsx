'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function EngagementsSection() {
  const isotopeRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Isotope and imagesLoaded
      const loadIsotope = async () => {
        const Isotope = (await import('isotope-layout')).default
        const imagesLoaded = (await import('imagesloaded')).default

        const container = document.querySelector('.isotope-container')
        if (container) {
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

  const engagements = [
    { src: '/assets/img/engagements/1.jpg', alt: 'Engagement 1' },
    { src: '/assets/img/engagements/2.jpg', alt: 'Engagement 2' },
    { src: '/assets/img/engagements/3.JPG', alt: 'Engagement 3' },
    { src: '/assets/img/engagements/4.JPG', alt: 'Engagement 4' },
    { src: '/assets/img/engagements/5.JPG', alt: 'Engagement 5' },
    { src: '/assets/img/engagements/6.jpg', alt: 'Engagement 6' },
    { src: '/assets/img/engagements/7.jpg', alt: 'Engagement 7' },
    { src: '/assets/img/engagements/8.jpg', alt: 'Engagement 8' },
    { src: '/assets/img/engagements/9.jpg', alt: 'Engagement 9' },
    { src: '/assets/img/engagements/10.jpg', alt: 'Engagement 10' },
    { src: '/assets/img/engagements/11.jpg', alt: 'Engagement 11' },
    { src: '/assets/img/engagements/12.jpg', alt: 'Engagement 12' },
    { src: '/assets/img/engagements/13.jpg', alt: 'Engagement 13' },
    { src: '/assets/img/engagements/14.jpg', alt: 'Engagement 14' },
    { src: '/assets/img/engagements/15.jpg', alt: 'Engagement 15' },
    { src: '/assets/img/engagements/16.jpg', alt: 'Engagement 16' },
    { src: '/assets/img/engagements/17.jpg', alt: 'Engagement 17' },
    { src: '/assets/img/engagements/18.jpg', alt: 'Engagement 18' },
    { src: '/assets/img/engagements/19.png', alt: 'Engagement 19' },
    { src: '/assets/img/engagements/20.jpg', alt: 'Engagement 20' },
    { src: '/assets/img/engagements/21.jpg', alt: 'Engagement 21' },
    { src: '/assets/img/engagements/22.jpg', alt: 'Engagement 22' },
  ]

  return (
    <section id="engagements" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Engagements</h2>
        <p>Some photos from my latest presentations</p>
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
