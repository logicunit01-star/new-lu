'use client'

import { useState } from 'react'
import { Deliverable } from '@/components/ui'

const phases = [
  {
    number: 'Phase 01',
    name: 'Operational diagnosis',
    timing: 'Weeks 1–3',
    title: 'We map how your business actually runs',
    body: 'Not how the org chart says it runs. Not how it performs at its best. How it runs on a normal Tuesday — where decisions get made, where information breaks down, where your team works around the system instead of through it. Most clients tell us this phase alone surfaces problems they had stopped being able to see.',
    deliverable: 'Operational map with annotated breakdown points and root cause analysis',
  },
  {
    number: 'Phase 02',
    name: 'Structural redesign',
    timing: 'Weeks 4–6',
    title: 'We redesign the operating model',
    body: 'Process flows, decision rights, information architecture, roles and handoffs. This is the work that makes everything else hold. A system built on a redesigned structure gets used. A system built on the old structure becomes another workaround. We do this with your team — not for them.',
    deliverable: 'Redesigned operating model with process documentation and system requirements',
  },
  {
    number: 'Phase 03',
    name: 'System implementation',
    timing: 'Weeks 7–14',
    title: 'We build the system that fits the redesign',
    body: 'ERP configuration, data architecture, reporting structure, integrations — and where appropriate, AI-assisted decision tools embedded into operational workflows. Every configuration decision is made against the redesigned operating model. Not the legacy one.',
    deliverable: 'Configured, tested operational system ready for phased go-live',
  },
  {
    number: 'Phase 04',
    name: 'Adoption & stabilisation',
    timing: 'Weeks 15–20',
    title: 'We stay until adoption is real',
    body: 'Go-live is not the finish line. It is the beginning of the hardest phase — changing operational behavior at team level. We remain involved through stabilisation, available daily during critical periods. We do not declare success when the system is technically live. We declare success when it is running the business.',
    deliverable: 'Stable adoption across functions + 6-month control review included',
  },
]

export function PhaseSelector() {
  const [active, setActive] = useState(0)
  const phase = phases[active]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gap: '0',
        border: '0.5px solid #E8E4DC',
      }}
      className="phase-layout"
    >
      {/* Tab nav */}
      <div style={{ borderRight: '0.5px solid #E8E4DC' }}>
        {phases.map((p, i) => (
          <button
            key={p.number}
            onClick={() => setActive(i)}
            style={{
              width: '100%',
              padding: '20px 24px',
              background: 'transparent',
              border: 'none',
              borderBottom: i < phases.length - 1 ? '0.5px solid #E8E4DC' : 'none',
              borderLeft: active === i ? '2px solid #B8860B' : '2px solid transparent',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s ease',
            }}
            aria-selected={active === i}
          >
            <p
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === i ? '#B8860B' : '#A8A49E',
                marginBottom: '5px',
                transition: 'color 0.15s',
              }}
            >
              {p.number}
            </p>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '15px',
                fontWeight: 400,
                color: active === i ? '#141412' : '#6B6860',
                lineHeight: '1.3',
                transition: 'color 0.15s',
              }}
            >
              {p.name}
            </p>
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div style={{ padding: '36px 40px' }} key={active}>
        <span
          style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#B8860B',
            border: '0.5px solid #B8860B',
            padding: '5px 12px',
            marginBottom: '24px',
          }}
        >
          {phase.timing}
        </span>
        <h3
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '26px',
            fontWeight: 300,
            color: '#141412',
            marginBottom: '20px',
            lineHeight: '1.25',
          }}
        >
          {phase.title}
        </h3>
        <p
          style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '15px',
            color: '#6B6860',
            lineHeight: '1.8',
            marginBottom: '32px',
            maxWidth: '540px',
          }}
        >
          {phase.body}
        </p>
        <Deliverable text={phase.deliverable} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .phase-layout { grid-template-columns: 1fr !important; }
          .phase-layout > div:first-child { border-right: none !important; border-bottom: 0.5px solid #E8E4DC; display: flex; overflow-x: auto; }
          .phase-layout > div:first-child button { min-width: 160px; border-left: none !important; border-bottom: 2px solid transparent; }
          .phase-layout > div:first-child button[aria-selected="true"] { border-bottom: 2px solid #B8860B !important; }
        }
      `}</style>
    </div>
  )
}
