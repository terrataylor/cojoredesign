# Quick Start: Email Setup

## 🚀 Quick Setup (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

This will install the `resend` package automatically.

### 2. Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up (free)
2. Navigate to **API Keys** in dashboard
3. Click **Create API Key**
4. Copy your API key (starts with `re_`)

### 3. Create `.env.local` File

Create a file named `.env.local` in the root directory:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=contactme@cojollc.com
TO_EMAIL=CoJo.dreamhomes@gmail.com
```

**For Testing (Before Domain Setup):**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=CoJo.dreamhomes@gmail.com
```

### 4. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000`, submit the contact form, and check your email!

## 📧 Setting Up Custom Domain (contactme@cojollc.com)

### Step 1: Add Domain to Resend

1. Go to Resend Dashboard → **Domains**
2. Click **Add Domain**
3. Enter: `cojollc.com`
4. Resend will show DNS records to add

### Step 2: Add DNS Records

Add these to your domain's DNS settings (wherever you manage DNS):

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
Value: (provided by Resend - unique for your domain)
```

**DMARC Record (Optional):**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@cojollc.com
```

### Step 3: Wait for Verification

- DNS propagation: 5-60 minutes
- Resend will verify automatically
- Check status in Resend dashboard

### Step 4: Update Environment Variable

Once verified, update `.env.local`:
```env
FROM_EMAIL=contactme@cojollc.com
```

## 🚢 Deploy to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Add email functionality"
git push
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your repository
4. Vercel auto-detects Next.js

### 3. Add Environment Variables

In Vercel project settings → **Environment Variables**, add:

```
RESEND_API_KEY = re_xxxxxxxxxxxxx
FROM_EMAIL = contactme@cojollc.com
TO_EMAIL = CoJo.dreamhomes@gmail.com
```

Select: **Production**, **Preview**, **Development**

### 4. Deploy

Click **Deploy** and wait ~2 minutes!

### 5. Configure Custom Domain

1. Vercel Settings → **Domains**
2. Add domain: `cojollc.com`
3. Add DNS records (A and CNAME) provided by Vercel
4. Wait for SSL (automatic, ~5 minutes)

## ✅ Testing

### Local:
- URL: `http://localhost:3000`
- Submit form → Check email inbox

### Production:
- URL: `https://cojollc.com` (or `https://your-project.vercel.app`)
- Submit form → Check email inbox
- Verify sender shows as `contactme@cojollc.com`

## 📋 Checklist

- [ ] Installed dependencies (`npm install`)
- [ ] Created Resend account
- [ ] Got API key
- [ ] Created `.env.local` file
- [ ] Tested locally
- [ ] Added domain to Resend
- [ ] Added DNS records
- [ ] Domain verified in Resend
- [ ] Pushed code to GitHub
- [ ] Connected to Vercel
- [ ] Added environment variables in Vercel
- [ ] Deployed to Vercel
- [ ] Configured custom domain in Vercel
- [ ] Tested production email sending

## 🆘 Troubleshooting

**Email not sending?**
- Check `.env.local` exists and has correct values
- Verify API key is correct
- Check Resend dashboard for errors
- Look at Vercel function logs

**Domain not verified?**
- Wait longer (up to 60 minutes)
- Double-check DNS records
- Verify records with: [whatsmydns.net](https://www.whatsmydns.net)

**Build errors?**
- Run `npm install` again
- Check all dependencies in `package.json`
- Verify Node.js version

## 📚 Full Documentation

- **Implementation Details**: See `EMAIL_IMPLEMENTATION.md`
- **Vercel Deployment**: See `VERCEL_DEPLOYMENT.md`
- **General Setup**: See `SETUP.md`

## 💰 Cost

- **Resend**: Free (3,000 emails/month)
- **Vercel**: Free tier sufficient
- **Total**: $0/month for typical usage
