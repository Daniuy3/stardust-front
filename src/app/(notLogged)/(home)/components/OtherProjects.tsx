"use client"


import { OutlinedButton } from '@/components/buttons/OutlinedButton'
import Image from 'next/image'
import React from 'react'

export const OtherProjects = () => {
  return (
    <div
        className='px-5  py-30 bg-[#F1ECE9]'
    >
        <div
            className='flex gap-5 items-center'
        >
            <h2
                className='min-w-0 text-4xl sm:text-5xl lg:w-fit font-bold'
            >
                PROYECTOS DESTACADOS
            </h2>

            <div 
                className='hidden md:block h-px w-full  bg-blue-800'
            />

            <div
                className='hidden mdflex gap-3 items-center'
            >
                <div 
                    className='size-5 bg-blue-700 rounded-full'
                />

                <div 
                    className='size-5 bg-gray-300 rounded-full'
                />

                <div 
                    className='size-5 bg-gray-300 rounded-full'
                />
            </div>
        </div>

        <div
            className='mt-10 grid grid-cols-1 xl:grid-cols-4 gap-5 xl:gap-0'
        >
            <div
                className='border-b xl:border-r border-gray-300 flex flex-col gap-5 xl:px-5'
            >
                <div
                   className='relative w-full md:min-h-90 xl:min-h-60 min-h-60' 
                >
                    <Image 
                        alt='Casa Laura'
                        src="/selected-project/casa-laura.png"
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-black/20' />
                </div>

                <div
                    className=''
                >
                    <p
                        className='font-semibold'
                    >
                        <span
                            className='text-blue-600'
                        >
                            01 /
                        </span>
                        {" "}
                        SITIO WEB
                    </p>
                    <h3
                        className='text-3xl md:text-5xl font-semibold'
                    >
                        Casa Laura
                    </h3>
                    <p
                        className='text-lg mt-5'
                    >
                        Sitio web editorial para la publicación y organización de artículos, contenido multimedia y asesorias juridicas.
                    </p>
                </div>

                <div
                    className='mt-auto text-sm border-t-2 border-dotted border-gray-300 py-5'
                >
                    <p>
                        Aplicación web {"           | 2026"}
                    </p>
                </div>
            </div>

            <div
                className='xl:col-span-2 flex flex-col gap-5 xl:px-5'
            >
                <div
                    className='relative w-full min-h-60 md:min-h-90 lg:min-h-110 '
                >
                    <Image 
                        src="/selected-project/monitor.png"
                        alt='Monitor Condesa'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-black/20' />
                </div>

                <div
                    className=' pb-5 border-b-2 border-dotted border-gray-300'
                >
                    <p
                        className='font-semibold'
                    >
                        <span
                            className='text-blue-600'
                        >
                            02 /
                        </span>
                        {" "}
                        APLICACIÓN
                    </p>
                    <h3 className='text-3xl md:text-5xl font-bold'>
                        Monitor Condesa
                    </h3>
                    <p
                        className='text-lg mt-5'
                    >
                        Plataforma de monitoreo epidemiológico, para consulta, seguimiento y predicción mediante algoritmos de machine learning.
                    </p>
                    <OutlinedButton 
                        className="border-blue-600! text-blue-600! mt-5"
                        text='Explorar Proyecto'
                    />
                </div>
            </div>

            <div
                className='xl:border-l  border-gray-300 flex flex-col gap-5 xl:px-5'
            >
                <div
                   className='relative w-full md:min-h-90 lg:min-h-60 min-h-60' 
                >
                    <Image 
                        alt='Casa Laura'
                        src="/selected-project/cec.png"
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-black/20' />
                </div>

                <div
                    className=''
                >
                    <p
                        className='font-semibold'
                    >
                        <span
                            className='text-blue-600'
                        >
                            03 /
                        </span>
                        {" "}
                        SITIO WEB
                    </p>
                    <h3
                        className='text-3xl md:text-5xl  font-semibold'
                    >
                        Clínica Especializada Condesa
                    </h3>
                    <p
                        className='text-lg mt-5'
                    >
                        Plataforma institucional con CMS integrado para difundir servicios médicos, programas de prevención y contenidos de salud sexual. Más de 30,000 visitas mensuales.
                    </p>
                </div>

                <div
                    className='mt-auto text-sm border-t border-dotted border-gray-300 py-5'
                >
                    <p>
                        Aplicación web {"           | 2026"}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
