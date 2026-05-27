import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/marketplace/Providers";
import { NavBar } from "@/components/marketplace/NavBar";
import Link from "next/link";
import Logo from "@/app/public/empanaditas.png";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiaguenias Marketplace",
  description:
    "Authentic Argentine products from Santiago del Estero, delivered to Austria. Curated food, beverages, spices, sweets, and handcrafts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Providers>
          <NavBar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <Link href="/">
                <Image src={Logo.src} alt="Santiaguenias Logo" width={75} height={75} />
              </Link>

                <p className="text-xs text-neutral-500">
                  &copy; {new Date().getFullYear()} Santiaguenias. Alle Rechte
                  vorbehalten.
                </p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
