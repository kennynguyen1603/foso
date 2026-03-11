"use client"

import { useCart } from "@/contexts/cart-context"
import { Check, Plus } from "lucide-react"
import { ReactNode, useState } from "react"

interface ServiceItemProps {
  id: string
  name: string
  nameNode?: ReactNode
  description?: string
  descriptionNode?: ReactNode
  price: string
  priceNumber: number
  image: string
  duration?: number
}

export default function ServiceItem({
  id,
  name,
  nameNode,
  description,
  descriptionNode,
  price,
  priceNumber,
  image,
  duration,
}: ServiceItemProps) {
  const { addItem, openCart } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({ id, name, price: priceNumber, image, duration })
    openCart()
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="flex items-center justify-between border-b border-white/10 py-3">
      <div className="flex-1">
        <h4 className="text-[15px] font-semibold text-white">
          {nameNode ?? name}
        </h4>
        {(descriptionNode ?? description) && (
          <p className="mt-0.5 text-[13px] text-white/60">
            {descriptionNode ?? description}
          </p>
        )}
        <p className="mt-1 text-[15px] font-bold text-[#D4B06A]">{price}</p>
      </div>
      <button
        onClick={handleAdd}
        className={`ml-4 flex size-6.5 shrink-0 cursor-pointer items-center justify-center transition-all active:scale-90 ${
          added ? "scale-110 text-[#D4B06A]" : "text-white/90 hover:text-white"
        }`}
        title={`Thêm ${name} vào giỏ hàng`}
      >
        {added ? <Check className="size-4.5" /> : <Plus className="size-4.5" />}
      </button>
    </div>
  )
}
