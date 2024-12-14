import type { Metadata } from 'next'
import { seoConfig } from './seo-config'

export const metadata: Metadata = seoConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}

