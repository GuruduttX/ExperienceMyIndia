import CityAboutSection from "@/components/CityPages/CityAboutSection";
import CityFAQSection from "@/components/CityPages/CityFAQSection";
import HeroSection from "@/components/CityPages/HeroSection";
import CityTourCard from "@/components/CityPages/CityTourCard";
import CTABanner from "@/utils/CTABanner";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/NavBar";
import MobileNavWrapper from "@/utils/Mobile/MobileNavWrapper";


export default function page(){
    return (
        <div>
         <Navbar/>
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

         <CityTourCard/>
         <CTABanner/>

         <CityFAQSection city="Shimla"/>

         <Footer/>
         



        </div>
    )
}
