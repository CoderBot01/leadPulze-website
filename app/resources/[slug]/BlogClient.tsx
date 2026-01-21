"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer"
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar"
import {
    FloatingShareButtons,
    MobileShareBar,
} from "@/components/blog/FloatingShareButtons"
import { Button } from "@/components/ui/button"
import { DemoBookingModal } from "@/components/onboarding-flow"

export default function BlogClient({ blog }: { blog: any }) {
    const [isDemoOpen, setIsDemoOpen] = useState(false)

    const canonicalUrl = blog.seo.canonical

    return (
        <>
            <ReadingProgressBar />
            <Navbar />

            <FloatingShareButtons url={canonicalUrl} title={blog.title} />

            <article className="container mx-auto px-4 pb-16">
                <div className="max-w-[720px] mx-auto">
                    <section className="relative">
                        <div className="absolute inset-0 -mx-6 -my-4 bg-card/30 rounded-3xl -z-10 hidden md:block" />

                        <BlogContentRenderer content={blog.content} />

                        <MobileShareBar url={canonicalUrl} title={blog.title} />
                    </section>

                    {/* CTA */}
                    <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl border border-border text-center">
                        <h3 className="text-xl font-semibold mb-3">
                            Ready to capture more leads?
                        </h3>

                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            See how LeadPulze helps sales teams capture, qualify, and convert
                            exhibition leads automatically.
                        </p>

                        <Button
                            size="lg"
                            onClick={() => setIsDemoOpen(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </article>

            <Footer />
            {/* ---------------- DEMO MODAL ---------------- */}
            <DemoBookingModal
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
            />
        </>
    )
}
