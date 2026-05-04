import { FormControl, InputLabel, MenuItem, Select as MUISelect, SxProps } from '@mui/material'
import { Theme } from '@mui/material/styles';
import React from 'react'

interface Props {
    label: string;
    id: string
    items: { value: string; label: string }[]
    sx?: SxProps<Theme>
}

export const Select = ({ label, id, items, sx }: Props) => {
  return (
    <FormControl  sx={{m:1, minWidth: 120, ...sx }} variant='outlined' size='small' color='secondary'>
        <InputLabel id={id}>{label}</InputLabel>
        <MUISelect
            label={label}
            labelId={id}
        >
            {items.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </MUISelect>
    </FormControl>
  )
}
