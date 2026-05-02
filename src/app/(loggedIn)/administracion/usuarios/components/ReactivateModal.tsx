"use client";

import { ContainedButton, OutlinedButton } from '@/components/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'

interface Props {
    title: string;
    description: string;
    loading: boolean;
    open: boolean;
    onClose: () => void;
    onReactivate: () => void;
}

export const ReactivateModal = ({  open, onClose, onReactivate, title, description, loading }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>
            {title}
        </DialogTitle>
        <DialogContent>
            <p>
                {description}
            </p>
        </DialogContent>

        <DialogActions>
            <OutlinedButton
                onClick={onClose}
            >
                Cancelar
            </OutlinedButton>
            <ContainedButton
                onClick={onReactivate}
                disabled={loading}
            >
                {loading ? "Cargando..." : "Confirmar"}
            </ContainedButton>
        </DialogActions>
    </Dialog>
  )
}