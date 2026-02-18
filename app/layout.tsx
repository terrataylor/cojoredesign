import type { Metadata } from 'next'
import { Roboto, Raleway } from 'next/font/google'
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

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--heading-font',
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
    <html lang="en" className={`${roboto.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
      </head>
      <body className="index-page">
        {children}
      </body>
    </html>
  )
}
