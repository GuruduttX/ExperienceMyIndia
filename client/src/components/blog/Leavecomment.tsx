"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  comment: string;
};

type FieldError = Partial<FormState & { consent: string }>;

const INITIAL: FormState = { name: "", email: "", comment: "" };

export default function LeaveComment() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [focused, setFocused] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    comment: false,
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FieldError>({});
  const [submitted, setSubmitted] = useState(false);

  const isFloating = (key: keyof FormState) =>
    focused[key] || values[key] !== "";

  const validate = (): FieldError => {
    const e: FieldError = {};
    if (!values.name.trim()) e.name = "Name is required.";
    if (!values.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      e.email = "Enter a valid email.";
    if (!values.comment.trim()) e.comment = "Comment cannot be empty.";
    if (!consent) e.consent = "Please accept before submitting.";
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // TODO: POST to /api/comments
    setSubmitted(true);
  };

  const field = (
    key: keyof FormState,
    label: string,
    type: "text" | "email" | "textarea",
    required = true,
  ) => (
    <div className="relative">
      {/* Floating label */}
      <label
        htmlFor={`comment-${key}`}
        className={[
          "absolute left-3.5 pointer-events-none font-medium transition-all duration-200 z-10",
          isFloating(key)
            ? "top-1.5 text-[10px] text-orange-500"
            : type === "textarea"
              ? "top-4 text-[13px] text-gray-400"
              : "top-1/2 -translate-y-1/2 text-[13px] text-gray-400",
        ].join(" ")}
      >
        {label}
        {required && <span className="text-orange-500 ml-0.5">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={`comment-${key}`}
          value={values[key]}
          rows={5}
          onFocus={() => setFocused((f) => ({ ...f, [key]: true }))}
          onBlur={() => setFocused((f) => ({ ...f, [key]: false }))}
          onChange={(e) => {
            setValues((v) => ({ ...v, [key]: e.target.value }));
            if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
          }}
          className={[
            "w-full pt-6 pb-3 px-3.5 rounded-xl text-[13.5px] text-gray-900 bg-gray-50 border outline-none transition-all duration-200 resize-none placeholder-transparent",
            errors[key]
              ? "border-red-300 focus:border-red-400 bg-red-50/20"
              : "border-gray-200 focus:border-orange-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.07)]",
          ].join(" ")}
        />
      ) : (
        <input
          id={`comment-${key}`}
          type={type}
          value={values[key]}
          onFocus={() => setFocused((f) => ({ ...f, [key]: true }))}
          onBlur={() => setFocused((f) => ({ ...f, [key]: false }))}
          onChange={(e) => {
            setValues((v) => ({ ...v, [key]: e.target.value }));
            if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
          }}
          className={[
            "w-full pt-5 pb-2 px-3.5 rounded-xl text-[13.5px] text-gray-900 bg-gray-50 border outline-none transition-all duration-200 placeholder-transparent",
            errors[key]
              ? "border-red-300 focus:border-red-400 bg-red-50/20"
              : "border-gray-200 focus:border-orange-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.07)]",
          ].join(" ")}
        />
      )}

      {errors[key] && (
        <p className="mt-1 text-[11px] text-red-500 pl-1 flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
            <circle
              cx="6"
              cy="6"
              r="5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M6 4v3M6 8.5v.01"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-7">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-500 mb-2">
            <span className="w-4 h-px bg-orange-400" />
            Join the conversation
          </span>
          <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 tracking-tight leading-tight">
            Leave a Comment
          </h2>
          <p className="text-[13px] text-gray-400 mt-1.5">
            Thoughts, questions, tips? We read every comment.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 px-6 py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-orange-500/15 border border-orange-400/30 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-5 h-5 text-orange-500"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10l4.5 4.5L16 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[16px] font-bold text-gray-900 mb-1">
              Comment submitted!
            </p>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs mx-auto">
              Your comment is under review and will appear shortly. Thank you
              for sharing!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setValues(INITIAL);
                setConsent(false);
              }}
              className="mt-5 text-[12px] font-medium text-orange-500 hover:text-orange-600 transition-colors"
            >
              Write another comment →
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field("name", "Your Name", "text")}
              {field("email", "Your Email", "email")}
            </div>

            {/* Comment textarea */}
            {field("comment", "Your comment", "textarea")}

            {/* Consent checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (errors.consent)
                        setErrors((er) => ({ ...er, consent: undefined }));
                    }}
                    className="sr-only"
                  />
                  {/* Custom checkbox */}
                  <div
                    className={[
                      "w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150",
                      consent
                        ? "bg-orange-500 border-orange-500"
                        : errors.consent
                          ? "border-red-400"
                          : "border-gray-300 group-hover:border-orange-400",
                    ].join(" ")}
                  >
                    {consent && (
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1.5 5l3 3 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[12.5px] text-gray-500 leading-relaxed">
                  I agree that my submitted data is being collected and stored.
                  For further details on handling user data, see our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1 pl-0.5">
                  <svg
                    className="w-3 h-3 shrink-0"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M6 4v3M6 8.5v.01"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  {errors.consent}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-2 mt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold text-[13px] w-full md:w-auto px-7 py-2 md:py-2.5 rounded-xl transition-all duration-150"
              >
                Post Comment
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="text-[11px] text-gray-400">
                Comments are moderated before publishing.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
