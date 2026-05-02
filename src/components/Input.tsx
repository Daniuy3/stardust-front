"use client"

import { FormControl, InputAdornment, InputLabel, InputProps, Input as MUIInput } from '@mui/material'
import React from 'react'


interface Props extends InputProps {
    label: string;
    icon ?: React.ReactNode;
    errorMessage?: string  | false;
}

export const Input = ({ error, label, icon, errorMessage, ...rest }: Props) => {
  return (
    <FormControl fullWidth variant="standard" color='secondary'>
        <InputLabel error={error}>{label}</InputLabel>
        <MUIInput
            error={error}
            fullWidth
            {...rest}
            endAdornment={
            <InputAdornment position="end">
                {icon}
            </InputAdornment>
            }
        />
        {errorMessage && (
            <span className="text-red-500 text-sm">
                {errorMessage}
            </span>
        )}
    </FormControl>
  )
}
