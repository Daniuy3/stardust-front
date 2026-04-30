import { OutlinedButton } from '@/components/Button'
import { Course } from '@/data/courses-example'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { GoBookmarkFill } from 'react-icons/go'

interface Props {
    course: Course
}

export const CourseCard = ({ course } : Props) => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300 rounded-xl overflow-hidden'>
        <div className='w-full sm:w-72 h-full min-h-64 bg-gray-200 relative'> 
            <Image src={course.thumbnail_url} alt={course.title} fill className='h-full absolute  object-cover' />
        </div>
        <div className='flex flex-col gap-2 p-3'>
            <p className='text-right font-semibold text-sm'>
                75%
            </p>
            <h3 className='font-semibold text-lg'>
                {course.title}
            </h3>
            <p className='text-sm text-gray-500'>
                {course.estimated_duration_hours} horas de contenido
            </p>
            <div className='h-2 w-full bg-purple-100 rounded-full'>
                <div className='h-full bg-purple-700 rounded-full' style={{ width: '75%' }} />
            </div>
            <div className='flex justify-between'>
                <OutlinedButton>
                    Continuar
                </OutlinedButton>

                <Button variant='outlined' size='small' color='inherit' sx={{ borderColor: "#d1d5dc", px: 1.5, minWidth: "32px" }} >
                    <GoBookmarkFill className='text-gray-500'  />
                </Button>
            </div>
        </div>
    </div>
  )
}
