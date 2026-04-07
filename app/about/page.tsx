import Script from 'next/script'
import home from '../../site/content/home.json'
import about from '../../site/content/about.json'
import pages from '../../site/content/pages.json'

export default function AboutPage() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img
              src="/assets/img/logo.png"
              alt="CoJo LLC Logo"
              style={{ transform: 'scale(1.25)', transformOrigin: 'left center' }}
            />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about" className="active">
                  About
                </a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#team">Team</a>
              </li>
              <li>
                <a href="/#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            className="btn-getstarted"
            href="/#contact"
            style={{ background: '#DED20C', borderColor: '#DED20C', color: '#000' }}
          >
            Contact Courtney
          </a>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
                  <img
                    src={home.hero.image.src}
                    alt={home.hero.image.alt}
                    className="img-fluid"
                    style={{ width: '53%', margin: '0 auto', display: 'block', boxShadow: 'none' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                  <h2>{pages.about.heroHeadline}</h2>
                  <p>{pages.about.heroPlaceholder}</p>
                  <div className="hero-btns">
                    <a href={home.hero.primaryCta.href} className="btn btn-primary" download>
                      {home.hero.primaryCta.label}
                    </a>
                    <a href="/#services" className="btn btn-outline">
                      Our Approach
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>{about.executiveSummary.heading}</h2>
            <div>
              <span>{about.executiveSummary.titleLine.prefix}</span>{' '}
              <span className="description-title">{about.executiveSummary.titleLine.emphasis}</span>
            </div>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
                <div className="about-image">
                  <img
                    src={about.aboutSection.image.src}
                    alt={about.aboutSection.image.alt}
                    className="img-fluid main-image"
                  />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="about-content">
                  {about.executiveSummary.paragraphs.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? 'lead' : undefined}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer light-background">
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">CoJo LLC</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Script src="/template/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/template/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/template/assets/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script id="aos-init-about" strategy="afterInteractive">{`
        if (window.AOS) {
          window.AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        }
      `}</Script>
      <Script src="/template/assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
      <Script src="/template/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/template/assets/js/main.js" strategy="afterInteractive" />
    </>
  )
}
