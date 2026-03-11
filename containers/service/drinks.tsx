import ServiceSection from "./service-section"

const drinkItems = [
  {
    id: "drink-latte",
    name: "Latte",
    description: "Sữa tươi + espresso",
    price: "50k",
    priceNumber: 50000,
    image: "/drinks-service.jpg",
  },
  {
    id: "drink-espresso",
    name: "Espresso",
    description: "Cà phê đặc Ý",
    price: "50k",
    priceNumber: 50000,
    image: "/drinks-service.jpg",
  },
  {
    id: "drink-americano",
    name: "Americano",
    description: "Espresso pha loãng",
    price: "50k",
    priceNumber: 50000,
    image: "/drinks-service.jpg",
  },
  {
    id: "drink-cappuccino",
    name: "Cappuccino",
    description: "Foam sữa mịn + espresso",
    price: "50k",
    priceNumber: 50000,
    image: "/drinks-service.jpg",
  },
  {
    id: "drink-milkshake",
    name: "Milkshake",
    description: "Sữa lắc kem tươi",
    price: "70k",
    priceNumber: 70000,
    image: "/drinks-service.jpg",
  },
  {
    id: "drink-juice",
    name: "Juice tươi",
    description: "Nước ép hoa quả tươi",
    price: "60k",
    priceNumber: 60000,
    image: "/drinks-service.jpg",
  },
]

export default function DrinksSection() {
  return (
    <ServiceSection
      id="drinks"
      title="Drinks"
      imageSrc="/drinks-service.jpg"
      imageAlt="Drinks - Latte art coffee"
      services={drinkItems}
      imagePosition="left"
    />
  )
}
