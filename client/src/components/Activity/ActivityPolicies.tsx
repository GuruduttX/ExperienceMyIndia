"use client";

import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PolicySection {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const activityName = "Paragliding at Bir Billing";

const policies: PolicySection[] = [
  {
    icon: <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />,
    title: "Confirmation Policy",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        If the booking is made prior to the date of travel, the consumer will
        receive a confirmation voucher via email within{" "}
        <span className="font-semibold text-gray-800">2 hours</span> of
        successful booking. For bookings made on the same day, we strive to
        provide the voucher within{" "}
        <span className="font-semibold text-gray-800">30 minutes</span>.
      </p>
    ),
  },
  {
    icon: <XCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />,
    title: "Cancellation Policy",
    content: (
      <ul className="flex flex-col gap-3">
        {[
          "If cancellation is made 1 day or more before the date of travel, total booking cost will be charged as cancellation fees.",
          "If cancellation is made within 1 day before the date of travel, total booking cost will be charged as cancellation fees.",
          "In the event of unforeseen weather conditions, union issues, government restrictions, or any other circumstances beyond human control, certain trips or activities may be cancelled. In such cases, alternate feasible options will be provided. However, a cash refund will not be available.",
        ].map((point, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
          </li>
        ))}
      </ul>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ActivityPolicies({
  name = activityName,
}: {
  name?: string;
}) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Heading */}
      <div className="flex items-start gap-3 mb-7">
        <div className="w-1 self-stretch rounded-full bg-orange-500 shrink-0" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
          {name} — Policies
        </h2>
      </div>

      {/* Policy grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
        {policies.map((policy) => (
          <div key={policy.title} className="p-6 sm:p-8 flex flex-col gap-4">
            {/* Policy title */}
            <div className="flex items-center gap-2.5">
              {policy.icon}
              <h3 className="text-sm font-bold text-gray-900">{policy.title}</h3>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-100" />

            {/* Content */}
            <div>{policy.content}</div>
          </div>
        ))}
      </div>

      {/* Advisory strip */}
      <div className="mt-4 flex items-start gap-2.5 bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
        <AlertTriangle size={15} className="text-orange-500 shrink-0 mt-0.5" />
        <p className="text-xs text-orange-700 leading-relaxed">
          Please read all policies carefully before booking. By confirming your
          reservation you agree to the terms above.
        </p>
      </div>
    </section>
  );
}