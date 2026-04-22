"use client";

import { useState, FormEvent } from "react";
import {
  FormStateType,
  FIELDS,
  INITIAL_VALUES,
  INITIAL_FOCUSED,
  validateEnquiry,
} from "@/utils/Enquiryformutils";

export default function MobileEnquiryForm() {
  const [values, setValues] = useState<FormStateType>(INITIAL_VALUES);
  const [focused, setFocused] = useState(INITIAL_FOCUSED);
  const [errors, setErrors] = useState<Partial<FormStateType>>({});
  const [submitted, setSubmitted] = useState(false);

  const isFloating = (key: keyof FormStateType) =>
    focused[key] || values[key] !== "";

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateEnquiry(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // TODO: await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(values) });
    setSubmitted(true);
  };

  // ── Shown only on mobile + tablet, hidden on lg+ ─────────────────────────────
  return (
    <section className="block lg:hidden bg-white px-4 pt-2 pb-8">
      <div className="max-w-2xl mx-auto">
        {/* Card wrapper */}
        <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Orange accent bar at top */}
          <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-400" />

          <div className="px-5 py-6">
            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-orange-500 mb-2">
                <span className="w-3 h-px bg-orange-400" />
                Free Consultation
              </span>
              <h2 className="text-[20px] font-bold text-gray-900 leading-snug tracking-tight">
                Plan your <span className="text-orange-500">perfect trip</span>
              </h2>
              <p className="text-[13px] text-gray-400 mt-1 leading-relaxed">
                Drop your details and our travel expert will call you back
                within 24 hours.
              </p>
            </div>

            {/* Success state */}
            {submitted ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-4">
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
                  We&apos;ll be in touch!
                </p>
                <p className="text-[13px] text-gray-400 leading-relaxed max-w-[240px]">
                  Our travel expert will call you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setValues(INITIAL_VALUES);
                  }}
                  className="mt-5 text-[12px] font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Submit another enquiry →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
              >
                {FIELDS.map(({ key, label, type, required }) => (
                  <div key={key} className="relative">
                    {/* Floating label */}
                    <label
                      htmlFor={`mobile-${key}`}
                      className={[
                        "absolute left-3.5 pointer-events-none font-medium transition-all duration-200 origin-top-left z-10",
                        isFloating(key)
                          ? "top-1.5 text-[10px] text-orange-500"
                          : "top-1/2 -translate-y-1/2 text-[13px] text-gray-400",
                      ].join(" ")}
                    >
                      {label}
                      {required && (
                        <span className="text-orange-500 ml-0.5">*</span>
                      )}
                    </label>

                    {/* Input */}
                    <input
                      id={`mobile-${key}`}
                      type={type}
                      value={values[key]}
                      required={required}
                      autoComplete="off"
                      onFocus={() => setFocused((f) => ({ ...f, [key]: true }))}
                      onBlur={() => setFocused((f) => ({ ...f, [key]: false }))}
                      onChange={(e) => {
                        setValues((v) => ({ ...v, [key]: e.target.value }));
                        if (errors[key])
                          setErrors((er) => ({ ...er, [key]: undefined }));
                      }}
                      className={[
                        "w-full pt-5 pb-2 px-3.5 rounded-xl text-[13.5px] text-gray-900 bg-gray-50 border outline-none transition-all duration-200 placeholder-transparent",
                        errors[key]
                          ? "border-red-300 focus:border-red-400 bg-red-50/30"
                          : "border-gray-200 focus:border-orange-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.08)]",
                      ].join(" ")}
                    />

                    {/* Error */}
                    {errors[key] && (
                      <p className="mt-1 text-[11px] text-red-500 pl-1 flex items-center gap-1">
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
                        {errors[key]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-2 w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold text-[13.5px] py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-sm shadow-orange-200"
                >
                  Request a Callback
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

                {/* Trust note */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  {[
                    {
                      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                      text: "No spam",
                    },
                    {
                      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                      text: "Secure",
                    },
                    {
                      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                      text: "Callback",
                    },
                  ].map(({ icon, text }) => (
                    <span
                      key={text}
                      className="flex items-center gap-1 text-[10.5px] text-gray-400"
                    >
                      <svg
                        className="w-3 h-3 text-orange-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d={icon}
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {text}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
