"use client"

import React from 'react'
import { motion } from "motion/react"

export const Stages = () => {

    const stages = [ 
    {
      title: "Investigación y Estrategia",
      description: "Analizamos tu mercado, competencia y el comportamiento de los usuarios para definir una dirección clara."
    },
    {
      title: "Arquitectura y Estructura",
      description: "Organizamos la información y definimos cómo navegarán los usuarios dentro de tu sitio."
    },
    {
      title: "Diseño UI/UX",
      description: "Diseñamos una interfaz atractiva, moderna y enfocada en la experiencia del usuario para garantizar una navegación fluida y eficaz."
    },
    {
      title: "Desarrollo y Construcción",
      description: "Llevamos el diseño a código, construyendo un sitio funcional, rapido y escalable utilizando las últimas tecnologías web."
    },
    {
      title: "Optimización y Lanzamiento",
      description: "Probamos, ajustamos y optimizamos cada detalle antes de publicar."
    },
    {
      title: "Mantenimiento y Evolución",
      description: "Después del lanzamiento, seguimos mejorando. Actualizamos, optimizamos y damos soporte para que tu sitio evolucione con tu negocio."
    }

  ]
  
  return (
    <div>
        <h2 className="text-3xl text-center font-bold pb-5">
            Tu sitio web, paso a paso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stages.map((stage, index) => (
            <motion.div 
                key={index} 
                className="p-4 border-t-purple-300 border-t-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) , ease: "backOut" }}
              >
                <div className="md:w-11/12 mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-purple-900 text-center md:text-left">{stage.title}</h3>
                <p className="text-sm text-center md:text-left">{stage.description}</p>
                </div>
            </motion.div>
            ))}
        </div>
    </div>
  )
}
