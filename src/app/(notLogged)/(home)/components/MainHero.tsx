"use client"

import { motion } from "motion/react"
import { MainButton } from "@/components/MainButton"
import { FaArrowRightLong, FaLinux } from "react-icons/fa6"
import Link from "next/link"
import { IoCodeSlashOutline, IoInfinite } from "react-icons/io5"
import { CiServer } from "react-icons/ci"
import { MdOutlineShield } from "react-icons/md"

export const MainHero = () => {

  const items = [
    {
      text: "Linux",
      icon: <FaLinux />
    },
    {
      text: "DevOps",
      icon: <IoInfinite />
    },
    {
      text: "Web",
      icon: <IoCodeSlashOutline />
    },
    {
      text: "Infraestructura",
      icon: <CiServer />
    },
    {
      text: "Ciberseguridad",
      icon: <MdOutlineShield />
    }
  ]
  return (
    <div className="relative w-full flex justify-center items-center   h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute md:top-15 top-40 left-1/2 w-full -translate-x-1/2 -z-10 whitespace-nowrap text-[18vw] xl:text-[280px] bg-linear-to-b from-[#DEEAFB] to-transparent bg-clip-text text-transparent font-semibold text-center leading-50"
        >
          STARDUST
        </motion.h2>

        <div
          className="lg:max-w-3xl flex-col gap-5 flex"
        >
          <div>
            <h1
              className="text-4xl md:text-6xl font-bold text-center "
            >
              Tecnología real, explicada desde la práctica.
            </h1>
            <p
              className="text-sm md:text-lg text-center  mt-2"
            >
              Artículos, proyectos y experimentos sobre Linux, servidores, desarrollo e infraestructura moderna.
            </p>
          </div>

          <div
            className="flex items-center justify-center gap-3"
          >
            <Link
              href="/blog"
            >
              <MainButton
                text="Explorar artículos"
                icon={<FaArrowRightLong size={14} />}
              />
            </Link>

            <button
              className="bg-[#DEEAFB] rounded-full py-3 px-4 flex gap-2 items-center hover:bg-gray-200 transition-all cursor-pointer shadow-sm hover:shadow-lg"
            >
              Ver proyectos
            </button>
          </div>

          <div
            className="max-w-10/12 mx-auto flex flex-wrap  mt-10 items-center justify-center gap-3"
          >
            {
              items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="flex items-center gap-2 bg-[#DEEAFB]/70 rounded-full py-2 px-4"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))
            }
          </div>
        </div>

    </div>
  )
}
