"use client"

import { cn } from "@/lib/utils"

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string; variant?: "tip" | "warning" | "insight" }

interface BlogContentRendererProps {
  content: ContentBlock[]
  className?: string
}

export function BlogContentRenderer({ content, className }: BlogContentRendererProps) {
  return (
    <div className={cn("blog-content", className)}>
      {content.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={idx}
                className="text-lg leading-relaxed text-muted-foreground mb-6 last:mb-0"
              >
                {block.text}
              </p>
            )

          case "heading":
            if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  className="text-xl font-semibold text-foreground mt-10 mb-4 scroll-mt-24"
                >
                  {block.text}
                </h3>
              )
            }
            return (
              <h2
                key={idx}
                className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-6 pb-3 border-b border-border/50 scroll-mt-24"
              >
                {block.text}
              </h2>
            )

          case "list":
            return (
              <ul key={idx} className="my-6 space-y-3 pl-1">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 size-2 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )

          case "quote":
            return (
              <blockquote
                key={idx}
                className="relative my-10 px-8 py-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-l-4 border-primary"
              >
                <svg
                  className="absolute top-4 left-4 size-8 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed pl-6">
                  {block.text}
                </p>
              </blockquote>
            )

          case "callout":
            const variantStyles = {
              tip: "bg-green-50 border-green-500 text-green-900",
              warning: "bg-amber-50 border-amber-500 text-amber-900",
              insight: "bg-primary/5 border-primary text-foreground",
            }
            const variant = block.variant || "insight"
            return (
              <aside
                key={idx}
                className={cn(
                  "my-8 p-5 rounded-xl border-l-4",
                  variantStyles[variant]
                )}
              >
                <p className="text-base leading-relaxed font-medium">{block.text}</p>
              </aside>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
