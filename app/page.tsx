import Script from 'next/script'
import home from '../site/content/home.json'

export default function Home() {
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
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            className="btn-getstarted"
            href="#contact"
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
                    src="/assets/img/courtney.png"
                    alt="Courtney Johnson"
                    className="img-fluid"
                    style={{ width: '53%', margin: '0 auto', display: 'block', boxShadow: 'none' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                  <h2>{home.hero.headline}</h2>
                  <p>
                    Courtney Johnson
                    <br />
                    CoJo LLC
                    <br />
                    Board Leader, Strategic Operator & Community Impact Executive
                  </p>
                  <div className="hero-btns">
                    <a href={home.hero.primaryCta.href} className="btn btn-primary" download>
                      Download my Board Bio
                    </a>
                    <a href="#services" className="btn btn-outline">Our Approach</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work-process" className="work-process section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Speaking Themes & Expertise</h2>
            <div><span>Explore</span> <span className="description-title">Speaking Themes & Expertise</span></div>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="steps-content">
                  <h2>Speaking Themes & Expertise</h2>
                  <p className="lead">
                    Explore the boardroom, business, and community-centered topics Courtney brings to every stage with
                    clarity, strategy, and impact.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                  <div className="steps-cta">
                    <a href="/about" className="btn btn-outline">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="300">
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="speaking-handshake-icon"
                      >
                        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                        <path d="m21 3 1 11h-2" />
                        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                        <path d="M3 4h8" />
                      </svg>
                    </div>
                    <div className="step-content">
                      <h3>The Power of Strategic Partnerships</h3>
                      <p>Aligning business goals with mission-driven leadership.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number" aria-hidden="true">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="step-content">
                      <h3>Building High-Performing Teams Across Diverse Industries</h3>
                      <p>From insurance to philanthropy.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number" aria-hidden="true">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="step-content">
                      <h3>Scaling Businesses</h3>
                      <p>Lessons from the intersection of corporate leadership and entrepreneurial ventures.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number" aria-hidden="true">
                      <i className="bi bi-building"></i>
                    </div>
                    <div className="step-content">
                      <h3>From Business Unit to Enterprise</h3>
                      <p>Leading transformational growth in corporate structures.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number" aria-hidden="true">
                      <i className="bi bi-mic"></i>
                    </div>
                    <div className="step-content">
                      <h3>Moderating Conversations with Impact</h3>
                      <p>Engaging authors, executives, and thought leaders at the forefront of change.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-template" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
                <div className="about-image">
                  <img src="/assets/img/engagements/1.jpg" alt="Courtney Johnson" className="img-fluid main-image" />
                  <div className="experience-badge">
                    <span className="years">25+</span>
                    <span className="text">years of experience</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="about-content">
                  <h2>We Help Businesses Reach Their Full Potential</h2>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  <div className="cta-button">
                    <a href="#services" className="btn btn-primary">Learn More About Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div><span>Value for</span> <span className="description-title">For-Profit Boards</span></div>
            <p>
              Courtney brings a commercial governance lens shaped by executive leadership in insurance, operations, and
              partnership development. Her experience spans enterprise risk strategy, workforce benefits innovation, and
              market expansion initiatives across complex organizational environments.
            </p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              {[
                [
                  'bi-shield-check',
                  'Enterprise Risk & Insurance Strategy',
                  'Guide risk governance frameworks, insurance strategy, and protection models that support resilient, long-term growth.',
                ],
                [
                  'bi-diagram-3',
                  'Growth Partnerships & Distribution Channels',
                  'Build and optimize strategic partnerships and go-to-market channels that expand reach and unlock new revenue opportunities.',
                ],
                [
                  'bi-gear-wide-connected',
                  'Operational Scaling & Execution',
                  'Align operating models, leadership cadence, and execution discipline to scale efficiently across complex organizations.',
                ],
                [
                  'bi-people',
                  'Workforce & Benefits Innovation',
                  'Shape workforce strategies and benefits approaches that strengthen retention, well-being, and organizational performance.',
                ],
                [
                  'bi-bullseye',
                  'Stakeholder Strategy & Brand Positioning',
                  'Develop stakeholder-centered messaging and positioning that builds trust, sharpens relevance, and supports strategic goals.',
                ],
                [
                  'bi-graph-up-arrow',
                  'Governance During Growth Phases',
                  'Support boards and executives through growth-stage transitions with practical governance structures, oversight, and decision clarity.',
                ],
              ].map(([icon, title, description], i) => (
                <div key={title} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200 + i * 100}>
                  <div className="service-card">
                    <div className="icon-box"><i className={`bi ${icon}`}></i></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="#contact" className="read-more">Learn More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container section-title">
            <h2>Contact</h2>
            <div><span>Contact</span> <span className="description-title">Us</span></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-info">
                  <div className="contact-card">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out with any questions about speaking engagements or media inquiries.</p>
                    <div className="contact-details">
                      <div className="contact-item"><i className="bi bi-envelope"></i><div><h4>Email:</h4><p>CoJo.dreamhomes@gmail.com</p></div></div>
                      <div className="contact-item"><i className="bi bi-telephone"></i><div><h4>Phone:</h4><p>+1 843 543 4022</p></div></div>
                      <div className="contact-item"><i className="bi bi-geo-alt"></i><div><h4>Address:</h4><p>Charleston, SC</p></div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form-wrapper">
                  <form action="/template/forms/contact.php" method="post" className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="John Doe" required />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Your subject" required />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" name="message" rows={7} placeholder="Your message here..." required></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer light-background">
        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">CoJo LLC</strong> <span>All Rights Reserved</span></p>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Script src="/template/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/template/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/template/assets/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script id="aos-init" strategy="afterInteractive">{`
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
