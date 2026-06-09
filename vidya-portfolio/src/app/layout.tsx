import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Vidya Sagar — Full Stack Developer',
  description:
    'Full Stack Developer focused on creating meaningful digital experiences through thoughtful design and scalable engineering.',
  keywords: ['Vidya Sagar', 'Full Stack Developer', 'Portfolio', 'Web Developer', 'React', 'Next.js'],
  authors: [{ name: 'Vidya Sagar' }],
  openGraph: {
    title: 'Vidya Sagar — Full Stack Developer',
    description: 'Full Stack Developer focused on meaningful digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
