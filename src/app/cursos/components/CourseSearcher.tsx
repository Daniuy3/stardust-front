import { FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

export const CourseSearcher = () => {
  return (
    <div className='flex  mt-10 mx-auto border items-end border-gray-300 rounded-lg shadow-xs px-5 py-3 md:py-0 md:pb-3'>
        <div className='flex gap-3 w-full items-center'>
            <TextField            
                color='secondary'
                variant='standard'   
                size='medium'
                sx={{  flex: 1, mb: 1 }}
                placeholder="Buscar cursos..."
            />

            <div>
                <IconButton type="button" size='small' aria-label="search" sx={{ p: '10px' }}>
                    <LuSearch />
                </IconButton>
            </div>
        </div>

        <div className='hidden md:block'>
            <FormControl  sx={{m:1, minWidth: 120 }} variant='standard' size='small' color='secondary'>
                <InputLabel id="category-select">Categoría</InputLabel>
                <Select
                    labelId="category-select"
                >
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="programacion">Programación</MenuItem>
                    <MenuItem value="diseño">Diseño</MenuItem>
                    <MenuItem value="marketing">Marketing</MenuItem>
                </Select>
            </FormControl>

        </div>

        <div className='hidden md:block'>
            <FormControl sx={{m:1, minWidth: 120 }} size='small'  variant='standard' color='secondary'>
                <InputLabel id="modality-select">Modalidad</InputLabel>
                <Select
                    labelId="modality-select"
                >
                    <MenuItem value="all">Todas</MenuItem>
                    <MenuItem value="online">En vivo</MenuItem>
                    <MenuItem value="presencial">Asincrono</MenuItem>
                </Select>
            </FormControl>
        </div>
    </div>
  )
}
