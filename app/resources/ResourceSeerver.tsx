import Link from "next/link"
import Image from "next/image"
import { getAllBlogs, Blog, formatBlogDate } from "@/lib/blog-utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, Calendar, User } from "lucide-react"
import FeaturedResourceHero from "./components/FeaturedResources"

/* -------- ItemList JSON-LD for SEO -------- */
function ItemListJsonLd({ blogs }: { blogs: Blog[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "LeadPulze Sales Resources & Guides",
        description: "Guides, playbooks, and expert insights on capturing, managing, and converting leads faster with modern sales tools.",
        numberOfItems: blogs.length,
        itemListElement: blogs.map((blog, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Article",
                name: blog.title,
                description: blog.excerpt,
                url: `https://www.leadpulze.com/resources/${blog.slug}`,
                image: `https://www.leadpulze.com${blog.coverImage}`,
                datePublished: blog.publishedDate,
                author: {
                    "@type": "Organization",
                    name: blog.author,
                },
            },
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export default async function ResourcesServer() {
    const blogs = await getAllBlogs()

    const featured = blogs[0]
    const rest = blogs.slice(1)

    return (
        <>
            <ItemListJsonLd blogs={blogs} />
            <main className="min-h-screen pt-28 pb-20 bg-white">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ✅ HERO FEATURED */}
                    {featured && (
                        <FeaturedResourceHero
                            resource={{
                                title: featured.title,
                                excerpt: featured.excerpt,
                                coverImage: featured.coverImage,
                                slug: featured.slug,
                                publishedDate: featured.publishedDate,
                                readingTime: featured.readingTime,
                            }}
                        />
                    )}

                    {/* ✅ BLOG GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                        {rest.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/resources/${blog.slug}`}
                                className="group relative flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={blog.coverImage || "/placeholder.svg"}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="size-4" />
                                            <span>{formatBlogDate(blog.publishedDate)}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="size-4" />
                                            <span>{blog.readingTime}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 text-foreground">
                                        {blog.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
                                        <div className="flex items-center gap-2 text-xs font-semibold">
                                            <div className="size-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <User className="size-4" />
                                            </div>
                                            <span className="text-foreground">{blog.author}</span>
                                        </div>

                                        <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read resource <ArrowRight className="size-3" />
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
