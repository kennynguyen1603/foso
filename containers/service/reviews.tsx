"use client"

import SectionWrapper from "@/components/layouts/section-wrapper"
import Image from "next/image"
import { useState } from "react"

const reviews = [
  {
    name: "Linh Nguyễn",
    avatar: "/linhnguyen-avt.png",
    photo: "/linhnguyen.png",
    text: "Dịch vụ tuyệt vời, không gian thư giãn và nhân viên rất chu đáo. Mình sẽ quay lại lần nữa!",
  },
  {
    name: "Thuỳ Đỗ",
    avatar: "/thuydo-avt.png",
    photo: "/thuydo.png",
    text: "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn.",
  },
  {
    name: "John Doe",
    avatar: "/johndoe-avt.png",
    photo: "/johndoe.png",
    text: "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian, rất sang trọng và thư giãn.",
  },
]

export default function ReviewsSection() {
  const [active, setActive] = useState(1)

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length)
  const next = () => setActive((a) => (a + 1) % reviews.length)

  const getIndex = (offset: number) =>
    (active + offset + reviews.length) % reviews.length

  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/service-bg.png"
        alt="Reviews background"
        fill
        className="w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#614F38]/50 via-[#614F38]/75 to-[#3D2C1A]" />

      <div className="relative z-10 py-16 lg:py-24">
        <SectionWrapper>
          <div className="mb-16 text-center text-white">
            <p className="mb-2 text-[20px] font-medium tracking-[0.3em] uppercase">
              NHẬN XÉT TỪ
            </p>
            <h2 className="font-dalat text-5xl font-normal lg:text-6xl">
              Khách Hàng
            </h2>
          </div>

          <div className="relative flex items-end justify-center gap-14">
            <button
              onClick={prev}
              className="absolute top-1/2 left-0 z-20 -translate-y-1/2 p-3 text-2xl text-white/60 transition hover:text-white"
              aria-label="Previous"
            >
              ‹
            </button>

            {[-1, 0, 1].map((offset) => {
              const idx = getIndex(offset)
              const isCenter = offset === 0
              return (
                <div
                  key={offset}
                  onClick={() => {
                    if (offset === -1) prev()
                    if (offset === 1) next()
                  }}
                  className={`flex cursor-pointer flex-col transition-all duration-300 ${
                    isCenter
                      ? "z-10 w-full max-w-[20rem] scale-105 opacity-100 lg:max-w-sm"
                      : "hidden w-full max-w-64 scale-95 opacity-70 lg:flex"
                  }`}
                >
                  <div className="relative mb-5 aspect-3/4 w-full overflow-hidden rounded-sm">
                    <Image
                      src={reviews[idx].photo}
                      alt={reviews[idx].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-[#D4B06A] text-lg font-bold text-white"></div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={reviews[idx].avatar}
                        alt={reviews[idx].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-semibold text-white">
                        {reviews[idx].name}
                      </p>
                      <p className="mt-1 line-clamp-3 text-[13px] text-white/70">
                        {reviews[idx].text}
                      </p>
                      <button className="mt-1.5 text-[13px] text-[#D4B06A] underline-offset-2 hover:underline">
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}

            <button
              onClick={next}
              className="absolute top-1/2 right-0 z-20 -translate-y-1/2 p-3 text-2xl text-white/60 transition hover:text-white"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "size-2.5 rounded-full bg-white"
                    : "size-2 rounded-full bg-white/40"
                }`}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  )
}
