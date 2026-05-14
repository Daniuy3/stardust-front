"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

type BenefitPart = { type: 'text' | 'bold'; content: string }

const benefits: BenefitPart[][] = [
  [
    { type: 'text', content: 'Aprendes haciendo con  ' },
    { type: 'bold', content: 'ejercicios reales' },
    { type: 'text', content: ', no teoría eterna que olvidas en dos días.' }
  ],
  [
    { type: 'bold', content: 'Contenido actualizado' },
    { type: 'text', content: ' con tecnologías que sí se usan hoy, no reliquias digitales.' }
  ],
  [
    { type: 'bold', content: 'Acceso en línea' },
    { type: 'text', content: ' con repeticiones, para que avances a tu ritmo sin depender de nadie.' }
  ],
  [
    { type: 'text', content: 'Material claro y directo, pensado para aplicar' }
  ],
  [
    { type: 'bold', content: 'Enfoque práctico' },
    { type: 'text', content: ' desde el inicio, construyendo cosas útiles desde el primer momento.' }
  ],
  [
    { type: 'bold', content: 'Orientado al mundo laboral' },
    { type: 'text', content: ', para que lo que aprendas tenga impacto real.' }
  ],
  [
    { type: 'text', content: 'Aprendes a ' },
    { type: 'bold', content: 'resolver problemas' },
    { type: 'text', content: ', no solo a seguir tutoriales.' }
  ]
]

export const CoursesIntroduction = () => {
  return (
      
    <div className='flex flex-col md:flex-row md:w-10/12 mx-auto items-center my-5'>
        <div className='p-3 md:p-0'>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold  mb-4">Nuestros Cursos</h2>
                <p className="text-lg  mb-8">
                Descubre nuestra selección de cursos diseñados para ayudarte a desarrollar tus habilidades y alcanzar tus objetivos.
                </p>
            </div>
            <ul className='list-disc pl-5 space-y-3 text-sm'>
              {benefits.map((parts, index) => (
                <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5, delay: index * 0.2, ease: "backOut" }}
                    viewport={{ once: true }}
                >
                  {parts.map((part, partIndex) =>
                    part.type === 'bold' ? (
                      <span key={partIndex} className='font-bold'>
                        {part.content}
                      </span>
                    ) : (
                      <span key={partIndex}>{part.content}</span>
                    )
                  )}
                </motion.li>
              ))}
            </ul>

            <button className="mx-auto md:mx-0 block mt-10 text-purple-800 cursor-pointer hover:text-purple-900 transition font-bold underline underline-offset-3">
                <Link href="/cursos">
                    Ver Todos los Cursos
                </Link>
            </button>
        </div>
        <motion.div 
            className='h-125 w-auto aspect-9/16 relative'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
            viewport={{ once: true }}
        >
            <Image 
                src="/courses/courses-introduction.png" 
                alt="Cursos" 
                fill
                className="absolute" 
            />
        </motion.div>
    
    </div>
  )
}
