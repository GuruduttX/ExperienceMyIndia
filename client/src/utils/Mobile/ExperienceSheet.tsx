"use client";

import { useState, useRef } from "react";
import { ChevronDown, ArrowLeft, ChevronRight } from "lucide-react";

export default function ExperienceSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
    if (sheetRef.current) {
      sheetRef.current.style.transition = "none";
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const y = e.touches[0].clientY;
    if (y > startY.current) {
      currentY.current = y - startY.current;
      if (sheetRef.current) {
        sheetRef.current.style.transform = `translateX(0%) translateY(${currentY.current}px)`;
      }
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    if (sheetRef.current) {
      sheetRef.current.style.transition = "";
      sheetRef.current.style.transform = "";
    }

    if (currentY.current > 100) {
      onClose();
    }
    currentY.current = 0;
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        ref={sheetRef}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[90vh] bg-[#f8f9fa] rounded-t-[32px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="pt-3 pb-3 cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="w-12 h-1 bg-gray-300/80 rounded-full mx-auto" />
        </div>

        <div className="flex items-center gap-3 px-6 py-2 mb-4 border-b border-gray-200/50 pb-4">
          <button
            className="p-2 -ml-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 text-gray-500 transition-colors"
            onClick={onClose}
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            India Packages
          </h2>
        </div>

        <div className="px-4 pb-12 space-y-4 overflow-y-auto h-[calc(90vh-90px)]">
          <Accordion title="Popular Destinations">
            <ListItem label="Manali" />
            <ListItem label="Goa" />
            <ListItem label="Kerala" />
          </Accordion>

          <Accordion title="Honeymoon Tour Packages">
            <ListItem label="Kashmir Honeymoon" />
            <ListItem label="Andaman Couple Trip" />
          </Accordion>

          <Accordion title="Family Tour Packages">
            <ListItem label="Rajasthan Family Tour" />
            <ListItem label="Kerala Family Package" />
          </Accordion>

          <Accordion title="Trending This Month">
            <ListItem label="Leh Ladakh Trip" />
            <ListItem label="Spiti Valley Adventure" />
          </Accordion>
        </div>
      </div>
    </>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 active:bg-gray-50 transition-colors"
      >
        <span className="text-[16px] font-bold text-gray-800">{title}</span>

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? "bg-orange-50" : "bg-gray-50"}`}
        >
          <ChevronDown
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${
              open ? "rotate-180 text-orange-500" : "text-gray-500"
            }`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 pb-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3">{children}</div>
      </div>
    </div>
  );
}

function ListItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 mb-1 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer group">
      <span className="text-[15px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
      <ChevronRight
        size={18}
        strokeWidth={1.5}
        className="text-gray-300 group-hover:text-orange-400 transition-colors"
      />
    </div>
  );
}
