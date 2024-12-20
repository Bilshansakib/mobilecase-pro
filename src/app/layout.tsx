import type { Metadata } from "next";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { Recursive } from 'next/font/google';
import "./globals.css";
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ['latin'] })

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${recursive.className} ${recursive.className} antialiased`}
      >
        <NavBar></NavBar>
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers> {children}</Providers>
          </div>
          <Footer></Footer>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
