"use client";

import { useState } from "react";
import { FloatingInput } from "@/utils/FloatingInput";
import { FloatingTextarea } from "@/utils/FloatingTextarea";

type TourSideFormProps = {
    variant?: "default" | "compact";
};

export default function TourSideForm({ variant = "default" }: TourSideFormProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const isCompact = variant === "compact";

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        travellers: "",
        message: "",
    });


    const WHATSAPP = "7302265809";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch("/api/sembark", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    phone: form.phone,
                    email: form.email,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);

                const whatsappText = encodeURIComponent(
                    `Package Enquiry\n\n` +
                    `Name: ${form.name}\n` +
                    `Phone: +91 ${form.phone}\n` +
                    `Email: ${form.email || "N/A"}\n` +
                    `Travel Date: ${form.travelDate}\n` +
                    `Travellers: ${form.travellers}\n\n` +
                    `Message:\n${form.message || "No additional message"}`
                );

                setTimeout(() => {
                    window.open(
                        `https://wa.me/${WHATSAPP}?text=${whatsappText}`,
                        "_blank"
                    );
                }, 600);

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    travelDate: "",
                    travellers: "",
                    message: "",
                });
            } else {
                alert("Failed to send enquiry");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const cardClassName = isCompact
        ? "bg-white rounded-2xl p-4 shadow-[0_12px_35px_rgba(15,23,42,0.08)] border border-gray-200"
        : "bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-200";

    return (
        <div className="w-full">
            <div className={cardClassName}>

                {/* Title */}
                <div className={isCompact ? "mb-4 flex items-center justify-between gap-3" : ""}>
                    <div>
                        {isCompact && (
                            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                                Free consultation
                            </p>
                        )}
                        <h3 className={`${isCompact ? "text-base" : "text-lg"} font-semibold text-gray-900 ${isCompact ? "" : "mb-5"}`}>
                            {isCompact ? "Plan this trip with an expert" : "Enquire About This Package"}
                        </h3>
                    </div>
                    {isCompact && (
                        <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                            No payment
                        </span>
                    )}
                </div>

                <form onSubmit={handleSubmit} className={isCompact ? "space-y-3" : "space-y-4"}>

                    {/* Name */}
                     <div className={isCompact ? "space-y-3" : "space-y-4"}>

            <FloatingInput
                label="Full Name"
                name="name"
                value={form.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm({...form, name:e.target.value})}
                required
            />

            {!isCompact && (
                <FloatingInput
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm({...form, email:e.target.value})}
                />
            )}

            {/* Phone */}
            <div className="flex gap-2">
                <div className="w-20 border border-gray-300 rounded-xl flex items-center justify-center text-sm outline-none">
                +91
                </div>
                <div className="flex-1">
                <FloatingInput
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm({...form, phone:e.target.value})}
                    required
                />
                </div>
            </div>

            <div className={isCompact ? "grid grid-cols-2 gap-2" : "space-y-4"}>
            {/* Travel Date */}
            <div className="relative">
                <input
                type="date"
                value={form.travelDate}
                onChange={(e)=>setForm({...form, travelDate:e.target.value})}
                required
                className="peer w-full rounded-xl border focus:border-orange-400 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200 border-gray-300 px-4 pt-5 pb-2 text-sm"
                />
                <label className="absolute left-3 top-1 text-xs text-gray-500">
                Travel Date *
                </label>
            </div>

            <FloatingInput
                label="Traveller Count"
                name="travellers"
                value={form.travellers}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm({...form, travellers:e.target.value})}
                required
            />
            </div>

            {!isCompact && (
                <FloatingTextarea
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setForm({...form, message:e.target.value})}
                />
            )}

     <button
            type="submit"
            disabled={loading}
            className={`${isCompact ? "py-3 text-sm" : "py-3"} w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg disabled:opacity-60`}
        >
            {loading ? "Sending..." : isCompact ? "Get a Callback" : "Send Enquiry"}
    </button>

    </div>
    </form>

        {/* Success */}
        {success && (
            <p className="mt-3 text-xs text-green-600 text-center">
                Enquiry sent successfully ✔ Redirecting to WhatsApp…
            </p>
        )}
            </div>
        </div>
    );
}
