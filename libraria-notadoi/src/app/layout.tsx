import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import Providers from './providers'

// Font setup
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Librăria Nota Doi',
  description: 'Arsenalul de prompturi, framework‑uri și sisteme pentru experți care urcă de la 0€ la 10k€/lună.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}