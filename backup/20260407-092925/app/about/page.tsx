import PageShell from '../components/PageShell'
import ExecutiveSummarySection from '../components/sections/ExecutiveSummarySection'
import ServicesSection from '../components/sections/ServicesSection'
import ValueForBoardsSection from '../components/sections/ValueForBoardsSection'
import pages from '../../site/content/pages.json'

export default function AboutPage() {
  return (
    <PageShell>
      <div className="page-title accent-background">
        <div className="container position-relative">
          <h1>{pages.about.title}</h1>
          <p>{pages.about.subtitle}</p>
        </div>
      </div>
      <ExecutiveSummarySection />
      <ServicesSection />
      <ValueForBoardsSection />
    </PageShell>
  )
}
