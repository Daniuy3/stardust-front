import { PageContainer } from "@/components/PageContainer";
import { CourseSearcher } from "./components/CourseSearcher";
import { Courses } from "./components/Courses";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Cursos de Programación y Desarrollo Web | Stardust",
  description: "Cursos de programación con enfoque práctico y proyectos reales. Aprende desarrollo web con tecnologías modernas como React y Next.js y construye aplicaciones desde cero.",
  keywords:[
    "cursos de programación",
    "cursos de desarrollo web",
    "aprender desarrollo web",
    "curso de React",
    "curso de Next.js",
    "curso de JavaScript moderno",
    "aprender programación desde cero",
    "cursos prácticos de programación",
    "cursos de desarrollo web con proyectos",
    "cursos de programación en México",
  ],
  openGraph: {
    title: "Cursos de Programación y Desarrollo Web | Stardust",
    description: "Cursos de programación con enfoque práctico y proyectos reales. Aprende desarrollo web con tecnologías modernas como React y Next.js y construye aplicaciones desde cero.",
    siteName: "Stardust",
    url: "https://stardustui.com/cursos",
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
        <PageContainer>
            <div>
                <h2 className="text-lg font-bold text-purple-700">
                    Cursos
                </h2>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Conoce nuestras capacitaciones y talleres
                </h1>
                <p className="text-sm">
                    Ofrecemos una variedad de cursos diseñados para ayudarte a dominar las últimas tecnologías y metodologías en desarrollo de software. 
                </p>
            </div>

            <CourseSearcher />
            <Courses />
        </PageContainer>
    );
}