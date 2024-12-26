import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wordosity",
  description: "A collection of word games",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/Icon.png',
        href: '/images/Icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/Icon.png',
        href: '/images/Icon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
