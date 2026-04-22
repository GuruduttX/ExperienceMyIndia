export type Meals = {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
};

export type TransferItem = {
  type: string;
  vehicle: string;
  from: string;
  to: string;
  stops: number;
};

export type ActivityItem = {
  name: string;
  ticketIncluded: boolean;
  images: string[];
};

export type ExperienceItem = {
  name: string;
  image: string;
};

export type HotelItem = {
  name: string;
  image: string;
  rating: string;
};

export type RecommendedItem = {
  name: string;
  image: string;
};

export type ItineraryDay = {
  day: string;
  title: string;
  locationBanner: {
    image: string;
    city: string;
    days: number;
    thumbs: string[];
    extraCount: number;
  } | null;
  description: string;
  transfers: TransferItem[];
  activities: ActivityItem[];
  experiences: ExperienceItem[];
  stay: {
    checkIn: string;
    checkOut: string;
    nights: string;
    note: string;
  };
  hotels: HotelItem[];
  meals: Meals;
  highlight: string;
  recommended: RecommendedItem[];
  summary: {
    transfers: string[];
    activities: string[];
    hotel: string | null;
    mealNote: string;
    counts: {
      activities: number;
      hotel: number;
      transfers: number;
    };
  };
};
