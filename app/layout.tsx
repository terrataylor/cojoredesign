import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Lexend, Roboto } from 'next/font/google'
import media from '../site/content/media.json'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css'
import 'swiper/css/pagination'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--default-font',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
})

const gelasio = localFont({
  src: [
    { path: '../assets/fonts/Gelasio/static/Gelasio-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: '../assets/fonts/Gelasio/static/Gelasio-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-gelasio',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CoJo LLC',
  description: 'Business Owner / Business Consultant / Board member. Diversity & Inclusion Champion / Community Volunteer',
  keywords: 'property management, business consulting, diversity inclusion, Charleston SC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${gelasio.variable} ${lexend.variable}`}>
      <head>
        <link rel="icon" href={media.brand.favicon} />
        <link rel="apple-touch-icon" href={media.brand.appleTouchIcon} />
      </head>
      <body className="index-page">
        {children}
      </body>
    </html>
  )
}
