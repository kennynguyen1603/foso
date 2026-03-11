"use client"

import SectionWrapper from "@/components/layouts/section-wrapper"
import { useSearch } from "@/contexts/search-context"
import Image from "next/image"
import ServiceItem from "./service-item"

interface ServiceData {
  id: string
  name: string
  description?: string
  price: string
  priceNumber: number
  image: string
  duration?: number
}

interface ServiceSectionProps {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  services: ServiceData[]
  imagePosition?: "left" | "right"
}

function highlight(text: string, query: string) {
  if (!query) return <>{text}</>
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-transparent font-bold text-[#FFD97A]">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function ServiceSection({
  id,
  title,
  imageSrc,
  imageAlt,
  services,
  imagePosition = "left",
}: ServiceSectionProps) {
  const { query } = useSearch()
  const iq = query.trim()

  const filtered = iq
    ? services.filter(
        (service) =>
          service.name.toLowerCase().includes(iq.toLowerCase()) ||
          service.description?.toLowerCase().includes(iq.toLowerCase())
      )
    : services

  if (iq && filtered.length === 0) return null

  const imageBlock = (
    <div className="relative h-full min-h-100 overflow-hidden rounded-sm">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )

  const listBlock = (
    <div className="flex h-full flex-col">
      <h2 className="font-dalat mb-4 text-3xl font-normal text-[#E1C084] lg:text-4xl">
        {title}
      </h2>
      <div className="flex flex-1 flex-col justify-between">
        {filtered.map((service) => (
          <ServiceItem
            key={service.id}
            id={service.id}
            name={service.name}
            nameNode={highlight(service.name, iq)}
            descriptionNode={
              service.description
                ? highlight(service.description, iq)
                : undefined
            }
            description={service.description}
            price={service.price}
            priceNumber={service.priceNumber}
            image={service.image}
            duration={service.duration}
          />
        ))}
      </div>
    </div>
  )

  return (
    <SectionWrapper id={id} className="py-10 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {listBlock}
          </>
        ) : (
          <>
            {listBlock}
            {imageBlock}
          </>
        )}
      </div>
    </SectionWrapper>
  )
}
