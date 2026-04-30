"use client"

import { Badge, badgeClasses, FormControl, IconButton, InputAdornment, OutlinedInput, styled } from '@mui/material'
import React from 'react'
import { FaRegBell } from 'react-icons/fa';
import { LuMessageSquare, LuSearch } from 'react-icons/lu'

interface PresentationProps {
    name?: string;
}

const StyledBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export const Presentation = ({ name = '[Nombre del usuario]' }: PresentationProps) => {
  return (
    < >
        <div className='justify-between hidden lg:flex'>
            <h2 className='text-2xl font-semibold w-1/3 hidden xl:block'>¡Hola, {name}!</h2>

            <FormControl variant='outlined' fullWidth size='small' sx={{ maxWidth: "450px" }}>
                <OutlinedInput
                    color='secondary'
                    size='small'
                    placeholder='Buscar cursos, temas...'
                    startAdornment={
                        <InputAdornment position="start">
                            <LuSearch />
                        </InputAdornment>
                    }
                    id="presentation-input"
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#d1d5dc',
                            ":hover &": {
                                borderColor: '#7C3AED',
                            }
                        },
                    }}
                />
            </FormControl>

            <div className='flex gap-5 items-center'>
                <IconButton size='large'>
                    <LuMessageSquare size={18} />
                    <StyledBadge badgeContent={2} color="secondary" overlap="circular" />
                </IconButton>

                <IconButton size='large'>
                    <FaRegBell  size={18} />
                    <StyledBadge badgeContent={2} color="secondary" overlap="circular" />
                </IconButton>

                <div className='rounded-full h-8 w-8 bg-purple-700 relative '>
                    <p className='text-white font-bold text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                        JD
                    </p>
                </div>
            </div>
        </div>
        <div className='hidden lg:block'>
            <p className='text-gray-500'>
                Continúa aprendiendo y alcanza tus metas.
            </p>
        </div>

    </>
  )
}
