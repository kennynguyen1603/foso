import Image from "next/image"

import BannerSection from "@/containers/service/banner"
import BookingSection from "@/containers/service/booking"
import FooterSection from "@/containers/service/footer"
import ReviewsSection from "@/containers/service/reviews"
import ServiceList from "@/containers/service/service-list"
import { SearchProvider } from "@/contexts/search-context"

export default function ServicePage() {
  return (
    <SearchProvider>
      <div className="relative min-h-screen w-full">
        <Image
          src="/service-bg.png"
          alt="Service Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#614F38] via-[#614F38]/95 to-[#A47828]/20" />

        <div className="relative z-10">
          <BannerSection />
          <ServiceList />
          <ReviewsSection />
          <BookingSection />
          <FooterSection />
        </div>
      </div>
    </SearchProvider>
  )
}

