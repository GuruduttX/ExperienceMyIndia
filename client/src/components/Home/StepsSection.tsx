"use client";

import { Phone, Calendar, GitBranch } from "lucide-react";

const steps = [
    {
        title: "Get a Quote",
        desc: "Request your free travel quote in seconds",
        icon: GitBranch,
    },
    {
        title: "Consult",
        desc: "Discuss with our experts to plan your journey",
        icon: Phone,
    },
    {
        title: "Book",
        desc: "Confirm your trip and start your experience",
        icon: Calendar,
    },
];

export default function StepsSection() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-50 py-6 md:py-10">

            <div className="w-full md:w-[90vw] mx-auto px-4 md:px-8">

                {/* HEADER */}
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
                        Get Started in 3 Simple Steps
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        A quick and seamless way to plan your journey
                    </p>
                </div>

                {/* 📱 MOBILE - SCROLL CARDS */}
                <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide px-1">

                    {steps.map((step, i) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={i}
                                className="min-w-[250px] bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4 shadow-sm"
                            >

                                {/* ICON */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50">
                                    <Icon className="text-orange-500" size={22} />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* 💻 DESKTOP */}
                <div className="hidden md:grid grid-cols-3 gap-10 md:gap-16">

                    {steps.map((step, i) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={i}
                                className="group flex items-start gap-4"
                            >

                                {/* ICON */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 group-hover:border-orange-300 group-hover:bg-orange-50">

                                    <Icon
                                        size={22}
                                        className="text-gray-600 transition-colors duration-300 group-hover:text-orange-500"
                                    />

                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}