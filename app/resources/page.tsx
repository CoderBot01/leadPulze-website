import { Metadata } from "next"
import { Suspense } from "react"
import ResourcesServer from "./ResourceSeerver"
export const metadata: Metadata = {
  title: "Sales Resources & Guides | LeadPulze Learning Hub",
  description:
    "Explore sales guides, field sales tips, lead capture best practices, CRM workflows, and AI-powered selling strategies from the LeadPulze team.",

  keywords: [
    "sales resources",
    "field sales guides",
    "lead capture best practices",
    "crm tips for sales teams",
    "ai in sales articles",
    "sales productivity blog",
    "trade show lead generation tips",
    "mobile crm best practices",
    "sales automation guides",
    "b2b sales enablement content",
  ],

  openGraph: {
    title: "Sales Resources & Guides | LeadPulze Learning Hub",
    description:
      "Guides, playbooks, and expert insights on capturing, managing, and converting leads faster with modern sales tools.",
    url: "https://www.leadpulze.com/resources",
    siteName: "LeadPulze",
    images: [
      {
        url: "/images/og-image/Resources.webp",
        width: 1200,
        height: 630,
        alt: "LeadPulze Resources — Sales Guides and Lead Capture Best Practices",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sales Resources & Guides | LeadPulze",
    description:
      "Learn how top sales teams capture and convert leads faster using voice, images, and AI.",
    images: ["/images/og-image/Resources.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.leadpulze.com/resources",
  },
}

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-40 text-center">Loading resources…</div>}>
      <ResourcesServer />
    </Suspense>
  )
}
