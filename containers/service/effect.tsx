import ServiceSection from "./service-section"

const effectServices = [
  {
    id: "effect-da-beo",
    name: "Hiệu ứng Da beo",
    description: "Vân da beo thời thượng",
    price: "88k",
    priceNumber: 88000,
    image: "/effect-service.png",
    duration: 10,
  },
  {
    id: "effect-mat-meo",
    name: "Mắt mèo",
    description: "Ánh phản quang mắt mèo",
    price: "88k",
    priceNumber: 88000,
    image: "/effect-service.png",
    duration: 10,
  },
  {
    id: "effect-nhũ",
    name: "Sơn nhũ",
    description: "Nhũ kim tuyến lấp lánh",
    price: "88k",
    priceNumber: 88000,
    image: "/effect-service.png",
    duration: 10,
  },
  {
    id: "effect-chrome",
    name: "Chrome Mirror",
    description: "Gương phản chiếu chrome",
    price: "120k",
    priceNumber: 120000,
    image: "/effect-service.png",
    duration: 15,
  },
  {
    id: "effect-ombre",
    name: "Ombre gradient",
    description: "Chuyển màu gradient mịn",
    price: "150k",
    priceNumber: 150000,
    image: "/effect-service.png",
    duration: 20,
  },
  {
    id: "effect-aurora",
    name: "Aurora Glow",
    description: "Hiệu ứng ánh sáng cực quang",
    price: "130k",
    priceNumber: 130000,
    image: "/effect-service.png",
    duration: 15,
  },
  {
    id: "effect-glitter",
    name: "Glitter Galaxy",
    description: "Nhũ glitter dày đặc như thiên hà",
    price: "100k",
    priceNumber: 100000,
    image: "/effect-service.png",
    duration: 12,
  },
]

export default function EffectSection() {
  return (
    <ServiceSection
      id="effects"
      title="Hiệu Ứng"
      imageSrc="/effect-service.png"
      imageAlt="Hiệu Ứng - Nail art design"
      services={effectServices}
      imagePosition="right"
    />
  )
}
