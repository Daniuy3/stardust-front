"use client"

import { useSnackBarStore } from '@/hooks/useSnackbar'
import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const StoredSnackBar = () => {

  const { show, setShow, message, type } = useSnackBarStore()

  return (
    <Snackbar open={show} autoHideDuration={3000} onClose={ () => setShow(false) } > 
        <Alert
            severity={type}
            variant="filled"
            sx={{ width: '100%' }}
            onClose={() => setShow(false)}
        >
            {message}
        </Alert>
    </Snackbar>
  )
}
