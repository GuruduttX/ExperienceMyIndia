import CityAboutSection from "@/components/CityPages/CityAboutSection";
import CityFAQSection from "@/components/CityPages/CityFAQSection";
import HeroSection from "@/components/CityPages/HeroSection";
import CityTourCard from "@/components/CityPages/CityTourCard";
import CTABanner from "@/utils/CTABanner";
import MobileNavWrapper from "@/utils/Mobile/MobileNavWrapper";
import InfiniteTourCarousel from "@/components/Home/InfiniteTourCaruosel";
import ReviewsSection from "@/components/CityPages/ReviewsSection";
import OfferBanner from "@/utils/OfferBanner";
import ReviewsGallery from "@/components/CityPages/ReviewsGallery";
import PopularDestinations from "@/components/CityPages/PopularDestinations";
import CityHandbook from "@/components/CityPages/CityHandBook";
import WhyChooseEMI from "@/utils/WhyChooseEMI";
import CityBestDeals from "@/components/CityPages/CityBestDeals";
import PremiumMarquee from "@/utils/PremiumMarquee";
import TrendingCities from "@/components/CityPages/TreindingCities";

export default function page(){
    return (
        <div>
       
         <MobileNavWrapper/>
         <HeroSection/>
         <CityAboutSection
            city="Shimla"
            usp={["romance", "adventure", "serene beauty"]}
            highlights={[
                "colonial architecture",
                "snowy mountains",
                "pleasant weather",
            ]}
            activities={[
                "Mall Road strolls",
                "paragliding",
                "trekking",
            ]}
         />
         <PremiumMarquee/>

         <CityTourCard/>
         

         <CTABanner/>

         <TrendingCities/>
         <ReviewsSection/>
         <CityBestDeals/>
         
         <InfiniteTourCarousel/>
         <OfferBanner/>

         <PopularDestinations/>

         <ReviewsGallery/>
         <CityHandbook/>

         <WhyChooseEMI/>

         <CityFAQSection city="Shimla"/>

         



        </div>
    )
}
