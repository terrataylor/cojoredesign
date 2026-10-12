# Email Service Env Vars (for Vercel)

Add these environment variables in the **Vercel Project** you deploy from `email-service/`:

## Required

- **`RESEND_API_KEY`**: Resend API key (looks like `re_...`)
- **`FROM_EMAIL`**: `contactme@cojollc.com` (must be verified in Resend)
- **`TO_EMAIL`**: the inbox that receives the form submissions (ex: `CoJo.dreamhomes@gmail.com`)

## MyLa inquiry forms (`/api/myla`)

- **`MYLA_STAYS_INQUIRY_TO`**: inbox(es) for MyLa Stays inquiries (`type: "stays"`). Comma-separate multiple addresses.
- **`MYLA_TRANSPORT_INQUIRY_TO`**: inbox(es) for MyLa Transport interest (`type: "transport"`). Comma-separate multiple addresses.
- **`MYLA_FROM_NAME`** (optional): sender display name for MyLa emails (defaults to `MyLa`).

If the recipient variable for a form type is missing, `/api/myla` returns a 500 error for that type. The website must also include the MyLa site's origin in `ALLOWED_ORIGINS`.

The website reads the endpoint URL from **`NEXT_PUBLIC_MYLA_FORM_URL`** (set in the website's Vercel project, e.g. `https://<email-service-host>/api/myla`).

## Optional

- **`FROM_NAME`**: Display name shown in recipient's inbox (defaults to `COJOLLC`)
  - This is the name that appears instead of just the email address
  - Example: `COJOLLC` or `CoJo LLC` or `Courtney Johnson`
  
- **`ALLOWED_ORIGINS`**: comma-separated list of allowed browser origins, for CORS and basic abuse prevention.

Example:

```
FROM_NAME=COJOLLC
ALLOWED_ORIGINS=http://localhost:3000,https://cojollc.com
```

Notes:
- When you're testing locally, your UI origin is usually `http://localhost:3000`.
- If/when you publish the UI at `https://cojollc.com`, add it here too.
- The `FROM_NAME` will appear as the sender name in email clients (e.g., "COJOLLC" instead of just "contactme@cojollc.com").

