import PageShell from './components/PageShell'
import HeroSection from './components/sections/HeroSection'
import ExecutiveSummarySection from './components/sections/ExecutiveSummarySection'
import LeadershipRecognitionSection from './components/sections/LeadershipRecognitionSection'
import ValueForBoardsSection from './components/sections/ValueForBoardsSection'
import StrategicExpertiseSection from './components/sections/StrategicExpertiseSection'
import CoJoLLCSection from './components/sections/CoJoLLCSection'
import BoardExpertiseSnapshotSection from './components/sections/BoardExpertiseSnapshotSection'
import BoardInquiriesSection from './components/sections/BoardInquiriesSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import RecentEventsSection from './components/sections/RecentEventsSection'
import EngagementsSection from './components/sections/EngagementsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ExecutiveSummarySection />
      <LeadershipRecognitionSection />
      <ServicesSection />
      <ValueForBoardsSection />
      <StrategicExpertiseSection />
      <CoJoLLCSection />
      <BoardExpertiseSnapshotSection />
      <BoardInquiriesSection />
      {/* <AboutSection /> */}
      <RecentEventsSection />
      <EngagementsSection />
      <TestimonialsSection />
      <ContactSection />
    </PageShell>
  )
}
