import Image from 'next/image'
import React from 'react'

export const Services = () => {
    
    const services = [
        {
            title: "Sitios Web para Negocios",
            description: "Creamos sitios web claros y profesionales que muestran tu valor y convierten visitas en clientes.",
            imageSrc: "/services/service-1.jpeg"
        },
        {
            title: "Landing Pages para Ventas",
            description: "Páginas enfocadas en una sola acción, cotizar, agendar o comprar. Sin distracciones.",
            imageSrc: "/services/service-2.jpeg"
        },
        {
            title: "Rediseño de sitios existentes",
            description: "Mejoramos tu sitio actual para que se vea moderno, cargue rápido y funcione mejor.",
            imageSrc: "/services/service-3.jpeg"
        },
        {
            title: "Mantenimiento y Actualizaciones",
            description: "Actualizamos tu sitio, corregimos errores y lo mantenemos funcionando sin dolores de cabeza.",
            imageSrc: "/services/service-4.jpeg"
        }
    ]
  
    return (
    <div>
        <h2 className="text-3xl font-bold my-10" id='servicios'>
            Conoce nuestros servicios
        </h2>

        <div className='overflow-x-scroll w-full'>
            <div className='flex gap-5 w-max animate-slide'>
                {
                    services.map((service) => (
                        <div key={service.title} className='w-80'>
                            <div className='relative aspect-square w-full'>
                                <Image 
                                    src={service.imageSrc}
                                    alt={service.title}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <div className="py-5">
                                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
