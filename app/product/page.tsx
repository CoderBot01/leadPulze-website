import { Metadata } from "next"
import { Suspense } from "react"
import ProductPage from "./Client"
export const metadata: Metadata = {
  title: "Product | AI-Powered Voice & Image Lead Capture for Sales",
  description:
    "Explore LeadPulze features: voice-based lead capture, visiting card scanning, image-to-lead AI, offline mode, and smart follow-ups — built for fast-moving sales teams.",

  keywords: [
    "lead capture software features",
    "ai lead capture product",
    "voice based crm data entry",
    "visiting card scanner app for sales",
    "field sales lead management software",
    "offline crm mobile app",
    "sales productivity tools",
    "ai sales automation platform",
    "mobile crm app features",
    "trade show lead capture solution",
  ],

  openGraph: {
    title: "LeadPulze Product — AI-Powered Lead Capture for Sales Teams",
    description:
      "See how LeadPulze captures leads from voice, images, and visiting cards, even offline — and turns conversations into actionable CRM data automatically.",
    url: "https://www.leadpulze.com/product",
    siteName: "LeadPulze",
    images: [
      {
        url: "/images/og-image/Product.webp",
        width: 1200,
        height: 630,
        alt: "LeadPulze Product Features — Voice and Image Lead Capture",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LeadPulze Product — AI-Powered Lead Capture for Sales Teams",
    description:
      "Voice, image, and visiting card lead capture with offline support. Built for real-world sales workflows.",
    images: ["/images/og-image/product.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.leadpulze.com/product",
  },
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage />
    </Suspense>
  )
}
