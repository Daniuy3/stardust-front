
import { MainHero } from "./components/MainHero";
import { Metadata } from "next";
import { Presentation } from "./components/Presentation";
import { SelectedProject } from "./components/SelectedProject";
import { OtherProjects } from "./components/OtherProjects";
import { BlogSection } from "./components/BlogSection";

export const metadata : Metadata = {
  title: "Desarrollo de Software | Stardust",
  description: "Desarrollo de software a medida para negocios que necesitan soluciones web modernas y escalables.",
  keywords:[
    "desarrollo web", "software", "web a medida", "desarrollo web", "agencia de desarrollo", "páginas web", "aplicaciones web",
    "soluciones digitales", "desarrollo frontend", "desarrollo backend", "Nextjs", "React", "Nodejs", "Javascript", "Fullstack",
    "contratar desarrollo", "agencia de desarrollo web en México", "desarrollo web profesional", "agencia de software en México", "desarrollo web CDMX", "desarrolladores web México"
  ],
  openGraph: {
    title: "Desarrollo de Software | Stardust",
    description: "Desarrollo de software a medida para negocios que necesitan soluciones web modernas y escalables.",
    siteName: "Stardust",
    url: "https://stardustui.com/",
    images: [
      {
        url: "/services/services-hero.png",
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
      <div className="w-full mx-auto md:w-11/12">
        <MainHero />

        <Presentation />

        <SelectedProject />
      </div>

      <OtherProjects />
      
      <div className="w-full mx-auto md:w-11/12">
        <BlogSection />
      </div>
    </>
  );
}
