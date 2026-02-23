# Troubleshooting 404 Error on Vercel

## Common Causes

### 1. Root Directory Not Set Correctly

**In Vercel Dashboard:**
1. Go to your project → **Settings → General**
2. Scroll to **"Root Directory"**
3. Make sure it's set to: `email-service`
4. If it's not set, click **"Edit"** and set it to `email-service`
5. **Redeploy** after changing

### 2. Function Not Deployed

Check if the function is actually deployed:
1. Go to Vercel Dashboard → Your Project
2. Click **"Functions"** tab
3. You should see `api/contact.js` listed
4. If it's not there, the deployment might have failed

### 3. Wrong URL

Make sure you're using the correct endpoint:
- ✅ Correct: `https://your-project.vercel.app/api/contact`
- ❌ Wrong: `https://your-project.vercel.app/contact`
- ❌ Wrong: `https://your-project.vercel.app/api`

### 4. Build Configuration

The `vercel.json` file should now be in place. If you still get 404:

1. **Check Vercel Build Logs:**
   - Go to Deployments → Latest deployment
   - Check the build logs for errors
   - Look for "No Output Directory" or function-related errors

2. **Verify File Structure:**
   ```
   email-service/
   ├── api/
   │   └── contact.js    ← This should exist
   ├── lib/
   │   └── email.js
   ├── package.json
   └── vercel.json       ← Should now exist
   ```

## Quick Fixes

### Fix 1: Verify Root Directory

1. Vercel Dashboard → Settings → General
2. Root Directory: `email-service`
3. Save and redeploy

### Fix 2: Check Deployment Logs

1. Go to Deployments tab
2. Click on the latest deployment
3. Check the build logs
4. Look for any errors about functions not being found

### Fix 3: Test the Function Directly

Try accessing the function in Vercel dashboard:
1. Go to **Functions** tab
2. Click on `api/contact.js`
3. Check if it shows any errors
4. Try the "Invoke" button if available

### Fix 4: Verify the URL

Test with curl to see the actual response:

```bash
curl -X POST https://your-project.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
```

This will show you:
- If it's a 404 (function not found)
- If it's a different error (CORS, validation, etc.)

## Deployment Checklist

- [ ] Root Directory is set to `email-service` in Vercel
- [ ] `vercel.json` exists in `email-service/` folder
- [ ] `api/contact.js` exists and is committed to Git
- [ ] Code has been pushed to your Git repository
- [ ] Vercel project is connected to the correct repository
- [ ] Latest deployment completed successfully
- [ ] Functions tab shows `api/contact.js`
- [ ] Testing with correct URL: `/api/contact` (not just `/contact`)

## Still Getting 404?

1. **Check Vercel Build Logs** - Most important step
2. **Verify Root Directory** - Must be `email-service`
3. **Check Functions Tab** - Should show `api/contact.js`
4. **Test with curl** - See actual response
5. **Redeploy** - Sometimes a fresh deploy fixes issues

## Alternative: Check Function Runtime

If the function still doesn't work, Vercel might need explicit runtime configuration. The `vercel.json` I created should handle this, but if issues persist:

1. Check Vercel project settings
2. Verify Node.js version (should be 18+)
3. Check that `package.json` has correct dependencies
