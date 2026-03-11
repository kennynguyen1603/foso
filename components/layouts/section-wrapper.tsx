import { cn } from "@/lib/utils"
import React from "react"

export default function SectionWrapper({
  children,
  className,
  id,
}: Readonly<{
  children: React.ReactNode
  className?: string
  id?: string
}>) {
  return (
    <section id={id} className={cn(`px-4 lg:px-20`, className)}>
      {children}
    </section>
  )
}
