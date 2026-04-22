"use client";

const stats = [
  {
    icon: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "50k+",
    label: "Happy Travellers",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "12+",
    label: "Years of Experience",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none">
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "4.9★",
    label: "Average Rating",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "100%",
    label: "Secure Booking",
  },
];

export default function BlogTrustBanner() {
  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl border border-gray-100 shadow-sm px-6 py-5 md:px-8 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-0">
            {/* Left — heading + subtitle */}
            <div className="md:w-[38%] md:pr-8 md:border-r md:border-gray-100 shrink-0">
              <div className="flex items-start gap-2.5">
                <span className="mt-1 w-1 h-5 rounded-full bg-orange-500 shrink-0" />
                <div>
                  <h2 className="text-[17px] md:text-[19px] font-bold text-gray-900 leading-snug tracking-tight">
                    Trusted by Travellers Across India
                  </h2>
                  <p className="text-[12.5px] text-gray-400 mt-1 leading-relaxed">
                    Thousands of travellers trust us every year for expertly
                    curated, hassle-free tours across India&apos;s finest
                    destinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — stats */}
            <div className="md:flex-1 md:pl-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-gray-100">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 md:px-5 first:md:pl-0 last:md:pr-0"
                  >
                    {/* Icon pill */}
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      {s.icon}
                    </div>
                    {/* Text */}
                    <div>
                      <p className="text-[16px] font-bold text-orange-500 leading-none">
                        {s.value}
                      </p>
                      <p className="text-[10.5px] text-gray-400 mt-0.5 leading-tight">
                        {s.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
