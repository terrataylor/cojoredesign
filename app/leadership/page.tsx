import PageShell from '../components/PageShell'
import LeadershipRecognitionSection from '../components/sections/LeadershipRecognitionSection'
import StrategicExpertiseSection from '../components/sections/StrategicExpertiseSection'
import BoardExpertiseSnapshotSection from '../components/sections/BoardExpertiseSnapshotSection'
import BoardInquiriesSection from '../components/sections/BoardInquiriesSection'
import pages from '../../site/content/pages.json'

export default function LeadershipPage() {
  return (
    <PageShell>
      <div className="page-title accent-background">
        <div className="container position-relative">
          <h1>{pages.leadership.title}</h1>
          <p>{pages.leadership.subtitle}</p>
        </div>
      </div>
      <LeadershipRecognitionSection />
      <StrategicExpertiseSection />
      <BoardExpertiseSnapshotSection />
      <BoardInquiriesSection />
    </PageShell>
  )
}
