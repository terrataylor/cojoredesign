'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { initScrollSpy } from '../lib/scrollSpy'

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Initialize scroll spy
    const cleanup = initScrollSpy()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (cleanup) cleanup()
    }
  }, [])

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive)
  }

  const closeMobileNav = () => {
    setMobileNavActive(false)
  }

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname !== '/') {
      // If we're on a different page, let Next.js handle navigation
      return
    }
    
    // Smooth scroll to section
    e.preventDefault()
    setTimeout(() => {
      const section = document.querySelector(hash)
      if (section) {
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop || '0'
        window.scrollTo({
          top: (section as HTMLElement).offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth',
        })
        closeMobileNav()
      }
    }, 100)
  }

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          <Image 
            src="/assets/img/logo.png" 
            alt="CoJo LLC Logo" 
            width={200} 
            height={85}
            style={{ maxHeight: '85px', width: 'auto' }}
          />
        </Link>

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li>
              <Link 
                href="/#hero" 
                className={pathname === '/' ? 'active' : ''} 
                onClick={(e) => {
                  if (pathname === '/') {
                    handleHashClick(e, '#hero')
                  } else {
                    closeMobileNav()
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                onClick={(e) => {
                  if (pathname === '/') {
                    handleHashClick(e, '#about')
                  } else {
                    closeMobileNav()
                  }
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#services" 
                onClick={(e) => {
                  if (pathname === '/') {
                    handleHashClick(e, '#services')
                  } else {
                    closeMobileNav()
                  }
                }}
              >
                Business
              </Link>
            </li>
            <li>
              <Link 
                href="/#engagements" 
                onClick={(e) => {
                  if (pathname === '/') {
                    handleHashClick(e, '#engagements')
                  } else {
                    closeMobileNav()
                  }
                }}
              >
                Speaking Engagements
              </Link>
            </li>
            <li>
              <Link 
                href="/#testimonials" 
                onClick={(e) => {
                  if (pathname === '/') {
                    handleHashClick(e, '#testimonials')
                  } else {
                    closeMobileNav()
                  }
                }}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                href="/courtneys-corner" 
                className={pathname === '/courtneys-corner' ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Courtney&apos;s Corner
              </Link>
            </li>
            <li>
              <Link 
                href="/#contact" 
                onClick={(e) => {
                  if (pathname === '/') {
                    handleHashClick(e, '#contact')
                  } else {
                    closeMobileNav()
                  }
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  )
}
