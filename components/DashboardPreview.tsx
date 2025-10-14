"use client"

import Image from "next/image"

export default function DashboardPreview() {
  return (
    <section className="py-16 relative">
      <div className="eden-container">
        <div className="shine-effect rounded-2xl overflow-hidden border border-white/10 shadow-strong">
          <Image
            src="/4492a1d6-427d-4164-87e3-01a0bc0f2f86.png"
            alt="Financial Dashboard"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

