"use client"

import { Pie, PieChart, Tooltip } from 'recharts'

export const ProgressChart = () => {

    const data = [
        { name: 'Completado', value: 75, fill: "#7C3AED" },
        { name: 'Pendiente', value: 25, fill: "#E5E7EB" },
    ];
  return (
        <div className='relative mx-auto aspect-square w-2/3 max-w-55'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <p className='text-center text-sm text-gray-700'> 
                <span className='block text-3xl font-bold'>
                    75%
                </span>    
                Completado
            </p>
        </div>
        <PieChart
            style={{ width: '100%', height: '100%', aspectRatio: 1 }}
            responsive
        >
            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="90%"
                outerRadius="100%"
            />
            <Tooltip defaultIndex={0} />
        </PieChart>
    </div>
  )
}
