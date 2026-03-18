import React from 'react'

export const Benefits = () => {
  return (
    <div className='my-10'>
        <h2 className="text-3xl font-bold my-10">
            Beneficios de tener un sitio web profesional
        </h2>

        <div className='flex gap-5 min-h-72'>
            <div className='w-1/3 hover:w-2/5 bg-secondary-300 p-5 rounded flex flex-col justify-end transition-all duration-300'>
                <h3 className='text-xl font-semibold mb-2'>Credibilidad y Confianza</h3>
                <p>Un sitio web bien diseñado transmite profesionalismo, lo que genera confianza en tus clientes potenciales.</p>
            </div>

            <div className='w-1/3 hover:w-2/5 bg-secondary-300 p-5 rounded flex flex-col justify-end transition-all duration-300'>
                <h3 className='text-xl font-semibold mb-2'>Alcance Global</h3>
                <p>Con un sitio web, tu negocio puede ser encontrado por clientes de todo el mundo, ampliando tu mercado potencial.</p>
            </div>

            <div className='w-1/3 hover:w-2/5 bg-secondary-300 p-5 rounded flex flex-col justify-end transition-all duration-300'>
                <h3 className='text-xl font-semibold mb-2'>Disponibilidad 24/7</h3>
                <p>Tu sitio web está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los clientes acceder a tu información en cualquier momento.</p>
            </div>
        </div>
    </div>
  )
}
