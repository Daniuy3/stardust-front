import React from 'react'
import { Button as MuiButton, type ButtonProps } from '@mui/material'

type Props = ButtonProps

export const Button = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <MuiButton sx={sx} {...props}>
      {children}
    </MuiButton>
    )
}

export const OutlinedButton = ({ children, sx, ...props }: Props) => {
    return (
        <MuiButton
            variant="outlined"
            sx={{
                fontWeight: 600,
                borderColor: '#9810fa',
                color: '#9810fa',
                borderRadius: '10px',
                fontSize: '12px',
                padding: '10px 20px',
                textTransform: 'none',
                ...sx,
            }}
            {...props}
        >
            {children}
        </MuiButton>
    )
}
  

export const ContainedButton = ({ children, sx, ...props }: Props) => {
    return (
        <MuiButton
            variant="contained"
            sx={{
                fontWeight: 600,
                bgcolor: '#9810fa',
                borderRadius: '10px',
                fontSize: '12px',
                padding: '10px 20px',
                textTransform: 'none',
                ...sx,
            }}
            {...props}
        >
            {children}
        </MuiButton>
    )
}

export const TextButton = ({ children, sx, ...props }: Props) => {
    return (
        <MuiButton
            variant="text"
            sx={{
                color: '#9810fa',
                textTransform: 'none',
                ...sx,
                }}
            {...props}
        >
            {children}
        </MuiButton>
    )
}