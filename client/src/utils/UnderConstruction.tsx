"use client";
import { usePathname } from "next/navigation";

export default function UnderConstruction() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  return (
    <section className="bg-white py-12 md:py-24 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-3xl w-full mx-4 md:mx-6">
        <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-8 md:p-14 flex flex-col items-center text-center">
          {/* Subtle dot pattern background (Matched from your CTA) */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Pulse Badge */}
            <span className="inline-flex items-center gap-1.5 w-fit text-[11px] font-medium uppercase tracking-widest text-orange-500 border border-orange-200 bg-orange-50 px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Work In Progress
            </span>

            {/* Heading (Matched Playfair Display serif theme) */}
            <h1
              className="text-[28px] md:text-[36px] font-bold leading-snug text-gray-900 mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Something <span className="text-orange-500">Extraordinary</span>{" "}
              is Coming
              <br />
              <span className="font-normal text-gray-400 text-[18px] md:text-[20px]">
                We're building your next great {lastSegment}
              </span>
            </h1>

            <p className="text-[14px] text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
              Our team is actively working behind the scenes to craft this page.
              We're bringing together the best destinations, itineraries, and
              features just for you.
            </p>

            {/* Status indicator row (Adapted from your Stats row) */}
            <div className="flex items-center gap-8 mb-10 pb-8 border-b border-gray-100 border-dashed w-full justify-center max-w-sm">
              {[
                { num: "Design", label: "Complete", active: true },
                { num: "Building", label: "In Progress", highlight: true },
                { num: "Launch", label: "Coming Soon", pending: true },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className={`text-[15px] font-semibold ${
                      s.highlight
                        ? "text-orange-500"
                        : s.active
                          ? "text-gray-800"
                          : "text-gray-300"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium px-6 py-2.5 rounded-lg transition-colors duration-150 shadow-sm">
                Return to Homepage
              </button>
              <button className="text-[13px] font-medium text-gray-400 hover:text-orange-500 transition-colors duration-150 flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
