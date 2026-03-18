"use client";

import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {

  const pages = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Proyectos", href: "/#proyectos", disabled: true },
  ]

  return (
    <div className="flex justify-between items-center px-10 border-b border-gray-300">
        <div className="aspect-video relative min-w-32">
          <Image 
            src="/logo.svg"
            alt="Stardust Logo"
            className="object-cover absolute "
            fill
          />
        </div>

        <div className="flex gap-5 items-center">
          {
            pages.map((page) => (
              <button
                key={page.name}
                disabled={page.disabled}
              >
                <Link 
                  href={page.href}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {page.name}
                </Link>
              </button>
            ))
          }

          <Link 
            href="/#contact"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors duration-300"
          >
            Contacto
          </Link>
        </div>
    </div>
  )
}
