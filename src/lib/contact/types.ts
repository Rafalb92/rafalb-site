/** Shared by the server action and the client form. No zod here — keeps it out of the client bundle. */

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactField = keyof ContactFormValues;

/** Error codes, not messages — the client translates them through the dictionary. */
export type ContactFieldError =
  | "required"
  | "invalidEmail"
  | "tooShort"
  | "tooLong";

export type ContactFieldErrors = Partial<
  Record<ContactField, ContactFieldError>
>;

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "invalid";
      values: ContactFormValues;
      fieldErrors: ContactFieldErrors;
    }
  | { status: "error"; values: ContactFormValues };

export const INITIAL_CONTACT_STATE: ContactFormState = { status: "idle" };

/**
 * Honeypot field name. Deliberately meaningless: names like "company" or "website"
 * get filled by browser autofill, which would silently drop real messages.
 */
export const HONEYPOT_FIELD = "_gotcha";