"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "./schema";
import {
  type ContactFieldError,
  type ContactFieldErrors,
  type ContactFormState,
  type ContactFormValues,
  HONEYPOT_FIELD,
} from "./types";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function readValues(formData: FormData): ContactFormValues {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };

  return { name: read("name"), email: read("email"), message: read("message") };
}

function toFieldErrors(
  error: z.ZodError<ContactFormValues>,
): ContactFieldErrors {
  const { fieldErrors } = z.flattenError(error);
  // Schema messages are our error codes; the first one per field is enough.
  const first = (codes?: string[]) =>
    codes?.[0] as ContactFieldError | undefined;

  return {
    name: first(fieldErrors.name),
    email: first(fieldErrors.email),
    message: first(fieldErrors.message),
  };
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: humans never see this field. Bots that fill it get a fake success.
  // Honeypot: humans never see this field. Bots that fill it get a fake success.
  if (formData.get(HONEYPOT_FIELD)) {
    console.warn("[contact] Honeypot field filled — message dropped.");
    return { status: "success" };
  }

  const values = readValues(formData);
  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      status: "invalid",
      values,
      fieldErrors: toFieldErrors(result.error),
    };
  }

  const { name, email, message } = result.data;

  try {
    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const { error } = await resend.emails.send({
      from: requireEnv("CONTACT_FROM_EMAIL"),
      to: requireEnv("CONTACT_TO_EMAIL"),
      replyTo: email,
      subject: `Portfolio — message from ${name}`,
      text: `${message}\n\n—\n${name} <${email}>`,
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    // Return the values so the visitor doesn't lose what they typed.
    return { status: "error", values };
  }

  return { status: "success" };
}
