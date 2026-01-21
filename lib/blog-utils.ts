/**
 * Blog Utilities
 * 
 * Server-side utilities for reading and managing blog content.
 * Blog posts are stored as individual JSON files in data/blogs/
 * 
 * @module lib/blog-utils
 */

import fs from "fs"
import path from "path"

/* -------- Type Definitions -------- */

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: number; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }

export interface BlogSEO {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonical: string
}

export interface Blog {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  publishedDate: string
  readingTime: string
  category?: string
  tags?: string[]
  seo: BlogSEO
  content: BlogBlock[]
}

/* -------- Constants -------- */

const BLOGS_DIRECTORY = path.join(process.cwd(), "data", "blogs")

/* -------- Utility Functions -------- */

/**
 * Get all blog slugs from the data/blogs directory
 */
export function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(BLOGS_DIRECTORY)
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""))
}

/**
 * Get a single blog by its slug
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const filePath = path.join(BLOGS_DIRECTORY, `${slug}.json`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const blog = JSON.parse(fileContents) as Blog

  return blog
}

/**
 * Get all blogs, sorted by published date (newest first)
 */
export async function getAllBlogs(): Promise<Blog[]> {
  const slugs = getAllBlogSlugs()

  const blogs = await Promise.all(
    slugs.map(async (slug) => {
      const blog = await getBlogBySlug(slug)
      return blog
    })
  )

  // Filter out any null values and sort by date
  return blogs
    .filter((blog): blog is Blog => blog !== null)
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate)
      const dateB = new Date(b.publishedDate)
      return dateB.getTime() - dateA.getTime()
    })
}

/**
 * Format date for display
 */
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
