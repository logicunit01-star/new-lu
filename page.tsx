import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow, AmberRule, Heading, PainCard, OutcomeCard, StatCard } from '@/components/ui'
import { PhaseSelector } from '@/components/sections/PhaseSelector'

export const metadata: Metadata = {
  title: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
  description:
    'Logic Unit rebuilds the operational structure of distribution and trading businesses so that owners regain control, systems actually get used, and growth stops creating chaos.',
}

const painPoints = [
  {
    number: '01',
    title: 'Your stock count and your sales team are working from different numbers',
    body: (
      <>
        Promises get made against{' '}
        <em style={{ color: '#E8E4DC', fontStyle: 'normal' }}>
          inventory that isn't there
        </em>
        . Disputes between warehouse and sales happen weekly. The reconciliation falls on you.
      </>
    ),
  },
  {
    number: '02',
    title: 'Purchase decisions are made by whoever shouts loudest',
    body: (
      <>
        There is no demand model. Buying happens reactively — someone runs out, someone panics,{' '}
        <em style={{ color: '#E8E4DC', fontStyle: 'normal' }}>
          you approve on WhatsApp
        </em>{' '}
        before 8am.
      </>
    ),
  },
  {
    number: '03',
    title: 'Your ERP has become an expensive transaction log',
    body: (
      <>
        It was implemented. It was never adopted. The real work still happens in{' '}
        <em style={{ color: '#E8E4DC', fontStyle: 'normal' }}>
          Excel and private message threads
        </em>
        . Nobody fully trusts the numbers it produces.
      </>
    ),
  },
  {
    number: '04',
    title: 'You are still the person who resolves everything',
    body: (
      <>
        Decisions stall without you. Information lives in your head.{' '}
        <em style={{ color: '#E8E4DC', fontStyle: 'normal' }}>
          You cannot take a week off
        </em>{' '}
        without things slipping. You built this business — it shouldn't depend on you this completely.
      </>
    ),
  },
]

