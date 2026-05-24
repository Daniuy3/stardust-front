"use client"

import Image from 'next/image'
import { ProfileItem } from './ProfileItem'
import NestedList from '@/components/NestedList'
import { AiFillAlert } from 'react-icons/ai'
import { routes } from '../data/routes'
import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { IoMenu } from 'react-icons/io5'
import Link from 'next/link'


const ITEM_HEIGHT = 48;

export const NavBar = ({ display_name, id }: { display_name: string; id: number  }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <>
        <div className='h-full flex-col border-r border-gray-200 px-5 py-5 gap-5 min-w-64 hidden lg:flex'>
            <div className='relative w-full max-w-40 h-16 block mx-auto'>
                <Image 
                    src="/stardust.svg"
                    alt="Stardust Logo"
                    fill
                    className='object-cover w-full absolute'
                />
            </div>

            <div className='flex flex-col h-full overflow-y-auto'>
                {routes.map((section) => (
                    <div
                        key={section.section}
                    >

                        <p className='text-xs text-gray-500 uppercase mb-2 mt-5'>
                            {section.section}
                        </p>

                        <NestedList
                            items={section.links.map((link) => ({
                                Icon: link.icon || <AiFillAlert />,
                                text: link.name,
                                link: link.href
                            }))}
                        />
                    </div>
                ))}
            </div>
            
            <ProfileItem display_name={display_name} id={id} />
        </div>

        <div className='flex justify-end border-b border-gray-200 px-5 py-5 gap-5 w-full lg:hidden'>
            <IconButton
                onClick={handleClick}
                size="large"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <IoMenu size={32} className="text-black"/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}

                slotProps={{
                    list: {
                        'aria-labelledby': 'long-button',
                    },
                    paper: {
                        elevation: 0,
                        style: {
                            maxHeight: ITEM_HEIGHT * 7,
                            overflowY: 'auto',
                        },
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {
                        routes.map((section) => (
                            <div key={`mobile-${section.section}`}>
                                <p className='text-xs text-gray-500 uppercase mb-2 mt-5 px-3'>
                                    {section.section}
                                </p>
                                
                                {section.links.map((link) => (
                                    <Link href={link.href} key={`mobile-link-${link.name}`}>
                                        <MenuItem onClick={handleClose} sx={{px:7}} key={`mobile-link-${link.name}`}>
                                            <p className="w-full">
                                                {link.name}
                                            </p>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </div>
                        ))
                    }
                </Menu>
        </div>
    </>
  )
}
