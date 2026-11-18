


import { MainButton } from '@/components/buttons/MainButton'
import Image from 'next/image'
import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { FaArrowRightLong, FaInstagram } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'

export const Contact = () => {
  return (
    <section
        className='min-h-screen bg-[#0A1225] text-white px-5 lg:px-10 py-10'
    >
        <div
            className='py-5 border-b border-white'
        >
            <p
                className='text-xs'
            >
                STARDUST / CONTACTO
            </p>
        </div>

        <div
            className='flex justify-between gap-8 flex-col lg:flex-row py-10 pb-20 border-b border-white'
        >
            <div className='min-w-0 lg:w-1/2'>
                <h2
                    className='text-[clamp(2rem,8vw,9.375rem)] leading-tight'
                >
                    Trabajemos juntos
                </h2>
            </div>
            <div className='min-w-0 lg:max-w-1/3 flex flex-col justify-between'>
                <p
                    className='mt-5 lg:mt-0 text-xl lg:text-4xl'
                >
                    Cuéntanos tu idea y te ayudamos a convertirla en una solución digital clara, funcional y lista para crecer.
                </p>
                <div
                    className='flex justify-between mt-5 lg:mt-0'
                >
                    <MainButton 
                        className={"px-10! py-5!"}
                        text='Iniciar Proyecto'
                        icon={<FaArrowRightLong size={14} />}
                    />
                </div>
            </div>
        </div>
        <div
            className='flex flex-col lg:flex-row items-center mt-10'
        >   
            <div
                className='lg:border-r items-center flex flex-col border-white lg:w-1/3 text-xl pb-10 lg:pb-0 border-b lg:border-b-0 w-full'
            >
                <ul>
                    <li>
                        Desarrollo web
                    </li>
                    <li>
                        Sistemas internos
                    </li>
                    <li>
                        Infraestructura
                    </li>
                    <li>
                        Consultoria
                    </li>
                </ul>
            </div>

            <div className='lg:w-1/3 lg:border-r border-b lg:border-b-0 border-white flex flex-col md:flex-row lg:flex-col justify-center items-center gap-5 text-lg py-10 lg:py-0'>
                <p className='w-56 flex items-center justify-between'>
                    <span className='text-blue-500'>
                        <IoLocationOutline size={24}/>
                    </span>
                    <span className='w-48'>
                        Ciudad de México. MX
                    </span>
                </p>

                <p className='w-56 flex items-center justify-between '>
                    <span className='text-blue-500'>
                        <CiClock2 size={24}/>
                    </span>
                    <span className='w-48'>
                        Respuesta en menos de 24h hábiles
                    </span>
                </p>
            </div>

            <div className='lg:w-1/3 py-10  '>
                <p className='flex gap-3 items-center text-xl w-full justify-center'>
                    <FaInstagram />
                    Instagram
                </p>
            </div>


        </div>

        <div
            className='w-full min-h-0 h-60 xl:h-75 relative lg:mt-10'
        >
            <Image 
                src={"/stardust_wordmark.png"}
                alt='STARDUST'
                fill
                className='cover'
            />
        </div>
    </section>
  )
}
