import ExperienceSection from "@/components/Home/ExperienceSection"
import HomeFaqs from "@/components/Home/HomeFaqs"
import HomeHero from "@/components/Home/HomeHero"
import HomeTourSection from "@/components/Home/HomeTourSection/HomeTourSection"
import IndiaStatesStrip from "@/components/Home/IndiaStatesStrip"
import InfiniteTourCarousel from "@/components/Home/InfiniteTourCaruosel"
import LiveStats from "@/components/Home/LiveStats"
import WhatsNewExperience from "@/components/Home/MobileComponents/WhatsNewSection"
import OfferCarousel from "@/components/Home/OfferCarousel"
import PopularCitiesShowcase from "@/components/Home/PopularCitiesShowcase"
import ReviewSection from "@/components/Home/ReviewSection"
import StepsSection from "@/components/Home/StepsSection"
import TourCarousel from "@/components/Home/TourCrauosel"
import TourHoverUpCarousel from "@/components/Home/TourHoverUpCrauosel"
import CTABanner from "@/utils/CTABanner"
import OfferBanner from "@/utils/OfferBanner"
import dynamic from "next/dynamic"
const WhyChooseUs = dynamic(()=> import("@/utils/WhyChooseUs"));



const HomePage = () => {
  return (
    <>
      <HomeHero />
      <IndiaStatesStrip />
      <OfferCarousel />
      <WhatsNewExperience />
      <PopularCitiesShowcase />
      <ExperienceSection />
      <StepsSection />
      <HomeTourSection stateName="Rajasthan" />
      <LiveStats />
      <TourCarousel />
      <HomeTourSection stateName="Kashmir" />
      <ReviewSection />
      <InfiniteTourCarousel />
      <WhyChooseUs />
      <HomeTourSection stateName="Jaipur" />
      <CTABanner />
      <TourHoverUpCarousel />
      <OfferBanner />
      <HomeTourSection stateName="Kerala" />
      <HomeFaqs />
    </>
  );
}

export default HomePage