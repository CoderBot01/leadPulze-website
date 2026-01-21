import React from "react"
/* ============================================
   Shared TypeScript Types for LeadPulze
   ============================================ */

/* -------- Navigation -------- */
export interface NavLink {
  name: string
  href: string
}

/* -------- Workflow / How It Works -------- */
export interface WorkflowStep {
  icon: string
  label: string
  title: string
  description: string
  image: string
  details: string[]
}

export interface Workflow {
  title: string
  subtitle: string
  icon: string
  coverImage: string
  steps: WorkflowStep[]
}

/* -------- Team / Audience -------- */
export interface TeamItem {
  icon: React.ReactNode
  title: string
  description: string
}

/* -------- Blog / Resources -------- */
export interface BlogSEO {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonicalUrl: string
}

export interface BlogContent {
  type: "paragraph" | "heading" | "list" | "blockquote" | "image"
  text?: string
  items?: string[]
  src?: string
  alt?: string
  caption?: string
}

export interface Blog {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  publishedDate: string
  readingTime: string
  category: string
  tags: string[]
  seo: BlogSEO
  content: BlogContent[]
}

/* -------- Use Cases -------- */
export interface UseCase {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
}

/* -------- Contact Form -------- */
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  mobile: string
  jobTitle: string
  eventDate: string
}

/* -------- Demo Booking -------- */
export interface DemoBookingData {
  name: string
  email: string
  company: string
  role: string
  teamSize?: string
  message?: string
}
