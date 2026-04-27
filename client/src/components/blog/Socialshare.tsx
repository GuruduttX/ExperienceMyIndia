"use client";

import { useState } from "react";

type Props = {
  title: string;
  url?: string;
};

// ─── Brand colours ────────────────────────────────────────────────────────────
const PLATFORMS = [
  {
    key: "twitter",
    label: "Share on X (Twitter)",
    bg: "#000000",
    hover: "#1a1a1a",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Share on Facebook",
    bg: "#1877F2",
    hover: "#1465d4",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    label: "Share on WhatsApp",
    bg: "#25D366",
    hover: "#1dba58",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.882l6.221-1.634A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818a9.808 9.808 0 01-5.001-1.367l-.36-.214-3.713.976.993-3.62-.234-.373A9.789 9.789 0 012.182 12c0-5.419 4.41-9.818 9.818-9.818 5.408 0 9.818 4.4 9.818 9.818 0 5.408-4.41 9.818-9.818 9.818z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "Share on LinkedIn",
    bg: "#0A66C2",
    hover: "#0958a8",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

// Copy icon (not a social platform, rendered separately)
function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 13l4 4L19 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        stroke="white"
        strokeWidth="1.7"
      />
      <path
        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SocialShare({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const getUrl = () =>
    url ?? (typeof window !== "undefined" ? window.location.href : "");

  const shareLinks = (rawUrl: string) => {
    const u = encodeURIComponent(rawUrl);
    const t = encodeURIComponent(title);
    return {
      twitter: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      whatsapp: `https://api.whatsapp.com/send?text=${t}%20${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    };
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silent */
    }
  };

  // ── Single icon pill ────────────────────────────────────────────────────────
  const Pill = ({
    bg,
    hover,
    href,
    label,
    onClick,
    icon,
    size,
  }: {
    bg: string;
    hover: string;
    href?: string;
    label: string;
    onClick?: () => void;
    icon: React.ReactNode;
    size: "sm" | "md";
  }) => {
    const dim = size === "md" ? "w-10 h-10" : "w-9 h-9";
    const cls = `${dim} rounded-xl flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95 shadow-sm`;

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={cls}
          style={{ backgroundColor: bg }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = hover)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = bg)
          }
        >
          {icon}
        </a>
      );
    }

    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        title={label}
        className={cls}
        style={{ backgroundColor: copied ? "#f97316" : bg }}
      >
        {icon}
      </button>
    );
  };

  const renderIcons = (size: "sm" | "md") => {
    const links = shareLinks(getUrl());
    return (
      <>
        {PLATFORMS.map((p) => (
          <Pill
            key={p.key}
            bg={p.bg}
            hover={p.hover}
            href={links[p.key as keyof typeof links]}
            label={p.label}
            icon={p.icon}
            size={size}
          />
        ))}
        {/* Copy link */}
        <Pill
          bg="#6b7280"
          hover="#4b5563"
          label={copied ? "Copied!" : "Copy link"}
          onClick={copyLink}
          icon={<CopyIcon copied={copied} />}
          size={size}
        />
      </>
    );
  };

  return (
    <>
      {/* ── DESKTOP: fixed left, vertically centred ──────────────────────────── */}
      <aside className="hidden lg:flex flex-col items-center gap-2.5 fixed left-5 xl:left-8 top-1/2 -translate-y-1/2 z-30">
        <span
          className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-300"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Share
        </span>
        <div className="w-px h-4 bg-gray-200 rounded-full" />
        {renderIcons("md")}
        <div className="w-px h-4 bg-gray-200 rounded-full" />
      </aside>

      {/* ── MOBILE / TABLET: inline horizontal row, placed where rendered ── */}
      <div className="flex lg:hidden items-center justify-center mt-5 gap-2 flex-wrap">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">
          Share
        </span>
        {renderIcons("sm")}
      </div>
    </>
  );
}
