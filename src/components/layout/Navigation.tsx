'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/services', label: 'What we do' },
  { href: '/#approach', label: 'Our approach' },
  { href: '/industry', label: 'Industries' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(247, 245, 240, 0.96)' : '#F7F5F0',
          borderBottom: '0.5px solid #E8E4DC',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            padding: '0 48px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '17px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#141412',
              textDecoration: 'none',
            }}
          >
            LOGIC<span style={{ color: '#B8860B' }}>.</span>UNIT
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: pathname === link.href ? '#141412' : '#6B6860',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-outline">
              Start with an audit →
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="show-mobile"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1px',
                  background: '#141412',
                  transition: 'all 0.2s',
                  transform:
                    mobileOpen
                      ? i === 0
                        ? 'rotate(45deg) translateY(8.5px)'
                        : i === 2
                        ? 'rotate(-45deg) translateY(-8.5px)'
                        : 'opacity: 0'
                      : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: '#F7F5F0',
            paddingTop: '80px',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: 300,
                color: '#141412',
                textDecoration: 'none',
                padding: '20px 0',
                borderBottom: '0.5px solid #E8E4DC',
                display: 'block',
                animationDelay: `${i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" className="btn-primary">
              Start with an audit →
            </Link>
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div style={{ height: '64px' }} />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
