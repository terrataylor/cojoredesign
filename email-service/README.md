# CoJo LLC Email Service (deploy this folder to Vercel)

This is a **standalone email service** that exposes:

- **POST** `https://<your-vercel-url>/api/contact`

It sends email using **Resend**.

## Quick Start

### Run Locally

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file** (see `ENV.md` for variables)

4. **Start server:**
   ```bash
   vercel dev
   ```
   
   Or:
   ```bash
   npm start
   ```

   Server runs on `http://localhost:3000/api/contact`

   See `LOCAL_DEV.md` for detailed local development instructions.

### Deploy to Vercel

1. Create a new Vercel project.
2. When importing, set **Root Directory** to `email-service/`.
3. Add environment variables (see `ENV.md`).
4. Deploy.

After the first deploy, Vercel will give you a URL like:

`https://cojollc-email-service-xxxx.vercel.app`

Your endpoint will be:

`https://cojollc-email-service-xxxx.vercel.app/api/contact`

## Connect the UI app (local or future production)

In the UI app, set:

`NEXT_PUBLIC_EMAIL_SERVICE_URL=https://<your-vercel-url>/api/contact`

The UI will POST the contact form there.

## Resend setup (required to send from contactme@cojollc.com)

In Resend:
- Add domain `cojollc.com`
- Add the DNS records (SPF/DKIM) Resend provides
- Verify the domain
- Use `FROM_EMAIL=contactme@cojollc.com`

Until the domain is verified, you can test with Resend's default sender (Resend shows options in their dashboard).

