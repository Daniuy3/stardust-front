import type { Metadata } from "next";
import "./globals.css";
import { StoredSnackBar } from "@/components/SnackBar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Servicios Web | Stardust",
  description: "Empresa de servicios web y desarrollo de software a medida. Ofrecemos soluciones innovadoras para impulsar tu negocio en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

       <head>
        <Script
          defer
          src="https://stats.stardustui.com/script.js"
          data-website-id="f21e5fbc-0369-4351-be2d-4726fb7f9a64"
          data-performance="true"
        />
      </head>

      <body
      >
        <StoredSnackBar />
        
        {children}

      </body>
    </html>
  );
}
