import DestinationRoutes from '@/components/TourPackage/DestinationRoutes'
import KnowBeforeYouGo from '@/components/TourPackage/KnowBeforeYouGo'
import PolicySection from '@/components/TourPackage/PolicySection'
import ReviewSection from '@/components/TourPackage/ReviewSection'
import TourDetails from '@/components/TourPackage/TourDetails'
import TourHero from '@/components/TourPackage/TourHero'
import TourInclusionExclusion from '@/components/TourPackage/TourInclusionsExclusions'
import TourItinerarySection from '@/components/TourPackage/TourItinearySection'
import TourSideForm from '@/components/TourPackage/TourSideForm'
import TripHighlights from '@/components/TourPackage/TripHighLights'
import Footer from '@/utils/Footer'
import MobileNavWrapper from '@/utils/Mobile/MobileNavWrapper'
import Navbar from '@/utils/NavBar'

const page = () => {
    return (
        <>
            <Navbar />
            <MobileNavWrapper/>
            <TourHero />
            <TourDetails />
            <section className="w-full min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    {/* GRID */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10">

                        {/* LEFT CONTENT */}
                        <main className="min-w-0 space-y-8 sm:space-y-10">
                            <DestinationRoutes/>
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
