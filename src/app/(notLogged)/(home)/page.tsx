
import { CoursesIntroduction } from "./components/CoursesIntroduction";
import { MainHero } from "./components/MainHero";
import { Courses } from "./components/Courses";
import { Metadata } from "next";
import { Benefits } from "./components/Benefits";
import { Delivery } from "./components/Delivery";
import { Presentation } from "./components/Presentation";
import { StackedBarChart } from "./components/StackedBarChart";
import { Stages } from "./components/Stages";

export const metadata : Metadata = {
  title: "Desarrollo y Academia | Stardust",
  description: "Desarrollo de software a medida y plataforma de enseñanza tecnológica. En Stardust creamos páginas web modernas, sistemas escalables y cursos prácticos enfocados en habilidades reales.",
  keywords:[
    "desarrollo web", "software", "web a medida", "desarrollo web", "agencia de desarrollo", "páginas web", "aplicaciones web",
    "soluciones digitales", "desarrollo frontend", "desarrollo backend", "Nextjs", "React", "Nodejs", "Javascript", "Fullstack",
    "cursos de programación", "cursos", "aprender react", "aprender nextjs", "cursos de javascript", "formacion desarrolladores", "cursos practicos", "aprendizaje", "plataforma de cursos online", "contratar desarrollo", "agencia de dedarrollo web en México", "Desarrollo web profesional", "agencia de software en México", "desarrollo web CDMX", "desarrolladores web México"
  ],
  openGraph: {
    title: "Desarrollo y Academia | Stardust",
    description: "Desarrollo de software a medida y plataforma de enseñanza tecnológica. En Stardust creamos páginas web modernas, sistemas escalables y cursos prácticos enfocados en habilidades reales.",
    siteName: "Stardust",
    url: "https://stardustui.com/",
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
    <div className="w-full md:max-w-6xl mx-auto md:w-11/12">
      <MainHero />

      <Presentation />

      <StackedBarChart />

      <Stages />

      <Benefits />

      <Delivery />
      <CoursesIntroduction />
      <Courses />
    </div>
  );
}