import { mkdir, readFile, appendFile } from "fs/promises";
import path from "path";

const rateLimitMap = new Map();

const DISPOSABLE_DOMAINS = new Set([
  "10minutemail.com",
  "tempmail.com",
  "guerrillamail.com",
  "mailinator.com",
  "yopmail.com",
  "trashmail.com",
]);

function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxAttempts = 5;

  const record = rateLimitMap.get(ip) || { count: 0, start: now };

  if (now - record.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  record.count += 1;
  rateLimitMap.set(ip, record);

  return record.count > maxAttempts;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const cleanEmail = normalizeEmail(body.email);
    const website = String(body.website || "").trim();
    const startedAt = Number(body.startedAt || 0);
    const ip = getClientIp(request);

    if (website) {
      return Response.json({ ok: true });
    }

    if (startedAt && Date.now() - startedAt < 2500) {
      return Response.json(
        { error: "Please wait a moment before submitting." },
        { status: 429 }
      );
    }

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return Response.json({ error: "Enter a valid email." }, { status: 400 });
    }

    const domain = cleanEmail.split("@")[1];

    if (DISPOSABLE_DOMAINS.has(domain)) {
      return Response.json(
        { error: "Please use a permanent email address." },
        { status: 400 }
      );
    }

    const dir = path.join(process.cwd(), "data");
    const file = path.join(dir, "newsletter-signups.jsonl");

    await mkdir(dir, { recursive: true });

    let existing = "";
    try {
      existing = await readFile(file, "utf8");
    } catch {}

    const alreadyJoined = existing
      .split("\n")
      .filter(Boolean)
      .some((line) => {
        try {
          return JSON.parse(line).email === cleanEmail;
        } catch {
          return false;
        }
      });

    if (alreadyJoined) {
      return Response.json({ ok: true, alreadyJoined: true });
    }

    await appendFile(
      file,
      JSON.stringify({
        email: cleanEmail,
        source: body.source || "newsletter",
        ip,
        userAgent: request.headers.get("user-agent") || "",
        createdAt: new Date().toISOString(),
      }) + "\n"
    );

    return Response.json({ ok: true, alreadyJoined: false });
  } catch {
    return Response.json({ error: "Could not save email." }, { status: 500 });
  }
}
