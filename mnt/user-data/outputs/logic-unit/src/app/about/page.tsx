import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Eyebrow, Heading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About Logic Unit',
  description:
    'Logic Unit was founded on one observation: most ERP implementations fail not because the software is wrong, but because the sequence is wrong. We fix the structure first.',
}

const founderQuotes = [
  'The chaos in your business is not random. It has a structure. And once you see the structure of it, you can fix it — but not before.',
  'An ERP system built on top of broken processes doesn't fix your operations. It just makes the broken processes run faster.',
  'We don't add AI to look modern. We add it where a human decision can be made better, faster, or automatically — and only there.',
  'We don't disappear after go-live. That's not a selling point — it's a basic requirement for the work to actually hold.',
]

const principles = [
  {
    title: 'Structure before software',
    body: 'We do not begin with technology selection. We begin with the operation. How it actually runs, where it breaks, why it breaks. The system follows the redesign — never the other way around.',
  },
  {
    title: 'Adoption is the measure of success',
    body: 'A system that your team works around is not a system. Go-live is the start of the hardest phase, not the end of the engagement. We stay until the new way of working is the default way of working.',
  },
  {
    title: 'AI is a method, not a product',
    body: 'We use AI where it changes a specific operational decision in a measurable way. Demand forecasting, margin analysis, anomaly detection. Where those conditions don\'t exist, we don\'t deploy it.',
  },
  {
    title: 'Specificity over breadth',
    body: 'We work exclusively in distribution and trading. Not because we cannot work elsewhere — because genuine expertise in a specific operational model produces better outcomes than general consulting applied broadly.',
  },
  {
    title: 'Honesty over comfort',
    body: 'We will tell you things about your business that will be uncomfortable to hear. That is not a style choice. It is the job. Comfortable assessments that preserve the status quo are not worth paying for.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Logic Unit"
        heading="We exist because most operational fixes don't hold."
        subheading="Not because the software was wrong. Because the sequence was wrong. We do it in the right order."
      />

      {/* ── FOUNDER NARRATIVE ───────────────────────────── */}
      <section style={{ background: '#F7F5F0', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">
          <div>
            <div style={{ width: '120px', height: '120px', background: '#E8E4DC', borderRadius: '50%', marginBottom: '24px' }} aria-hidden />
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '15px', fontWeight: 500, color: '#141412', marginBottom: '4px' }}>Founder</p>
            <p style={{ fontSize: '13px', color: '#A8A49E', marginBottom: '24px' }}>Logic Unit</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: '#6B6860', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '16px', height: '0.5px', background: '#B8860B', display: 'inline-block' }} />
                Operational Transformation
              </span>
              <span style={{ fontSize: '12px', color: '#6B6860', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '16px', height: '0.5px', background: '#B8860B', display: 'inline-block' }} />
                Distribution & Trading
              </span>
              <span style={{ fontSize: '12px', color: '#6B6860', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '16px', height: '0.5px', background: '#B8860B', display: 'inline-block' }} />
                ERP Implementation
              </span>
            </div>
          </div>
          <div>
            <Eyebrow>Founder's note</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'I started Logic Unit because I kept seeing the same problem.',
                'A business owner — smart, experienced, genuinely good at their industry — would bring me in to look at their operations. And within a few hours, the picture would be the same every time. The business had outgrown its systems. Information was scattered. Decisions that should have been automatic required the owner personally. The team was working hard but working around the structure rather than through it.',
                'And almost always, there had already been an attempt to fix it. An ERP that got implemented and then quietly abandoned. A consultant who produced a report and left. A software tool that three people used and fifteen didn\'t.',
                'The fixes failed not because the people were wrong but because the sequence was wrong. You cannot systemise a business that hasn\'t first been restructured. You cannot drive adoption of a system that wasn\'t designed around how the work actually gets done. And you cannot expect lasting change from someone who leaves before the change has had time to set.',
                'Logic Unit exists to do this correctly. We start with the operation — how decisions get made, where information lives, how work actually flows — before we touch any technology. We redesign the structure first. Then we build and implement the system that fits it. Then we stay until it is running the way it was designed to run.',
                'We work specifically with distribution and trading businesses. We understand the operational model. We use AI where it genuinely improves a specific operational decision — not everywhere, not as a headline.',
                'This is not a large firm. It is a focused one. We take a limited number of engagements at any time because the work requires real presence and real accountability. If you want a report, we are not the right choice. If you want your business to actually run differently — and to still be running that way in two years — we should talk.',
              ].map((para, i) => (
                <p key={i} style={{ fontSize: i === 0 ? '20px' : '16px', fontFamily: i === 0 ? 'Georgia, serif' : 'Helvetica Neue, Arial, sans-serif', fontWeight: 300, color: i === 0 ? '#141412' : '#6B6860', lineHeight: '1.8' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ──────────────────────────────────── */}
      <section style={{ background: '#FDFCF9', padding: '100px 48px', borderTop: '0.5px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>How we operate</Eyebrow>
          <Heading as="h2" maxWidth="480px">
            Five principles that govern every engagement.
          </Heading>
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '1px', background: '#E8E4DC' }}>
            {principles.map((p, i) => (
              <div key={i} style={{ background: '#FDFCF9', padding: '32px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px' }} className="principle-row">
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 400, color: '#141412', lineHeight: '1.3' }}>{p.title}</h3>
                <p style={{ fontSize: '15px', color: '#6B6860', lineHeight: '1.8' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTES ──────────────────────────────── */}
      <section style={{ background: '#1A1A18', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>On the work</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#2E2E2C', marginTop: '40px' }} className="two-col-grid">
            {founderQuotes.map((quote, i) => (
              <div key={i} style={{ background: '#1A1A18', padding: '36px 32px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 300, fontStyle: 'italic', color: '#E8E4DC', lineHeight: '1.65', marginBottom: '16px' }}>
                  "{quote}"
                </p>
                <p style={{ fontSize: '12px', color: '#6B6860' }}>— Founder, Logic Unit</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#F7F5F0', padding: '80px 48px', borderTop: '0.5px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 300, color: '#141412', marginBottom: '8px', lineHeight: '1.3' }}>
              If you want your business to actually run differently — we should talk.
            </p>
            <p style={{ fontSize: '14px', color: '#A8A49E' }}>30-minute audit. No proposal unless you ask for one.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Book an operational audit →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 72px 24px !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .principle-row { grid-template-columns: 1fr !important; gap: 16px !important; padding: 24px !important; }
        }
      `}</style>
    </>
  )
}
