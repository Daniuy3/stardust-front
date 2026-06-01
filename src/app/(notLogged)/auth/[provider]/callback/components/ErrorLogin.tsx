"use client";

import { GoogleLogin } from '@/components/GoogleLogin';
import Link from 'next/link';
import React from 'react'
import { HiMiniArrowLeft } from 'react-icons/hi2';
import { TbCloudExclamation } from 'react-icons/tb';

interface ErrorLoginProps {
    message: string;
    provider: string;
}

export const ErrorLogin = ({ provider }: ErrorLoginProps) => {
  return (
    <div 
        className='bg-white p-6 rounded-lg shadow-md text-center max-w-2xl w-full mx-auto'
    >   
        <div className='bg-purple-100 rounded-full w-42 h-42 flex items-center justify-center mx-auto'>
            <TbCloudExclamation className='text-purple-700' size={86}/>
        </div>

        <h1 className='text-2xl font-semibold mt-4 text-gray-800'>
            No pudimos iniciar sesión con {provider}.         
        </h1>
        <p className="text-sm text-gray-600 w-10/12 mx-auto mt-2">
            Parece que hubo un problema al procesar tu inicio de sesión con {provider}. Puedes intentarlo de nuevo o elegir otro método para acceder a Stardust Academy.
        </p>

        <div className='px-5 lg:px-10 my-5 w-full'>
            <GoogleLogin />
        </div>
        <div className="flex justify-between gap-2 items-center">
            <div 
                className="block h-0.5 w-full bg-gray-200"
            />
            <p className="w-32 text-center">
                o 
            </p>
            <div 
                className="block h-0.5 w-full bg-gray-200"
            />
        </div>

        <Link
            href="/login"
            className="text-purple-700 hover:underline cursor-pointer text-lg my-5 flex items-center justify-center gap-2"
        >
            <HiMiniArrowLeft />
            Volver al Inicio
        </Link>
    </div>
  )
}
