import React from 'react'

export const Benefits = () => {
  const benefits = [
    {
      title: 'Credibilidad y Confianza',
      description: 'Un sitio web bien diseñado transmite profesionalismo, lo que genera confianza en tus clientes potenciales.'
    },
    {
      title: 'Alcance Global',
      description: 'Con un sitio web, tu negocio puede ser encontrado por clientes de todo el mundo, ampliando tu mercado potencial.'
    },
    {
      title: 'Disponibilidad 24/7',
      description: 'Tu sitio web está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los clientes acceder a tu información en cualquier momento.'
    }
  ]

  return (
    <div className='my-10 p-2'>
        <h2 className="text-3xl text-center font-bold my-10">
            Beneficios de tener un sitio web profesional
        </h2>

        <div className='flex flex-col md:flex-row gap-5 md:min-h-72'>
          {benefits.map((benefit, index) => (
            <div key={index} className='md:w-1/3 bg-secondary-100 p-5 rounded flex flex-col justify-end'>
              <h3 className='text-xl font-bold mb-2 text-center md:text-left '>{benefit.title}</h3>
              <p className='text-center md:text-left'>{benefit.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
