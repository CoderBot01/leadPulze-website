import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

/* -------- Default Metadata (inherited by all pages) -------- */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.leadpulze.com'),
  title: {
    default: 'LeadPulze | Voice-First Lead Capture for Sales Teams',
    template: '%s | LeadPulze',
  },
  description: 'Capture leads instantly using voice, images, and visiting cards. LeadPulze helps sales teams record conversations, auto-extract contacts, and follow up faster.',
  generator: 'Next.js',
  applicationName: 'LeadPulze',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'voice lead capture',
    'sales lead capture tool',
    'field sales CRM',
    'trade show lead capture',
    'AI lead management',
    'mobile CRM for sales',
  ],
  authors: [{ name: 'LeadPulze Team' }],
  creator: 'LeadPulze',
  publisher: 'LeadPulze',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/Favicon.ico",
  },

  openGraph: {
    type: 'website',
    siteName: 'LeadPulze',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@leadpulze',
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

/* -------- Viewport Configuration -------- */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
