"use client";

const states = [
    "Himachal Pradesh",
    "Goa",
    "Kerala",
    "Rajasthan",
    "Kashmir",
    "Uttarakhand",
    "Sikkim",
    "Meghalaya",
    "Tamil Nadu",
    "Karnataka",
    "Maharashtra",
    "Gujarat",
    "Punjab",
    "Assam",
];

export default function IndiaStatesStrip() {

    return (

        <section className="w-full bg-white pb-10 overflow-hidden px-5 md:px-10">

            <div className="relative w-full overflow-hidden py-4">

                <div className="flex gap-6 animate-scroll whitespace-nowrap">

                    {[...states, ...states].map((state, i) => (
                        <div
                            key={i}
                            className="
                                min-w-[220px] 
                                rounded-2xl 
                                px-6 py-5 
                                flex flex-col justify-center items-start 
                                cursor-pointer 
                                backdrop-blur-xl 
                                bg-orange-50
                                border border-orange-200
                                transition-all duration-300 
                                hover:scale-105 
                                hover:bg-white
                                hover:shadow-[0_10px_40px_rgba(255,140,0,0.25)]
                            "
                        >
                            <p className="text-sm text-orange-500/80 mb-1">
                                Destination
                            </p>

                            <h4 className="text-lg font-semibold text-gray-800 leading-snug">
                                {state}
                            </h4>

                            <span className="mt-3 text-xs text-orange-500 font-medium group-hover:translate-x-1 transition">
                                Explore →
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}