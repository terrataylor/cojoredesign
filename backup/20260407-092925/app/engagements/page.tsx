import PageShell from '../components/PageShell'
import EngagementsSection from '../components/sections/EngagementsSection'
import pages from '../../site/content/pages.json'

export default function EngagementsPage() {
  return (
    <PageShell>
      <div className="page-title accent-background">
        <div className="container position-relative">
          <h1>{pages.engagements.title}</h1>
          <p>{pages.engagements.subtitle}</p>
        </div>
      </div>
      <EngagementsSection />
    </PageShell>
  )
}
