"use client"

import { FormControl, IconButton,  InputAdornment, InputLabel } from '@mui/material'
import Input, {InputProps} from '@mui/material/Input'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'


interface Props extends InputProps {
    errorMessage?: string | false;
    title?: string
}
export const PasswordInput = ({error, title, errorMessage,...rest} : Props) => {

    const [showPassword, setShowPassword] = useState(false);
    

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
  return (
    <FormControl fullWidth variant="standard" color='secondary'>
        <InputLabel htmlFor="standard-adornment-password" error={error}>{title || 'Contraseña'}</InputLabel>
        <Input

            error={error}

            fullWidth
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            {...rest}
            endAdornment={
            <InputAdornment position="end">
                <IconButton
                    data-umami-event={showPassword ? 'Click en ocultar contraseña' : 'Click en mostrar contraseña'}
                    aria-label={
                        showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    sx={{
                        color: error ? 'red' : 'inherit',
                    }}
                >
                {showPassword ?  <FaRegEye /> : <FaRegEyeSlash />}
                </IconButton>
            </InputAdornment>
            }
        />
        {<span className="text-red-500 text-sm" style={{opacity: error? 1 : 0}}>{errorMessage}</span>}
    </FormControl>
  )
}
