import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import Preloader from '../components/Preloader'
import Scripts from '../components/Scripts'
import AboutSection from '../components/sections/AboutSection'

export default function CourtneysCorner() {
  return (
    <>
      <Preloader />
      <Header />
     
      <main className="main">
        <div className="page-title accent-background">
          <div className="container position-relative">
            <h1>Courtney&apos;s Corner</h1>
            <p>Sharing insights on business, technology, insurance and philanthropy.</p>
          </div>
        </div>
        <AboutSection />
        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                <video
                  src="https://cojollc.com/assets/mov/cc-intro.mp4"
                  className="img-fluid services-img"
                  // autoPlay
                  controls
                ></video>
                <h3 className="text-center">Welcome to Courtney&apos;s Corner</h3>
                <p>
                  I&apos;ve recently started doing a segment on the Geno Jones show called Courtney&apos;s Corner, where I share my thoughts on
                  various topics related to business, technology, and personal development. In this corner of
                  the internet, I aim to provide insights, tips, and inspiration to help you navigate your own
                  journey in these areas.
                </p>

                <p>
                  Check out my first episode below, where I discuss the importance of embracing change and
                  adapting to new challenges. Change is a constant in life, and learning how to navigate it
                  effectively can lead to personal and professional growth.
                </p>
                <video
                  width="100%"
                  height="400"
                  src="https://cojollc.com/assets/mov/courtneyscorner-august.MOV"
                  className="img-fluid services-img"
                  controls
                ></video>

                <p>
                  Here&apos;s a video the highlights of an interview I recently did on the importance of business insurance.
                </p>
                <video
                  width="100%"
                  height="400"
                  src="https://cojollc.com/assets/mov/business-insurance.mp4"
                  className="img-fluid services-img"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
      <Scripts />
    </>
  )
}
