"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { cn } from "@/lib/utils"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import SectionWrapper from "./section-wrapper"

export default function Header() {
  const pathname = usePathname()
  const { totalItems, loading, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const validPaths = ["/", "/about", "/service", "/news", "/contact"]
  const isNotFound = !validPaths.some(
    (path) => pathname === path || (path !== "/" && pathname?.startsWith(path))
  )

  if (isNotFound) {
    return null
  }

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/service", label: "Dịch vụ" },
    { href: "/news", label: "Tin tức" },
    { href: "/contact", label: "Liên hệ" },
  ]

  return (
    <>
      <div
        className={cn(
          "relative z-10 transition-opacity duration-300",
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <SectionWrapper>
          <header className="flex flex-col items-center justify-between gap-6 py-6 text-white">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-bold text-white">ENGLISH</p>
              <Link href="/" className="ml-24">
                <Image src="/logo.png" alt="logo" width={150} height={150} />
              </Link>
              <Button
                variant="primary"
                className="hover:bg-primary/60 flex cursor-pointer items-center gap-3 transition-all"
                onClick={openCart}
              >
                <ShoppingCart className="size-4 font-medium" />
                <span className="text-sm font-medium tracking-wide text-[#E5E3DC] uppercase">
                  Giỏ hàng
                </span>
                <span className="text-primary flex size-6 items-center justify-center rounded-full bg-[#EAE8E1] text-sm font-semibold">
                  {loading ? (
                    <span className="inline-block size-3 animate-pulse rounded-full bg-[#C9A84C]/50" />
                  ) : (
                    totalItems
                  )}
                </span>
              </Button>
            </div>
            <nav className="mr-10 flex items-center gap-4 lg:gap-14">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (pathname?.startsWith(link.href) && link.href !== "/") ||
                  (link.href === "/service" && pathname === "/")
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex flex-col items-center transition-colors hover:text-white ${isActive ? "font-semibold text-yellow-400" : "text-white/70"}`}
                  >
                    <span
                      className="h-0 overflow-hidden font-bold select-none"
                      aria-hidden="true"
                    >
                      {link.label}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </header>
        </SectionWrapper>
      </div>

      {/* Scrolled (sticky) header — single-row compact layout */}
      <div
        className={cn(
          "fixed top-0 right-0 left-0 z-50 bg-[#3D2B1F] shadow-lg",
          "transition-all duration-300",
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        )}
      >
        <SectionWrapper className="mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="logo" width={90} height={90} />
          </Link>

          {/* Nav */}
          <nav className="ml-26 flex items-center gap-4 lg:gap-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname?.startsWith(link.href) && link.href !== "/") ||
                (link.href === "/service" && pathname === "/")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex flex-col items-center text-sm transition-colors hover:text-white",
                    isActive ? "font-semibold text-yellow-400" : "text-white"
                  )}
                >
                  <span
                    className="h-0 overflow-hidden font-bold select-none"
                    aria-hidden="true"
                  >
                    {link.label}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-yellow-400" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-white">ENGLISH</p>
            <Button
              variant="primary"
              className="hover:bg-primary/60 flex cursor-pointer items-center gap-3 transition-all"
              onClick={openCart}
            >
              <ShoppingCart className="size-4" />
              <span className="text-sm font-medium tracking-wide text-[#E5E3DC] uppercase">
                Giỏ hàng
              </span>
              <span className="text-primary flex size-6 items-center justify-center rounded-full bg-[#EAE8E1] text-sm font-semibold">
                {loading ? (
                  <span className="inline-block size-3 animate-pulse rounded-full bg-[#C9A84C]/50" />
                ) : (
                  totalItems
                )}
              </span>
            </Button>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
