import Link from 'next/link'

const footerLinks = [
  { href: '/services', label: 'What we do' },
  { href: '/industry', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer
      style={{
        background: '#1A1A18',
        borderTop: '0.5px solid #2E2E2C',
      }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '64px 48px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '17px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#A8A49E',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            LOGIC<span style={{ color: '#B8860B' }}>.</span>UNIT
          </Link>
          <p
            style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '13px',
              color: '#6B6860',
              lineHeight: '1.7',
              maxWidth: '260px',
            }}
          >
            Operational Control & AI-Enabled Transformation Partner for
            Distribution & Trading SMEs.
          </p>
        </div>

        {/* Links */}
        <div>
          <p
            style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#3A3A38',
              marginBottom: '20px',
            }}
          >
            Navigation
          </p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  color: '#6B6860',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div>
          <p
            style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#3A3A38',
              marginBottom: '20px',
            }}
          >
            Get started
          </p>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              fontWeight: 300,
              color: '#A8A49E',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}
          >
            30-minute operational audit. No proposal. No pitch.
          </p>
          <Link href="/contact" className="btn-amber">
            Book your audit →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '20px 48px',
          borderTop: '0.5px solid #2E2E2C',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '12px',
            color: '#3A3A38',
          }}
        >
          © {new Date().getFullYear()} Logic Unit. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '12px',
            color: '#3A3A38',
          }}
        >
          Distribution & Trading Operations Specialists
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 48px 24px 40px !important;
          }
        }
      `}</style>
    </footer>
  )
}
