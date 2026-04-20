"use client";

import {
    X,
    ChevronRight,
    Home,
    Compass,
    BookOpen,
    Activity,
    User
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

    const handleNavigate = (path: string) => {
        onClose();
        setTimeout(() => router.push(path), 200);
    };

    return (
        <>
            {/* OVERLAY */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 backdrop-blur-md z-[9998] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* SHEET */}
            <div
                className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-t-[28px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                {/* HANDLE */}
                <div className="pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
                </div>

                {/* HEADER */}
                <div className="flex justify-between items-center px-5 py-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Menu
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* 🔥 PROFILE SECTION */}
                <div
                    onClick={() => handleNavigate("/profile")}
                    className="flex items-center gap-4 px-5 py-4 border-b border-gray-100 cursor-pointer active:bg-gray-50"
                >
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                        <User size={22} />
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                            Adarsh Dubey
                        </p>
                        <p className="text-xs text-gray-500">
                            adarsh@example.com
                        </p>
                    </div>

                    <ChevronRight size={18} className="text-gray-400" />
                </div>

                {/* MENU LIST */}
                <div className="pb-6">

                    <MenuItem
                        icon={<Home size={20} />}
                        label="Home"
                        onClick={() => handleNavigate("/")}
                    />

                    <MenuItem
                        icon={<Compass size={20} />}
                        label="Experiences"
                        onClick={() => handleNavigate("/experiences")}
                    />

                    <MenuItem
                        icon={<BookOpen size={20} />}
                        label="Blogs"
                        onClick={() => handleNavigate("/blogs")}
                    />

                    <MenuItem
                        icon={<Activity size={20} />}
                        label="Activities"
                        onClick={() => handleNavigate("/activities")}
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
}: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-between px-5 py-4 border-b border-gray-100 active:bg-gray-50 transition cursor-pointer"
        >
            <div className="flex items-center gap-4">
                <div className="text-orange-500">{icon}</div>
                <span className="text-[15px] font-medium text-gray-800">
                    {label}
                </span>
            </div>

            <ChevronRight size={18} className="text-gray-400" />
        </div>
    );
}