import Image from "next/image"
import Link from "next/link"

export default function BookingSection() {
  return (
    <div className="relative h-[55vh] w-full overflow-hidden">
      <Image
        src="/booking.png"
        alt="Booking background"
        fill
        className="object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-[#614F38]/65" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center lg:py-28">
        <h2 className="font-playfair mb-4 text-4xl font-normal text-white lg:text-5xl">
          Đặt lịch hẹn chữa lành
        </h2>
        <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/75">
          Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ
          những điều nhỏ nhất và lan tỏa đến cả tâm hồn.
        </p>
        <Link
          href="/contact"
          className="border border-white px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-[#614F38]"
        >
          Trải Nghiệm Ngay
        </Link>
      </div>
    </div>
  )
}
