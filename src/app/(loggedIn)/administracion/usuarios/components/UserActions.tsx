"use client";


import { TextButton } from '@/components/Button';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { FaCheckCircle, FaEdit } from 'react-icons/fa';
import { PiProhibitBold } from 'react-icons/pi';
import { TbDots } from 'react-icons/tb';
import { User } from '../interfaces';
import { fromUserUpdateData } from '../DTO/userDto';

interface Props {
    user: User
    onOpenEdit: (userData: ReturnType<typeof fromUserUpdateData>) => void
    onOpenToggleActive: (isActive: boolean, userId: number) => void
    onClose: () => void
}

export const UserActions = ({ user, onOpenEdit, onOpenToggleActive, onClose }: Props) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleEdit = () => {
        onOpenEdit(fromUserUpdateData(user));
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
        onClose();
    };

    return (
        <>
            <TextButton 
                onClick={handleClick}
            >
                <TbDots size={18} />
            </TextButton>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                list: {
                    'aria-labelledby': 'basic-button',
                },
                }}
            >
                <MenuItem onClick={() => onOpenToggleActive(user.status === "active", user.id)}>

                    <ListItemIcon>
                        {
                            user.status === "active" ? <PiProhibitBold size={19} /> : <FaCheckCircle  size={19} />
                        }
                    </ListItemIcon>
                    {
                        user.status === "active" ? "Desactivar" : "Reactivar"
                    }
                </MenuItem>
                <MenuItem onClick={handleEdit}>
                    <ListItemIcon>
                        <FaEdit size={18} />
                    </ListItemIcon>
                    Editar     
                </MenuItem>
            </Menu>
        </>
    )
}
