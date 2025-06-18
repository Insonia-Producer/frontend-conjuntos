import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Conjuntos",
  description: "Página de redirecionamento do QRCode do Conjuntos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div
        className="min-h-screen bg-[#29b9a9]"
      >
        {children}
      </div>
    </html>
  );
}
