import assert from "node:assert/strict";
import test from "node:test";
import {
  isSafeExternalUrl,
  isSafeRelativePath,
  normalizePlainText,
} from "../src/lib/security/sanitize.ts";
import { SECURITY_HEADERS } from "../src/lib/security/headers.ts";
import { SITE_CONFIG } from "../src/lib/config/site.ts";

test("isSafeExternalUrl allows clean http/https URLs and rejects javascript or credentialed URLs", () => {
  assert.equal(isSafeExternalUrl("https://github.com/Saurabh-Ku-mar/nexora"), true);
  assert.equal(isSafeExternalUrl("javascript:alert(1)"), false);
  assert.equal(isSafeExternalUrl("data:text/html,<script>"), false);
  assert.equal(isSafeExternalUrl("https://user:pass@example.com"), false);
});

test("isSafeRelativePath prevents open redirects", () => {
  assert.equal(isSafeRelativePath("/about"), true);
  assert.equal(isSafeRelativePath("//evil.example"), false);
  assert.equal(isSafeRelativePath("https://evil.example"), false);
  assert.equal(isSafeRelativePath("/chat\n"), false);
});

test("normalizePlainText strips control characters and caps length", () => {
  const cleaned = normalizePlainText("  hello\u0000\u0007world  ", 10);
  assert.equal(cleaned, "helloworld");

  const truncated = normalizePlainText("abcdefghij", 5);
  assert.equal(truncated, "abcde");
});

test("SECURITY_HEADERS contains essential hardening directives", () => {
  const keys = SECURITY_HEADERS.map((h) => h.key);
  assert.ok(keys.includes("X-Content-Type-Options"));
  assert.ok(keys.includes("X-Frame-Options"));
  assert.ok(keys.includes("Referrer-Policy"));
});

test("SITE_CONFIG preserves brand and founder identity", () => {
  assert.equal(SITE_CONFIG.name, "NEXORA");
  assert.equal(SITE_CONFIG.slogan, "Private conversations. No phone number required.");
  assert.equal(SITE_CONFIG.founderName, "Saurabh Kumar");
  assert.equal(SITE_CONFIG.founderCredit, "NEXORA — Founded by Saurabh Kumar");
});
