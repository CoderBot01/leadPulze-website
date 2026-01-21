import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar } from "lucide-react"
import { formatBlogDate } from "@/lib/blog-utils"

type FeaturedResource = {
    title: string
    excerpt: string
    coverImage: string
    slug: string
    publishedDate: string
    readingTime: string
}

export default function FeaturedResourceHero({
    resource,
}: {
    resource: FeaturedResource
}) {
    return (
        <>
            <h1 className="text-3xl text-black lg:text-6xl text-bold py-6 bg-clip-text ">
                Resources
            </h1>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
            

            {/* LEFT */}
            <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    ⭐ <span className="font-medium">Featured Resource</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40DDE9] via-[#47AEE8] to-[#5487EE] leading-tight mb-6">
                    {resource.title}
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl mb-6">
                    {resource.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
<div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {formatBlogDate(resource.publishedDate)}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {resource.readingTime}
                    </div>
                </div>

                {/*  CORRECT LINK */}
                <Link
                    href={`/resources/${resource.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                    Read blog →
                </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src={resource.coverImage || "/placeholder.svg"}
                    alt={resource.title}
                    width={800}
                    height={520}
                    priority
                    className="w-full h-full object-fill"
                />
            </div>
        </section>
        </>
    )
}
