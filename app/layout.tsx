import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deisy López - Portfolio",
  description: "Diseño Visual / Portfolio - Creando experiencias visuales únicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}