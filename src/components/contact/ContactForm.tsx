"use client";

import { useActionState } from "react";
import { LuCheck } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button-styles";
import { FormField, inputStyles } from "@/components/ui/FormField";
import { sendContactMessage } from "@/lib/contact/send-contact-message";
import {
  HONEYPOT_FIELD,
  INITIAL_CONTACT_STATE,
  type ContactFieldError,
} from "@/lib/contact/types";
import { useDictionary } from "@/lib/i18n/LocaleProvider";


export function ContactForm({ onClose }: { onClose: () => void }) {
  const { contact } = useDictionary();
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    INITIAL_CONTACT_STATE,
  );

  if (state.status === "success") {
    return (
      <div role="status" className="space-y-4 py-4 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-accent/40 text-accent">
          <LuCheck aria-hidden="true" className="size-6" />
        </span>
        <div className="space-y-1">
          <p className="text-lg font-semibold text-fg">
            {contact.success.title}
          </p>
          <p className="text-sm text-fg-muted">{contact.success.body}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={buttonStyles("secondary")}
        >
          {contact.success.close}
        </button>
      </div>
    );
  }

  // React resets the form after every action — returned values become the new defaults,
  // so a failed submit never wipes what the visitor typed.
  const values = "values" in state ? state.values : undefined;
  const fieldErrors = state.status === "invalid" ? state.fieldErrors : {};
  const errorText = (code?: ContactFieldError) =>
    code ? contact.errors[code] : undefined;

  return (
    <form action={formAction} noValidate className="space-y-4">
      <FormField
        label={contact.fields.name}
        error={errorText(fieldErrors.name)}
      >
        {(control) => (
          <input
            {...control}
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={values?.name}
            placeholder={contact.placeholders.name}
            className={inputStyles()}
          />
        )}
      </FormField>

      <FormField
        label={contact.fields.email}
        error={errorText(fieldErrors.email)}
      >
        {(control) => (
          <input
            {...control}
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values?.email}
            placeholder={contact.placeholders.email}
            className={inputStyles()}
          />
        )}
      </FormField>

      <FormField
        label={contact.fields.message}
        error={errorText(fieldErrors.message)}
      >
        {(control) => (
          <textarea
            {...control}
            name="message"
            rows={5}
            defaultValue={values?.message}
            placeholder={contact.placeholders.message}
            className={inputStyles("resize-none")}
          />
        )}
      </FormField>

      {/* Honeypot — off-screen and hidden from assistive tech; only bots fill it. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] size-px overflow-hidden"
      >
        <input
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-danger">
          {contact.errors.sendFailed}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={buttonStyles("primary", "w-full justify-center")}
      >
        {isPending ? contact.sending : contact.send}
      </button>
    </form>
  );
}
