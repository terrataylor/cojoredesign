# Troubleshooting 401 Unauthorized Error

## Quick Fixes

### 1. Check ALLOWED_ORIGINS in Vercel

The most common cause is that `ALLOWED_ORIGINS` isn't set correctly in Vercel.

**In Vercel Dashboard:**
1. Go to your email service project
2. Settings → Environment Variables
3. Check if `ALLOWED_ORIGINS` is set
4. Make sure it includes: `http://localhost:3000`

**Set it to:**
```
ALLOWED_ORIGINS=http://localhost:3000,https://cojollc.com
```

**Important:** After adding/updating environment variables, you need to **redeploy** the function for changes to take effect.

### 2. Verify Your Localhost Port

Check what port your Next.js app is running on. If it's not 3000, update `ALLOWED_ORIGINS`:

```env
ALLOWED_ORIGINS=http://localhost:3001,https://cojollc.com
```

### 3. Check Browser Console

Open your browser's Developer Tools (F12) and check:
- **Network tab**: Look at the actual request/response
- **Console tab**: Check for CORS errors
- **Response**: What's the actual error message?

### 4. Test the Endpoint Directly

Test the email service endpoint directly with curl:

```bash
curl -X POST https://your-vercel-url.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

This will show you the actual error response.

### 5. Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click **"Functions"** tab
3. Click on the function
4. View the logs to see what's happening

Look for:
- CORS errors
- Missing environment variables
- Any other errors

### 6. Verify Environment Variables

Make sure all required environment variables are set in Vercel:

- ✅ `RESEND_API_KEY`
- ✅ `FROM_EMAIL`
- ✅ `TO_EMAIL`
- ✅ `ALLOWED_ORIGINS` (should include your localhost URL)

### 7. Redeploy After Environment Variable Changes

**Important:** After adding/updating environment variables in Vercel:
1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**

Or push a new commit to trigger a redeploy.

## Common Issues

### Issue: 401 vs 403 Error

- **401 Unauthorized**: Usually means Vercel is blocking the request before it reaches your function
- **403 Forbidden**: Usually means your function is rejecting due to CORS

If you're getting 401, it might be:
- Vercel authentication/security settings
- Function not deployed correctly
- Wrong URL

### Issue: Origin Header Not Sent

Some browsers or fetch configurations don't send the `Origin` header. The updated code now also checks the `Referer` header as a fallback.

### Issue: Environment Variables Not Loading

Vercel environment variables are only available at runtime. Make sure:
- Variables are set for the correct environment (Production/Preview/Development)
- Function has been redeployed after adding variables

## Debugging Steps

1. **Check the actual error response:**
   ```javascript
   // In your ContactSection.tsx, add:
   const response = await fetch(endpoint, {...})
   const errorData = await response.json()
   console.log('Error:', errorData)
   ```

2. **Check what URL is being called:**
   ```javascript
   console.log('Calling:', endpoint)
   ```

3. **Verify the environment variable is loaded:**
   ```javascript
   console.log('Email service URL:', process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL)
   ```

4. **Check Vercel function logs** for detailed error messages

## Solution Checklist

- [ ] `ALLOWED_ORIGINS` is set in Vercel environment variables
- [ ] `ALLOWED_ORIGINS` includes `http://localhost:3000` (or your actual port)
- [ ] Environment variables are set for the correct environment (Production)
- [ ] Function has been redeployed after adding/updating environment variables
- [ ] The Vercel URL in `NEXT_PUBLIC_EMAIL_SERVICE_URL` is correct
- [ ] Browser console shows the actual error (not just 401)
- [ ] Vercel function logs show what's happening

## Still Not Working?

1. **Check Vercel Function Logs** - This is the most important step
2. **Test with curl** - Bypass the browser to see the actual response
3. **Verify the function is deployed** - Check that the endpoint exists
4. **Check Vercel project settings** - Make sure Root Directory is set to `email-service/`
