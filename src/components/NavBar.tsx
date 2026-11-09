"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useEffect, useRef, useState } from "react";
import { MainButton } from "./MainButton";
import { Dropdown } from "@heroui/react";

export const NavBar = () => {

    const pathname = usePathname();

    const pages = [
      { name: "Inicio", href: "/" },
      { name: "Servicios", href: "/servicios" },
      { name: "Proyectos", href: "/proyectos", disabled: true },
      { name: "Contacto", href: "/contacto" },
    ]

    const { scrollY } = useScroll()
    const [headerOffset, setHeaderOffset] = useState(0)
    const resetOffsetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
      return () => {
        if (resetOffsetTimeout.current) {
          clearTimeout(resetOffsetTimeout.current)
        }
      }
    }, [])

    useMotionValueEvent(scrollY, "change", (current) => {
      const diff = current - (scrollY.getPrevious() ?? 0)
      setHeaderOffset(diff > 0 ? -8 : 8)

      if (resetOffsetTimeout.current) {
        clearTimeout(resetOffsetTimeout.current)
      }

      resetOffsetTimeout.current = setTimeout(() => {
        setHeaderOffset(0)
        resetOffsetTimeout.current = null
      }, 180)
    })


  return (
    <motion.header
      animate={{ y: headerOffset }}
      transition={{ type: "spring", stiffness: 150, damping: 40, ease: "backInOut" }}
      className="w-11/12 lg:w-full sticky top-5 py-2 px-5 bg-[#DEEAFB]/80 backdrop-blur-md rounded-full max-w-6xl mx-auto z-50 shadow-black/5 flex items-center justify-between shadow-lg"
    >
      
      <div
        className="flex items-center gap-10"
      >
        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <Image 
            src="/stardust.png"
            alt="Stardust Logo"
            width={140}
            height={50}
            quality={100}
          />
        </motion.div>

        <motion.div 
          className="w-px h-10 rounded-full bg-gray-300/50 min-h-0  block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1  }}
          transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
        />
      </div>
      
      <nav
        className="md:flex gap-2 hidden"
      >
        {
          pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className={`px-3 py-2 rounded-full transition-colors ${pathname === page.href ? "bg-blue-200/50 text-blue-900" : "hover:bg-blue-200/50 hover:text-blue-900 "}`}            
            >
              {page.name}
            </Link>
          ))
        }
      </nav>

      <Link
        className="hidden md:block"
        href="/#inicio"
      >
        <MainButton 
          text="Explorar contenido"
          icon={<FaArrowRightLong size={14} />}
        />
      </Link>

      <Dropdown
        className="md:hidden lg:hidden"
      >
          <Dropdown.Trigger aria-label="Menu" className="md:hidden lg:hidden">
            <span aria-hidden="true" className=" block cursor-pointer p-3 rounded-full bg-blue-200/50 text-blue-900">
              <FaBars size={20} />
            </span>
          </Dropdown.Trigger>
          <Dropdown.Popover
            className="rounded-lg shadow-lg bg-[#DEEAFB] backdrop-blur-md border "
          >
            <Dropdown.Menu>
              {
                pages.map((page, index) => (
                  <Dropdown.Item
                    className={`w-full transition-colors rounded-lg hover:bg-blue-200/50 ${pathname === page.href ? "bg-blue-200/50 text-blue-900" : "hover:text-blue-900 "}`}
                    key={index}
                  >
                    <Link
                      href={page.href}
                      className={`px-3 py-2 w-full rounded-sm transition-colors`}            
                    >
                      {page.name}
                    </Link>
                  </Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
    </motion.header>
     
  )
}
