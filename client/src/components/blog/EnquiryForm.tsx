"use client";

import { useState, FormEvent } from "react";
import { FormStateType,
  FIELDS,
  INITIAL_VALUES,
  INITIAL_FOCUSED,
  validateEnquiry,
} from "@/utils/Enquiryformutils";

export default function EnquiryForm() {
  const [values, setValues]     = useState<FormStateType>(INITIAL_VALUES);
  const [focused, setFocused]   = useState(INITIAL_FOCUSED);
  const [errors, setErrors]     = useState<Partial<FormStateType>>({});
  const [submitted, setSubmitted] = useState(false);

  const isFloating = (key: keyof FormStateType) => focused[key] || values[key] !== "";

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateEnquiry(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // TODO: await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(values) });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-2 py-8">
        <div className="w-11 h-11 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-orange-400" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white font-semibold text-[15px] mb-1">We&apos;ll be in touch!</p>
        <p className="text-white/45 text-[12px] leading-relaxed max-w-[200px]">
          Our travel expert will call you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setValues(INITIAL_VALUES); }}
          className="mt-5 text-[11px] text-orange-400 hover:text-orange-300 transition-colors"
        >
          Submit another enquiry →
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-center px-1">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-orange-400 mb-1">
          Free Consultation
        </p>
        <h3 className="text-white font-bold text-[16px] leading-snug">
          Plan your perfect trip
        </h3>
        <p className="text-white/40 text-[12px] mt-1 leading-relaxed">
          Drop your details — our expert calls you back within 24 hrs.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {FIELDS.map(({ key, label, type, required }) => (
          <div key={key} className="relative">
            <label
              htmlFor={`hero-${key}`}
              className={[
                "absolute left-3 pointer-events-none font-medium transition-all duration-200 origin-top-left",
                isFloating(key)
                  ? "top-1.5 text-[10px] text-orange-400"
                  : "top-1/2 -translate-y-1/2 text-[12.5px] text-white",
              ].join(" ")}
            >
              {label}
              {required && <span className="text-orange-500 ml-0.5">*</span>}
            </label>

            <input
              id={`hero-${key}`}
              type={type}
              value={values[key]}
              required={required}
              autoComplete="off"
              onFocus={() => setFocused((f) => ({ ...f, [key]: true }))}
              onBlur={() => setFocused((f) => ({ ...f, [key]: false }))}
              onChange={(e) => {
                setValues((v) => ({ ...v, [key]: e.target.value }));
                if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
              }}
              className={[
                "w-full pt-5 pb-2 px-3 rounded-xl text-[13px] text-white border outline-none transition-all duration-200 placeholder-transparent",
                errors[key]
                  ? "border-red-400/60 focus:border-red-400"
                  : "border-white/12 focus:border-orange-500/70",
              ].join(" ")}
              style={{ background: "rgba(255,255,255,0.07)" }}
            />

            {errors[key] && (
              <p className="mt-1 text-[10.5px] text-red-400 pl-1">{errors[key]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="mt-1 w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold text-[13px] py-2.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2"
        >
          Request a Callback
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="text-center text-[10px] text-white/25 -mt-1">
          No spam. No hidden charges. Just great travel.
        </p>
      </form>
    </div>
  );
}