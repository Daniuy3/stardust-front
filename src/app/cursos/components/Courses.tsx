import { CourseCard } from '@/components/CourseCard'
import { courses } from '@/data/courses-example'
import React from 'react'

export const Courses = () => {
  return (
    <div className='my-5'>
        <div className='flex gap-5 w-full overflow-x-scroll py-5'>
            {
                courses.map((course) => (
                    <CourseCard course={course} key={course.id} />
                ))
            }
        </div>
    </div>
  )
}
