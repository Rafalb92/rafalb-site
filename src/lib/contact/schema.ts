import { z } from "zod";
import type { ContactFormValues } from "./types";

export const contactSchema: z.ZodType<ContactFormValues> = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "required" })
    .max(100, { error: "tooLong" }),
  email: z
    .string()
    .trim()
    .min(1, { error: "required" })
    .pipe(z.email({ error: "invalidEmail" })),
  message: z
    .string()
    .trim()
    .min(1, { error: "required" })
    .min(10, { error: "tooShort" })
    .max(5000, { error: "tooLong" }),
});
