"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dataParsed = [1,2,3,4,5,6].map((num) => ({
    name: "Etapa " + num,
    visitas: num *  600,
    ventas: num * num * 400,
}));
    


export const StackedBarChart = () => {
  return (
    <div className='flex justify-between items-center gap-6 flex-col lg:flex-row my-10 p-2'>
        <div className='lg:w-1/2 flex flex-col lg:block'>
            <h2 className='font-bold text-3xl mb-5 text-center lg:text-left'>
                Así escala tu negocio con Stardust
            </h2>
            <div 
                className='h-0.5 block w-8/12 mx-auto lg:mx-0 bg-purple-950 mb-5'
            />
            <p className='text-lg text-center lg:text-left'>
                El crecimiento no es inmediato ni aleatorio, es acumulativo. Empieza con cambios pequeños que, bien ejecutados, comienzan a reflejarse en métricas claras. Con el tiempo, esos resultados dejan de ser aislados y se vuelven consistentes, permitiendo escalar sin depender de picos o esfuerzos improvisados. 
            </p>

            <button className="mt-8 mx-auto px-6 py-3 bg-purple-600 max-w-60 cursor-pointer text-white rounded-md font-semibold hover:bg-purple-700 transition">
                Quiero un Proyecto
            </button>
        </div>

        <div className='mx-auto w-full md:w-10/12 lg:w-1/2'>
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
    </div>
  );
};