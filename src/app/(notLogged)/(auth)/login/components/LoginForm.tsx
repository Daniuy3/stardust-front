"use client";

import { TextButton, ContainedButton } from '@/components/Button'
import { PasswordInput } from '@/components/PasswordInput'
import { TextField, Checkbox } from '@mui/material'
import { FaGithub } from 'react-icons/fa'
import { useLogin } from '../hooks/useAuth';
import { useSnackBarStore } from '@/hooks/useSnackbar';
import { useEffect } from 'react';
import Link from 'next/link';
import { GoogleLogin } from '@/components/GoogleLogin';

interface Props {
    redirectReason: "no_token" | "invalid_token"| "refresh_failed" | "logged_out" | undefined | null;
}

export const LoginForm = ({ redirectReason }: Props) => {

    const { 
        formik,
    } = useLogin();
    const { showSnackBar } = useSnackBarStore()

    useEffect(() => {
        if (redirectReason === "no_token") {
            showSnackBar("Por favor inicia sesión para continuar", "warning");
        } else if (redirectReason === "invalid_token") {
            showSnackBar("Tu sesión ha expirado, por favor inicia sesión nuevamente", "warning");
        } else if (redirectReason === "logged_out") {
            showSnackBar("Has cerrado sesión correctamente", "success");
        }
    },[redirectReason, showSnackBar])
    
  return (
    <div 
        className="lg:flex flex-col justify-center lg:absolute lg:top-2 lg:bottom-2 lg:left-3/5 lg:right-5 bg-white p-5 py-12 md:p-10 md:rounded-xl shadow-lg"
    >
                <div >
                    <h2 className="text-2xl font-bold text-center">
                        ¡Bienvenido de nuevo! 
                    </h2>
                    <p className="text-sm text-center text-gray-500">
                        Inicia sesión para continuar con tu viaje
                    </p>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    <GoogleLogin />

                    <button
                        data-umami-event="Click en iniciar sesión con GitHub"
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                        <FaGithub />
                        Iniciar con GitHub
                    </button>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <div className="flex justify-between gap-2 items-center">
                        <div 
                            className="block h-0.5 w-full bg-gray-200"
                        />
                        <p className="w-120 text-center">
                            o continua con tu email
                        </p>
                        <div 
                            className="block h-0.5 w-full bg-gray-200"
                        />
                    </div>
                    <TextField 
                        id='email'
                        color="secondary"
                        label="Email"
                        variant="standard"
                        fullWidth
                        {...formik.getFieldProps('email')}
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ' '}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />

                    <PasswordInput 
                        id='password'
                        {...formik.getFieldProps('password')}
                        errorMessage={formik.touched.password && formik.errors.password ? formik.errors.password : ' '}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />

                    <div className="flex justify-between">
                        <div className="flex items-center -translate-x-3">
                            <Checkbox 
                                id="remember" 
                                color="secondary" 
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                    fontSize: 16,
                                    },
                                }}
                                />
                            <label htmlFor="remember" className="text-md cursor-pointer text-gray-600">
                                Recordarme
                            </label>
                        </div>

                        <TextButton 
                            data-umami-event="Click en recuperar contraseña"
                            size="small"
                        >
                            <p className="capitalize text-xs">
                                ¿Olvidaste tu contraseña?
                            </p>
                        </TextButton>
                    </div>

                    <ContainedButton 
                        data-umami-event="Click en iniciar sesión"
                        sx={{width: "100%"}} 
                        onClick={() => formik.handleSubmit()}
                        disabled={formik.isSubmitting || !formik.isValid}
                        loading={formik.isSubmitting}
                    >
                        Iniciar Sesión
                    </ContainedButton>

                    <div className="flex justify-center">
                            <TextButton
                                data-umami-event="Click en registrarse"
                                size="small"
                            >
                                <Link 
                                    href="/register"
                                    className="text-gray-600"
                                >
                                    ¿No tienes una cuenta?
                                    <span className="capitalize text-xs text-purple-700">
                                        {" "}
                                        Regístrate
                                    </span>
                                </Link>
                            </TextButton>
                    </div>
                </div>
            
        </div>
  )
}
