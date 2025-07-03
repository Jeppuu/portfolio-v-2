"use client";
import React, { useEffect, useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Starfield from "@/components/Starfield";
import LoadingOverlay from "@/components/LoadingOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space_grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for DOM, CSS, and at least one animation frame (canvas)
    function onReady() {
      requestAnimationFrame(() => setLoading(false));
    }
    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady);
      return () => window.removeEventListener("load", onReady);
    }
  }, []);

  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.variable} ${spaceGrotesk.className} font-inter font-space text-white antialiased`}
      >
        <LoadingOverlay visible={loading} />
        <Starfield onFirstDraw={() => setLoading(false)} />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
