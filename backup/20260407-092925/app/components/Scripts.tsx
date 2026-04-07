'use client'

import { useEffect } from 'react'
import Script from 'next/script'

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

    // Wait for scripts to load
    const timer = setTimeout(() => {
      initAOS()
      initGLightbox()
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
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </>
  )
}
