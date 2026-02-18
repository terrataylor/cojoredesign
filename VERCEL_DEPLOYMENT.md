# Vercel Deployment Guide

## Prerequisites

1. **Resend Account Setup**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from Settings → API Keys
   - Add and verify your domain (cojollc.com)

2. **GitHub/GitLab/Bitbucket Repository**
   - Push your code to a Git repository
   - Repository should be accessible to Vercel

## Step-by-Step Deployment

### Step 1: Prepare Your Code

1. Ensure `.env.example` is in your repository (for reference)
2. Make sure `.env.local` is in `.gitignore` (should be by default)
3. Commit and push all changes

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (use GitHub/GitLab/Bitbucket)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables

1. In the project settings, go to **Settings → Environment Variables**
2. Add the following variables:

   **For Production:**
   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxx
   FROM_EMAIL = contactme@cojollc.com
   TO_EMAIL = CoJo.dreamhomes@gmail.com
   ```

   **For Preview (optional):**
   - Same variables, or use test values

   **For Development (optional):**
   - Same variables, or use test values

3. Select the environments (Production, Preview, Development)
4. Click "Save"

### Step 4: Deploy

1. Click "Deploy" button
2. Wait for build to complete (usually 1-3 minutes)
3. You'll get a Vercel URL like: `your-project.vercel.app`

### Step 5: Configure Custom Domain (cojollc.com)

1. Go to **Settings → Domains**
2. Click "Add Domain"
3. Enter: `cojollc.com`
4. Vercel will provide DNS records to add:

   **A Record:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **CNAME Record:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Add these records to your domain's DNS settings
6. Wait for DNS propagation (5-60 minutes)
7. Vercel will automatically configure SSL (HTTPS)

### Step 6: Verify Email Domain in Resend

1. Go to Resend Dashboard → Domains
2. Click "Add Domain"
3. Enter: `cojollc.com`
4. Resend will provide DNS records:

   **SPF Record:**
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.resend.com ~all
   ```

   **DKIM Record:**
   ```
   Type: TXT
   Name: _resend._domainkey
   Value: (provided by Resend)
   ```

   **DMARC Record (optional but recommended):**
   ```
   Type: TXT
   Name: _dmarc
   Value: v=DMARC1; p=none; rua=mailto:dmarc@cojollc.com
   ```

5. Add these records to your DNS
6. Wait for verification (usually 5-60 minutes)
7. Once verified, you can send from contactme@cojollc.com

## Accessing Your Application

### Local Development:
- **URL**: `http://localhost:3000`
- **Setup**: 
  1. Create `.env.local` with your variables
  2. Run `npm install`
  3. Run `npm run dev`

### Production (Vercel):
- **URL**: `https://cojollc.com` (after domain setup)
- **Alternative**: `https://your-project.vercel.app` (always available)

## Testing

### Test Locally:
1. Create `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   FROM_EMAIL=contactme@cojollc.com
   TO_EMAIL=CoJo.dreamhomes@gmail.com
   ```

2. Run `npm run dev`
3. Navigate to `http://localhost:3000`
4. Submit contact form
5. Check email delivery

### Test Production:
1. Navigate to `https://cojollc.com` (or your Vercel URL)
2. Submit contact form
3. Check email delivery
4. Verify sender shows as contactme@cojollc.com

## Troubleshooting

### Email Not Sending:
- ✅ Check environment variables in Vercel dashboard
- ✅ Verify Resend API key is correct
- ✅ Check Resend dashboard for errors
- ✅ Verify domain is verified in Resend
- ✅ Check Vercel function logs (Settings → Functions)

### Domain Not Working:
- ✅ Verify DNS records are correct
- ✅ Wait for DNS propagation (can take up to 48 hours)
- ✅ Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- ✅ Verify SSL certificate is active (should be automatic)

### Build Errors:
- ✅ Check Vercel build logs
- ✅ Ensure all dependencies are in `package.json`
- ✅ Verify Node.js version (Vercel auto-detects)

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_xxxxxxxxxxxxx` |
| `FROM_EMAIL` | Sender email address | `contactme@cojollc.com` |
| `TO_EMAIL` | Recipient email address | `CoJo.dreamhomes@gmail.com` |

## Security Best Practices

1. ✅ Never commit `.env.local` to Git
2. ✅ Use different API keys for development/production
3. ✅ Rotate API keys periodically
4. ✅ Monitor Resend dashboard for unusual activity
5. ✅ Enable rate limiting (can be added via middleware)

## Monitoring

### Vercel:
- **Analytics**: Settings → Analytics
- **Logs**: Settings → Functions → View Logs
- **Deployments**: Deployments tab

### Resend:
- **Dashboard**: [resend.com/emails](https://resend.com/emails)
- **API Usage**: Settings → API Keys
- **Domain Status**: Domains tab

## Cost

- **Vercel**: Free tier includes:
  - 100GB bandwidth/month
  - Unlimited requests
  - Automatic SSL
  - Custom domains

- **Resend**: Free tier includes:
  - 3,000 emails/month
  - 100 emails/day
  - Custom domains
  - API access

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Configure custom domain
3. ✅ Set up Resend domain
4. ✅ Test email sending
5. ✅ Monitor usage and performance
