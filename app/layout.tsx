import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "XpertTask - A Fairer Freelance Future",
  description: "0% commissions. Referral-based rankings. Transparent contracts. Finally, a platform that works for freelancers and clients.",
  keywords: "freelance, platform, 0% commission, remote work, freelancers, clients, projects",
  authors: [{ name: "XpertTask Team" }],
  openGraph: {
    title: "XpertTask - A Fairer Freelance Future",
    description: "0% commissions. Referral-based rankings. Transparent contracts. Finally, a platform that works for freelancers and clients.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "XpertTask - A Fairer Freelance Future",
    description: "0% commissions. Referral-based rankings. Transparent contracts. Finally, a platform that works for freelancers and clients.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased bg-[#FAFAFF] min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
