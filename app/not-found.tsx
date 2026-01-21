import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found | LeadPulze",
  description: "The page you're looking for doesn't exist. Return to the homepage or browse our resources.",
  robots: {
    index: false,
    follow: true,
  },
}

/**
 * 404 Not Found Page
 * 
 * Displayed when a user navigates to a route that doesn't exist.
 * Provides helpful navigation options.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center max-w-lg">
        {/* 404 Visual */}
        <div className="mb-8">
          <span className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        
        <p className="text-muted-foreground mb-8 text-lg">
          Sorry, we couldn't find the page you're looking for. It might have been moved or no longer exists.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="gap-2 bg-transparent">
            <Link href="/resources">
              <Search className="w-4 h-4" />
              Browse Resources
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              href="/product" 
              className="text-sm text-primary hover:underline"
            >
              Product
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/use-cases" 
              className="text-sm text-primary hover:underline"
            >
              Use Cases
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/company" 
              className="text-sm text-primary hover:underline"
            >
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/contact" 
              className="text-sm text-primary hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
