import { courses } from '@/data/courses-example'
import Image from 'next/image'
import React from 'react'

export const Courses = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div>
                <h2 className='text-3xl font-bold'>
                    Cursos Disponibles
                </h2>
                <p className='text-lg mt-2'>
                    Formación directa y especializada, centrada en resolver problemas reales.
                </p>
            </div>
            <div className='flex-col justify-end flex'>
                <button className="px-6 py-3  text-purple-800 cursor-pointer hover:text-purple-900 transition font-bold">
                    Ver Todos los Cursos
                </button>
            </div>
        </div>
        <div className='flex gap-5 w-full overflow-x-auto py-10'>
            {
                courses.map((course) => (
                    <div key={course.id} className='border border-gray-300 relative rounded-xl overflow-hidden min-w-86  md:min-w-sm'>
                        <div className='absolute top-5 left-5 bg-white/70 border border-gray-300 z-10 px-6 py-2 rounded-md backdrop-blur-sm'>
                            <p className='font-semibold text-black'>
                                {
                                    course.level === "beginner" ? "Principiante" : course.level === "intermediate" ? "Intermedio" : "Avanzado"
                                }
                            </p>
                        </div>
                        <div className='w-full h-60 relative'>
                            <Image 
                                src={course.thumbnail_url}
                                alt={course.title}
                                fill
                                className='object-cover absolute h-full'
                            />
                        </div>
                        <div className='p-5 flex flex-col gap-3'>
                            <h2 className='text-lg font-bold'>
                                {course.title}
                            </h2>
                            <p className='text-sm'>{course.short_description}</p>
                            <button className="px-6 py-3  text-gray-800 cursor-pointer rounded-md font-bold hover:bg-gray-200 transition">
                                Ver Curso 
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
