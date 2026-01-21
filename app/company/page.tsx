import { Metadata } from "next"
import { Suspense } from "react"
import Company from "./Client"

export const metadata: Metadata = {
    title: "About LeadPulze | Building Voice-First Sales Tools for Field Teams",
    description:
        "Learn about LeadPulze’s mission to simplify sales data capture using voice and AI. Meet the team building tools for real-world field sales and trade show environments.",

    keywords: [
        "about leadpulze",
        "leadpulze company",
        "sales technology startup",
        "voice first crm company",
        "ai sales tools company",
        "field sales software startup",
        "b2b saas sales platform company",
        "sales automation startup",
        "lead capture technology company",
    ],

    openGraph: {
        title: "About LeadPulze | Voice-First Sales Technology Company",
        description:
            "We’re building AI-powered tools that help sales teams capture real conversations and turn them into actionable leads — even in offline environments.",
        url: "https://www.leadpulze.com/company",
        siteName: "LeadPulze",
        images: [
            {
                url: "/images/og-image/company.webp",
                width: 1200,
                height: 630,
                alt: "About LeadPulze — Voice-First Lead Capture Company",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "About LeadPulze | Voice-First Sales Technology Company",
        description:
            "Meet the team building AI-powered lead capture tools for real-world sales teams.",
        images: ["/images/og-image/company.webp"],
    },

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://www.leadpulze.com/company",
    },
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading company info...</div>}>
            <Company />
        </Suspense>
    )
}
