import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quick Analytics - Fast & Private Browser Extension',
  description: 'Understand your browsing habits instantly without compromising privacy. The easiest way to get quick analytics directly in your browser.',
  keywords: 'analytics, browser extension, privacy, chrome, quick analytics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
