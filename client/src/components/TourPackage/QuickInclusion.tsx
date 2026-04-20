import { MapPin, BedDouble, Coffee } from "lucide-react"
export function QuickInclusion(){
    return (
        <section>

             <div className="flex flex-wrap gap-8 mt-8 text-gray-700">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Transfer Included</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <BedDouble size={18} />
                            <span>Stay Included</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Coffee size={18} />
                            <span>Breakfast Included</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Sightseeing Included</span>
                        </div>

                    </div>
          

        </section>
    )
}