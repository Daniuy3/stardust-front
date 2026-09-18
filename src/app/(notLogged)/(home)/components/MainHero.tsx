"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { OutlinedButton } from "@/components/Button"

export const MainHero = () => {
  return (
    <div className="w-full flex py-15 flex-col lg:flex-row items-center justify-center gap-5 p-2">
        <div className="lg:w-1/3">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                className="text-4xl font-bold text-center lg:text-left"
            >
              Stardust 
              <span className="text-purple-700 font-semibold block">
                Desarrollo de Software y Academia
              </span>
            </motion.h1>
            <p className="mt-4 text-gray-700 text-lg text-center lg:text-left">
              Somos una empresa dedicada al desarrollo de software de alta calidad, con experiencia en diversas tecnologías y soluciones innovadoras. Además, fungimos como academia, formando a nuevos desarrolladores en diferentes ramas del desarrollo, desde frontend y backend hasta DevOps.
            </p>

            <div className="flex gap-5 mt-5 items-center justify-center lg:justify-start">
              <Link
                href="/contacto"
                data-umami-event="Click en quiero un proyecto"
                className="rounded-md bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Quiero un Proyecto
              </Link>
              <Link href="/cursos" >
                <OutlinedButton data-umami-event="Click en nuestros cursos">
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
