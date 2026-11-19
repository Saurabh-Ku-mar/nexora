import { z } from "zod";

export const usernameSchema = z
  .string()
  .trim()
  .min(3, "Username must be at least 3 characters.")
  .max(32, "Username must be at most 32 characters.")
  .regex(
    /^[a-z0-9_]+$/,
    "Username may only contain lowercase letters, numbers, and underscores.",
  );

export const passwordSchema = z
  .string()
  .min(12, "Passphrase must be at least 12 characters.")
  .max(128, "Passphrase must be at most 128 characters.");

export const optionalEmailSchema = z
  .string()
  .trim()
  .email("Enter a valid email address.")
  .optional()
  .or(z.literal(""));

export const loginInputSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

export const registerInputSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    email: optionalEmailSchema,
    acceptedTerms: z.literal(true, {
      error: "You must accept the Terms of Service and Privacy Policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passphrases do not match.",
    path: ["confirmPassword"],
  });

export const themePreferenceSchema = z.enum(["dark", "light"]);

export type LoginInput = z.infer<typeof loginInputSchema>;
export type RegisterInput = z.infer<typeof registerInputSchema>;

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; fieldErrors: Record<string, string[]> };

export function validateInput<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  payload: unknown,
): ValidationResult<z.infer<TSchema>> {
  const result = schema.safeParse(payload);
  if (result.success) {
    return { ok: true, data: result.data };
  }

  const fieldErrors: Record<string, string[]> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.length > 0 ? issue.path.join(".") : "_root";
    const list = fieldErrors[key] ?? [];
    list.push(issue.message);
    fieldErrors[key] = list;
  }

  return { ok: false, fieldErrors };
}
