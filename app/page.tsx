import { Metadata } from "next"
import { Suspense } from "react"
import Home from "@/components/Home"

export const metadata: Metadata = {
  title: "LeadPulze | Voice-First Lead Capture for Sales Teams",
  description:
    "Capture leads instantly using voice, images, and visiting cards. LeadPulze helps sales teams record conversations, auto-extract contacts, and follow up faster — even in offline field environments.",

  keywords: [
    "voice lead capture app",
    "sales lead capture tool",
    "field sales crm app",
    "trade show lead capture",
    "visiting card scanner for sales",
    "offline lead capture app",
    "ai lead management software",
    "mobile crm for sales reps",
    "sales automation tools",
    "lead capture for exhibitions",
    "leadpulse",
    "leads",
    "lead capturing tool",
    "lead capturing ai",
  ],

  openGraph: {
    title: "LeadPulze — Voice-First Lead Capture for Sales Teams",
    description:
      "Stop typing. Start capturing. Record sales conversations, scan visiting cards, and auto-create leads instantly with LeadPulze.",
    url: "https://www.leadpulze.com", 
    siteName: "LeadPulze",
    images: [
      {
        url: "/images/Og-image/Home.webp",
        width: 1200,
        height: 630,
        alt: "LeadPulze — Voice First Lead Capture App for Sales Teams",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LeadPulze — Voice-First Lead Capture for Sales Teams",
    description:
      "Capture leads using voice, images, and visiting cards. Built for fast-moving field sales teams.",
    images: ["/images/Og-image/Home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.leadpulze.com", 
  },
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  )
}
