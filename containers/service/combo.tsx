import ServiceSection from "./service-section"

const comboServices = [
  {
    id: "combo-perfectly-1",
    name: "Perfectly Polished",
    description: "Làm mới màu sắc (Mani hoặc Pedi...)",
    price: "390k",
    priceNumber: 390000,
    image: "/combo-service.png",
    duration: 45,
  },
  {
    id: "combo-perfectly-2",
    name: "Perfectly Polished Deluxe",
    description: "Dưỡng da + phủ gel cao cấp",
    price: "490k",
    priceNumber: 490000,
    image: "/combo-service.png",
    duration: 60,
  },
  {
    id: "combo-perfectly-3",
    name: "Nail Art Combo",
    description: "Vẽ nghệ thuật theo yêu cầu",
    price: "550k",
    priceNumber: 550000,
    image: "/combo-service.png",
    duration: 75,
  },
  {
    id: "combo-perfectly-4",
    name: "Full Set Gel Combo",
    description: "Bộ gel đầy đủ Mani + Pedi",
    price: "680k",
    priceNumber: 680000,
    image: "/combo-service.png",
    duration: 90,
  },
]

export default function ComboSection() {
  return (
    <ServiceSection
      id="combo"
      title="Gói Combo"
      imageSrc="/combo-service.png"
      imageAlt="Gói Combo - Foot spa treatment"
      services={comboServices}
      imagePosition="left"
    />
  )
}
