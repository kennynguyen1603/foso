"use client"

import ComboSection from "@/containers/service/combo"
import DrinksSection from "@/containers/service/drinks"
import EffectSection from "@/containers/service/effect"
import MedicureSection from "@/containers/service/medicure"
import PedicureSection from "@/containers/service/pedicure"
import { useSearch } from "@/contexts/search-context"
import { SearchX } from "lucide-react"

// Flat list of all service names + descriptions for quick "any matches" check
const allServices = [
  // Combo
  {
    name: "Perfectly Polished",
    description: "Làm mới màu sắc (Mani hoặc Pedi...)",
  },
  {
    name: "Perfectly Polished Deluxe",
    description: "Dưỡng da + phủ gel cao cấp",
  },
  { name: "Nail Art Combo", description: "Vẽ nghệ thuật theo yêu cầu" },
  { name: "Full Set Gel Combo", description: "Bộ gel đầy đủ Mani + Pedi" },
  // Medicure
  { name: "Sơn gel", description: "Làm mới màu sắc (Sơn gel thường)" },
  { name: "Sơn nhũ", description: "Sơn nhũ cao cấp, bền màu lâu" },
  { name: "Mắt mèo", description: "Hiệu ứng mắt mèo huyền bí" },
  { name: "Vẽ nail art", description: "Vẽ hoạ tiết theo yêu cầu" },
  { name: "Ombre màu", description: "Khử màu chuyển sắc ombre" },
  { name: "Đính đá", description: "Đính charm, đá Swarovski" },
  { name: "Dưỡng da tay", description: "Massage + dưỡng ẩm cao cấp" },
  // Pedicure
  { name: "Sơn gel chân", description: "Sơn gel thường chân" },
  { name: "Foot Spa cơ bản", description: "Ngâm chân + massage bàn chân" },
  { name: "Foot Spa nâng cao", description: "Ngâm chân thảo dược + dưỡng ẩm" },
  { name: "Nail art chân", description: "Vẽ hoạ tiết trên móng chân" },
  // Effects
  { name: "Hiệu ứng Da beo", description: "Vân da beo thời thượng" },
  { name: "Mắt mèo", description: "Ánh phản quang mắt mèo" },
  { name: "Sơn nhũ", description: "Nhũ kim tuyến lấp lánh" },
  { name: "Chrome Mirror", description: "Gương phản chiếu chrome" },
  { name: "Ombre gradient", description: "Chuyển màu gradient mịn" },
  { name: "Aurora Glow", description: "Hiệu ứng ánh sáng cực quang" },
  { name: "Glitter Galaxy", description: "Nhũ glitter dày đặc như thiên hà" },
  // Drinks
  { name: "Latte", description: "Sữa tươi + espresso" },
  { name: "Espresso", description: "Cà phê đặc Ý" },
  { name: "Americano", description: "Espresso pha loãng" },
  { name: "Cappuccino", description: "Foam sữa mịn + espresso" },
  { name: "Milkshake", description: "Sữa lắc kem tươi" },
  { name: "Juice tươi", description: "Nước ép hoa quả tươi" },
]

export default function ServiceList() {
  const { query, setQuery } = useSearch()
  const iq = query.trim().toLowerCase()

  const hasAnyMatch = iq
    ? allServices.some(
        (service) =>
          service.name.toLowerCase().includes(iq) ||
          service.description.toLowerCase().includes(iq)
      )
    : true

  return (
    <div className="divide-y divide-white/10">
      <ComboSection />
      <MedicureSection />
      <PedicureSection />
      <EffectSection />
      <DrinksSection />

      {!hasAnyMatch && (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
          <SearchX className="size-10 text-white/30" />
          <p className="text-lg text-white/60">
            Không tìm thấy dịch vụ nào cho{" "}
            <span className="font-semibold text-[#D4B06A]">
              &quot;{query.trim()}&quot;
            </span>
          </p>
          <p className="text-sm text-white/40">Thử tìm kiếm với từ khóa khác</p>
          <button
            onClick={() => setQuery("")}
            className="mt-2 cursor-pointer text-sm text-[#D4B06A] underline underline-offset-2 transition hover:opacity-70"
          >
            Xoá tìm kiếm
          </button>
        </div>
      )}
    </div>
  )
}
