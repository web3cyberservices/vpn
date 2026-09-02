import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TelegramInit } from "@/components/telegram-init";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: "alexnet.pro | Premium Infrastructure",
  description: "Элитное управление серверами и решения в области веб-безопасности.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30`}>
        <TelegramInit />
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
