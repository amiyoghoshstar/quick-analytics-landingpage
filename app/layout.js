import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quick Analytics - Fast & Private Browser Extension',
  description: 'Understand your browsing habits instantly without compromising privacy. The easiest way to get quick analytics directly in your browser.',
  keywords: 'analytics, browser extension, privacy, chrome, quick analytics',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'iJMvlYbcBKmxeDI7wsr-dDtyBLy1bP50DOIX8NvBWlw',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V0ED0LFLY6"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V0ED0LFLY6');
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
