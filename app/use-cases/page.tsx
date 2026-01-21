import { Metadata } from "next"
import { Suspense } from "react"
import UseCases from "./Client"

export const metadata: Metadata = {
  title: "Sales Use Cases | How Teams Use LeadPulze to Capture More Leads",
  description:
    "Discover how field sales teams, trade show reps, and B2B sellers use LeadPulze to capture leads using voice, images, and visiting cards — even without internet.",

  keywords: [
    "sales lead capture use cases",
    "field sales crm workflows",
    "trade show lead capture solution",
    "b2b sales lead management use cases",
    "offline lead capture app",
    "mobile crm for sales teams",
    "ai lead capture scenarios",
    "sales productivity workflows",
    "exhibition lead generation tools",
    "channel sales lead capture software",
  ],

  openGraph: {
    title: "Sales Use Cases | How Teams Use LeadPulze",
    description:
      "Real-world sales workflows powered by voice-first and AI-based lead capture. See how different teams use LeadPulze.",
    url: "https://www.leadpulze.com/use-cases",
    siteName: "LeadPulze",
    images: [
      {
        url: "/images/og-image/Usecase.webp", 
        width: 1200,
        height: 630,
        alt: "LeadPulze Use Cases — Field Sales and Trade Show Lead Capture",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sales Use Cases | LeadPulze",
    description:
      "See how sales teams capture leads faster with voice, images, and offline-ready workflows.",
    images: ["/images/og-image/Usecase.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.leadpulze.com/use-cases",
  },
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading use cases...</div>}>
      <UseCases/>
    </Suspense>
  )
}
