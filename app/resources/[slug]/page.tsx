import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getAllBlogSlugs, getBlogBySlug, formatBlogDate } from "@/lib/blog-utils"
import { ChevronLeft, Clock, Calendar, User } from "lucide-react"
import BlogClient from "./BlogClient"
/* -------- Static Generation -------- */

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

/* -------- SEO from JSON -------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return {
      title: "Blog Not Found | LeadPulze",
      description: "The requested article could not be found.",
    }
  }

  const { seo } = blog

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: "LeadPulze",
      type: "article",
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.publishedDate,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  }
}


/* -------- JSON-LD -------- */

function ArticleJsonLd({ blog }: { blog: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: `https://www.leadpulze.com${blog.coverImage}`,
    datePublished: blog.publishedDate,
    dateModified: blog.publishedDate,
    author: {
      "@type": "Organization",
      name: blog.author,
      url: "https://www.leadpulze.com",
    },
    publisher: {
      "@type": "Organization",
      name: "LeadPulze",
      url: "https://www.leadpulze.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.leadpulze.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blog.seo.canonical,
    },
    keywords: blog.seo.keywords.join(", "),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/* -------- PAGE (SERVER) -------- */
  
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) notFound()

  return (
    <>
      <ArticleJsonLd blog={blog} />

      {/* Hero + Cover Image stays on server */}
      <main className="min-h-screen bg-background">
        <header className="pt-28 pb-12 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 group transition-colors"
            >
              <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to all resources
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="size-4 text-primary" />
                  </div>
                  <span className="font-medium">{blog.author}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{formatBlogDate(blog.publishedDate)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>{blog.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="container mx-auto px-4 -mt-2 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <Image
                src={blog.coverImage || "/placeholder.svg"}
                alt={blog.title}
                fill
                className="object-scale-down"
                priority
              />
            </div>
          </div>
        </div>

        {/* Client-side content */}
        <BlogClient blog={blog} />
      </main>
    </>
  )
}
