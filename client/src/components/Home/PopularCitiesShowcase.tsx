"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

type CityCard = {
  city: string;
  state: string;
  tagline: string;
  accent: string;
  image: string;
  slug: string;
};

const cityCards: CityCard[] = [
  {
    city: "Jaipur",
    slug: "jaipur",
    state: "Rajasthan",
    tagline: "Pink palaces, bazaars, and royal evenings",
    accent: "Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Udaipur",
    slug: "udaipur",
    state: "Rajasthan",
    tagline: "Lakeside grandeur with candlelit views",
    accent: "Romantic",
    image:
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Varanasi",
    slug: "varanasi",
    state: "Uttar Pradesh",
    tagline: "Sacred ghats, timeless rituals, deep culture",
    accent: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Kerala",
    slug: "kerala",
    state: "God's Own Country",
    tagline: "Backwaters, tea hills, and slow luxury",
    accent: "Scenic",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Leh",
    slug: "leh",
    state: "Ladakh",
    tagline: "High passes, monasteries, and moonlike terrain",
    accent: "Adventure",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkYWtofGVufDB8fDB8fHww",
  },
];

const defaultTransform =
  "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)";

export default function PopularCitiesShowcase() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let animationFrame = 0;
    let lastTime = 0;

    const step = (time: number) => {
      if (!rail) return;

      if (!lastTime) {
        lastTime = time;
      }

      const delta = time - lastTime;
      lastTime = time;

      rail.scrollLeft += delta * 0.03;

      const loopPoint = rail.scrollWidth / 2;
      if (rail.scrollLeft >= loopPoint) {
        rail.scrollLeft = 0;
      }

      animationFrame = window.requestAnimationFrame(step);
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      lastTime = 0;
      animationFrame = window.requestAnimationFrame(step);
    };

    start();

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-8 mt-8 lg:px-12">
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <defs>
          <clipPath id="indian-door-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.13,1 C0.08,1 0.04,0.96 0.04,0.91 L0.04,0.34 C0.04,0.15 0.247,0 0.5,0 C0.753,0 0.96,0.15 0.96,0.34 L0.96,0.91 C0.96,0.96 0.92,1 0.87,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF9933]">
            Popular Cities
          </p>
          <h2 className="md:mt-4 mt-0 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Explore popular INDIAN cities
          </h2>
          <p className="md:mt-5 mt-2 text-base leading-7 text-slate-600 md:text-lg">
            Visit Your favorite cities in india check out the tours NOW!!
          </p>
        </div>

        <div
          ref={railRef}
          className="scrollbar-hide mt-4 flex gap-6 overflow-x-auto pb-6 pt-6"
        >
          {cityCards.map((card) => (
            <TiltCard key={card.city} card={card} />
          ))}
          {cityCards.map((card) => (
            <TiltCard key={`${card.city}-clone`} card={card} duplicate />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({
  card,
  duplicate = false,
}: {
  card: CityCard;
  duplicate?: boolean;
}) {
  const [transform, setTransform] = useState(defaultTransform);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 18;
    const rotateX = (0.5 - py) * 14;

    setTransform(
      `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.035)`,
    );
  };

  const handleLeave = () => {
    setTransform(defaultTransform);
  };

  return (
    <article
      className="group w-[min(82vw,22rem)] min-w-[18rem] shrink-0 md:w-[20rem]"
      aria-hidden={duplicate ? true : undefined}
    >
      <Link href={`/city/${card.slug}`} className="block">
        <div
          className="transition-transform duration-200 ease-out will-change-transform"
          style={{ transform }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="relative mx-auto h-[29rem] w-full overflow-hidden [clip-path:url(#indian-door-clip)] shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
            <Image
              src={card.image}
              alt={card.city}
              fill
              sizes="(max-width: 768px) 82vw, 20rem"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/80" />

            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-5 text-white sm:px-9">
              <span
                className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  backgroundColor:
                    card.accent === "Heritage"
                      ? "rgba(255, 210, 150, 0.92)"
                      : "rgba(220, 241, 225, 0.92)",
                  color: "#1f2937",
                }}
              >
                {card.accent}
              </span>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">
                {card.state}
              </p>
              <h3 className="mt-2 max-w-[13rem] text-[2.6rem] font-semibold leading-none sm:max-w-[14rem] sm:text-5xl">
                {card.city}
              </h3>
              <p className="mt-4 max-w-[13rem] text-sm leading-6 text-white/86 sm:max-w-[14rem] sm:text-[15px]">
                {card.tagline}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-5 flex items-center justify-between px-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} strokeWidth={1.8} className="text-[#138808]" />
          <span>Curated city stories</span>
        </div>

        <Link
          href={`/city/${card.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-[#FF9933]/20 bg-[#FF9933]/10 px-4 py-2 text-sm font-medium text-[#d86c00] transition-colors hover:bg-[#FF9933]/15"
        >
          View trips
          <ArrowRight size={15} strokeWidth={1.9} />
        </Link>
      </div>
    </article>
  );
}
