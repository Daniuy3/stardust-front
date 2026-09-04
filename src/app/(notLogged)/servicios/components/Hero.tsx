"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { BsGraphUpArrow, BsLockFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdOutlineSecurity } from 'react-icons/md'
import { motion } from 'motion/react'

export const Hero = () => {

    const icons = [
        {
            icon: <AiFillThunderbolt size={24} color="#9810fa" />,
            label: "Rendimiento",
            content: "Aplicaciones rápidas y optimizadas."
        },
        {
            icon: <MdOutlineSecurity size={24} color="#9810fa" />,
            label: "Escalabilidad",
            content: "Crecen con tu negocio sin problemas."
        },
        {
            icon: <BsLockFill  size={24} color="#9810fa" />,
            label: "Seguridad",
            content: "Buenas prácticas y tecnologías confiables."
        },
        {
            icon: <BsGraphUpArrow  size={24} color="#9810fa" />,
            label: "Resultados",
            content: "Soluciones enfocadas en tu negocio."
        }
    ]
  return (
    <div  className="flex flex-col-reverse mt-10 lg:mt-5 lg:flex-row gap-5 max-w-7xl mx-auto">
        
            <div className="flex  flex-col gap-3 lg:gap-10 lg:w-1/2 justify-center py-2 px-5 lg:px-0">
                <div className="border border-purple-200 py-2 px-5 rounded-2xl w-max  mx-auto lg:mx-0 hidden md:block">
                    <p className="text-sm text-purple-500 font-semibold">
                        DESARROLLO WEB - INFRAESTRUCTURA - FORMACIÓN
                    </p>
                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:text-left">
                        Soluciones digitales que hacen
                        <motion.span 
                            className="text-gray-800"
                            initial={{ color: "#1e1a4d"}}
                            animate={{ color: "#9810fa" }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "backOut",}}
                        >
                            {" "}
                            crecer
                            {" "}
                        </motion.span>
                        tu negocio.
                    </h1>

                    <p className="text-center lg:text-left text-sm">
                        En stardust construimos aplicaciones web rápidas, escalables y seguras. Combinamos desarrollo a medida, infraestructura confiable y formación práctica para llevar tu proyecto al siguiente nivel.
                    </p>

                    <div className="flex gap-5 justify-center lg:justify-start">
                        <Link
                            href="/contacto"
                            className="inline-flex min-h-11 items-center justify-center rounded-[5px] bg-[#9810fa] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                        >
                            Quiero un proyecto
                        </Link>
                        <Link
                            href="/contacto"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[5px] border border-[#9810fa] px-5 py-2.5 text-xs font-semibold text-[#9810fa] transition-colors hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                        >
                            <FaCalendarAlt aria-hidden="true" />
                            Agendar llamada
                        </Link>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-5">
                        {
                            icons.map((item, index) => (
                                <motion.div 
                                    key={item.label} 
                                    className="flex flex-col items-center md:items-start gap-3 mt-5"
                                    initial={{ opacity: 0, y: 20 }}
                                    viewport={{once: true}}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "backOut", delay: 0.1 +  (index * 0.2) }}
                                >
                                    <div  className="bg-purple-200 w-max p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="font-semibold">{item.label}</p>
                                        <p className="text-sm text-gray-600">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div
                className="px-5 w-full lg:w-2/3  rounded-lg overflow-hidden flex items-center justify-center bg-radial from-0% to-70% via-50%  from-purple-300 to-purple-[#F2F2F2]"
                
            >
                <motion.div 
                    className="relative h-full w-full min-w-96 md:min-w-120 min-h-96 md:min-h-140"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/services/services-hero.png"
                        alt="Services Hero"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </div>
  )
}
