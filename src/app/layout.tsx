import type { Metadata } from "next";
import { Poppins, Bagel_Fat_One } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const bagel = Bagel_Fat_One({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-bagel'
})

export const metadata: Metadata = {
  title: "Conjuntos",
  description: "Colecione. Sabote. Blefe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${bagel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
