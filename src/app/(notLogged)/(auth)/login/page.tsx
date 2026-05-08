
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { LoginForm } from "./components/LoginForm";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Iniciar Sesión | Stardust",
  description: "Inicia sesión en tu cuenta de Stardust para acceder a nuestros cursos y recursos de programación.",
  keywords:[
    "iniciar sesión",
    "acceder a cuenta",
    "cursos de programación",
    "cursos de desarrollo web",
    "aprender desarrollo web",
    "curso de React",
    "curso de Next.js",
    "curso de JavaScript moderno",
    "aprender programación desde cero",
    "cursos prácticos de programación",
    "cursos de desarrollo web con proyectos",
    "cursos de programación en México",
  ],
  openGraph: {
    title: "Iniciar Sesión | Stardust",
    description: "Inicia sesión en tu cuenta de Stardust para acceder a nuestros cursos y recursos de programación.",
    siteName: "Stardust",
    url: "https://stardustui.com/login",
    images: [
      {
        url: "/login/login-bg.png",
        width: 1200,
        height: 630,
      },
    ]
  },
  metadataBase: new URL("https://stardustui.com/")
}

type RedirectReason = "no_token" | "invalid_token" | undefined | null;

export default async function Page({
    searchParams
} :{
    searchParams: Promise<{ redirect_reason: RedirectReason }>
}) {

    const { redirect_reason } = await searchParams;
    
    return (
        <LoginForm redirectReason={redirect_reason} />  
    );
}