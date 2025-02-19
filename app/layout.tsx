import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "nikiv.dev | Personal website, docs",
    template: "%s | nikiv.dev",
  },
  description: "Personal website, docs",
  metadataBase: new URL("https://nikiv.dev"),
  openGraph: {
    title: "nikiv.dev",
    description: "Personal website, docs",
    url: "https://nikiv.dev",
    siteName: "nikiv.dev",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "nikiv",
    "nikita voloboev",
    "personal website",
    "docs",
    "looking back",
    "solbond",
    "learn anything",
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
