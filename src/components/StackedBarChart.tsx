"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dataParsed = [1,2,3,4,5,6].map((num) => ({
    name: "Etapa " + num,
    visitas: num *  600,
    ventas: num * num * 400,
}));
    


export const StackedBarChart = () => {
  return (
    <div className='flex justify-between gap-6 flex-col lg:flex-row my-10'>
        <div className='lg:w-1/2'>
            <h2 className='font-bold text-4xl mb-5'>
                Así escala tu negocio con Stardust
            </h2>
            <div 
                className='h-0.5 block w-8/12 bg-indigo-950 mb-5'
            />
            <p className='text-lg'>
                El crecimiento no es inmediato ni aleatorio, es acumulativo. Empieza con cambios pequeños que, bien ejecutados, comienzan a reflejarse en métricas claras. Con el tiempo, esos resultados dejan de ser aislados y se vuelven consistentes, permitiendo escalar sin depender de picos o esfuerzos improvisados. 
            </p>
        </div>

        <BarChart
            style={{ width: '100%', maxWidth: '600px', maxHeight: '60vh', aspectRatio: 1.618 }}
            responsive
            data={dataParsed}
            margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" niceTicks="snap125" />
            <YAxis width="auto" niceTicks="snap125" />
            <Tooltip />
            <Legend />
            <Bar dataKey="ventas" stackId="a" fill="#8884d8"  />
            <Bar dataKey="visitas" stackId="a" fill="#d8dde5"  />
        </BarChart>
    </div>
  );
};