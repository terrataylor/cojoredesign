import PageShell from '../components/PageShell'
import RecentEventsSection from '../components/sections/RecentEventsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import pages from '../../site/content/pages.json'

export default function HighlightsPage() {
  return (
    <PageShell>
      <div className="page-title accent-background">
        <div className="container position-relative">
          <h1>{pages.highlights.title}</h1>
          <p>{pages.highlights.subtitle}</p>
        </div>
      </div>
      <RecentEventsSection />
      <TestimonialsSection />
    </PageShell>
  )
}
