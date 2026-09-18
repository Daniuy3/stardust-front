import { Course } from '@/data/courses-example'
import Image from 'next/image'
import React from 'react'

interface Props {
    course: Course
}
export const CourseCard = ({ course }: Props) => {
  return (
    <div key={course.id} className='border border-gray-300 relative rounded-xl overflow-hidden min-w-80  md:min-w-sm'>
        <div className='absolute top-5 left-5 bg-white/70 border border-gray-300 z-10 px-3 md:px-6 py-2 rounded-md backdrop-blur-sm'>
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
            <button
                data-umami-event="Click en ver curso"
                className="px-6 py-3  text-gray-800 cursor-pointer rounded-md font-bold hover:bg-gray-200 transition"
            >
                Ver Curso 
            </button>
        </div>
    </div>
  )
}
