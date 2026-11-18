import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://stardustui.com"),

  title: {
    default: "Stardust | Tecnología desde la práctica",
    template: "%s | Stardust",
  },

  description:
    "Explora artículos, proyectos y experimentos sobre Linux, desarrollo de software, servidores e infraestructura. Tecnología explicada desde la práctica.",

  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Stardust",
    url: "https://stardustui.com",
  },
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
        
        {children}

      </body>
    </html>
  );
}
