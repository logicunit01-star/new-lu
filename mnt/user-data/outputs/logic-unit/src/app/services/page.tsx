import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Eyebrow, Heading, Deliverable } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Operational Transformation Program',
  description:
    'A structured engagement for distribution and trading businesses that have outgrown their current operating model. ERP implementation done in the right order.',
  keywords: [
    'operational transformation',
    'ERP implementation distribution',
    'inventory control',
    'operational restructuring',
    'distribution ERP consulting',
  ],
}

const stages = [
  {
    number: '01',
    name: 'Operational Mapping',
    timing: 'Weeks 1–3',
    body: 'We document how your business actually operates. Order flow, purchasing process, stock management, customer fulfilment, financial reporting — and how decisions get made at every level. We interview your team, not just your management. We follow transactions through the system from origin to close. We identify every point where information breaks, where decisions get made in the wrong place, and where your people have built workarounds that have become invisible infrastructure.',
    deliverable: 'Operational map with annotated breakdown points and root cause analysis',
  },
  {
    number: '02',
    name: 'Structural Redesign',
    timing: 'Weeks 4–6',
    body: 'We redesign the operating model — redefining process flows, clarifying decision rights, restructuring how information moves between functions, and establishing the data standards that will make the system trustworthy. We do this with your team, not for them. A structure your people didn\'t participate in designing will not survive first contact with operational reality.',
    deliverable: 'Redesigned operating model with process documentation, role clarity, and system requirements',
  },
  {
    number: '03',
    name: 'System Design and Build',
    timing: 'Weeks 7–14',
    body: 'We design and configure the technology layer — ERP setup, data architecture, reporting structure, integrations, and where appropriate, AI-assisted decision tools embedded into operational workflows. The system is built to the redesigned operating model, not the legacy one. Configuration decisions are made by us in collaboration with your team, not delegated to a vendor.',
    deliverable: 'Configured, tested operational system ready for phased go-live',
  },
  {
    number: '04',
    name: 'Go-Live and Stabilisation',
    timing: 'Weeks 15–20',
    body: 'We manage the transition from old operating model to new. Phased rollout, parallel running where necessary, staff training delivered in operational context rather than classroom settings, and daily availability during the critical first weeks. We do not declare success at go-live. We declare success when the business is running through the new system consistently and your team no longer needs us for routine questions.',
    deliverable: 'Fully operational system with stable adoption across functions',
  },
  {
    number: '05',
    name: 'Control Review',
    timing: 'Month 6',
    body: 'A structured review at six months post-implementation to assess system performance, identify any structural drift, and make adjustments. This is included in the program — not billed as a separate engagement.',
    deliverable: 'Performance assessment and adjustment plan',
  },
]

const capabilities = [
  {
    title: 'Inventory & stock management',
    items: ['Real-time stock visibility across locations', 'Accurate landed cost calculation', 'Dynamic reorder triggers', 'Batch and serial tracking'],
  },
  {
    title: 'Procurement & supplier management',
    items: ['Structured PO workflow with approvals', 'Supplier performance tracking', 'Three-way matching', 'Elimination of maverick purchasing'],
  },
  {
    title: 'Sales & customer fulfilment',
    items: ['Real-time stock confirmation at order entry', 'Automated credit limit enforcement', 'Delivery scheduling and dispatch', 'Customer-level profitability'],
  },
  {
    title: 'Financial operations',
    items: ['Distribution-structured chart of accounts', 'Automated COGS calculation', 'Product-line P&L reporting', 'Cash flow integrated with procurement'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        heading="The Operational Transformation Program"
        subheading="A structured engagement for distribution and trading businesses that have outgrown their current operating model — and need to rebuild it correctly, not quickly."
      />

      {/* ── WHO IT'S FOR ────────────────────────────────── */}
      <section style={{ background: '#F7F5F0', padding: '100px 48px' }}>
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="two-col"
        >
          <div>
            <Eyebrow>Who this is for</Eyebrow>
            <Heading as="h2" maxWidth="480px">
              Not a general retainer. A specific program for a specific situation.
            </Heading>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#6B6860', lineHeight: '1.8', marginBottom: '32px' }}>
              You are running a distribution or trading business with between 15 and 60 people.
              The business is generating revenue — possibly significant revenue — but operational
              control has not kept pace with operational complexity.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Your growth has created complexity you cannot manage',
                'A previous system or consultant didn't solve it',
                'You are the bottleneck in your own business',
              ].map((signal) => (
                <div key={signal} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div style={{ width: '20px', height: '1px', background: '#B8860B', marginTop: '10px', flexShrink: 0 }} />
                  <p style={{ fontSize: '15px', color: '#141412', lineHeight: '1.6' }}>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM STAGES ──────────────────────────────── */}
      <section style={{ background: '#FDFCF9', padding: '100px 48px', borderTop: '0.5px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>Program structure</Eyebrow>
          <Heading as="h2" maxWidth="560px">
            What the engagement covers — and in what order.
          </Heading>
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '1px', background: '#E8E4DC' }}>
            {stages.map((stage) => (
              <div key={stage.number} style={{ background: '#FDFCF9', padding: '40px 36px', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px' }} className="stage-row">
                <div>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 300, color: '#E8E4DC', lineHeight: 1 }}>{stage.number}</p>
                  <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8860B', border: '0.5px solid #B8860B', padding: '3px 8px' }}>
                    {stage.timing}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, color: '#141412', marginBottom: '16px' }}>{stage.name}</h3>
                  <p style={{ fontSize: '15px', color: '#6B6860', lineHeight: '1.8', marginBottom: '24px', maxWidth: '580px' }}>{stage.body}</p>
                  <Deliverable text={stage.deliverable} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ───────────────────────────── */}
      <section style={{ background: '#F7F5F0', padding: '100px 48px', borderTop: '0.5px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>Systems & capabilities</Eyebrow>
          <Heading as="h2" maxWidth="500px">What we implement inside the program.</Heading>
          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#E8E4DC' }} className="two-col-grid">
            {capabilities.map((cap) => (
              <div key={cap.title} style={{ background: '#F7F5F0', padding: '32px 28px' }}>
                <h3 style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '14px', fontWeight: 500, color: '#141412', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  {cap.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cap.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                      <div style={{ width: '16px', height: '1px', background: '#5C6B5A', marginTop: '9px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#6B6860', lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#141412', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 300, color: '#F7F5F0', lineHeight: '1.2', marginBottom: '12px' }}>
              Engagements are scoped individually.
            </h2>
            <p style={{ fontSize: '15px', color: '#6B6860', maxWidth: '500px', lineHeight: '1.7' }}>
              The cost of the program is consistently lower than one more year of operational inefficiency, stock errors, and margin leakage in a business of this size.
            </p>
          </div>
          <Link href="/contact" className="btn-amber">Discuss your situation →</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; padding: 72px 24px !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .stage-row { grid-template-columns: 1fr !important; gap: 16px !important; padding: 28px 24px !important; }
        }
      `}</style>
    </>
  )
}
