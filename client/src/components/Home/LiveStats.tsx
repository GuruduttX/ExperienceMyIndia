// components/LiveStats.tsx

export default function LiveStats() {
    return (
        <section className="py-10 md:py-20 bg-white flex justify-center">

            {/* CONTAINER */}
            <div className="w-[calc(100%-2rem)] md:w-[85%] max-w-6xl px-5 md:px-10 py-8 md:py-16 rounded-3xl 
                bg-gradient-to-br from-[#fff7ed] via-white to-[#fff3e0]
                shadow-xl border border-orange-100">

                {/* HEADING */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 leading-tight">
                        Tours We Are Operating Right Now!
                    </h2>
                    <p className="mt-2 md:mt-3 text-sm md:text-lg text-gray-500">
                        A real-time view of travellers currently touring with us.
                    </p>
                </div>

                {/* STATS (FIXED STRUCTURE) */}
                <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 items-center text-center gap-6 md:gap-0">

                    {/* LEFT STAT */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-none">
                            5,925
                        </h3>
                        <p className="mt-2 md:mt-3 max-w-[220px] text-sm md:text-lg text-gray-500 leading-snug">
                            Travellers currently on tours
                        </p>
                    </div>

                    {/* CENTER DIVIDER */}
                    <div className="hidden md:flex justify-center">
                        <div className="h-20 w-px bg-orange-200"></div>
                    </div>

                    {/* RIGHT STAT */}
                    <div className="flex flex-col items-center pt-6 md:pt-0 border-t border-orange-100 md:border-t-0">
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-none">
                            240
                        </h3>
                        <p className="mt-2 md:mt-3 max-w-[220px] text-sm md:text-lg text-gray-500 leading-snug">
                            On-ground in{" "}
                            <span className="text-[#FF9933] font-semibold">
                                Kerala
                            </span>{" "}
                            right now
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}
