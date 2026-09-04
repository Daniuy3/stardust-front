"use client";

import { TextButton } from '@/components/Button';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { TbLogout } from 'react-icons/tb';
import { logout } from '../api/auth';


interface Props {
    display_name: string;
    id: number;
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => void;
    verticalPosition?: "top" | "bottom";
    horizontalPosition?: "left" | "right";
}
export const UserMenu = ({  
    id, 
    anchorEl, 
    open, 
    handleClose,
    verticalPosition = "top",
    horizontalPosition = "right"
}: Props) => {
  return (
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: verticalPosition,
            horizontal: horizontalPosition
        }}
    >
        <MenuItem onClick={handleClose}>
            <Link href={`/profile/${id}`}>
                <TextButton 
                    data-umami-event="Click en ver perfil"
                    startIcon={<CgProfile />}
                >
                    Ver Perfil
                </TextButton>
            </Link>
        </MenuItem>
        <MenuItem onClick={() => logout()}>
            <TextButton
                data-umami-event="Click en cerrar sesión"
                startIcon={<TbLogout />}
            >
                Cerrar Sesión
            </TextButton>
        </MenuItem>
        
    </Menu>
  )
}
