import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CoursesIntroduction = () => {
  return (
      
    <div className='flex flex-col md:flex-row md:w-10/12 mx-auto items-center my-5'>
        <div className='p-3 md:p-0'>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold  mb-4">Nuestros Cursos</h2>
                <p className="text-lg  mb-8">
                Descubre nuestra selección de cursos diseñados para ayudarte a desarrollar tus habilidades y alcanzar tus objetivos.
                </p>
            </div>
            <ul className='list-disc pl-5 space-y-3 text-sm'>
                <li >
                    Aprendes haciendo con  
                    <span className='font-bold'>{" "}ejercicios reales</span>
                    , no teoría eterna que olvidas en dos días.</li>
                <li >
                    <span className='font-bold'>
                        Contenido actualizado
                    {" "}
                    </span> con tecnologías que sí se usan hoy, no reliquias digitales.</li>
                <li > 
                    <span className='font-bold'>
                        Acceso en línea
                        {" "}
                    </span>
                    con repeticiones, para que avances a tu ritmo sin depender de nadie.</li>
                <li >Material claro y directo, pensado para aplicar</li>
                <li >
                    <span className='font-bold'>
                        Enfoque práctico
                        {" "}
                    </span>
                     desde el inicio, construyendo cosas útiles desde el primer momento.</li>
                <li >
                    <span className='font-bold'>
                        Orientado al mundo laboral
                    </span>
                    , para que lo que aprendas tenga impacto real.</li>
                <li >Aprendes a 
                    <span className='font-bold'>
                        {" "}
                        resolver problemas
                    </span>
                    , no solo a seguir tutoriales.</li>
            </ul>

            <button className="mx-auto md:mx-0 block mt-10 text-purple-800 cursor-pointer hover:text-purple-900 transition font-bold underline underline-offset-3">
                <Link href="/cursos">
                    Ver Todos los Cursos
                </Link>
            </button>
        </div>
        <div className='h-125 w-auto aspect-9/16 relative'>
            <Image 
            src="/courses/courses-introduction.png" 
            alt="Cursos" 
            fill
            className="absolute" 
            />
        </div>
    
    </div>
  )
}
