
import { MainHero } from "./components/MainHero";
import { Metadata } from "next";
import { Presentation } from "./components/Presentation";
import { SelectedProject } from "./components/SelectedProject";
import { OtherProjects } from "./components/OtherProjects";
import { BlogSection } from "./components/BlogSection";
import { Contact } from "./components/Contact";

export const metadata: Metadata = {
  title: "Tecnología real, explicada desde la práctica",

  description:
    "Artículos, proyectos reales y experimentos sobre Linux, servidores, desarrollo web e infraestructura, explicados desde la práctica.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Stardust | Tecnología desde la práctica",
    description:
      "Explora artículos, proyectos y experimentos sobre Linux, desarrollo de software e infraestructura.",
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Stardust | Tecnología desde la práctica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {

  
  return (
    <>
      <div className="w-full mx-auto md:w-11/12">
        <MainHero />

        <Presentation />

        <SelectedProject />
      </div>

      <OtherProjects />
      
      <div className="w-full mx-auto md:w-11/12">
        <BlogSection />
      </div>

      <Contact />
    </>
  );
}
