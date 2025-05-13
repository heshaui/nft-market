import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RCC - NFT Marketplace",
  description: "Trade NFT collections",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen`}
      >
          <ThemeProvider attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
      </body>
    </html>
  );
}
