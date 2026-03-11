import Image from "next/image"
import Link from "next/link"

const sitemapLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/service" },
  { label: "Tin tức", href: "/news" },
  { label: "Liên hệ", href: "/contact" },
]

export default function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#291e0a] pt-14 pb-6">
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 right-0 opacity-70">
        <Image
          src="/flower.png"
          alt="Flower decoration"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">
          {/* Column 1: Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />

          {/* Column 2: Information */}
          {/* 2-column grid: left = sitemap 1-3 + contact, right = sitemap 4-5 + button */}
          <div className="grid grid-cols-2 gap-8">
            {/* LEFT sub-column */}
            <div className="flex flex-col gap-8">
              {/* SITEMAP label + first 3 links */}
              <div className="flex flex-col">
                <p className="mb-3 flex items-center gap-2 text-[9px] font-bold tracking-widest text-[#9A8C7A] uppercase">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9A8C7A]"></span>
                    <span className="h-1.5 w-1.5 rounded-full border border-[#9A8C7A]"></span>
                  </span>
                  <span className="mt-0.5">SITEMAP</span>
                </p>
                <ul className="flex flex-col gap-1.5">
                  {sitemapLinks.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-playfair text-[15px] text-[#E8E2DA] transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LIÊN HỆ block */}
              <div className="flex flex-col gap-1.5">
                <p className="mb-2 flex items-center gap-2 text-[9px] font-bold tracking-widest text-[#9A8C7A] uppercase">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9A8C7A]"></span>
                    <span className="h-1.5 w-1.5 rounded-full border border-[#9A8C7A]"></span>
                  </span>
                  <span className="mt-0.5">LIÊN HỆ</span>
                </p>
                <p className="text-[13px] font-semibold tracking-wide text-[#E8E2DA]">
                  +84 89 812 12 97
                </p>
                <p className="text-[12px] leading-snug text-[#E8E2DA]">
                  6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh
                  <br />
                  <span className="text-[#E8E2DA]/80 italic">
                    (gần Crescent Mall)
                  </span>
                </p>
                <div className="flex flex-col gap-0.5 text-[12px] text-[#E8E2DA]">
                  <div className="flex">
                    <span className="w-28 text-[#E8E2DA]">Thứ 2 - Thứ 6:</span>
                    <span>09:00 - 19:00</span>
                  </div>
                  <div className="flex">
                    <span className="w-28 text-[#E8E2DA]">
                      Thứ 7 - Chủ nhật:
                    </span>
                    <span>09:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT sub-column — Tin tức/Liên hệ + button, same left axis */}
            <div className="flex flex-col items-start justify-between">
              {/* Sitemap links 4-5 (Tin tức, Liên hệ) */}
              <ul className="flex flex-col gap-1.5 pt-7">
                {sitemapLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-playfair text-[15px] text-[#E8E2DA] transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Button — directly in same flex-col, same left edge as links above */}
              <Link
                href="/contact"
                className="group relative flex h-27.5 w-50 cursor-pointer items-center justify-center"
              >
                <div className="absolute inset-0 -rotate-15 rounded-[50%] border border-[#C9A84C] transition duration-500 group-hover:rotate-0 group-hover:bg-[#C9A84C]"></div>
                <span className="relative z-10 text-[13px] font-semibold tracking-wide text-[#C9A84C] transition duration-500 group-hover:text-[#1C1007]">
                  Đặt lịch ngay
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: Social + Copyright */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 py-8 lg:flex-row">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#E8E2DA] transition hover:text-[#C9A84C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.87V15h-2.5v-3H10.5V9.75c0-2.48 1.47-3.85 3.73-3.85 1.08 0 2.21.19 2.21.19v2.44h-1.25c-1.23 0-1.61.77-1.61 1.55V12h2.74l-.44 3H13.5v6.87A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-[#E8E2DA] transition hover:text-[#C9A84C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.07 8.07 0 0 0 4.7 1.5V6.73a4.85 4.85 0 0 1-.93-.04z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Zalo"
              className="group flex size-6 items-center justify-center rounded-full border border-[#E8E2DA] transition hover:border-[#C9A84C]"
            >
              <span className="text-[6px] font-bold text-[#E8E2DA] transition group-hover:text-[#C9A84C]">
                Zalo
              </span>
            </a>
          </div>

          <p className="text-[10px] font-medium tracking-wider text-[#E8E2DA]/40">
            © 2025 — Copyright The OM Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
