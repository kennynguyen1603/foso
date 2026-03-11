import ServiceSection from "./service-section"

const medicureServices = [
  {
    id: "medicure-1",
    name: "Sơn gel",
    description: "Làm mới màu sắc (Sơn gel thường)",
    price: "264k",
    priceNumber: 264000,
    image: "/medicure-service.png",
    duration: 10,
  },
  {
    id: "medicure-2",
    name: "Sơn nhũ",
    description: "Sơn nhũ cao cấp, bền màu lâu",
    price: "88k",
    priceNumber: 88000,
    image: "/medicure-service.png",
    duration: 10,
  },
  {
    id: "medicure-3",
    name: "Mắt mèo",
    description: "Hiệu ứng mắt mèo huyền bí",
    price: "88k",
    priceNumber: 88000,
    image: "/medicure-service.png",
  },
  {
    id: "medicure-4",
    name: "Vẽ nail art",
    description: "Vẽ hoạ tiết theo yêu cầu",
    price: "150k",
    priceNumber: 150000,
    image: "/medicure-service.png",
    duration: 20,
  },
  {
    id: "medicure-5",
    name: "Ombre màu",
    description: "Khử màu chuyển sắc ombre",
    price: "180k",
    priceNumber: 180000,
    image: "/medicure-service.png",
    duration: 25,
  },
  {
    id: "medicure-6",
    name: "Đính đá",
    description: "Đính charm, đá Swarovski",
    price: "120k",
    priceNumber: 120000,
    image: "/medicure-service.png",
    duration: 15,
  },
  {
    id: "medicure-7",
    name: "Dưỡng da tay",
    description: "Massage + dưỡng ẩm cao cấp",
    price: "90k",
    priceNumber: 90000,
    image: "/medicure-service.png",
    duration: 15,
  },
]

export default function MedicureSection() {
  return (
    <ServiceSection
      id="medicure"
      title="Medicure"
      imageSrc="/medicure-service.png"
      imageAlt="Medicure - Nail filing treatment"
      services={medicureServices}
      imagePosition="right"
    />
  )
}
