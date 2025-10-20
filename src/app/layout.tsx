import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "./components/MainNavbar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Learning Next.js App Router"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <MainNavbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
