import { BookingSidebar } from "@/components/cart/booking-sidebar"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import Header from "@/components/layouts/header"
import { CartProvider } from "@/contexts/cart-context"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Libre_Franklin } from "next/font/google"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "The OM Lounge",
  description: "Nail & Spa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("overscroll-none font-sans", libreFranklin.variable)}
    >
      <body className="antialiased">
        <CartProvider>
          <div className="fixed top-0 right-0 left-0 z-50">
            <Header />
          </div>
          {children}
          <CartSidebar />
          <BookingSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
