"use client";

import { useState, useRef, useCallback } from "react";

const isDev = process.env.NODE_ENV !== "production";
function devLog(...args) {
  if (isDev) console.log("[useCalculatorShare]", ...args);
}

function toTitleCase(slug = "") {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Is this a touch-capable mobile/tablet device?
 * macOS with Chrome/Safari returns false — we use clipboard-first for desktop.
 */
function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent) === false)
  );
}

async function writeClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return "clipboard";
    }
  } catch (e) {
    devLog("clipboard.writeText failed:", e?.message);
  }
  // Last resort — select a hidden input
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return "execCommand";
  } catch {}
  return "failed";
}

/**
 * useCalculatorShare({ calculator, getInputs, getResults })
 *
 * Returns: { shareStatus, shareUrl, handleShare, copyShareUrl }
 *
 * shareStatus:
 *   "idle"     — waiting for user to click
 *   "creating" — POSTing to /api/shares
 *   "ready"    — URL created and visible; share sheet closed or copy-first mode
 *   "copied"   — link successfully in clipboard
 *   "shared"   — navigator.share resolved on mobile
 *   "error"    — API call failed
 *
 * Strategy by platform:
 *   Mobile (iOS Safari, Chrome iOS, Android)
 *     → native share sheet via navigator.share
 *     → AbortError (user cancelled) → status "ready", URL stays visible
 *     → other error → clipboard fallback
 *
 *   Desktop (macOS Chrome, macOS Safari, Firefox, Windows Chrome)
 *     → skip native share entirely (macOS share sheet is unreliable for this use case)
 *     → copy link to clipboard immediately
 *     → show URL in a visible copyable field so user can paste anywhere
 */
export function useCalculatorShare({ calculator, getInputs, getResults }) {
  const [shareStatus, setShareStatus] = useState("idle");
  const [shareUrl, setShareUrl] = useState(null);
  const resetTimer = useRef(null);

  function scheduleReset(delay = 4000) {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      setShareStatus((s) => (s === "shared" || s === "copied" ? "ready" : s));
    }, delay);
  }

  const copyShareUrl = useCallback(async () => {
    if (!shareUrl) return;
    const result = await writeClipboard(shareUrl);
    devLog("Manual copy result:", result);
    setShareStatus("copied");
    scheduleReset(4000);
  }, [shareUrl]);

  const handleShare = useCallback(async () => {
    if (typeof window === "undefined") return;

    setShareStatus("creating");
    devLog("Share clicked. calculator:", calculator);

    // ── 1. Create the share row in Supabase ──────────────────
    let createdUrl = null;
    try {
      const inputs = getInputs?.() ?? {};
      const results = getResults?.() ?? {};
      devLog("Payload sizes — inputs:", Object.keys(inputs).length, "results:", Object.keys(results).length);

      const res = await fetch("/api/shares", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calculator, inputs, results }),
      });

      devLog("API status:", res.status);

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody?.error || `HTTP ${res.status}`);
      }

      const data = await res.json();
      devLog("API response:", { id: data.id, url: data.url, absoluteUrl: data.absoluteUrl });

      createdUrl =
        data.absoluteUrl?.trim() ||
        (data.url ? `${window.location.origin}${data.url}` : null);

      if (!createdUrl?.startsWith("http")) {
        throw new Error(`Bad share URL: "${createdUrl}"`);
      }

      devLog("Share URL:", createdUrl);
      setShareUrl(createdUrl);
    } catch (err) {
      console.error("[useCalculatorShare] create failed:", err?.message);
      setShareStatus("error");
      scheduleReset(6000);
      return;
    }

    // ── 2. Platform-specific share strategy ──────────────────
    const mobile = isMobileDevice();
    devLog("isMobileDevice:", mobile, "navigator.share:", !!navigator.share);

    if (mobile && typeof navigator.share === "function") {
      // Mobile: attempt native share sheet
      const calculatorName = toTitleCase(calculator);
      const sharePayload = {
        title: `${calculatorName} Results | BankDeMark`,
        // URL is embedded in text so apps that ignore `url` still get a tappable link
        text: `View my ${calculatorName} results on BankDeMark:\n${createdUrl}`,
        url: createdUrl,
      };

      devLog("Calling navigator.share:", { title: sharePayload.title, url: sharePayload.url });

      try {
        await navigator.share(sharePayload);
        devLog("navigator.share resolved");
        setShareStatus("shared");
        scheduleReset(4000);
      } catch (shareErr) {
        devLog("navigator.share threw:", shareErr?.name, shareErr?.message);
        if (shareErr?.name === "AbortError") {
          // User cancelled — keep URL visible via Copy Link
          setShareStatus("ready");
        } else {
          // Unexpected share failure — fall back to clipboard
          await writeClipboard(createdUrl);
          setShareStatus("copied");
          scheduleReset(4000);
        }
      }
    } else {
      // Desktop (macOS, Windows, Linux) or browser without native share:
      // Copy link to clipboard immediately and surface the URL visibly.
      // macOS share sheet is intentionally skipped — it doesn't reliably place
      // the URL into Messages, Mail, or other app composers.
      devLog("Desktop path — copying to clipboard");
      const result = await writeClipboard(createdUrl);
      devLog("Clipboard result:", result);
      setShareStatus("copied");
      scheduleReset(4000);
    }
  }, [calculator, getInputs, getResults]);

  return { shareStatus, shareUrl, handleShare, copyShareUrl };
}
