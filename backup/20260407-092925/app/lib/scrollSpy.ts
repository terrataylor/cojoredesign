'use client'

export function initScrollSpy() {
  if (typeof window === 'undefined') return

  const navLinks = document.querySelectorAll('.navmenu a[href^="#"]')
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200

    navLinks.forEach((link) => {
      const href = link.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      const section = document.querySelector(href)
      if (!section) return

      const sectionTop = (section as HTMLElement).offsetTop
      const sectionHeight = (section as HTMLElement).offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        document.querySelectorAll('.navmenu a.active').forEach((activeLink) => {
          activeLink.classList.remove('active')
        })
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  // Handle hash links on page load
  const handleHashLink = () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash)
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop || '0'
          window.scrollTo({
            top: (section as HTMLElement).offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('load', () => {
    handleScroll()
    handleHashLink()
  })

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}
