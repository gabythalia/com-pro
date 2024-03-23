import type { Metadata } from "next";
import { Inter, Figtree, } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/aos";

const inter = Inter({ subsets: ["latin"] });

const figtree = Figtree({
  subsets: ['latin'],
  variable:"--font-figtree",
  weight: ["500", "600", "700"]
 });

 


export const metadata: Metadata = {
  title: "SM Entertainment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit/>
      <body className={`${figtree.variable}`}>{children}</body>
    </html>
  );
}
