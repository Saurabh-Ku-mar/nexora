import assert from "node:assert/strict";
import test from "node:test";
import {
  loginInputSchema,
  registerInputSchema,
  themePreferenceSchema,
  usernameSchema,
  validateInput,
} from "../src/lib/validation/auth.ts";

test("usernameSchema accepts valid lowercase alphanumeric and underscore handles", () => {
  const result = validateInput(usernameSchema, "alice_01");
  assert.equal(result.ok, true);
});

test("usernameSchema rejects short, uppercase-containing, or symbolic handles", () => {
  assert.equal(validateInput(usernameSchema, "ab").ok, false);
  assert.equal(validateInput(usernameSchema, "Alice!").ok, false);
  assert.equal(validateInput(usernameSchema, "user name").ok, false);
});

test("loginInputSchema enforces passphrase minimum length", () => {
  const shortPw = validateInput(loginInputSchema, {
    username: "alice_01",
    password: "short",
  });
  assert.equal(shortPw.ok, false);

  const valid = validateInput(loginInputSchema, {
    username: "alice_01",
    password: "correct-horse-battery-staple",
  });
  assert.equal(valid.ok, true);
});

test("registerInputSchema validates matching passphrases and acceptedTerms", () => {
  const mismatched = validateInput(registerInputSchema, {
    username: "bob_secure",
    password: "twelve-chars-passphrase",
    confirmPassword: "different-passphrase",
    email: "",
    acceptedTerms: true,
  });
  assert.equal(mismatched.ok, false);

  const valid = validateInput(registerInputSchema, {
    username: "bob_secure",
    password: "twelve-chars-passphrase",
    confirmPassword: "twelve-chars-passphrase",
    email: "",
    acceptedTerms: true,
  });
  assert.equal(valid.ok, true);
});

test("themePreferenceSchema permits only dark or light", () => {
  assert.equal(validateInput(themePreferenceSchema, "dark").ok, true);
  assert.equal(validateInput(themePreferenceSchema, "light").ok, true);
  assert.equal(validateInput(themePreferenceSchema, "neon").ok, false);
});
