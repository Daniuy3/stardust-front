import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { StoredSnackBar } from "@/components/SnackBar";

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
    <html lang="en">
      <body
      >
        <StoredSnackBar />
        <NavBar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
