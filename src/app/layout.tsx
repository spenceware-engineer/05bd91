import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Journey Builder',
  description: `A Next.js (React.js) application, written in TypeScript, that retrieves
    data to render a Directed Acyclic Graph with React Flow. This application
    manages the prefill settings for when a form has been submitted, the values
    from the form fields can be used to prefill the fields of downstream forms.
    The application also offers the ability to change the data source.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
