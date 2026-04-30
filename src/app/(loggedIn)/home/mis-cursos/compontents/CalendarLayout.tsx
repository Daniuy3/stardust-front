import React from 'react'

interface Props {
    dayNumber: number
    month: string
}
export const CalendarLayout = ({ dayNumber, month }: Props) => {
  return (
    <div className='rounded-sm border-gray-300 border w-max'>
        <div>
            <p className='text-sm text-purple-700 font-semibold bg-gray-200 py-1 px-3'>
                {month}
            </p>
            <p className='text-2xl font-bold text-center py-1'>
                {dayNumber}
            </p>
        </div>
    </div>
  )
}
