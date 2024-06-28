import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const font = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "Maxim's blog",
  description: "Max_Screen's blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
