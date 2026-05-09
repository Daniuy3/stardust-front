"use client"

import { FormControl, InputAdornment, InputLabel, InputProps, Input as MUIInput } from '@mui/material'
import React from 'react'


interface Props extends InputProps {
    label: string;
    icon ?: React.ReactNode;
    variant?: 'standard' | 'outlined' | 'filled';
    errorMessage?: string  | false;
}

export const Input = ({ error, label, icon, variant = "standard", errorMessage, ...rest }: Props) => {
  return (
    <FormControl fullWidth variant={variant} color='secondary'>
        <InputLabel error={error}>{label}</InputLabel>
        <MUIInput
            sx={{
                border: variant
            }}
            error={error}
            fullWidth
            endAdornment={
                <InputAdornment position="end">
                    {icon}
                </InputAdornment>
            }
            {...rest}
        />
        {errorMessage && (
            <span className="text-red-500 text-sm">
                {errorMessage}
            </span>
        )}
    </FormControl>
  )
}
