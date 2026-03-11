"use client"

import { useCart } from "@/contexts/cart-context"
import { ChevronRight, Clock, Minus, MoveRight, Plus, X } from "lucide-react"
import Image from "next/image"

function CartSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-4 px-5 py-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3">
          <div className="bg-skeleton size-16 shrink-0 rounded" />
          <div className="flex flex-1 flex-col gap-2 pt-1">
            <div className="bg-skeleton h-3 w-2/3 rounded" />
            <div className="bg-skeleton h-3 w-1/3 rounded" />
            <div className="bg-skeleton h-3 w-1/2 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

function Stepper({
  value,
  onDecrement,
  onIncrement,
}: {
  value: number
  onDecrement: () => void
  onIncrement: () => void
}) {
  return (
    <div className="flex items-center gap-2 rounded border border-[#C9A84C] px-2 py-0.5">
      <button
        onClick={onDecrement}
        className="cursor-pointer text-[#614F38] transition hover:opacity-60"
      >
        <Minus className="size-3" />
      </button>
      <span className="min-w-4 text-center text-sm font-semibold text-[#614F38]">
        {value}
      </span>
      <button
        onClick={onIncrement}
        className="cursor-pointer text-[#614F38] transition hover:opacity-60"
      >
        <Plus className="size-3" />
      </button>
    </div>
  )
}

export function CartSidebar() {
  const {
    isCartOpen,
    closeCart,
    openBooking,
    items,
    loading,
    technician,
    totalPrice,
    removeItem,
    updateQuantity,
    updateEffectQuantity,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-85 max-w-full flex-col bg-[#FAF8F3] shadow-2xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E8E4DA] px-5 py-4">
          <h2 className="font-playfair text-2xl font-normal text-[#614F38]">
            Giỏ Hàng
          </h2>
          <button
            onClick={closeCart}
            className="cursor-pointer text-[#614F38]/60 transition hover:text-[#614F38]"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <CartSkeleton />
          ) : items.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-[#614F38]/50">
              Giỏ hàng trống
            </div>
          ) : (
            <ul className="divide-y divide-[#E8E4DA]">
              {items.map((item) => (
                <li key={item.id} className="px-5 py-4">
                  <div className="flex gap-3">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-semibold text-[#614F38]">
                          {item.name}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-2 shrink-0 cursor-pointer text-[#614F38]/40 transition hover:text-[#614F38]"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <span className="text-sm text-[#614F38]">
                        {item.price.toLocaleString("vi-VN")} đ
                      </span>
                      {item.duration && (
                        <span className="mt-0.5 flex items-center gap-1 text-xs text-[#614F38]/50">
                          <Clock className="size-3" />
                          {item.duration} phút
                        </span>
                      )}
                    </div>
                  </div>

                  {item.effects && item.effects.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2 pl-6">
                      {item.effects.map((effect) => (
                        <div
                          key={effect.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div className="relative size-10 shrink-0 overflow-hidden rounded-sm">
                              <Image
                                src={effect.thumbnail || item.image}
                                alt={effect.label}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            </div>
                            <div className="text-xs text-[#614F38]/70">
                              Hiệu ứng:{" "}
                              <span className="font-bold">{effect.label}</span>
                            </div>
                          </div>
                          <Stepper
                            value={effect.quantity}
                            onDecrement={() =>
                              updateEffectQuantity(item.id, effect.id, -1)
                            }
                            onIncrement={() =>
                              updateEffectQuantity(item.id, effect.id, 1)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {(!item.effects || item.effects.length === 0) && (
                    <div className="mt-2 flex justify-end">
                      <Stepper
                        value={item.quantity}
                        onDecrement={() => updateQuantity(item.id, -1)}
                        onIncrement={() => updateQuantity(item.id, 1)}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {!loading && (
          <div className="border-t border-[#E8E4DA] bg-[#FAF8F3]">
            {technician && (
              <button className="flex w-full cursor-pointer items-center gap-3 px-5 py-3 transition hover:bg-[#EAE8E1]">
                <p className="flex-1 text-left text-sm text-[#614F38]/70">
                  Kỹ thuật viên
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative size-6 overflow-hidden rounded-full">
                    <Image
                      src={technician.avatar}
                      alt={technician.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="flex-1 text-left text-sm text-[#614F38]">
                    {technician.name}
                  </span>
                  <ChevronRight className="text-primary size-5" />
                </div>
              </button>
            )}

            <div className="flex items-center justify-between border-t border-[#E8E4DA] px-5 py-3">
              <span className="text-sm text-[#614F38]/70">Tổng thanh toán</span>
              <span className="text-base font-bold text-[#f36363]">
                {totalPrice.toLocaleString("vi-VN")} đ
              </span>
            </div>

            <div className="px-5 pt-2 pb-6">
              <button
                onClick={openBooking}
                disabled={items.length === 0}
                className="bg-primary flex w-full cursor-pointer items-center justify-between p-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#7a6248] disabled:opacity-40"
              >
                Tiếp Tục
                <MoveRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
