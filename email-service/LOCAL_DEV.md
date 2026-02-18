# Running Email Service Locally

## Prerequisites

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

## Setup

1. **Navigate to email-service folder:**
   ```bash
   cd email-service
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file** (copy from `ENV.md`):
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   FROM_EMAIL=contactme@cojollc.com
   TO_EMAIL=CoJo.dreamhomes@gmail.com
   ALLOWED_ORIGINS=http://localhost:3000
   ```

## Start Local Server

Run directly (don't use npm run dev):
```bash
vercel dev
```

Or use:
```bash
npm start
```

The server will start on **http://localhost:3000** (or the next available port).

Your endpoint will be:
- **http://localhost:3000/api/contact**

## Testing

### Option 1: Test with curl

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### Option 2: Test from UI App

In your UI app's `.env.local`, set:
```env
NEXT_PUBLIC_EMAIL_SERVICE_URL=http://localhost:3000/api/contact
```

Then run your UI app and submit the contact form.

## Troubleshooting

### Port Already in Use

If port 3000 is taken, Vercel will automatically use the next available port (3001, 3002, etc.). Check the terminal output for the actual URL.

### Environment Variables Not Loading

Make sure your `.env` file is in the `email-service/` folder (same directory as `package.json`).

### CORS Errors

Make sure `ALLOWED_ORIGINS` in `.env` includes the origin you're testing from (e.g., `http://localhost:3000`).

### Vercel CLI Not Found

If you get "vercel: command not found", make sure you installed it globally:
```bash
npm install -g vercel
```

## Alternative: Test Against Deployed Vercel URL

If you don't want to run locally, you can:

1. Deploy to Vercel first (see `README.md`)
2. Get the Vercel URL (e.g., `https://cojollc-email-service-xxxx.vercel.app`)
3. Use that URL in your UI app's `.env.local`:
   ```env
   NEXT_PUBLIC_EMAIL_SERVICE_URL=https://cojollc-email-service-xxxx.vercel.app/api/contact
   ```

This way you can test the email service without running it locally.
