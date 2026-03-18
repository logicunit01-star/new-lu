'use client'

import { useState } from 'react'
import { Eyebrow } from '@/components/ui'

const qualifiers = [
  'Distribution or trading business',
  'Between 15 and 60 employees',
  'Currently using (or attempted) an ERP',
  'Owner or senior decision-maker',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    employees: '',
    challenge: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch('https://passionate-wisdom-fcf8af723e.strapiapp.com/api/erp-contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 9a3856845ebe725846b18b4638877616e934781bfbfd668c07c3dae52d8758e38cc94f3ba1b98282c74001203140e3f617400c44d519c502880e502478e358766d26e04ba70d9743cbc35892e479c4bb2bfc3b74c7b5239e3a019e26f179c8549aa5a106f4a56dc6d20b923ed0eb0dfed73d9f4ad866e05d29a2aa29d6add2dd',
        },
        body: JSON.stringify({
          data: {
            name: form.name,
            company: form.company,
            email: form.email,
            employees: form.employees,
            challenge: form.challenge,
          },
        }),
      })
    } catch (_err) {
      // Fail silently — show success regardless
    }

    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    background: '#F7F5F0',
    border: '0.5px solid #E8E4DC',
    borderRadius: 0,
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontSize: '15px',
    color: '#141412',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none' as const,
  }

  const labelStyle = {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontSize: '12px',
    fontWeight: 500 as const,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#6B6860',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <>
      {/* Header */}
      <section style={{ background: '#1A1A18', padding: '80px 48px 100px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <Eyebrow>Free operational audit</Eyebrow>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '42px',
              fontWeight: 300,
              color: '#F7F5F0',
              lineHeight: '1.15',
              maxWidth: '560px',
              marginBottom: '20px',
            }}
          >
            Start with a 30-minute operational audit.
          </h1>
          <p style={{ fontSize: '17px', color: '#A8A49E', lineHeight: '1.75', maxWidth: '520px' }}>
            No deck. No proposal. No sales pitch. A direct conversation about where your
            operations are breaking down and what a structured fix would actually involve.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: '#F7F5F0', padding: '80px 48px' }}>
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '80px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ padding: '48px 40px', background: '#FDFCF9', border: '0.5px solid #E8E4DC', borderLeft: '2px solid #5C6B5A' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 300, color: '#141412', marginBottom: '16px', lineHeight: '1.3' }}>
                  We&apos;ve received your request.
                </p>
                <p style={{ fontSize: '15px', color: '#6B6860', lineHeight: '1.7', marginBottom: '12px' }}>
                  We review every request personally. If your business fits the profile we work with,
                  you will hear from us within one business day to schedule the audit.
                </p>
                <p style={{ fontSize: '14px', color: '#A8A49E' }}>
                  If we don&apos;t think we&apos;re the right fit, we&apos;ll tell you that directly too.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="employees" style={labelStyle}>Number of employees</label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={form.employees}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Select range</option>
                    <option value="10-20">10–20 employees</option>
                    <option value="21-40">21–40 employees</option>
                    <option value="41-60">41–60 employees</option>
                    <option value="60+">60+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" style={labelStyle}>
                    What is the main operational challenge you&apos;re facing?
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={5}
                    value={form.challenge}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                    placeholder="Describe the specific problem you're trying to solve — stock accuracy, system adoption, owner dependency, margin visibility, etc."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', textAlign: 'center', padding: '18px 32px' }}
                  >
                    Request your operational audit →
                  </button>
                  <p style={{ fontSize: '12px', color: '#A8A49E', marginTop: '12px', textAlign: 'center', lineHeight: '1.5' }}>
                    We review every submission personally. You will hear back within one business day.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ background: '#FDFCF9', border: '0.5px solid #E8E4DC', padding: '28px' }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A8A49E', marginBottom: '16px' }}>
                What to expect
              </p>
              {[
                { label: 'Duration', value: '30 minutes, video or phone' },
                { label: 'Format', value: 'Direct conversation, no presentation' },
                { label: 'Output', value: 'Honest assessment of your situation' },
                { label: 'Cost', value: 'No charge' },
                { label: 'Next step', value: 'A proposal only if you ask for one' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '0.5px solid #E8E4DC' }}>
                  <span style={{ fontSize: '13px', color: '#A8A49E' }}>{item.label}</span>
                  <span style={{ fontSize: '13px', color: '#141412', fontWeight: 500, textAlign: 'right', maxWidth: '160px' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#FDFCF9', border: '0.5px solid #E8E4DC', padding: '28px' }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A8A49E', marginBottom: '16px' }}>
                This audit is for you if
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {qualifiers.map((q) => (
                  <div key={q} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                    <div style={{ width: '16px', height: '1px', background: '#B8860B', marginTop: '9px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#6B6860', lineHeight: '1.6' }}>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote style={{ fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 300, fontStyle: 'italic', color: '#141412', borderLeft: '2px solid #B8860B', paddingLeft: '20px', lineHeight: '1.65' }}>
              &ldquo;If what we hear in 30 minutes doesn&apos;t suggest a clear path forward, we will tell you that directly.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 60px 24px !important; }
        }
        input:focus, textarea:focus, select:focus {
          border-color: #B8860B !important;
          outline: none !important;
        }
      `}</style>
    </>
  )
}
