import { CourseCard } from '@/components/CourseCard'
import { courses } from '@/data/courses-example'
import Link from 'next/link'

export const Courses = () => {
  return (
    <div className='mb-20'>
        <div className='flex flex-col md:flex-row justify-between px-5'>
            <div className='text-center md:text-left'>
                <h2 className='text-3xl font-bold'>
                    Cursos Disponibles
                </h2>
                <p className='text-lg mt-2'>
                    Formación directa y especializada, centrada en resolver problemas reales.
                </p>
            </div>
            <div className='flex-col justify-end flex'>
                <button className="px-6 py-3  text-purple-800 cursor-pointer hover:text-purple-900 transition font-bold">
                    <Link href="/cursos">
                        Ver Todos los Cursos
                    </Link>
                </button>
            </div>
        </div>
        <div className='flex gap-5 w-full overflow-x-auto py-5 md:py-10 px-2'>
            {
                courses.map((course) => (
                    <CourseCard course={course} key={course.id} />
                ))
            }
        </div>
    </div>
  )
}
