import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Build on Polkadot",
  description: "A collection of all resources for builders on Polkadot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={unbounded.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
