"use client";

import { useRef } from "react";
import {
  X,
  ChevronRight,
  Home,
  Settings,
  Info,
  BookOpen,
  Activity,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileMenuSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

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

  const handleNavigate = (path: string) => {
    onClose();
    setTimeout(() => router.push(path), 200);
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

      {/* SHEET */}
      <div
        ref={sheetRef}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#f8f9fa] rounded-t-[32px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
        <div className="flex justify-between items-center px-6 py-2 border-b border-gray-200/50 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 text-gray-500 transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* 🔥 PROFILE SECTION */}
        <div
          onClick={() => handleNavigate("/profile")}
          className="flex items-center gap-4 mx-4 mb-6 p-4 bg-white border border-gray-100 rounded-3xl shadow-sm cursor-pointer active:scale-[0.98] transition-all"
        >
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
            <User size={24} strokeWidth={1.5} />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <p className="text-base font-bold text-gray-900">Adarsh Dubey</p>
            <p className="text-sm text-gray-500 mt-0.5">View Profile</p>
          </div>

          <ChevronRight size={20} strokeWidth={1.5} className="text-gray-300" />
        </div>

        {/* MENU LIST */}
        <div className="mx-4 mb-8 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden pb-0">
          <MenuItem
            icon={<Home size={20} />}
            label="Home"
            onClick={() => handleNavigate("/")}
          />
          

          <MenuItem
            icon={<Info size={20}/>}
            label="About"
            onClick={() => handleNavigate("/about")}
          />

          <MenuItem
            icon={<BookOpen size={20} />}
            label="Blogs"
            onClick={() => handleNavigate("/blog")}
          />

          <MenuItem
            icon={<Settings size={20} />}
            label="Settings"
            onClick={() => handleNavigate("/settings")}
            isLast
          />
        </div>
      </div>
    </>
  );
}

function MenuItem({
  icon,
  label,
  onClick,
  isLast,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isLast?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-5 py-4 ${!isLast ? "border-b border-gray-50" : ""} active:bg-gray-50 transition-colors cursor-pointer group`}
    >
      <div className="flex items-center gap-4">
        <div className="text-orange-500">
          {icon}
        </div>
        <span className="text-[16px] font-medium text-gray-800">{label}</span>
      </div>

      <ChevronRight size={20} strokeWidth={1.20} className="text-gray-300" />
    </div>
  );
}
