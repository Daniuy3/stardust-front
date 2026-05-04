

import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { GoBook } from 'react-icons/go'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'

export const RelatedCourses = () => {

    const courses = [
        {
            id: 1,
            title: "Curso de React: Patrones y Performance",
            progress: 80,
            status: "En progreso",
            level: "Intermedio",
            icon: <FaReact className="text-blue-500" size={48} />
        },
        {
            id: 2,
            title: "JavaScript Moderno: De Cero a Experto",
            progress: 80,
            status: "En progreso",
            level: "Avanzado",
            icon: <IoLogoJavascript  className="text-yellow-500" size={48} />
        },
        {
            id: 3,
            title: "Tailwind CSS: Práctico",
            progress: 80,
            status: "En progreso",
            level: "Básico",
            icon: <RiTailwindCssFill  className="text-blue-500" size={48} />
        },
        {
            id: 4,
            title: "Node.js: Backend con JavaScript",
            progress: 80,
            status: "En progreso",
            level: "Intermedio",
            icon: <FaNodeJs  className="text-green-500" size={48} />
        }
    ]
  return (
    <div className="border border-gray-300 rounded-xl p-5 col-span-2">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <GoBook size={20} /> 
            Cursos relacionados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 content-center h-full pb-10">
            {
                courses.map((course) => (
                    <div className="border border-gray-300 rounded-lg flex gap-3 p-2" key={course.id + "course-item"}>
                        <div className="my-auto">
                            {course.icon}
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <p className="font-semibold" style={{lineHeight: 1.2}}>
                                {course.title}
                            </p>
                            <div className="bg-purple-200 rounded-full">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${course.progress}%` }} />
                            </div>                     
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="bg-purple-100 text-purple-600 rounded-sm px-2 w-max">
                                {course.status}
                            </p>
                            <p className="text-sm text-gray-500 text-right">
                                {course.level}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
