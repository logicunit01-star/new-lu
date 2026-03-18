'use client'

import React from 'react'

// ─── Section Eyebrow ────────────────────────────────────────────
interface EyebrowProps {
  children: React.ReactNode
  dark?: boolean
}
export function Eyebrow({ children, dark = false }: EyebrowProps) {
  return (
    <p
      style={{
        fontFamily: 'Helvetica Neue, Arial, sans-serif',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#B8860B',
        marginBottom: '20px',
      }}
    >
      {children}
    </p>
  )
}

// ─── Amber Rule ─────────────────────────────────────────────────
export function AmberRule() {
  return (
    <div
      style={{
        width: '40px',
        height: '1px',
        background: '#B8860B',
        marginBottom: '28px',
      }}
    />
  )
}

// ─── Section Heading ────────────────────────────────────────────
interface HeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  size?: 'hero' | 'section' | 'sub'
  dark?: boolean
  maxWidth?: string
  className?: string
  style?: React.CSSProperties
}
export function Heading({
  children,
  as: Tag = 'h2',
  size = 'section',
  dark = false,
  maxWidth,
  className,
  style,
}: HeadingProps) {
  const sizes = {
    hero: { fontSize: '52px', lineHeight: '1.08' },
    section: { fontSize: '38px', lineHeight: '1.15' },
    sub: { fontSize: '28px', lineHeight: '1.2' },
  }

  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'Georgia, serif',
        fontWeight: 300,
        color: dark ? '#F7F5F0' : '#141412',
        maxWidth: maxWidth,
        marginBottom: '24px',
        ...sizes[size],
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

// ─── Pain Card ───────────────────────────────────────────────────
interface PainCardProps {
  number: string
  title: string
  body: React.ReactNode
}
export function PainCard({ number, title, body }: PainCardProps) {
  return (
    <div
      style={{
        background: '#1A1A18',
        padding: '36px 32px',
        borderLeft: '2px solid transparent',
        transition: 'border-color 0.2s, background 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderLeftColor = '#B8860B'
        ;(e.currentTarget as HTMLElement).style.background = '#222220'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'
        ;(e.currentTarget as HTMLElement).style.background = '#1A1A18'
      }}
    >
      <p
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '11px',
          color: '#B8860B',
          marginBottom: '16px',
          letterSpacing: '0.08em',
        }}
      >
        {number}
      </p>
      <h3
        style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '15px',
          fontWeight: 500,
          color: '#F7F5F0',
          marginBottom: '10px',
          lineHeight: '1.4',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: '#A8A49E',
          lineHeight: '1.7',
        }}
      >
        {body}
      </p>
    </div>
  )
}

// ─── Outcome Card ────────────────────────────────────────────────
interface OutcomeCardProps {
  title: string
  body: React.ReactNode
}
export function OutcomeCard({ title, body }: OutcomeCardProps) {
  return (
    <div
      style={{
        background: '#FDFCF9',
        padding: '36px 32px',
      }}
    >
      <div
        style={{
          width: '24px',
          height: '2px',
          background: '#5C6B5A',
          marginBottom: '20px',
        }}
      />
      <h3
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          fontWeight: 400,
          color: '#141412',
          marginBottom: '12px',
          lineHeight: '1.3',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: '#6B6860',
          lineHeight: '1.75',
        }}
      >
        {body}
      </p>
    </div>
  )
}

// ─── Stat Card (hero sidebar) ────────────────────────────────────
interface StatCardProps {
  label: string
  children: React.ReactNode
  isLast?: boolean
}
export function StatCard({ label, children, isLast }: StatCardProps) {
  return (
    <div
      style={{
        padding: '24px 28px',
        background: '#FDFCF9',
        borderBottom: isLast ? 'none' : '0.5px solid #E8E4DC',
      }}
    >
      <p
        style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#A8A49E',
          marginBottom: '8px',
        }}
      >
        {label}
      </p>
      <div
        style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '13px',
          color: '#141412',
          lineHeight: '1.6',
        }}
      >
        {children}
      </div>
    </div>
  )
}

// ─── Deliverable Box ─────────────────────────────────────────────
interface DeliverableProps {
  text: string
}
export function Deliverable({ text }: DeliverableProps) {
  return (
    <div
      style={{
        background: '#F7F5F0',
        border: '0.5px solid #E8E4DC',
        borderLeft: '2px solid #5C6B5A',
        padding: '18px 20px',
      }}
    >
      <p
        style={{
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#5C6B5A',
          marginBottom: '6px',
        }}
      >
        Deliverable
      </p>
      <p style={{ fontSize: '14px', color: '#141412', lineHeight: '1.5' }}>
        {text}
      </p>
    </div>
  )
}

// ─── Page Hero (inner pages) ─────────────────────────────────────
interface PageHeroProps {
  eyebrow: string
  heading: React.ReactNode
  subheading?: string
}
export function PageHero({ eyebrow, heading, subheading }: PageHeroProps) {
  return (
    <section
      style={{
        background: '#1A1A18',
        padding: '80px 48px 100px',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" size="section" dark maxWidth="620px">
          {heading}
        </Heading>
        {subheading && (
          <p
            style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '17px',
              color: '#A8A49E',
              lineHeight: '1.75',
              maxWidth: '580px',
              marginTop: '8px',
            }}
          >
            {subheading}
          </p>
        )}
      </div>
    </section>
  )
}
