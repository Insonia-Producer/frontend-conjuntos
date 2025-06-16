import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conhecendo as Cartas",
  description: "Colecione. Sabote. Blefe.",
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
