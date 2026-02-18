# CoJo LLC - Next.js Website

This is a Next.js conversion of the CoJo LLC website, built with React, TypeScript, and modern web technologies.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Copy assets to public folder:
```bash
# The assets folder should be copied to public/assets
# This includes:
# - public/assets/img/ (all images)
# - public/assets/css/ (CSS files)
# - public/assets/vendor/ (vendor libraries if not using npm packages)
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cojollc2025/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── sections/             # Section components
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx             # Footer component
│   │   ├── ScrollTop.tsx         # Scroll to top button
│   │   ├── Preloader.tsx          # Loading preloader
│   │   └── Scripts.tsx           # Third-party script loader
│   ├── courtneys-corner/
│   │   └── page.tsx               # Courtney's Corner page
│   ├── lib/
│   │   └── scrollSpy.ts           # Scroll spy utility
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── public/
│   └── assets/                    # Static assets (images, etc.)
├── package.json
├── next.config.js
└── tsconfig.json
```

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Animations**: AOS (Animate On Scroll) for smooth section animations
- **Image Gallery**: GLightbox for engagement photos
- **Testimonials Carousel**: Swiper.js for testimonials slider
- **Contact Form**: React Hook Form with API route
- **SEO Optimized**: Next.js metadata API for SEO
- **Performance**: Next.js Image optimization, code splitting

## Contact Form Setup

The contact form API route (`app/api/contact/route.ts`) currently logs submissions. To enable email sending:

1. Install an email service package (e.g., `nodemailer`, `@sendgrid/mail`, or `resend`)
2. Configure your email service credentials in environment variables
3. Update the API route to send emails

Example with Nodemailer:
```bash
npm install nodemailer
```

Then update `app/api/contact/route.ts` with your SMTP configuration.

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Email configuration (if using email service)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=CoJo.dreamhomes@gmail.com
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting service**

For static export (if no API routes needed):
```javascript
// next.config.js
module.exports = {
  output: 'export',
}
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Bootstrap 5** - CSS framework
- **AOS** - Scroll animations
- **Swiper** - Carousel/slider
- **GLightbox** - Image gallery
- **React Hook Form** - Form handling
- **Bootstrap Icons** - Icon library

## Notes

- All images should be in `public/assets/img/`
- CSS files are imported from `assets/css/`
- Vendor libraries are loaded via CDN or npm packages
- The site maintains the original design and functionality

## License

Same as the original template license.
