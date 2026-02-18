# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Assets to Public Folder**
   
   The assets folder needs to be copied to the `public` folder. You can do this manually or run:
   
   **Windows (PowerShell):**
   ```powershell
   if (-not (Test-Path public)) { New-Item -ItemType Directory -Path public }
   Copy-Item -Path assets -Destination public\assets -Recurse -Force
   ```
   
   **Mac/Linux:**
   ```bash
   cp -r assets public/assets
   ```
   
   Or use the npm script:
   ```bash
   npm run copy-assets
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Asset Structure

After copying, your `public` folder should have this structure:

```
public/
└── assets/
    ├── css/
    │   ├── main.css
    │   └── style.css
    ├── img/
    │   ├── logo.png
    │   ├── hero-img.jpg
    │   ├── about.jpg
    │   ├── engagements/
    │   ├── properties/
    │   └── ... (all other images)
    └── vendor/ (optional - if not using npm packages)
```

## Contact Form Email Setup

The contact form currently logs submissions. To enable email sending:

1. **Option 1: Use Nodemailer**
   ```bash
   npm install nodemailer
   ```
   
   Then update `app/api/contact/route.ts` with your SMTP configuration.

2. **Option 2: Use SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Option 3: Use Resend**
   ```bash
   npm install resend
   ```

Add your email service credentials to `.env.local`:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=CoJo.dreamhomes@gmail.com
```

## Troubleshooting

### Images Not Loading
- Ensure assets are copied to `public/assets/`
- Check that image paths start with `/assets/` (not `assets/`)

### Styles Not Loading
- Verify `assets/css/` is in `public/assets/css/`
- Check browser console for 404 errors

### Animations Not Working
- Ensure AOS library is loading (check browser console)
- Verify scripts are loading in `app/components/Scripts.tsx`

### Contact Form Not Working
- Check API route is accessible at `/api/contact`
- Verify form validation is working
- Check browser console for errors

## Next Steps

1. Configure email service for contact form
2. Test all functionality
3. Optimize images if needed
4. Deploy to production
