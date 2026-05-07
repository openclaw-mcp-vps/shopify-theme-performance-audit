import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Theme Performance Audit | Speed Optimization Scanner',
  description: 'Automated Shopify theme speed optimization scanner. Identify performance bottlenecks, unused CSS/JS, and image issues with actionable reports.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e65ace7e-9d5e-4e8a-8879-994a01776986"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
