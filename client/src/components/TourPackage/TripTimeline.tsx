export function TripTimeline(){
    const itinerary = [
    { day: "1st", title: "Jaipur" },
    { day: "2nd", title: "Udaipur" },
    { day: "3rd", title: "Jodhpur" },
    { day: "4th", title: "Jaisalmer" },
    { day: "5th", title: "Jodhpur" },
];

    return (
        <section>
            <div className="relative mt-6">

                        {/* Fade edges */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fdfaf6] to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fdfaf6] to-transparent z-10" />

                        {/* Scroll container */}
                        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 py-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-white/40">

                            {/* Duration */}
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                                8D / 7N
                            </div>

                            {/* Timeline */}
                            {itinerary.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 min-w-max group hover:translate-y-[-2px] transition duration-300 cursor-pointer"
                                >
                                    {/* Day */}
                                    <div className="text-orange-500 font-bold text-lg group-hover:scale-110 transition">
                                        {item.day}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-[10px] tracking-wider text-gray-400 uppercase">
                                            Day in
                                        </p>
                                        <p className="text-sm font-medium group-hover:text-orange-500 transition">
                                            {item.title}
                                        </p>
                                    </div>

                                    {/* Connector */}
                                    {i !== itinerary.length - 1 && (
                                        <div className="h-[2px] w-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
        </section>
    )
}