"use client"

import { useState } from "react"
import { Linkedin, Twitter, Link2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingShareButtonsProps {
  url: string
  title: string
}

export function FloatingShareButtons({ url, title }: FloatingShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const shareOnX = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea")
      textarea.value = url
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const buttonBase =
    "flex items-center justify-center size-10 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"

  return (
    <aside className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
      <span className="text-xs text-muted-foreground font-medium text-center mb-1 tracking-wide uppercase">
        Share
      </span>
      <button
        onClick={shareOnLinkedIn}
        className={cn(buttonBase, "hover:text-[#0A66C2]")}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="size-5" />
      </button>
      <button
        onClick={shareOnX}
        className={cn(buttonBase, "hover:text-foreground")}
        aria-label="Share on X"
      >
        <Twitter className="size-5" />
      </button>
      <button
        onClick={copyLink}
        className={cn(buttonBase, copied && "text-green-600 border-green-300")}
        aria-label="Copy link"
      >
        {copied ? <Check className="size-5" /> : <Link2 className="size-5" />}
      </button>
    </aside>
  )
}

/* Mobile share bar for smaller screens */
export function MobileShareBar({ url, title }: FloatingShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const shareOnX = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="lg:hidden flex items-center justify-center gap-4 py-6 border-t border-border mt-12">
      <span className="text-sm text-muted-foreground font-medium">Share this article:</span>
      <button
        onClick={shareOnLinkedIn}
        className="flex items-center justify-center size-9 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="size-4" />
      </button>
      <button
        onClick={shareOnX}
        className="flex items-center justify-center size-9 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
        aria-label="Share on X"
      >
        <Twitter className="size-4" />
      </button>
      <button
        onClick={copyLink}
        className={cn(
          "flex items-center justify-center size-9 rounded-full bg-card border border-border hover:border-primary/30 transition-colors",
          copied && "text-green-600 border-green-300"
        )}
        aria-label="Copy link"
      >
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      </button>
    </div>
  )
}
