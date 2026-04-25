
import { Delivery } from "@/app/(home)/components/Delivery";
import { PageContainer } from "@/components/PageContainer";
import { StackedBarChart } from "@/app/(home)/components/StackedBarChart";
import { Stages } from "@/app/(home)/components/Stages";
import { Hero } from "./components/Hero";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Desarrollo de Software | Stardust",
  description: "Desarrollo web y software a medida para negocios que buscan crecer. Creamos páginas web modernas, aplicaciones escalables y soluciones digitales optimizadas para rendimiento, SEO y conversión.",
  keywords:[
    "desarrollo web a medida",
    "desarrollo de software a medida",
    "desarrollo de aplicaciones web",
    "agencia de desarrollo web en México",
    "servicios de desarrollo web",
    "desarrollo con Next.js",
    "desarrollo con React",
    "desarrollo fullstack JavaScript",
    "contratar desarrollador web",
    "crear página web para negocio",
    "desarrollo web profesional",
    "desarrollo web CDMX",
  ],
  openGraph: {
    title: "Desarrollo de software | Stardust",
    description: "Desarrollo web y software a medida para negocios que buscan crecer. Creamos páginas web modernas, aplicaciones escalables y soluciones digitales optimizadas para rendimiento, SEO y conversión.",
    siteName: "Stardust",
    url: "https://stardustui.com/servicios",
    images: [
      {
        url: "/services/services-hero.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/login/login-bg.png",
        width: 1200,
        height: 630,
      },
    ]
  },
  metadataBase: new URL("https://stardustui.com/")
}

export default function Page() {

    

    return (
        <>
        <Hero />
        <PageContainer>
            <Stages />

            <Delivery />

            <StackedBarChart />
        </PageContainer>
        </>
    );
}