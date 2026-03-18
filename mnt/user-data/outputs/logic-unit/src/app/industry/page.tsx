import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Eyebrow, Heading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Distribution & Trading Business Operations',
  description:
    'Logic Unit works exclusively with distribution and trading businesses. We understand the operational model — inventory management, supplier relationships, customer credit, and fulfilment logistics.',
  keywords: [
    'distribution business ERP',
    'trading company operations',
    'inventory management distribution',
    'stock control system',
    'distribution operational consulting',
  ],
}

const failurePoints = [
  {
    title: 'Stock accuracy degrades as the operation grows',
    body: 'In a small operation, discrepancies between physical stock and system stock are visible and correctable quickly. As transaction volume grows, the gap widens. Purchasing decisions made against inaccurate stock data produce the two outcomes that damage distribution businesses most: excess stock in slow categories and shortages in fast ones.',
  },
  {
    title: 'Purchasing becomes reactive rather than structured',
    body: "Without a demand-driven procurement model, purchasing decisions default to whoever shouts loudest — the sales team chasing a deal, the warehouse team running out of a line, the owner approving an order on WhatsApp. The result is a purchasing pattern that responds to short-term pressure rather than medium-term demand.",
  },
  {
    title: 'Margin visibility disappears at the transaction level',
    body: 'Revenue is visible. Gross margin by product category is visible, approximately. But the full cost picture — landed cost per unit, cost of service per customer, the true margin on a deal once you account for credit terms, return rates, and delivery complexity — is usually invisible.',
  },
  {
    title: 'Customer credit risk is managed informally',
    body: 'Most businesses at this scale do not have a structured credit policy enforced through the system. They have a general sense of which customers are reliable. When the business is under growth pressure, credit limits get stretched informally. Exposure accumulates quietly until a payment default makes it visible.',
  },
  {
    title: 'The owner cannot delegate operational decisions',
    body: 'Because the information required to make routine operational decisions — stock positions, credit status, order fulfilment constraints — either lives in the owner\'s head or is scattered across systems that don\'t talk to each other, decisions stall without the owner\'s involvement. This is not a management problem. It is a structural information problem.',
  },
]

const controlOutcomes = [
  {
    before: 'Stock checked by calling three people',
    after: 'Real-time visibility, verified on system',
  },
  {
    before: 'Purchasing driven by whoever asks first',
    after: 'Demand-driven procurement model, automated triggers',
  },
  {
    before: 'Margin estimated at category level',
    after: 'Full cost allocation at transaction level',
  },
  {
    before: 'Credit managed by feel',
    after: 'Policy-enforced limits, automated escalation',
  },
  {
    before: 'Owner involved in every decision',
    after: 'Routine decisions through system, owner handles exceptions',
  },
]

export default function IndustryPage() {
  return (
    <>
      <PageHero
        eyebrow="Built for distribution"
        heading="Built for distribution. Not adapted from somewhere else."
        subheading="Distribution businesses have a specific operational model — buy, hold, sell, move, repeat. The control problems that emerge in this model are specific too. We work here exclusively."
      />

      {/* ── THE MODEL ───────────────────────────────────── */}
      <section style={{ background: '#F7F5F0', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="two-col">
          <div>
            <Eyebrow>The operating model</Eyebrow>
            <Heading as="h2" maxWidth="440px">
              Where distribution businesses break down
            </Heading>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#6B6860', lineHeight: '1.8', marginBottom: '20px' }}>
              A distribution business at 20–60 employees is running a complex operation on
              infrastructure that was designed for a simpler one. The early-stage model — where the
              founder knew every supplier, held every relationship, and made every purchasing call —
              does not scale.
            </p>
            <p style={{ fontSize: '16px', color: '#6B6860', lineHeight: '1.8' }}>
              Most businesses scale the headcount without scaling the systems. The result is a larger
              version of the same operation, with more people working around the same structural gaps.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAILURE POINTS ──────────────────────────────── */}
      <section style={{ background: '#1A1A18', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>The gaps are consistent</Eyebrow>
          <Heading as="h2" dark maxWidth="560px">
            The same problems appear across the category. They are worth naming directly.
          </Heading>
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '1px', background: '#2E2E2C' }}>
            {failurePoints.map((point, i) => (
              <div key={i} style={{ background: '#1A1A18', padding: '36px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', transition: 'background 0.2s' }} className="failure-row">
                <h3 style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '16px', fontWeight: 500, color: '#F7F5F0', lineHeight: '1.4' }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#A8A49E', lineHeight: '1.8' }}>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ──────────────────────────────── */}
      <section style={{ background: '#FDFCF9', padding: '100px 48px', borderTop: '0.5px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>What control looks like</Eyebrow>
          <Heading as="h2" maxWidth="520px">
            What changes when the operational structure is correctly designed.
          </Heading>
          <div style={{ marginTop: '56px' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#E8E4DC', marginBottom: '1px' }}>
              <div style={{ background: '#F7F5F0', padding: '12px 24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A8A49E' }}>Without operational control</p>
              </div>
              <div style={{ background: '#F7F5F0', padding: '12px 24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5C6B5A' }}>With operational control</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#E8E4DC' }}>
              {controlOutcomes.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#E8E4DC' }}>
                  <div style={{ background: '#FDFCF9', padding: '20px 24px' }}>
                    <p style={{ fontSize: '14px', color: '#A8A49E', lineHeight: '1.6' }}>{row.before}</p>
                  </div>
                  <div style={{ background: '#FDFCF9', padding: '20px 24px', borderLeft: '2px solid #5C6B5A' }}>
                    <p style={{ fontSize: '14px', color: '#141412', fontWeight: 500, lineHeight: '1.6' }}>{row.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DISTRIBUTION ────────────────────────────── */}
      <section style={{ background: '#F7F5F0', padding: '100px 48px', borderTop: '0.5px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="two-col">
          <div>
            <Eyebrow>Why this sector</Eyebrow>
            <Heading as="h2" maxWidth="400px">
              Why distribution businesses specifically
            </Heading>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#6B6860', lineHeight: '1.8', marginBottom: '20px' }}>
              We have chosen to work exclusively in distribution and trading because the operational
              model is specific enough that genuine expertise is possible. The combination of inventory
              management, supplier relationships, customer credit, and fulfilment logistics creates a
              particular kind of complexity.
            </p>
            <p style={{ fontSize: '16px', color: '#6B6860', lineHeight: '1.8', marginBottom: '32px' }}>
              We understand the pressure of a customer calling about a delivery that the system says
              has shipped but the warehouse knows hasn't. We understand what it means to carry three
              months of slow-moving stock because a purchasing decision was made without reliable
              demand data.
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 300, fontStyle: 'italic', color: '#141412', borderLeft: '2px solid #B8860B', paddingLeft: '20px', lineHeight: '1.6' }}>
              This is the context we work in. It is the only context we work in. That specificity is
              what makes the work effective.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#141412', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 300, color: '#F7F5F0', lineHeight: '1.2', maxWidth: '500px' }}>
            Talk to us about your distribution business.
          </h2>
          <Link href="/contact" className="btn-amber">
            Book your operational audit →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; padding: 72px 24px !important; }
          .failure-row { grid-template-columns: 1fr !important; gap: 20px !important; padding: 28px 24px !important; }
        }
      `}</style>
    </>
  )
}
