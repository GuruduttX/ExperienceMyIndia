"use client";

const experiences = [
    {
        title: "Goa Beach Tour",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Kerala Backwaters",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Rajasthan Royal Trip",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Himalayan Adventure",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop",
    },

    // 🔥 ICONIC INDIA
    {
        title: "Taj Mahal Tour",
        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Red Fort Visit",
        image:
            "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Varanasi Spiritual Trip",
        image:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Manali Snow Trip",
        image:
            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Leh Ladakh Ride",
        image:
            "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?q=80&w=400&auto=format&fit=crop",
    },
    {
        title: "Rishikesh Adventure",
        image:
            "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=400&auto=format&fit=crop",
    },

    {
        title: "Andaman Island Escape",
        image:
            "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=400&auto=format&fit=crop",
    },
];

export default function WhatsNewExperience() {
    return (
        <section className="md:hidden px-4 pt-6 pb-3">

            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                New Packages
            </h2>

            {/* Scroll Container */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">

                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center min-w-[85px] snap-start"
                    >

                        {/* Circle Image */}
                        <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-500 shadow-md">

                            <div className="w-full h-full rounded-full bg-white overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                        </div>

                        {/* Title */}
                        <p className="text-[11px] text-center mt-2 text-gray-800 font-medium leading-tight">
                            {item.title}
                        </p>

                    </div>
                ))}

            </div>
        </section>
    );
}