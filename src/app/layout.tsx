import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Starfield from "@/components/Starfield";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space_grotesk",
});

export const metadata: Metadata = {
  title: "Jenna Blomqvist",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.variable} ${spaceGrotesk.className} font-inter font-space text-white antialiased`}
      >
        <Starfield />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
