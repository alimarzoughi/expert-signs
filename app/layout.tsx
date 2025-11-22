import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const canavar = localFont({
  src: "../public/fonts/CANAVAR.ttf",
  variable: "--font-canavar",
  display: "swap",
})

const vijaya = localFont({
  src: "../public/fonts/vijaya.ttf",
  variable: "--font-heading",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Expert Signs & Graphics - Exceed Your Vision",
  description:
    "Exceed Your Vision. State licensed and insured business signs creator. Expert craftsmanship, sleek designs, and unwavering commitment to safety."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vijaya.variable} ${canavar.variable} ${montserrat.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
