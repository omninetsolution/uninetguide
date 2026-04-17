// ─── Input Sanitization ───────────────────────────────────────────────────────
/** Strip HTML tags, dangerous characters, and trim whitespace. */
export function sanitizeInput(value: string, maxLength = 1000): string {
  return value
    .replace(/<[^>]*>/g, "")          // strip HTML tags
    .replace(/javascript:/gi, "")     // strip JS protocol
    .replace(/on\w+\s*=/gi, "")       // strip inline event handlers
    .replace(/[<>"'`\\]/g, "")        // strip shell/XSS characters
    .trim()
    .slice(0, maxLength);
}

// ─── Email Validation ─────────────────────────────────────────────────────────
const BLOCKED_DOMAINS = [
  "mailinator", "guerrillamail", "tempmail", "throwaway", "yopmail",
  "trashmail", "fakeinbox", "sharklasers", "spam4", "maildrop",
  "dispostable", "spamgourmet", "trashmail", "10minutemail", "getairmail",
];

/** Validate email format and block known disposable-email domains. */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) {
    return { valid: false, error: "Please enter a valid email address." };
  }
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  if (BLOCKED_DOMAINS.some((b) => domain.includes(b))) {
    return { valid: false, error: "Disposable email addresses are not accepted." };
  }
  return { valid: true };
}

// ─── Phone Validation ─────────────────────────────────────────────────────────
/** Validate US phone numbers (10 digits, optionally +1 prefix). */
export function validatePhone(phone: string): { valid: boolean; error?: string } {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 0) return { valid: true }; // optional field
  if (digits.length < 10 || digits.length > 11) {
    return { valid: false, error: "Please enter a valid 10-digit US phone number." };
  }
  if (digits.length === 11 && !digits.startsWith("1")) {
    return { valid: false, error: "Please enter a valid US phone number." };
  }
  return { valid: true };
}

// ─── Rate Limiting ────────────────────────────────────────────────────────────
const RATE_KEY = "ug_form_ts";

/**
 * Client-side rate limiter using localStorage.
 * Returns false (blocked) if more than `limit` submissions occurred
 * within the last `windowMs` milliseconds.
 */
export function checkRateLimit(limit = 5, windowMs = 60 * 60 * 1000): boolean {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    const now = Date.now();
    const timestamps: number[] = raw ? JSON.parse(raw) : [];
    const recent = timestamps.filter((t) => now - t < windowMs);
    if (recent.length >= limit) return false;
    recent.push(now);
    localStorage.setItem(RATE_KEY, JSON.stringify(recent));
    return true;
  } catch {
    return true; // fail open — never silently block a legitimate user
  }
}

/** Returns how many minutes remain until the rate-limit window resets. */
export function rateLimitMinutesLeft(windowMs = 60 * 60 * 1000): number {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    if (!raw) return 0;
    const timestamps: number[] = JSON.parse(raw);
    const now = Date.now();
    const oldest = timestamps.filter((t) => now - t < windowMs)[0];
    if (!oldest) return 0;
    return Math.ceil((oldest + windowMs - now) / 60000);
  } catch {
    return 0;
  }
}

// ─── Honeypot ─────────────────────────────────────────────────────────────────
/** Returns true if the hidden honeypot field was filled (bot detected). */
export function isHoneypotTriggered(honeypotValue: string): boolean {
  return honeypotValue.trim().length > 0;
}
