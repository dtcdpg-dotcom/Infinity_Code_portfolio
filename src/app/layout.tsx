import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NT GO 360 | Creative Digital Studio",
  description:
    "NT GO 360 builds creative, motion-rich web experiences and product interfaces for modern brands.",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-default">
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
