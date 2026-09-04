"use client";

import { OutlinedButton } from '@/components/Button';
import { Select } from '@/components/Select';
import { Checkbox, Slider } from '@mui/material';
import React from 'react'

function valuetext(value: number) {
  return `${value} h`;
}

export const FiltersForm = () => {

    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number[]) => {
        setValue(newValue);
    };

  return (
    <form className="flex min-h-0 flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg">Filtros</h2>
            <button data-umami-event="Click en limpiar filtros de cursos" className="text-sm text-purple-500">Limpiar</button>
        </div>

        <Select 
            id="select-category"
            label="Categoría"
            sx={{width: "100%", margin:0}}
            items={[
                {label: "Programación", value:"programacion"},
                {label: "Diseño", value:"diseno"},
                {label: "Marketing", value:"marketing"},
            ]}
        />

        <div className="flex flex-col">
            <p className="font-medium">
                Nivel
            </p>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary" />
                    <p>Principiante</p>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary" />
                    <p>Intermedio</p>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary"/>
                    <p>Avanzado</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col">
            <p className="font-medium">
                Modalidad
            </p>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary" />
                    <p>En vivo</p>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary" />
                    <p>Grabado</p>
                </div>
            </div>
        </div>

        <div >
            <h3>
                Duración
            </h3>
            <Slider
                getAriaLabel={() => 'Duración en horas'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color='secondary'
                getAriaValueText={valuetext}
            />

            <div className='flex justify-between text-sm text-gray-500'>
                <p>
                    0 h
                </p>
                <p>
                    10+ h
                </p>
            </div>
        </div>

        <div className="flex flex-col">
            <p className="font-medium">
                Precio
            </p>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary" />
                    <p>Gratis</p>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox size="small" sx={{p:0.4}} color="secondary" />
                    <p>Pago</p>
                </div>
            </div>
        </div>

        <Select 
            id="select-language"
            label="Idioma"
            sx={{width: "100%", margin:0}}
            items={[
                {label: "Español", value:"español"},
                {label: "Inglés", value:"ingles"},
            ]}
        /> 

        <OutlinedButton data-umami-event="Click en mostrar cursos filtrados" sx={{mt: "auto"}}>
            Mostrar resultados
        </OutlinedButton> 
    </form>
  )
}
