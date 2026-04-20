"use client";

export default function Hero() {

    const destinations = [
        {
            name: "Taj Mahal",
            state: "Agra, Uttar Pradesh",
            desc: "Iconic symbol of love and Mughal architecture.",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        },
        {
            name: "Jaipur",
            state: "Rajasthan",
            desc: "The Pink City filled with royal heritage.",
            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        },
        {
            name: "Kerala",
            state: "Backwaters",
            desc: "Serene waters, lush greenery & houseboats.",
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        },
        {
            name: "Varanasi",
            state: "Uttar Pradesh",
            desc: "Spiritual capital with timeless ghats.",
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden">

            {/* BACKGROUND
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#FF9933]/10 blur-2xl"></div> */}

            
            {/* MAIN */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-10 grid md:grid-cols-2 gap-10 md:gap-16 items-start">

                {/* LEFT */}
                <div className="max-w-xl">

                    <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                        Discover the Soul <br />
                        <span className="text-[#FF9933]">of India</span>
                    </h1>

                    <p className="text-center md:text-left mt-5 md:mt-6 text-base md:text-lg text-gray-600">
                        Explore handpicked destinations, cultural experiences, and hidden
                        gems across India — crafted for modern travelers.
                    </p>

                    {/* SEARCH */}
                    <div className="mt-6 md:mt-8 bg-white shadow-lg rounded-2xl p-2 flex flex-col sm:flex-row gap-3 border border-gray-100">

                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="flex-1 outline-none px-4 py-3 text-gray-600"
                        />

                        <button className="bg-[#FF9933] text-white px-6 py-3 rounded-xl">
                            Search
                        </button>
                    </div>

                    <button className="mt-5 md:mt-6 w-full md:w-auto px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                        Plan Journey
                    </button>
                </div>

                {/* RIGHT */}
                <div className="relative">

                    {/* DESKTOP STACK */}
                    <div className="hidden md:block relative h-[420px]">
                        {destinations.map((item, index) => (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-[520px] h-[180px] bg-white rounded-2xl shadow-xl border border-gray-100 flex gap-5 p-4 transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    transform: `translate(${index * 45}px, ${index * 55}px)`,
                                    zIndex: 10 - index,
                                    opacity: 1 - index * 0.08,
                                }}
                            >
                                <div className="w-[180px] h-full rounded-xl overflow-hidden flex-shrink-0">
                                    <img src={item.image} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{item.state}</p>
                                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                                    <button className="mt-3 text-sm font-medium text-[#FF9933]">
                                        Explore →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE APP STYLE */}
                    <div className="md:hidden mt-6">

                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Top Destinations
                        </h2>

                        <div className="flex flex-col gap-4">

                            {destinations.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md border border-gray-100 p-3 flex gap-3"
                                >
                                    <div className="w-[110px] h-[90px] rounded-xl overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center flex-1">

                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {item.name}
                                        </h3>

                                        <p className="text-xs text-gray-500">
                                            {item.state}
                                        </p>

                                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                            {item.desc}
                                        </p>

                                        <button className="mt-2 text-xs font-medium text-[#FF9933]">
                                            Explore →
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}