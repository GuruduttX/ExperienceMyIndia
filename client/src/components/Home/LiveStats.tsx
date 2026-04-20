// components/LiveStats.tsx

export default function LiveStats() {
    return (
        <section className="py-20 bg-white flex justify-center">

            {/* CONTAINER */}
            <div className="w-[80%] max-w-6xl px-10 py-16 rounded-3xl 
                bg-gradient-to-br from-[#fff7ed] via-white to-[#fff3e0]
                shadow-xl border border-orange-100">

                {/* HEADING */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                        Tours We Are Operating Right Now!
                    </h2>
                    <p className="mt-3 text-gray-500 text-lg">
                        A real-time view of travellers currently touring with us.
                    </p>
                </div>

                {/* STATS (FIXED STRUCTURE) */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 items-center text-center">

                    {/* LEFT STAT */}
                    <div>
                        <h3 className="text-5xl font-bold text-gray-900">
                            5,925
                        </h3>
                        <p className="mt-3 text-gray-500 text-lg">
                            Travellers currently on tours
                        </p>
                    </div>

                    {/* CENTER DIVIDER */}
                    <div className="hidden md:flex justify-center">
                        <div className="h-20 w-px bg-orange-200"></div>
                    </div>

                    {/* RIGHT STAT */}
                    <div>
                        <h3 className="text-5xl font-bold text-gray-900">
                            240
                        </h3>
                        <p className="mt-3 text-gray-500 text-lg">
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