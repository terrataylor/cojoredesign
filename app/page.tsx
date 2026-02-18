import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Preloader from './components/Preloader'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import RecentEventsSection from './components/sections/RecentEventsSection'
import EngagementsSection from './components/sections/EngagementsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import Scripts from './components/Scripts'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RecentEventsSection />
        <EngagementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTop />
      <Scripts />
    </>
  )
}
