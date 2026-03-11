"use client"

import PageBanner from "@/components/layouts/page-banner"
import { useSearch } from "@/contexts/search-context"
import { Search, X } from "lucide-react"
import { useState } from "react"

const tabs = [
  { label: "GÓI COMBO", id: "combo" },
  { label: "MEDICURE", id: "medicure" },
  { label: "PEDICURE", id: "pedicure" },
  { label: "HIỆU ỨNG", id: "effects" },
]

export default function BannerSection() {
  const [activeTab, setActiveTab] = useState(0)
  const { query, setQuery } = useSearch()

  function handleNavigation(id: string, idx: number) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setActiveTab(idx)
  }

  return (
    <PageBanner title="Dịch Vụ">
      <div className="flex flex-col items-center justify-between gap-4 pb-10 lg:flex-row">
        <nav className="flex items-center gap-2 lg:gap-6">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleNavigation(tab.id, index)}
              className={`cursor-pointer text-sm font-medium tracking-wider transition-colors hover:text-white lg:text-base ${
                index === activeTab ? "text-yellow-300" : "text-white/70"
              }`}
            >
              {tab.label}
              {index < tabs.length - 1 && (
                <span className="ml-2 text-white/30 lg:ml-6">/</span>
              )}
            </button>
          ))}
        </nav>

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm"
            className="w-48 border-b border-white/30 bg-transparent py-1.5 pr-8 text-sm text-white placeholder-white/50 transition-colors outline-none focus:border-white/60 lg:w-64 lg:text-base"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer text-white/50 transition hover:text-white"
            >
              <X className="size-4" />
            </button>
          ) : (
            <Search className="absolute top-1/2 right-0 size-4 -translate-y-1/2 text-white/50" />
          )}
        </div>
      </div>
    </PageBanner>
  )
}
