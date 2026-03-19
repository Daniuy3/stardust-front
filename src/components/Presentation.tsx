import React from 'react'
import { AiFillTrophy } from 'react-icons/ai'
import { BsAwardFill } from 'react-icons/bs'
import { FaExchangeAlt, FaPhone } from 'react-icons/fa'
import { IoPhonePortraitOutline } from 'react-icons/io5'

export const Presentation = () => {

    const items : {
        title: string
        content : string
        icon: React.ReactNode
    }[] = [
        {
            title: "Resultados visibles",
            content: "Entrega de valor semanalmente.",
            icon: <AiFillTrophy />
        },
        {
            title: "Comunicación fluida",
            content: "Actualizaciones regulares y acceso directo al equipo.",
            icon: <IoPhonePortraitOutline />
        },
        {
            title: "Flexibilidad total",
            content: "Adaptamos el proyecto a tus necesidades y cambios de rumbo.",
            icon: <FaExchangeAlt />
        },
        {
            title: "Calidad garantizada",
            content: "Pruebas rigurosas y atención al detalle en cada entrega.",
            icon: <BsAwardFill />
        }
    ]
  return (
    <div className="py-10 flex gap-10 items-center">
        <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl text-slate-800 font-bold">
            Soluciones digitales que
            <span className="text-slate-600 block">
                {" "}
                Realmente impulsan tu negocio
            </span>
            </h2>
            <p className="text-lg">
            Creamos productos funcionales, escalables y enfocados en resultados, combinando tecnología, diseño y estrategia. Nuestro objetivo no es solo que tu proyecto se vea bien, sino que funcione, crezca y aporte valor desde el primer día.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-10">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
