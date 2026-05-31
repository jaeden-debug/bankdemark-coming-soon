/**
 * getSiteUrl()
 * Returns the canonical base URL for this deployment.
 * - Production:  NEXT_PUBLIC_SITE_URL (trimmed)
 * - Dev/fallback: http://localhost:3000
 *
 * Never ends with a trailing slash.
 */
export function getSiteUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) {
    const trimmed = env.trim().replace(/\/+$/, "");
    if (trimmed) return trimmed;
  }

  if (process.env.NODE_ENV === "production") {
    return "https://bankdemark.com";
  }

  return "http://localhost:3000";
}

/**
 * createAbsoluteUrl(path)
 * Joins the site base URL with a path.
 * Handles leading slash automatically.
 */
export function createAbsoluteUrl(path = "") {
  const base = getSiteUrl();
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalised}`;
}
