"use client";

import { useState } from "react";

export default function TourSideForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        travellers: "",
        message: "",
    });

    const WHATSAPP = "7302265809";

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

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

    return (
        <div className="w-full">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40">

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                    Enquire About This Package
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                            focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                            focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Phone Number *
                        </label>
                        <div className="mt-1 flex">
                            <div className="px-4 flex items-center bg-gray-100 rounded-l-xl text-sm border border-r-0 border-gray-200">
                                +91
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full rounded-r-xl border border-gray-200 px-4 py-2.5 text-sm
                                focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Travel Date */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Travel Date *
                        </label>
                        <input
                            type="date"
                            name="travelDate"
                            value={form.travelDate}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                            focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                        />
                    </div>

                    {/* Travellers */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Travellers *
                        </label>
                        <input
                            type="number"
                            name="travellers"
                            value={form.travellers}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                            focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                            focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
                    >
                        {loading ? "Sending..." : "Send Enquiry"}
                    </button>
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