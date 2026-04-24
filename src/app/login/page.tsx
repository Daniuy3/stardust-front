import { ContainedButton, TextButton } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordInput";
import { Checkbox, TextField } from "@mui/material";
import Image from "next/image";
import { FaCode, FaGithub, FaGoogle } from "react-icons/fa";

export default function Page() {
    return (
        <div className="flex items-center justify-center h-[85vh] w-full lg:bg-[#F1EDFC] max-w-120 lg:max-w-6xl mx-auto my-5 py-10 md:rounded-xl">
            <div className="relative w-full h-full md:rounded-xl overflow-hidden">
                <Image 
                    src="/login/login-bg.png"
                    alt="Login Background"
                    className="object-contain object-left rounded-xl hidden lg:block"
                    fill
                    quality={100}
                />

                <div className="hidden absolute lg:flex inset-5 right-2/3 flex-col justify-between ">
                    <h1 className="text-4xl font-bold mb-4">
                        Aprende.
                        <span className="block">
                            Desarrolla.
                        </span>
                        <span className="block text-purple-700">
                            Construye el futuro.
                        </span>
                    </h1>
                    <div className="backdrop-blur-lg bg-white/50 rounded-lg shadow-md flex px-5 py-4 items-center gap-5">
                        <FaCode className="text-purple-700 text-xl" />
                        <p className="text-gray-600 rounded-lg">
                            El mejor lugar para aprender, construir y conectar.
                        </p>
                    </div>
                </div>

                <div className="lg:flex flex-col justify-center lg:absolute lg:top-5 lg:bottom-5 lg:left-3/5 lg:right-5 bg-white p-5 py-10 md:p-10 md:rounded-xl shadow-lg">
                        <div >
                            <h2 className="text-2xl font-bold text-center">
                                ¡Bienvenido de nuevo! 
                            </h2>
                            <p className="text-sm text-center text-gray-500">
                                Inicia sesión para continuar con tu viaje
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                <FaGoogle />
                                Iniciar con Google
                            </button>

                            <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
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
                                color="secondary"
                                label="Email"
                                variant="standard"
                                fullWidth
                            />

                            <PasswordInput />

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
                                    size="small"
                                >
                                    <p className="capitalize text-xs">
                                        ¿Olvidaste tu contraseña?
                                    </p>
                                </TextButton>
                            </div>

                            <ContainedButton sx={{width: "100%"}}>
                                Iniciar Sesión
                            </ContainedButton>

                            <div className="flex justify-center">
                                    <TextButton size="small" >
                                        <p className="text-gray-600">
                                            ¿No tienes una cuenta?
                                            <span className="capitalize text-xs text-purple-700">
                                                {" "}
                                                Regístrate
                                            </span>
                                        </p>
                                    </TextButton>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>    
    );
}