import Image from "next/image";
import { FaCode } from "react-icons/fa";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex items-center justify-center h-[87vh] w-full lg:bg-[#F1EDFC] max-w-120 lg:max-w-6xl mx-auto my-5 py-10 md:rounded-xl">
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

                {children}
            </div>
        </div>  
    );
}