/**
 * Applies CORS headers and origin checks.
 * Returns true when the response has already been sent (preflight or blocked origin).
 *
 * ALLOWED_ORIGINS: comma-separated list of allowed browser origins.
 * Defaults to localhost only.
 */
function handleCors(req, res) {
  const origin = req.headers.origin || req.headers.referer?.split('/').slice(0, 3).join('/')
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', 'false')

  const isOriginAllowed = origin && allowedOrigins.includes(origin)
  if (isOriginAllowed) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return true
  }

  if (origin && !isOriginAllowed) {
    console.log('Origin not allowed:', origin, 'Allowed:', allowedOrigins)
    res.status(403).json({
      error: 'Origin not allowed',
      received: origin,
      allowed: allowedOrigins,
    })
    return true
  }

  return false
}

function parseJsonBody(req) {
  const body = req.body
  if (typeof body !== 'string') return body
  try {
    return JSON.parse(body)
  } catch {
    return undefined
  }
}

module.exports = { handleCors, parseJsonBody }
