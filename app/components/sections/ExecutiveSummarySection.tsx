'use client'

import { useEffect } from 'react'
import './ExecutiveSummarySection.css'

export default function ExecutiveSummarySection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="executive-summary" className="section light-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-10 mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <p>
              <strong>Courtney Johnson</strong> is a business strategist, entrepreneur, and multi-state real estate owner whose work explores the intersection of financial systems, housing stability, and economic mobility. At Atlanta Life Insurance Company, she drives strategic partnerships and growth initiatives focused on strengthening workforce resilience and expanding access to financial protection in a changing economic landscape. Her leadership reflects a deep understanding of how corporate decision-making, public policy, and market forces shape outcomes for working families.
              </p>
              <p>
              Alongside her corporate work, Courtney owns and manages a diversified real estate portfolio across multiple states, offering a practical lens on housing markets, ownership pathways, and long-term wealth building. Her entrepreneurial perspective informs conversations that move beyond theory—grounding economic dialogue in lived experience, operational insight, and business strategy.
              </p>
              <p>
              Known for her ability to elevate complex discussions with clarity and purpose, Courtney brings a boardroom-level presence to conversations on housing, financial equity, and systemic change. Her work bridges sectors and perspectives, helping audiences connect policy, business realities, and human impact in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
