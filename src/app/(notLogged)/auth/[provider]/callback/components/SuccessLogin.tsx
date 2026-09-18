"use client";


import React, { useCallback, useRef } from 'react'
import { createSessionAndRedirectAction } from '@/app/(notLogged)/(auth)/login/api';
import { useSnackBarStore } from '@/hooks/useSnackbar';
import { LoginResponse } from '@/app/(notLogged)/(auth)/login/interfaces';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { ContainedButton } from '@/components/Button';
import { HiMiniArrowRight } from 'react-icons/hi2';
import { RedirectTimer } from './RedirectTimer';

interface Props {
    provider: string;
    data: LoginResponse["data"];
}


export const SuccessLogin = ({ provider, data }: Props) => {

    const { showSnackBar } = useSnackBarStore()
    const isRedirecting = useRef(false);

    const handleLogin = useCallback(async () => {
        if (isRedirecting.current) return;

        isRedirecting.current = true;
        showSnackBar("Inicio de sesión exitoso", "success");

        await createSessionAndRedirectAction(data.user, data.token);
        
        return;
    }, [data, showSnackBar])


  return (
    <div 
        className='bg-white p-6 rounded-lg shadow-md text-center max-w-2xl w-full mx-auto'
    >   
        <div className='bg-purple-100 rounded-full w-42 h-42 flex items-center justify-center mx-auto'>
            <FaRegCircleCheck size={86} className='text-purple-700' />
        </div>
        <h1 className='text-2xl font-semibold mt-4 text-gray-800'>
            ¡Has iniciado sesión exitosamente con {provider}!
        </h1>
        <p className="text-sm text-gray-600 w-10/12 mx-auto my-2">
            Tu cuenta ha sido verificada correctamente. En unos segundos te redirigiremos a tu perfil para que puedas continuar
        </p>

        <RedirectTimer
            seconds={3}
            label="Redirigiendo a tu perfil en"
            onComplete={handleLogin}
        />

        <ContainedButton
            data-umami-event="Click en ir a mi perfil"
            endIcon={<HiMiniArrowRight />}
            onClick={handleLogin}
        >
            Ir a mi perfil
        </ContainedButton>
    </div>
  )
}
