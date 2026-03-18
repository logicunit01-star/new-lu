import type { Metadata } from 'next'
import '../styles/globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://logicunit.co'),
  title: {
    default: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
    template: '%s | Logic Unit',
  },
  description:
    'Logic Unit rebuilds the operational structure of distribution and trading businesses so that owners regain control, systems actually get used, and growth stops creating chaos.',
  keywords: [
    'ERP for distribution',
    'operational transformation',
    'inventory control systems',
    'ERP implementation',
    'distribution business systems',
    'trading company ERP',
    'operational consulting',
    'stock management',
    'supply chain operations',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logicunit.co',
    siteName: 'Logic Unit',
    title: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
    description:
      'We rebuild the operational structure of distribution and trading businesses. Systems that actually get used. Control that actually holds.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logic Unit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
    description:
      'We rebuild the operational structure of distribution and trading businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
