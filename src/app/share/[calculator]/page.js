/**
 * /share/[calculator] — LEGACY ROUTE
 *
 * This was the original URL-encoded share system. It is no longer used
 * for new shares. All new shares go through /s/[id] (database-backed).
 *
 * This page is kept to avoid 404s on any links already distributed,
 * and redirects users to the live calculator.
 */

import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    robots: { index: false, follow: false },
    title: "Legacy Share Link | BankDeMark",
  };
}

export default async function LegacySharePage({ params }) {
  const { calculator } = await params;
  // Redirect directly to the live calculator — legacy encoded data is discarded
  redirect(`/calculators/${calculator}`);
}
