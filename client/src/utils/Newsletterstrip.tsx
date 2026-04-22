"use client";

import { useState, FormEvent } from "react";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const validate = (val: string) => /\S+@\S+\.\S+/.test(val.trim());

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!validate(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    // TODO: await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl border border-orange-100 bg-orange-50/60 overflow-hidden px-6 py-5 md:px-8 md:py-6">
          {/* Decorative circles — right side */}
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border border-orange-200/50 pointer-events-none" />
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full border border-orange-200/50 pointer-events-none" />
          <div className="absolute -right-16 -bottom-12 w-48 h-48 rounded-full border border-orange-200/40 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            {/* Left — copy */}
            <div className="shrink-0 md:max-w-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1 h-4 rounded-full bg-orange-500 shrink-0" />
                <p className="text-[10.5px] font-semibold uppercase tracking-widest text-orange-500">
                  Travel Inspo in Your Inbox
                </p>
              </div>
              <h2 className="text-[17px] md:text-[19px] font-bold text-gray-900 leading-snug tracking-tight">
                Stories, guides &amp; deals —{" "}
                <span className="text-orange-500">no spam, ever.</span>
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-orange-200/60 shrink-0" />

            {/* Right — form or success */}
            <div className="flex-1">
              {submitted ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/15 border border-orange-400/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <div>
                    <p className="text-[14px] font-semibold text-gray-900">
                      You&apos;re in!
                    </p>
                    <p className="text-[12px] text-gray-400 leading-snug">
                      Welcome aboard — great travel stories are headed your way.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    {/* Email input */}
                    <div className="relative flex-1">
                      {/* Mail icon */}
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className={`w-3.5 h-3.5 transition-colors duration-200 ${focused ? "text-orange-400" : "text-gray-300"}`}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <rect
                            x="1.5"
                            y="3.5"
                            width="13"
                            height="9"
                            rx="1.5"
                            stroke="currentColor"
                            strokeWidth="1.3"
                          />
                          <path
                            d="M1.5 5l6.5 4.5L14.5 5"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>

                      <input
                        type="email"
                        value={email}
                        placeholder="Your email address"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        className={[
                          "w-full pl-8 pr-3 py-2.5 rounded-xl text-[13px] text-gray-800 bg-white border outline-none transition-all duration-200 placeholder:text-gray-300",
                          error
                            ? "border-red-300 focus:border-red-400"
                            : "border-orange-200 focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.08)]",
                        ].join(" ")}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="shrink-0 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold text-[12.5px] px-5 py-2.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      Subscribe
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Error */}
                  {error && (
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
                      {error}
                    </p>
                  )}

                  {/* Trust note */}
                  <p className="mt-2 text-[10.5px] text-gray-400 flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-orange-400 shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 1.5l1.545 3.13 3.455.502-2.5 2.436.59 3.44L8 9.385l-3.09 1.623.59-3.44L3 5.132l3.455-.502L8 1.5z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    No spam. Unsubscribe anytime. We send 2–3 emails a month.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
