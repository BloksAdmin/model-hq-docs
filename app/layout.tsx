import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationLoading } from "@/components/navigation-loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Model HQ Documentation",
  description: "Complete documentation for Model HQ platform",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationLoading />
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="flex-1 p-6">{children}</main>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
