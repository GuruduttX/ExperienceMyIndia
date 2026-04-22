"use client";

import { useRef, useState } from "react";
import { X, ArrowLeft } from "lucide-react";

export default function SearchSheet({
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
  const [price, setPrice] = useState<number>(500000);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
    if (sheetRef.current) {
      // Disable transition while dragging so it follows the finger instantly
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
      // Restore standard transition and remove inline transform
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
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SHEET (90% HEIGHT) */}
      <div
        ref={sheetRef}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[90vh] bg-white rounded-t-[32px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* HANDLE */}
        <div
          className="pt-3 pb-3 cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="w-12 h-1 bg-gray-300/80 rounded-full mx-auto" />
        </div>

        {/* HEADER */}
        <div className="flex items-center gap-3 px-5 py-2 mb-2">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 text-gray-500 transition-colors"
          >
            <ArrowLeft strokeWidth={1.5} size={20} />
          </button>

          <input
            type="text"
            placeholder="Search for destinations"
            className="flex-1 bg-gray-100/80 border border-gray-200 px-4 py-2.5 rounded-2xl outline-none text-[15px] focus:bg-white focus:border-orange-400 transition-colors placeholder:text-gray-400"
          />

          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 text-gray-500 transition-colors"
          >
            <X strokeWidth={1.5} size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-5 py-4 space-y-8 overflow-y-auto h-[calc(90vh-140px)] pb-32">
          {/* PRODUCT TYPE */}
          <Section title="Product Type">
            <Chip label="Tour" />
            <Chip label="Activity" />
          </Section>

          {/* TRIP DURATION */}
          <Section title="Trip Duration">
            <Chip label="Upto 1 Day" />
            <Chip label="2 to 3 days" />
            <Chip label="3 to 5 days" />
            <Chip label="5 to 7 days" />
            <Chip label="7+ Days" />
          </Section>

          {/* PRICE RANGE */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">
                Price Range
              </h3>
              <span className="text-[15px] font-bold text-orange-500">
                Upto ₹{price.toLocaleString("en-IN")}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="500000"
              step="1000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-orange-500 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between mt-3 text-sm font-medium text-gray-500">
              <span>₹0</span>
              <span>₹5,00,000</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-5 bg-white/90 backdrop-blur-md border-t border-gray-100">
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-all">
            Search For Products
          </button>
        </div>
      </div>
    </>
  );
}

/* SECTION */
function Section({ title, children }: any) {
  return (
    <div>
      <h3 className="text-[16px] font-bold mb-4 text-gray-900 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

/* CHIP (MODERN STYLE) */
function Chip({ label }: { label: string }) {
  return (
    <button className="px-5 py-2.5 text-[14px] font-medium bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm hover:border-orange-500 hover:text-orange-500 active:bg-orange-50 transition-all">
      {label}
    </button>
  );
}