import './global.css'
import type { Metadata } from 'next'
import Scripts from '@/components/Scripts'

const name = 'Joel Adving'
const url = 'https://www.joeladving.com/'
const preview = url + 'preview.jpg'
const description = 'Stockholm, Sweden based front-end developer with a focus on design, user experience and accessability.'

export const metadata: Metadata = {
  title: name,
  viewport: 'width=device-width, initial-scale=1.0',
  description,
  colorScheme: 'dark',
  creator: name,
  authors: { name },
  icons: [
    { rel: 'alternate icon', type: 'image/png', href: '/favicon.png', url: '/favicon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', url: '/favicon.svg' }
  ],
  themeColor: '#99f6e4',
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url,
    title: name,
    description,
    images: [{ url: preview }]
  },
  twitter: {
    card: 'summary_large_image',
    title: name,
    description,
    images: [{ url: preview }],
    site: url
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Scripts />
      <body>{children}</body>
    </html>
  )
}
