import { FormControl, InputLabel, MenuItem, Select as MUISelect } from '@mui/material'
import React from 'react'

interface Props {
    label: string;
    id: string
    items: { value: string; label: string }[]
}

export const Select = ({ label, id, items }: Props) => {
  return (
    <FormControl  sx={{m:1, minWidth: 120 }} variant='outlined' size='small' color='secondary'>
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
