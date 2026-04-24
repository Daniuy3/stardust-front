import Image from "next/image"
import { OutlinedButton } from "./Button"
import Link from "next/link"

export const MainHero = () => {
  return (
    <div className="w-full flex py-15 flex-col lg:flex-row items-center justify-center gap-5 p-2">
        <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold text-center lg:text-left">
              Stardust 
              <span className="text-purple-700 font-semibold block">
                Desarrollo de Software y Academia
              </span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg text-center lg:text-left">
              Somos una empresa dedicada al desarrollo de software de alta calidad, con experiencia en diversas tecnologías y soluciones innovadoras. Además, fungimos como academia, formando a nuevos desarrolladores en diferentes ramas del desarrollo, desde frontend y backend hasta DevOps.
            </p>

            <div className="flex gap-5 mt-5 items-center justify-center lg:justify-start">
              <button className="px-6 py-3 bg-purple-600 cursor-pointer text-white rounded-md font-semibold hover:bg-purple-700 transition">
                Quiero un Proyecto
              </button>
              <Link href="/cursos" >
                <OutlinedButton>
                  Nuestros Cursos
                </OutlinedButton>
              </Link> 
            </div>
        </div>
        <div className="relative w-full h-64 md:h-96 md:w-2xl">
          <Image 
            src="/computer.png"
            alt="Hero Image"
            fill
            className="mb-8 object-contain object-center h-full w-full"
          />
        </div>
    </div>
  )
}
