import ServiceSection from "./service-section"

const pedicureServices = [
  {
    id: "pedicure-1",
    name: "Sơn gel chân",
    description: "Sơn gel thường chân",
    price: "390k",
    priceNumber: 390000,
    image: "/pedicure-service.png",
    duration: 45,
  },
  {
    id: "pedicure-2",
    name: "Foot Spa cơ bản",
    description: "Ngâm chân + massage bàn chân",
    price: "290k",
    priceNumber: 290000,
    image: "/pedicure-service.png",
    duration: 30,
  },
  {
    id: "pedicure-3",
    name: "Foot Spa nâng cao",
    description: "Ngâm chân thảo dược + dưỡng ẩm",
    price: "420k",
    priceNumber: 420000,
    image: "/pedicure-service.png",
    duration: 50,
  },
  {
    id: "pedicure-4",
    name: "Nail art chân",
    description: "Vẽ hoạ tiết trên móng chân",
    price: "150k",
    priceNumber: 150000,
    image: "/pedicure-service.png",
    duration: 20,
  },
]

export default function PedicureSection() {
  return (
    <ServiceSection
      id="pedicure"
      title="Pedicure"
      imageSrc="/pedicure-service.png"
      imageAlt="Pedicure - Foot treatment"
      services={pedicureServices}
      imagePosition="left"
    />
  )
}
