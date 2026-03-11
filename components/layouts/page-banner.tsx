import SectionWrapper from "@/components/layouts/section-wrapper"
import Image from "next/image"
import type { ReactNode } from "react"

interface PageBannerProps {
  title: string
  imageSrc?: string
  children?: ReactNode
}

export default function PageBanner({
  title,
  imageSrc = "/banner.png",
  children,
}: PageBannerProps) {
  return (
    <div className="relative min-h-75 w-full overflow-hidden lg:min-h-95">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#614F38]/70 via-[#614F38]/60 to-[#614F38]" />

      <div className="relative z-10 pt-36 lg:pt-60">
        <SectionWrapper>
          <div className="flex flex-col items-center py-8 lg:py-12">
            <h1 className="font-playfair text-4xl font-normal text-white lg:text-7xl">
              {title}
            </h1>
          </div>

          {children}
        </SectionWrapper>
      </div>
    </div>
  )
}
