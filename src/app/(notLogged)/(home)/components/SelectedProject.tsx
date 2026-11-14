"use client"

import { motion } from "motion/react";
import { OutlinedButton } from '@/components/buttons/OutlinedButton'
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export const SelectedProject = () => {
  return (
    <section 
        className='px-5 py-20 md:px-10'
    >
        <div
            className='relative w-full min-h-75 md:min-h-100 lg:min-h-175 mx-auto'
        >
            <Image 
                src="/selected-project/portatil-blue.png"
                alt="Selected Project"
                fill
                className='object-cover'
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{
                    once: true,
                    amount: 0.5,
                    margin: "0px 0px -100px 0px",
                }}
                className='hidden lg:block  w-120 aspect-video absolute bottom-5 right-5 rounded-sm overflow-hidden shadow-xl shadow-gray-600/20'
            >
                <Image 
                    src="/selected-project/video-preview.png"
                    alt="Selected Project"
                    fill
                    className='object-cover'
                />
            </motion.div>
        </div>

        <div
            className='py-10 flex flex-col items-center text-center'
        >
            <h3
                className='font-extralight text-lg'
            >
                PROYECTO SELECCIONADO
            </h3>
            <h2
                className='font-extrabold text-5xl my-5'
            >
                Formularios Condesa
            </h2>
            <p
                className='text-lg'
            >
                Plataforma de captura y acceso para personal autorizado.
            </p>
            <p
                className='text-lg'
            >
                Un sistema diseñado para centralizar formularios y simplificar el flujo de trabajo.
            </p>
            <OutlinedButton 
                className="mt-10"
                icon={<FaArrowRightLong size={14} />}
                text='Ver Proyecto'
            />
        </div>
    </section>
  )
}
