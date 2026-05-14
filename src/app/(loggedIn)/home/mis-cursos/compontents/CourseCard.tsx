
import { Course } from '@/data/courses-example'
import Image from 'next/image'
import React from 'react'
import { CiBookmark } from 'react-icons/ci'
import { FaRegClock } from 'react-icons/fa'

interface Props {
    course: Course
}

export const CourseCard = ({ course } : Props) => {
  return (
    <div  className="flex flex-col rounded-xl border border-gray-300 max-w-72 lg:max-w-56 lg:max-h-80">
        <div className="relative aspect-video lg:max-w-56">
            <Image 
                src={course.thumbnail_url}
                alt={course.title}
                fill
                className="object-cover rounded-t-sm"
            />
        </div>
        <div className="p-4">
            <h3 className="font-semibold">{course.title.length > 50 ? `${course.title.slice(0,47)}...` : course.title}</h3>
            <p className="text-sm text-gray-500">Daniel Trinidad</p>
            <p className="mt-2 text-purple-700 bg-purple-100 py-1 px-2 w-fit rounded-full text-xs font-semibold">
                {course.level}
            </p>
            <p className="mt-2">
                <FaRegClock  size={12} className="inline mb-0.5" />
                <span className="text-sm text-gray-500 ml-1">
                    {course.estimated_duration_hours} horas
                </span>
            </p>
        </div>
        <div className="border-t border-gray-300 px-4 py-2 mt-auto flex justify-between items-center">
            <p>
                {course.price === 0 ? "Gratis" : `$${course.price} MXM`}
            </p>
            <CiBookmark size={18}  />
        </div>
    </div>
  )
}
