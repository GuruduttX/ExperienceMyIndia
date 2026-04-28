// import ActivityBookingSection from "@/components/Activity/ActivityBookingSection";
import ActivityBookingSection from "@/components/Activity/ActivityBookingSection";
import ActivityHero from "@/components/Activity/ActivityHero";
import ExperienceHighlights from "@/components/Activity/ExperienceHighlights";
import ExperienceTabs from "@/components/Activity/ExperienceTab";
import { OperatingHours, KnowBeforeYouGo } from "@/components/Activity/OperatingAndKnowBefore";
import WhyChooseEMI from "@/utils/WhyChooseEMI";
import RelatedActivity from "@/components/Activity/RelatedActivity";
import ActivityPolicies from "@/components/Activity/ActivityPolicies";
import FAQSection from "@/components/Activity/FAQSection";


export default function page(){
    const highlights = [
    "Choose from 9 km and 16 km rafting courses packed with exhilarating Grade III & IV rapids — perfect for first-timers and seasoned thrill-seekers alike.",
    "Expert-certified guides brief you on safety, gear up, and stay by your side every stroke of the way.",
    "Navigate the legendary rapids of the mighty Ganges, framed by the Himalayan foothills and the iconic Laxman Jhula.",
    "Shimmering turquoise waters, lush riverbanks and crisp mountain air make this a feast for the senses — not just your adrenaline.",
    "Both 9 km and 16 km routes pass through world-class rapids including Golf Course, Club House and Three Blind Mice.",
    ];

    const inclusions = [
    "Life jacket & helmet",
    "Experienced river guide",
    "All rafting equipment",
    "Safety briefing session",
    ];

     const exclusions = ["Personal expenses", "Travel insurance", "Food & beverages"];
    return (
        <div>
           <ActivityHero/>
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-4">
                <div className="lg:col-span-8 space-y-8">
                    <ExperienceHighlights/>

                    {/* Mobile booking section - appears after title on small screens */}
                    <div className="lg:hidden">
                        <ActivityBookingSection/>
                    </div>

                    <ExperienceTabs highlights={highlights} inclusions={inclusions} exclusions={exclusions}/>   
                    <OperatingHours/>
                    <KnowBeforeYouGo tourName="Shimla Heritage Walk Tour" />        
                </div>
                
                {/* ───── RIGHT: Booking Card (Desktop) ───── */}
                <div className="lg:col-span-4 sticky top-6 hidden lg:block">
                    <ActivityBookingSection/> 
                </div>
           </div>

           <WhyChooseEMI/>
           <ActivityPolicies/>
           <RelatedActivity/>
           <FAQSection/>            

        </div>
    )
}