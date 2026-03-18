import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Book an Operational Audit',
  description:
    '30-minute operational audit for distribution and trading business owners. No proposal. No pitch. A direct assessment of where your operations are breaking down.',
}

export default function ContactPage() {
  return <ContactForm />
}
