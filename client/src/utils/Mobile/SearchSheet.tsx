"use client";

import { useRef, useState } from "react";
import {
  X,
  ArrowLeft,
  Minus,
  Plus,
  Users,
  Calendar,
  Map,
  Banknote,
} from "lucide-react";

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

  // Form State
  const [price, setPrice] = useState<number>(20000);
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [selectedType, setSelectedType] = useState<string>("Tour");
  const [selectedDuration, setSelectedDuration] =
    useState<string>("3 to 5 days");

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
        {/* DRAG HANDLE */}
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
            placeholder="Search destinations..."
            className="flex-1 bg-gray-100/80 border border-gray-200 px-4 py-2.5 rounded-2xl outline-none text-[15px] focus:bg-white focus:border-orange-500 transition-colors placeholder:text-gray-400"
          />

          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 text-gray-500 transition-colors"
          >
            <X strokeWidth={1.5} size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-5 py-4 space-y-8 overflow-y-auto h-[calc(90vh-140px)] pb-32 no-scrollbar">
          {/* NUMBER OF PEOPLE (New Mobile App Pattern) */}
          <Section
            title="Number of Guests"
            icon={<Users size={18} className="text-gray-500" />}
          >
            <div className="flex items-center justify-between w-full p-4 border border-gray-100 rounded-2xl bg-gray-50/50">
              <div>
                <p className="font-semibold text-gray-900 text-[15px]">
                  Travellers
                </p>
                <p className="text-[13px] text-gray-500">Ages 2 or above</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                  disabled={peopleCount <= 1}
                  className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 active:bg-gray-100 disabled:opacity-40 disabled:active:bg-white transition-all"
                >
                  <Minus size={16} strokeWidth={2} />
                </button>
                <span className="w-4 text-center font-semibold text-[16px] text-gray-900">
                  {peopleCount}
                </span>
                <button
                  onClick={() => setPeopleCount(peopleCount + 1)}
                  className="p-2 rounded-full border border-orange-200 bg-orange-50 text-orange-500 active:bg-orange-100 transition-all"
                >
                  <Plus size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          </Section>

          {/* PRODUCT TYPE */}
          <Section
            title="Product Type"
            icon={<Map size={18} className="text-gray-500" />}
          >
            <Chip
              label="Tour"
              isActive={selectedType === "Tour"}
              onClick={() => setSelectedType("Tour")}
            />
            <Chip
              label="Activity"
              isActive={selectedType === "Activity"}
              onClick={() => setSelectedType("Activity")}
            />
          </Section>

          {/* TRIP DURATION */}
          <Section
            title="Trip Duration"
            icon={<Calendar size={18} className="text-gray-500" />}
          >
            {[
              "Upto 1 Day",
              "2 to 3 days",
              "3 to 5 days",
              "5 to 7 days",
              "7+ Days",
            ].map((duration) => (
              <Chip
                key={duration}
                label={duration}
                isActive={selectedDuration === duration}
                onClick={() => setSelectedDuration(duration)}
              />
            ))}
          </Section>

          {/* PRICE RANGE */}
          <Section
            title="Price Range"
            icon={<Banknote size={18} className="text-gray-500" />}
          >
            <div className="w-full mt-2">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[14px] text-gray-500 font-medium">
                  Maximum budget
                </span>
                <span className="text-[16px] font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-lg">
                  ₹{price.toLocaleString("en-IN")}
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

              <div className="flex justify-between mt-3 text-xs font-medium text-gray-400">
                <span>₹0</span>
                <span>₹5L+</span>
              </div>
            </div>
          </Section>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white/95 backdrop-blur-md border-t border-gray-100">
          <button className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-full font-semibold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Show {peopleCount * 12} Products
          </button>
        </div>
      </div>
    </>
  );
}

/* SECTION COMPONENT */
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

/* CHIP COMPONENT (NOW WITH ACTIVE STATE) */
function Chip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 text-[14px] font-medium rounded-full shadow-sm transition-all border ${
        isActive
          ? "bg-orange-500 border-orange-500 text-white"
          : "bg-white border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 active:bg-orange-50"
      }`}
    >
      {label}
    </button>
  );
}
