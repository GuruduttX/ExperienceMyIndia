"use client";

const highlights = [
    "Stay in heritage properties that reflect Rajasthan’s rich culture, offering comfort, character, and exceptional value.",
    "Enjoy curated dining experiences including lakeside meals in Udaipur, royal feasts in Jaipur, and desert dining in Jaisalmer.",
    "Explore the serene beauty of Udaipur, where palaces rise over sparkling lakes and every view captures the city’s romantic charm.",
    "Relax in luxurious desert camps in Jaisalmer that combine modern comfort with the unique experience of golden sand dunes.",
    "Travel across Rajasthan in a modern SUV with trained drivers, ensuring safety, comfort, and seamless hospitality.",
];

export default function TripHighlights() {
    return (
        <section className="w-full bg-white pb-10 px-6 md:px-0 ">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    Trip Highlights
                </h2>

                {/* LIST */}
                <div className="space-y-6">

                    {highlights.map((text, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 pb-6 border-b border-gray-200/60 last:border-none hover:border-orange-200 transition"
                        >

                            {/* PREMIUM BULLET */}
                            <div className="relative mt-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-orange-400 blur-sm opacity-50 group-hover:opacity-80 transition" />
                            </div>

                            {/* TEXT */}
                            <p className="text-gray-700 leading-relaxed text-[15px] group-hover:text-gray-900 transition">
                                {text}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}