import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kundan Thota | AI Researcher",
  description: "AI researcher and ML engineer shipping generative, forecasting, and vision systems across energy, supply chain, and fashion tech.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`relative min-h-screen bg-background font-sans antialiased text-foreground transition-colors ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <span className="pointer-events-none fixed inset-0 -z-20 bg-page-fade" aria-hidden="true" />
        <span className="pointer-events-none fixed inset-0 -z-30 bg-page-grid" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
