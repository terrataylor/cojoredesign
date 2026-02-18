# Deploy Email Service to Vercel

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (free)
2. **GitHub/GitLab/Bitbucket Account**: Your code needs to be in a Git repository
3. **Resend API Key**: Get from [resend.com](https://resend.com)

## Step-by-Step Deployment

### Step 1: Push Code to Git Repository

Make sure your `email-service/` folder is committed and pushed to your Git repository:

```bash
# If not already done
git add email-service/
git commit -m "Add email service"
git push
```

### Step 2: Create New Vercel Project

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New Project"** or **"New Project"**
3. **Import your Git repository** (GitHub/GitLab/Bitbucket)
4. Select the repository that contains your `email-service/` folder

### Step 3: Configure Project Settings

**IMPORTANT**: You need to set the **Root Directory** to `email-service/`:

1. In the project configuration, look for **"Root Directory"** or **"Configure Project"**
2. Click **"Edit"** or **"Override"**
3. Set Root Directory to: `email-service`
4. Click **"Continue"**

### Step 4: Add Environment Variables

Before deploying, add your environment variables:

1. In the project setup, go to **"Environment Variables"** section
2. Click **"Add"** for each variable:

   **Required Variables:**
   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxx
   FROM_EMAIL = contactme@cojollc.com
   TO_EMAIL = CoJo.dreamhomes@gmail.com
   ```

   **Optional Variables:**
   ```
   FROM_NAME = COJOLLC
   ALLOWED_ORIGINS = http://localhost:3000,https://cojollc.com
   ```

3. For each variable, select which environments:
   - ✅ **Production**
   - ✅ **Preview** (optional, for testing)
   - ✅ **Development** (optional, for local testing)

### Step 5: Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 1-2 minutes)
3. Vercel will show you the deployment URL

### Step 6: Get Your Email Service URL

After deployment, Vercel will give you a URL like:

```
https://your-project-name-xxxx.vercel.app
```

Your email service endpoint will be:

```
https://your-project-name-xxxx.vercel.app/api/contact
```

**Save this URL!** You'll need it for your UI app.

## Connect Your UI App

### Update UI App Environment Variable

In your **UI app** (the main Next.js app), create or update `.env.local`:

```env
NEXT_PUBLIC_EMAIL_SERVICE_URL=https://your-project-name-xxxx.vercel.app/api/contact
```

Replace `your-project-name-xxxx.vercel.app` with your actual Vercel URL.

### Test the Connection

1. Run your UI app locally: `npm run dev`
2. Submit the contact form
3. Check that:
   - You receive the notification email
   - The sender receives the confirmation email

## Troubleshooting

### Build Fails

- **Check Root Directory**: Make sure it's set to `email-service/`
- **Check Node.js Version**: Vercel should auto-detect, but ensure it's Node 18+
- **Check Dependencies**: Make sure `package.json` has all required dependencies

### Emails Not Sending

- **Check Environment Variables**: Verify all variables are set correctly in Vercel
- **Check Resend API Key**: Make sure it's valid and active
- **Check Domain Verification**: If using `contactme@cojollc.com`, ensure domain is verified in Resend
- **Check Vercel Logs**: Go to your project → Functions → View logs for errors

### CORS Errors

- **Check ALLOWED_ORIGINS**: Make sure your UI app's origin is in the list
- **Add Production URL**: If deploying UI to production, add `https://cojollc.com` to `ALLOWED_ORIGINS`

## Updating the Deployment

After making changes to the email service:

1. **Commit and push** your changes:
   ```bash
   git add email-service/
   git commit -m "Update email service"
   git push
   ```

2. **Vercel will automatically redeploy** (if auto-deploy is enabled)
   - Or manually trigger: Vercel Dashboard → Deployments → Redeploy

3. **No need to update environment variables** unless you're changing them

## Custom Domain (Optional)

If you want a custom domain for the email service:

1. Go to Vercel Project → **Settings → Domains**
2. Click **"Add Domain"**
3. Enter domain (e.g., `email.cojollc.com` or `api.cojollc.com`)
4. Add the DNS records Vercel provides to your domain registrar
5. Wait for DNS propagation (5-60 minutes)
6. Update `NEXT_PUBLIC_EMAIL_SERVICE_URL` in your UI app

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `RESEND_API_KEY` | ✅ Yes | Resend API key | `re_xxxxxxxxxxxxx` |
| `FROM_EMAIL` | ✅ Yes | Sender email address | `contactme@cojollc.com` |
| `TO_EMAIL` | ✅ Yes | Recipient email address | `CoJo.dreamhomes@gmail.com` |
| `FROM_NAME` | ❌ No | Display name (defaults to "COJOLLC") | `COJOLLC` |
| `ALLOWED_ORIGINS` | ❌ No | CORS allowed origins | `http://localhost:3000,https://cojollc.com` |

## Quick Checklist

- [ ] Code pushed to Git repository
- [ ] Created new Vercel project
- [ ] Set Root Directory to `email-service/`
- [ ] Added all environment variables
- [ ] Deployed successfully
- [ ] Got the Vercel URL
- [ ] Updated UI app's `.env.local` with the email service URL
- [ ] Tested email sending from UI app
- [ ] Verified both notification and confirmation emails are received

## Next Steps

1. **Test locally first**: Make sure everything works with `vercel dev`
2. **Deploy to Vercel**: Follow steps above
3. **Update UI app**: Point it to the Vercel URL
4. **Test in production**: Submit form and verify emails
5. **Monitor**: Check Vercel logs and Resend dashboard for any issues

---

**Need Help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Resend Docs: [resend.com/docs](https://resend.com/docs)
- Check Vercel deployment logs for specific errors
