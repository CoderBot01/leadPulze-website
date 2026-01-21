/**
 * Global Loading State – Premium UX
 * Branded shimmer skeleton matching real layout
 */
"use client "
export default function Loading() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* ===== Shimmer Base Style ===== */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* ===== Navbar Skeleton ===== */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="h-8 w-28 rounded-md skeleton" />

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 rounded skeleton" />
            ))}
          </div>

          {/* CTA */}
          <div className="h-10 w-28 rounded-full skeleton" />
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* ===== Hero Section ===== */}
          <section className="text-center space-y-6 mb-20">
            <div className="h-12 w-3/4 mx-auto rounded-xl skeleton" />
            <div className="h-6 w-1/2 mx-auto rounded skeleton" />

            <div className="flex justify-center gap-4 mt-8">
              <div className="h-12 w-40 rounded-full skeleton" />
              <div className="h-12 w-32 rounded-full skeleton" />
            </div>
          </section>

          {/* ===== Feature Cards ===== */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-border p-6 space-y-4"
              >
                <div className="h-10 w-10 rounded-lg skeleton" />
                <div className="h-5 w-2/3 rounded skeleton" />
                <div className="h-4 w-full rounded skeleton" />
                <div className="h-4 w-5/6 rounded skeleton" />
              </div>
            ))}
          </section>

          {/* ===== Blog / Content Blocks ===== */}
          <section className="space-y-10">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Image */}
                <div className="w-full md:w-64 h-40 rounded-xl skeleton" />

                {/* Text */}
                <div className="flex-1 space-y-4">
                  <div className="h-6 w-3/4 rounded skeleton" />
                  <div className="h-4 w-full rounded skeleton" />
                  <div className="h-4 w-5/6 rounded skeleton" />
                  <div className="h-4 w-2/3 rounded skeleton" />
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* ===== Shimmer Animation CSS ===== */}
      <style jsx global>{`
        .skeleton {
          background: linear-gradient(
            110deg,
            hsl(var(--muted)) 25%,
            hsl(var(--muted) / 0.6) 37%,
            hsl(var(--muted)) 63%
          );
          background-size: 200% 100%;
          animation: shimmer 1.4s ease infinite;
        }

        @keyframes shimmer {
          to {
            background-position-x: -200%;
          }
        }
      `}</style>
    </div>
  )
}
