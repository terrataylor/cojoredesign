# FTP Deployment Guide

This guide explains how to build and deploy your Next.js application to a server via FTP.

## Build Process

### 1. Build the Static Site

Run the build command:

```bash
npm run build
```

This will create a static export in the **`/out`** folder.

### 2. What Gets Created

The `/out` folder contains:
- All HTML files (one per page/route)
- All static assets (CSS, JS, images)
- Optimized JavaScript bundles
- Everything needed to run the site statically

### 3. Deploy via FTP

1. **Connect to your FTP server** using an FTP client (FileZilla, WinSCP, etc.)

2. **Upload the contents of the `/out` folder** to your web server's public directory:
   - Typically: `/public_html/` or `/www/` or `/htdocs/`
   - Upload **all files and folders** from `/out` to the root of your web directory

3. **Important**: 
   - Upload the **contents** of `/out`, not the `/out` folder itself
   - Make sure `.htaccess` files are uploaded (if your server uses Apache)
   - Ensure file permissions are correct (typically 644 for files, 755 for directories)

## Configuration Notes

### Static Export Settings

The `next.config.js` has been configured with:
- `output: 'export'` - Enables static site generation
- `images: { unoptimized: true }` - Required for static export (Next.js image optimization doesn't work in static exports)
- `trailingSlash: true` - Ensures URLs work correctly on static servers

### Email Service

Your contact form uses an external email service (configured via `NEXT_PUBLIC_EMAIL_SERVICE_URL`). Make sure this environment variable is set correctly, or the form will use the fallback endpoint.

## Build Script

You can add a custom script to your `package.json`:

```json
"scripts": {
  "build:static": "next build",
  "deploy:preview": "next build && echo 'Build complete! Upload /out folder contents via FTP'"
}
```

## Troubleshooting

### Images Not Loading
- Ensure all images in `/public/assets/` are copied correctly
- Check that image paths are relative (they should be with static export)

### Routes Not Working
- Static export generates HTML files for each route
- Make sure your server is configured to serve `index.html` for directories
- Check that `.htaccess` (Apache) or server config handles Next.js routing

### Contact Form Issues
- Verify `NEXT_PUBLIC_EMAIL_SERVICE_URL` is set correctly
- The email service must be accessible from your deployed domain
- Check CORS settings on your email service

## File Structure After Build

```
/out/
├── _next/          (Next.js optimized assets)
├── assets/         (Your static assets)
├── courtneys-corner/
│   └── index.html
├── index.html      (Home page)
└── ... (other static files)
```

## Quick Deploy Checklist

- [ ] Run `npm run build`
- [ ] Verify `/out` folder was created
- [ ] Connect to FTP server
- [ ] Upload all contents of `/out` to web root
- [ ] Set correct file permissions
- [ ] Test the deployed site
- [ ] Verify contact form works (check email service URL)