const outcomes = [
  {
    title: 'Stock accuracy moves from estimated to verified',
    body: (
      <>
        Purchasing decisions stop being made on instinct. The business stops over-ordering slow movers
        and running short on fast ones.{' '}
        <strong style={{ color: '#141412', fontWeight: 500 }}>
          Working capital starts reflecting actual demand.
        </strong>
      </>
    ),
  },
  {
    title: 'The owner stops being the decision bottleneck',
    body: (
      <>
        Routine decisions happen through the system. Exceptions escalate automatically.{' '}
        <strong style={{ color: '#141412', fontWeight: 500 }}>
          The owner deals with genuine exceptions — not operational administration.
        </strong>
      </>
    ),
  },
  {
    title: 'The P&L starts making sense',
    body: (
      <>
        When cost allocation and revenue attribution run through a single structured system, the
        numbers become legible.{' '}
        <strong style={{ color: '#141412', fontWeight: 500 }}>
          Most clients discover margin patterns that were invisible before.
        </strong>
      </>
    ),
  },
  {
    title: 'The team uses the system',
    body: (
      <>
        Not because they were told to. Because the system was designed around how the work actually
        gets done.{' '}
        <strong style={{ color: '#141412', fontWeight: 500 }}>
          Using it became the easier path.
        </strong>
      </>
    ),
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          background: '#F7F5F0',
          padding: '100px 48px 120px',
        }}
      >
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '80px',
            alignItems: 'start',
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            <Eyebrow>Operational Control &amp; Transformation</Eyebrow>
            <AmberRule />
            <h1
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '52px',
                fontWeight: 300,
                lineHeight: '1.08',
                color: '#141412',
                marginBottom: '28px',
              }}
              className="hero-h1"
            >
              You built a successful business.{' '}
              <em style={{ fontStyle: 'italic', color: '#6B6860' }}>
                Somewhere along the way, it started running you.
              </em>
            </h1>
            <p
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: '1.75',
                color: '#6B6860',
                maxWidth: '540px',
                marginBottom: '48px',
              }}
            >
              Logic Unit works with distribution and trading businesses to rebuild
              operational control — restructuring how work flows, implementing systems
              that actually get used, and staying until the change holds.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Link href="/contact" className="btn-primary" style={{ width: 'fit-content' }}>
                Start with a free operational audit
              </Link>
              <p
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  color: '#A8A49E',
                  lineHeight: '1.5',
                  maxWidth: '320px',
                }}
              >
                30 minutes. No proposal. A direct assessment of where your operations
                are breaking down.
              </p>
            </div>
          </div>

          {/* Right — stat stack */}
          <div style={{ border: '0.5px solid #E8E4DC' }}>
            <StatCard label="Who we work with">
              Distribution &amp; trading businesses{' '}
              <span style={{ color: '#B8860B' }}>15–60 employees</span>
            </StatCard>
            <StatCard label="What we fix">
              Operational chaos, failed ERP implementations,{' '}
              <span style={{ color: '#B8860B' }}>owner dependency</span>
            </StatCard>
            <StatCard label="How we differ">
              We redesign first.{' '}
              <span style={{ color: '#B8860B' }}>Then we implement.</span> Then we stay.
            </StatCard>
            <StatCard label="Engagements per quarter" isLast>
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#B8860B',
                }}
              >
                Limited
              </span>
            </StatCard>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ──────────────────────────────── */}
      <section style={{ background: '#1A1A18', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>The pattern we see</Eyebrow>
          <Heading as="h2" dark maxWidth="660px" style={{ marginBottom: '56px' }}>
            This is what running a distribution business without operational control
            actually looks like.
          </Heading>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#2E2E2C',
            }}
            className="two-col-grid"
          >
            {painPoints.map((p) => (
              <PainCard key={p.number} {...p} />
            ))}
          </div>

          {/* Pull quote */}
          <div
            style={{
              marginTop: '64px',
              paddingTop: '40px',
              borderTop: '0.5px solid #2E2E2C',
            }}
          >
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '48px',
                color: '#B8860B',
                lineHeight: 1,
                marginBottom: '12px',
              }}
            >
              "
            </p>
            <blockquote
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '22px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#E8E4DC',
                lineHeight: '1.5',
                maxWidth: '680px',
                marginBottom: '16px',
              }}
            >
              Most distribution businesses don't have a software problem. They have a
              control problem. Software is only useful once the control structure exists.
            </blockquote>
            <p style={{ fontSize: '12px', color: '#6B6860', letterSpacing: '0.06em' }}>
              — Logic Unit
            </p>
          </div>
        </div>
      </section>

      {/* ── METHOD / PHASE SELECTOR ───────────────────────── */}
      <section
        id="approach"
        style={{ background: '#F7F5F0', padding: '100px 48px' }}
      >
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>How we work</Eyebrow>
          <Heading as="h2" maxWidth="600px">
            We rebuild how your business operates. Then we put the right systems
            underneath it.
          </Heading>
          <p
            style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '16px',
              color: '#6B6860',
              lineHeight: '1.7',
              maxWidth: '580px',
              marginBottom: '64px',
            }}
          >
            Most implementations fail because they install the system first and hope
            the operation adjusts. It doesn't. We fix the structure first. The
            technology follows.
          </p>
          <PhaseSelector />
          <div
            style={{
              marginTop: '64px',
              paddingTop: '40px',
              borderTop: '0.5px solid #E8E4DC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '20px',
                fontWeight: 300,
                color: '#141412',
                maxWidth: '440px',
                lineHeight: '1.4',
              }}
            >
              Engagements are scoped individually. The right starting point is a
              direct conversation.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a 30-minute operational audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES / PROOF ──────────────────────────────── */}
      <section
        style={{
          background: '#FDFCF9',
          padding: '100px 48px',
          borderTop: '0.5px solid #E8E4DC',
        }}
      >
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>What operational control produces</Eyebrow>
          <Heading as="h2" maxWidth="520px">
            What changes when the structure is right.
          </Heading>
          <div
            style={{
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#E8E4DC',
            }}
            className="two-col-grid"
          >
            {outcomes.map((o) => (
              <OutcomeCard key={o.title} {...o} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STRIP ─────────────────────────────────── */}
      <section
        style={{
          background: '#F7F5F0',
          borderTop: '0.5px solid #E8E4DC',
          borderBottom: '0.5px solid #E8E4DC',
          padding: '56px 48px',
        }}
      >
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '160px 1fr',
            gap: '56px',
            alignItems: 'start',
          }}
          className="founder-grid"
        >
          <div>
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#E8E4DC',
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              aria-hidden
            />
            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#141412',
                marginBottom: '4px',
              }}
            >
              Founder, Logic Unit
            </p>
            <p style={{ fontSize: '12px', color: '#A8A49E' }}>
              Operational Transformation
            </p>
          </div>
          <blockquote
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '20px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#141412',
              lineHeight: '1.6',
              borderLeft: '2px solid #B8860B',
              paddingLeft: '28px',
            }}
          >
            "We will tell you things about your own business that will be
            uncomfortable to hear. That's not arrogance. That's the job. And we
            don't disappear after go-live — because a system that isn't adopted is
            just another expensive failure, and we're not interested in adding to
            that graveyard."
          </blockquote>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section style={{ background: '#141412', padding: '100px 48px' }}>
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '80px',
            alignItems: 'center',
          }}
          className="cta-grid"
        >
          <div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '42px',
                fontWeight: 300,
                color: '#F7F5F0',
                lineHeight: '1.15',
                marginBottom: '20px',
              }}
              className="cta-h2"
            >
              If any of this describes your business, the right next step is a
              conversation — not a proposal.
            </h2>
            <p
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                color: '#A8A49E',
                lineHeight: '1.7',
              }}
            >
              We work with a limited number of distribution and trading businesses
              each quarter. If you are dealing with a pressing operational problem,
              earlier is better.
            </p>
          </div>
          <div
            style={{
              background: '#222220',
              border: '0.5px solid #3A3A38',
              padding: '36px 32px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#B8860B',
                marginBottom: '16px',
              }}
            >
              Free operational audit
            </p>
            <h3
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '20px',
                fontWeight: 300,
                color: '#F7F5F0',
                marginBottom: '12px',
                lineHeight: '1.3',
              }}
            >
              30 minutes. An honest assessment of where your operations are breaking
              down.
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: '#6B6860',
                lineHeight: '1.65',
                marginBottom: '24px',
              }}
            >
              No deck. No pitch. No proposal unless you ask for one. If we don't see
              a clear path forward, we will tell you that directly.
            </p>
            <Link
              href="/contact"
              className="btn-amber"
              style={{ display: 'block', textAlign: 'center' }}
            >
              Book your operational audit →
            </Link>
            <p
              style={{
                fontSize: '11px',
                color: '#6B6860',
                marginTop: '12px',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              Distribution &amp; trading businesses · 15–60 employees
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 72px 24px 80px !important; }
          .hero-h1 { font-size: 38px !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta-h2 { font-size: 32px !important; }
          .founder-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  )
}
