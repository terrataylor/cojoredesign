# Using the deployed Email Service from the UI app (local)

You said **only the email service** will be deployed to Vercel.

That means the UI app (this Next.js site) can run locally, and it will call the deployed email endpoint over HTTPS.

## 1) Deploy the email service

- Deploy the `email-service/` folder as its own Vercel project.
- Vercel will generate a URL like:

`https://<project-name>-<hash>.vercel.app`

Your endpoint will be:

`https://<project-name>-<hash>.vercel.app/api/contact`

## 2) Add the endpoint to the UI app env var

Create a file named `.env.local` in the UI app root (this folder) and add:

```env
NEXT_PUBLIC_EMAIL_SERVICE_URL=https://<project-name>-<hash>.vercel.app/api/contact
```

Then run:

```bash
npm run dev
```

Now when you submit the contact form at `http://localhost:3000`, it will POST to the Vercel email service.

## 3) CORS allowlist (important)

In the **email-service** Vercel project, set:

```
ALLOWED_ORIGINS=http://localhost:3000
```

If later you host the UI at `https://cojollc.com`, update to:

```
ALLOWED_ORIGINS=http://localhost:3000,https://cojollc.com
```

## Notes

- If `NEXT_PUBLIC_EMAIL_SERVICE_URL` is not set, the UI app falls back to calling `/api/contact` locally.
- The email service endpoint supports `OPTIONS` (CORS preflight) and `POST`.

