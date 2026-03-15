import type { Metadata } from "next";
import { Inter, Assistant } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { LayoutDir } from "@/components/LayoutDir";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vortex Data & AI | Data Science & AI for Enterprise",
  description:
    "End-to-End Data & AI solutions for the public sector and enterprise. Production-grade code, not just presentations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${assistant.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <LocaleProvider>
          <LayoutDir>{children}</LayoutDir>
        </LocaleProvider>
      </body>
    </html>
  );
}
