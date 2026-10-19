'use client'

import { useTina } from 'tinacms/dist/react'
import { MylaContentProvider, type MylaContent } from './content'
import MylaHeader from './components/MylaHeader'
import MylaHero from './components/MylaHero'
import StaysSection from './components/StaysSection'
import TransportSection from './components/TransportSection'
import MylaFooter from './components/MylaFooter'

type Props = {
  query: string
  variables: Record<string, unknown>
  data: { myla: unknown }
}

export default function MylaPageClient(props: Props) {
  const { data } = useTina(props)

  return (
    <MylaContentProvider value={data.myla as MylaContent}>
      <div className="myla-page">
        <MylaHeader />
        <main>
          <MylaHero />
          <StaysSection />
          <TransportSection />
        </main>
        <MylaFooter />
      </div>
    </MylaContentProvider>
  )
}
