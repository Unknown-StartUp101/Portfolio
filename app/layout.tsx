import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mereb Technologies - Building What's Next. Today.",
  description:
    "Born in Ethiopia. Built for the World. We create innovative, scalable technology solutions that drive impact from Addis Ababa to the global stage.",
  keywords:
    "web development, mobile apps, UI/UX design, AI solutions, Ethiopia, Addis Ababa, technology, software development",
  authors: [{ name: "Mereb Technologies" }],
  creator: "Mereb Technologies",
  publisher: "Mereb Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merebtech.com",
    title: "Mereb Technologies - Building What's Next. Today.",
    description: "Born in Ethiopia. Built for the World. We create innovative, scalable technology solutions.",
    siteName: "Mereb Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mereb Technologies - Building What's Next. Today.",
    description: "Born in Ethiopia. Built for the World. We create innovative, scalable technology solutions.",
    creator: "@merebtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
