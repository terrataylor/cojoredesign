import PageShell from '../components/PageShell'
import ContactSection from '../components/sections/ContactSection'
import CoJoLLCSection from '../components/sections/CoJoLLCSection'
import pages from '../../site/content/pages.json'

export default function ContactPage() {
  return (
    <PageShell>
      <div className="page-title accent-background">
        <div className="container position-relative">
          <h1>{pages.contact.title}</h1>
          <p>{pages.contact.subtitle}</p>
        </div>
      </div>
      <CoJoLLCSection />
      <ContactSection />
    </PageShell>
  )
}
