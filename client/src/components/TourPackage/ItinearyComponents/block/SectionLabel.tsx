"use client";

import type { ElementType } from "react";

export default function SectionLabel({ Icon, label }: { Icon: ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#888] uppercase tracking-[0.4px] mb-2.5">
      <Icon size={14} className="text-[#e07020]" />{label}
    </div>
  );
}
