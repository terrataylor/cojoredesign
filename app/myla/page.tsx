import type { Metadata } from 'next'
import myla from '../../site/content/myla.json'
import MylaHeader from './components/MylaHeader'
import MylaHero from './components/MylaHero'
import StaysSection from './components/StaysSection'
import TransportSection from './components/TransportSection'
import MylaFooter from './components/MylaFooter'
import './myla.css'

export const metadata: Metadata = {
  title: myla.meta.title,
  description: myla.meta.description,
}

export default function MylaPage() {
  return (
    <div className="myla-page">
      <MylaHeader />
      <main>
        <MylaHero />
        <StaysSection />
        <TransportSection />
      </main>
      <MylaFooter />
    </div>
  )
}
