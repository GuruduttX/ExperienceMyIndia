import KnowBeforeYouGo from '@/components/TourPackage/KnowBeforeYouGo'
import PolicySection from '@/components/TourPackage/PolicySection'
import ReviewSection from '@/components/TourPackage/ReviewSection'
import TourDetails from '@/components/TourPackage/TourDetails'
import TourHero from '@/components/TourPackage/TourHero'
import TourInclusionExclusion from '@/components/TourPackage/TourInclusionsExclusions'
import TourItinerarySection from '@/components/TourPackage/TourItinearySection'
import TourOptions from '@/components/TourPackage/TourOptions'
import TourSideForm from '@/components/TourPackage/TourSideForm'
import TripHighlights from '@/components/TourPackage/TripHighLights'
import Footer from '@/utils/Footer'
import MobileNavbar from '@/utils/Mobile/MobileNavbar'
import Navbar from '@/utils/NavBar'

const page = () => {
    return (
        <>
            <Navbar />
            <TourHero />
            <TourDetails />
            <section className="w-full min-h-screen bg-white  ">
                <div className="max-w-7xl mx-auto sm:py-6 py-12 ">

                    {/* GRID */}
                    <div className=" grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10  ">

                        {/* LEFT CONTENT */}
                        <main className="sm:space-6 space-y-8">
                            <TourOptions />
                            <TripHighlights />
                            <TourItinerarySection />
                        </main>

                        {/* RIGHT SIDEBAR */}

                        <aside className="hidden lg:block ">
                            <div className="sticky top-28">

                                <TourSideForm />

                            </div>
                        </aside>




                    </div>
                </div>
            </section>
            <TourInclusionExclusion />
            <KnowBeforeYouGo />
            <ReviewSection />
            <PolicySection />
            <Footer />
        </>
    )
}

export default page