'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    AOS: any
    GLightbox: any
    Swiper: any
    PureCounter: any
    Isotope: any
  }
}

export default function Scripts() {
  useEffect(() => {
    // Initialize AOS after scripts load
    const initAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
        })
      }
    }

    // Initialize GLightbox
    const initGLightbox = () => {
      if (typeof window !== 'undefined' && window.GLightbox) {
        window.GLightbox({
          selector: '.glightbox',
        })
      }
    }

    // Initialize PureCounter
    const initPureCounter = () => {
      if (typeof window !== 'undefined' && window.PureCounter) {
        new window.PureCounter()
      }
    }

    // Wait for scripts to load
    const timer = setTimeout(() => {
      initAOS()
      initGLightbox()
      initPureCounter()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/aos@2.3.4/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.init({
              duration: 600,
              easing: 'ease-in-out',
              once: true,
              mirror: false,
            })
          }
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.GLightbox) {
            window.GLightbox({
              selector: '.glightbox',
            })
          }
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/purecounter@1.0.0/dist/purecounter_vanilla.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.PureCounter) {
            new window.PureCounter()
          }
        }}
      />
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </>
  )
}
