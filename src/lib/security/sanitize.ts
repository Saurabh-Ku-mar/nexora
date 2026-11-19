const CONTROL_CHAR_REGEX = /[\u0000-\u001F\u007F]/g;

/**
 * Validates that an external URL uses http/https without embedded credentials.
 */
export function isSafeExternalUrl(rawUrl: string): boolean {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    if (parsed.username !== "" || parsed.password !== "") {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates that an internal navigation path is relative and cannot trigger open redirects.
 */
export function isSafeRelativePath(path: string): boolean {
  if (!path.startsWith("/")) {
    return false;
  }
  if (path.startsWith("//") || path.startsWith("/\\")) {
    return false;
  }
  return !CONTROL_CHAR_REGEX.test(path);
}

/**
 * Normalizes untrusted plain text input by removing control characters and trimming length.
 */
export function normalizePlainText(input: string, maxLength = 500): string {
  const cleaned = input.replace(CONTROL_CHAR_REGEX, "").trim();
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  return cleaned.slice(0, maxLength);
}
