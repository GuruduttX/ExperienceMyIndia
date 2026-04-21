import CityAboutSection from "@/components/CityPages/CityAboutSection";
import CityFAQSection from "@/components/CityPages/CityFAQSection";
import HeroSection from "@/components/CityPages/HeroSection";
import CityTourCard from "@/components/CityPages/CityTourCard";
import CTABanner from "@/utils/CTABanner";


export default function page(){
    return (
        <div>
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

         <CityTourCard/>
         <CityFAQSection city="Shimla"/>
         <CTABanner/>
         



        </div>
    )
}
