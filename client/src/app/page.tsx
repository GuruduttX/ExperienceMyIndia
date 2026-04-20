import ExperienceSection from "@/components/Home/ExperienceSection"
import HomeFaqs from "@/components/Home/HomeFaqs"
import HomeHero from "@/components/Home/HomeHero"
import HomeTourSection from "@/components/Home/HomeTourSection/HomeTourSection"
import IndiaStatesStrip from "@/components/Home/IndiaStatesStrip"
import InfiniteTourCarousel from "@/components/Home/InfiniteTourCaruosel"
import LiveStats from "@/components/Home/LiveStats"
import WhatsNewExperience from "@/components/Home/MobileComponents/WhatsNewSection"
import ReviewSection from "@/components/Home/ReviewSection"
import StepsSection from "@/components/Home/StepsSection"
import TourCarousel from "@/components/Home/TourCrauosel"
import TourHoverUpCarousel from "@/components/Home/TourHoverUpCrauosel"
import CTABanner from "@/utils/CTABanner"
import Footer from "@/utils/Footer"
import MobileNavWrapper from "@/utils/Mobile/MobileNavWrapper"
import Navbar from "@/utils/NavBar"
import OfferBanner from "@/utils/OfferBanner"
import WhyChooseUs from "@/utils/WhyChooseUs"


const HomePage = () => {
  return (
    <>

      <Navbar />
      <MobileNavWrapper />
      <HomeHero />
      <IndiaStatesStrip />
      <WhatsNewExperience />
      <ExperienceSection />
      <StepsSection />
      <HomeTourSection />
      <LiveStats />
      <TourCarousel />
      <HomeTourSection />
      <ReviewSection />
      <InfiniteTourCarousel />
      <WhyChooseUs />
      <HomeTourSection />
      <CTABanner />
      <TourHoverUpCarousel />
      <OfferBanner />
      <HomeTourSection />
      <HomeFaqs />
      <Footer />
    </>
  )
}

export default HomePage