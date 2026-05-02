"use client"

import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIpicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es-mx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickerValue } from '@mui/x-date-pickers/internals';


interface Props {
    label: string;
    value: PickerValue;
    name: string;
    onChange: (value: PickerValue) => void;
}

export const DatePicker = ({ label, value, name, onChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
        <MUIpicker
            sx={{
                width: '100%',

                '.MuiPickersToolbar-root': {
                    '&.Mui-focused': {
                        borderColor: 'secondary.main',
                        borderWidth: 2,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'secondary.main',
                    },
                    '&.Mui-error': {
                        borderColor: 'error.main',
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'error.main',
                    },
                    
                },
            }}
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            slotProps={{
                textField: {
                    error: !value,
                },
            }}
        /> 
    </LocalizationProvider>
  )
}
