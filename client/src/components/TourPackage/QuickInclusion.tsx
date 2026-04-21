import { BedDouble, Camera, Check, Coffee, Route, X } from "lucide-react";

const inclusions = [
    {
        title: "Transfers",
        description: "Private/local transfers included",
        icon: Route,
        included: true,
    },
    {
        title: "Hotel Stay",
        description: "Comfortable verified stays",
        icon: BedDouble,
        included: true,
    },
    {
        title: "Breakfast",
        description: "Daily breakfast included",
        icon: Coffee,
        included: true,
    },
    {
        title: "Sightseeing",
        description: "Curated city experiences",
        icon: Camera,
        included: false,
    },
];

export function QuickInclusion() {
    return (
        <section className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-5">
            <div className="mb-4 flex items-end justify-between gap-4 border-b border-gray-100 pb-3">
                <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                        Package Summary
                    </p>
                    <h2 className="text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
                        Quick inclusions
                    </h2>
                </div>
                <span className="hidden rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 sm:inline-flex">
                    3 of 4 included
                </span>
            </div>

            <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
                {inclusions.map(({ title, description, icon: Icon, included }) => (
                    <div
                        key={title}
                        className={`flex min-w-[185px] snap-start items-start gap-3 rounded-xl border px-3 py-3 transition-colors sm:min-w-0 ${
                            included
                                ? "border-gray-100 bg-white hover:border-orange-200"
                                : "border-gray-100 bg-gray-50/70 opacity-55 grayscale"
                        }`}
                    >
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                            included
                                ? "bg-orange-50 text-orange-500"
                                : "bg-gray-100 text-gray-400"
                        }`}>
                            <Icon size={17} strokeWidth={2} />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center justify-between gap-2">
                                <h3 className={`truncate text-sm font-semibold ${included ? "text-gray-950" : "text-gray-500"}`}>{title}</h3>
                                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                    included
                                        ? "bg-green-50 text-green-600"
                                        : "bg-gray-100 text-gray-400"
                                }`}>
                                    {included ? (
                                        <Check size={12} strokeWidth={2.7} />
                                    ) : (
                                        <X size={12} strokeWidth={2.7} />
                                    )}
                                </span>
                            </div>
                            <p className={`line-clamp-2 text-[11px] leading-relaxed ${
                                included
                                    ? "text-gray-500"
                                    : "text-gray-400"
                            }`}>
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
