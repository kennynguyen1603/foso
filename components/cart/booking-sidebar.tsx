"use client"

import { useCart } from "@/contexts/cart-context"
import { MoveRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

function getDaysOfWeek(from: Date, count = 7) {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(from)
    d.setDate(from.getDate() + i)
    return d
  })
}

const SHORT_DAY = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"]

function formatShortDay(d: Date) {
  const day = d.getDay() // 0 = CN
  const label = SHORT_DAY[day]
  return label
}

function formatDateNum(d: Date) {
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`
}

function generateTimeSlots() {
  const slots: string[] = []
  for (let h = 9; h <= 18; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`)
    if (h < 18 || true) slots.push(`${String(h).padStart(2, "0")}:30`)
  }
  return slots.filter((s) => s <= "18:30")
}

function formatTime(slot: string) {
  const [h, m] = slot.split(":").map(Number)
  const ampm = h < 12 ? "AM" : "PM"
  const hour = h <= 12 ? h : h - 12
  return {
    time: `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
    ampm,
  }
}

const BOOKED_SLOTS = new Set(["09:30", "11:30", "12:30"])

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-w-lg flex-col items-center bg-white px-8 py-10 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-600 transition hover:text-gray-800"
        >
          <X className="size-6 font-bold" />
        </button>

        <div className="relative flex size-25 items-center justify-center">
          <Image
            src="/success-icon.png"
            alt="Success"
            width={100}
            height={100}
          />
        </div>

        <h3 className="font-playfair mb-2 text-2xl font-normal text-[#614F38]">
          Gửi Yêu Cầu Thành Công!
        </h3>
        <p className="text-base leading-relaxed text-[#614F38]/70">
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
          thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
      </div>
    </div>
  )
}

export function BookingSidebar() {
  const { isBookingOpen, closeBooking } = useCart()

  const today = new Date()
  const days = getDaysOfWeek(today)
  const timeSlots = generateTimeSlots()

  const [selectedDay, setSelectedDay] = useState<Date>(today)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const customerName = "Thuỳ Đỗ"
  const customerPhone = "0969-886-969"

  function handleBook() {
    if (!selectedTime) return
    setShowSuccess(true)
  }

  function handleSuccessClose() {
    setShowSuccess(false)
    closeBooking()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isBookingOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeBooking}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-90 max-w-full flex-col bg-[#FAF8F3] shadow-2xl transition-transform duration-300 ease-in-out ${
          isBookingOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8E4DA] px-5 py-4">
          <h2 className="font-playfair text-2xl font-normal text-[#614F38]">
            Xác Nhận Đặt Lịch
          </h2>
          <button
            onClick={closeBooking}
            className="cursor-pointer text-[#614F38]/60 transition hover:text-[#614F38]"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
          {/* Customer info */}
          <div className="flex flex-col gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold tracking-widest text-[#614F38]/50 uppercase">
                Tên khách hàng
              </label>
              <p className="text-sm font-semibold text-[#614F38]">
                {customerName}
              </p>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold tracking-widest text-[#614F38]/50 uppercase">
                Số điện thoại
              </label>
              <p className="text-sm font-semibold text-[#614F38]">
                {customerPhone}
              </p>
            </div>
          </div>

          <div className="h-px bg-[#E8E4DA]" />

          {/* Date picker */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#614F38]/60 uppercase">
              Chọn ngày
            </p>
            <div className="grid grid-cols-4 gap-2">
              {days.slice(0, 4).map((d) => {
                const isSelected =
                  d.toDateString() === selectedDay.toDateString()
                return (
                  <button
                    key={d.toDateString()}
                    onClick={() => {
                      setSelectedDay(d)
                      setSelectedTime(null)
                    }}
                    className={`flex cursor-pointer flex-col items-center rounded py-2 text-xs transition ${
                      isSelected
                        ? "bg-[#C9A84C] font-semibold text-white"
                        : "border border-[#E8E4DA] bg-white text-[#614F38]/70 hover:border-[#C9A84C]"
                    }`}
                  >
                    <span className="font-semibold">{formatShortDay(d)}</span>
                    <span className="mt-0.5 opacity-75">
                      {formatDateNum(d)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="h-px bg-[#E8E4DA]" />

          {/* Time slots */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#614F38]/60 uppercase">
              Chọn khung giờ
            </p>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => {
                const booked = BOOKED_SLOTS.has(slot)
                const selected = selectedTime === slot
                const { time, ampm } = formatTime(slot)
                return (
                  <button
                    key={slot}
                    disabled={booked}
                    onClick={() => setSelectedTime(slot)}
                    className={`flex cursor-pointer flex-col items-center rounded py-2 text-xs transition ${
                      booked
                        ? "cursor-not-allowed border border-dashed border-[#C8C0B4] text-[#C8C0B4]"
                        : selected
                          ? "bg-primary font-semibold text-white"
                          : "border border-[#E8E4DA] bg-white text-[#614F38]/80 hover:border-[#614F38]"
                    }`}
                  >
                    <span className="font-semibold">{time}</span>
                    <span className="mt-0.5 text-[10px] opacity-70">
                      {ampm}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t px-5 py-5">
          <button
            onClick={handleBook}
            disabled={!selectedTime}
            className="bg-primary hover:bg-primary/90 flex w-full cursor-pointer items-center justify-between gap-2 p-4 text-sm font-semibold tracking-wide text-white transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Đặt Lịch
            <MoveRight className="size-4" />
          </button>
        </div>
      </aside>

      {/* Success modal */}
      {showSuccess && <SuccessModal onClose={handleSuccessClose} />}
    </>
  )
}
