'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { initScrollSpy } from '../lib/scrollSpy'
import navigation from '../../site/content/navigation.json'
import './Header.css'

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Check if scrolled past hero section
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setPastHero(window.scrollY > heroBottom)
      } else {
        // If hero section doesn't exist (e.g., on other pages), default to false
        setPastHero(false)
      }
    }
    
    // Check on mount and scroll
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    
    // Initialize scroll spy
    const cleanup = initScrollSpy()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (cleanup) cleanup()
    }
  }, [pathname]) // Re-run when pathname changes to check for hero section

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }

    return () => {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [mobileNavActive])

  useEffect(() => {
    // Close mobile menu on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileNavActive) {
        closeMobileNav()
      }
    }

    if (mobileNavActive) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [mobileNavActive])

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive)
  }

  const closeMobileNav = () => {
    setMobileNavActive(false)
  }

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.includes('#')) return pathname === '/'
    return pathname === href
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
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''} ${pastHero ? 'past-hero' : ''}`}>
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
            {navigation.primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActiveLink(item.href) ? 'active' : ''}
                  onClick={(e) => {
                    if (item.href.includes('#') && pathname === '/') {
                      handleHashClick(e, item.href.split('#')[1] ? `#${item.href.split('#')[1]}` : item.href)
                    } else {
                      closeMobileNav()
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
