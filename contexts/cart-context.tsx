"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  duration?: number
  image: string
  quantity: number
  effects?: CartEffect[]
}

export interface CartEffect {
  id: string
  label: string
  thumbnail?: string
  quantity: number
}

export interface Technician {
  id: string
  name: string
  avatar: string
}

interface CartContextValue {
  items: CartItem[]
  technician: Technician | null
  loading: boolean
  isCartOpen: boolean
  isBookingOpen: boolean
  totalItems: number
  totalPrice: number
  openCart: () => void
  closeCart: () => void
  openBooking: () => void
  closeBooking: () => void
  addItem: (item: Omit<CartItem, "quantity" | "effects">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  updateEffectQuantity: (
    itemId: string,
    effectId: string,
    delta: number
  ) => void
}

const CartContext = createContext<CartContextValue | null>(null)

const MOCK_TECHNICIAN: Technician = {
  id: "1",
  name: "Võ Thị Bích Phượng",
  avatar: "/technician.png",
}

const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: "son-gel-1",
    name: "Sơn gel",
    price: 264000,
    duration: 10,
    image: "/combo-service.png",
    quantity: 1,
    effects: [
      {
        id: "da-beo-1",
        label: "Da beo",
        quantity: 1,
        thumbnail: "/dabeo1.jpg",
      },
      {
        id: "da-beo-2",
        label: "Da beo",
        quantity: 2,
        thumbnail: "/dabeo2.jpg",
      },
    ],
  },
  {
    id: "mat-meo-1",
    name: "Mắt mèo",
    price: 88000,
    image: "/matmeo.jpg",
    quantity: 1,
  },
  {
    id: "son-nhu-1",
    name: "Sơn nhũ",
    price: 88000,
    duration: 10,
    image: "/sonnhu.png",
    quantity: 1,
  },
  {
    id: "son-gel-2",
    name: "Sơn gel",
    price: 88000,
    duration: 10,
    image: "/songel.jpg",
    quantity: 1,
  },
]

function fetchCart(): Promise<CartItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_CART_ITEMS), 400)
  })
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [technician] = useState<Technician | null>(MOCK_TECHNICIAN)
  const [loading, setLoading] = useState(true)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    fetchCart().then((data) => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  const totalItems = items.reduce((sum, item) => {
    const effectQty = item.effects?.reduce((s, e) => s + e.quantity, 0) ?? 0
    return sum + item.quantity + effectQty
  }, 0)

  const totalPrice = items.reduce((sum, item) => {
    const effectTotal =
      item.effects?.reduce((s, e) => s + item.price * e.quantity, 0) ?? 0
    return sum + item.price * item.quantity + effectTotal
  }, 0)

  const openCart = () => {
    setIsCartOpen(true)
    setIsBookingOpen(false)
  }

  const closeCart = () => setIsCartOpen(false)

  const openBooking = () => {
    setIsBookingOpen(true)
    setIsCartOpen(false)
  }

  const closeBooking = () => setIsBookingOpen(false)

  const addItem = (newItem: Omit<CartItem, "quantity" | "effects">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id)
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...newItem, quantity: 1, effects: [] }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    )
  }

  const updateEffectQuantity = (
    itemId: string,
    effectId: string,
    delta: number
  ) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item
        return {
          ...item,
          effects: item.effects
            ?.map((e) =>
              e.id === effectId
                ? { ...e, quantity: Math.max(0, e.quantity + delta) }
                : e
            )
            .filter((e) => e.quantity > 0),
        }
      })
    )
  }

  return (
    <CartContext.Provider
      value={{
        items,
        technician,
        loading,
        isCartOpen,
        isBookingOpen,
        totalItems,
        totalPrice,
        openCart,
        closeCart,
        openBooking,
        closeBooking,
        addItem,
        removeItem,
        updateQuantity,
        updateEffectQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
