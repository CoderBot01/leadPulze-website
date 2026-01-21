"use client"

import { useEffect, useRef } from "react"

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL!

export function DemoBookingModal({
  isOpen, 
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const widgetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen || !CALENDLY_URL) return

    const loadCalendly = () => {
      if ((window as any).Calendly && widgetRef.current) {
        ; (window as any).Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
        })
      }
    }

    // Load script if not already loaded
    if (!(window as any).Calendly) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = loadCalendly
      document.body.appendChild(script)
    } else {
      loadCalendly()
    }
  }, [isOpen])

  if (!isOpen) return null

  if (!CALENDLY_URL) {
    return (
      <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-xl">
          <p className="text-red-600 font-medium">
            Calendly URL not configured
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-card border border-white rounded-2xl shadow-xl relative overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 z-10 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        {/* Calendly Mount Point */}
        <div
          ref={widgetRef}
          style={{ minWidth: "320px", height: "500px" }}
        />
      </div>
    </div>
  )
}
