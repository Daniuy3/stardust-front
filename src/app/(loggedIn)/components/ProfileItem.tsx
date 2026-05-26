"use client";

import React, { useState } from 'react'
import { UserMenu } from './UserMenu';

export const ProfileItem = ({ display_name, id }: { display_name: string; id: number }) => {

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
        <button className='flex border-t border-gray-300 pt-3 cursor-pointer' onClick={handleClick}>
            <div className='relative h-12 w-12 bg-purple-800 rounded-full'>
                <p className='text-white font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                    {
                        display_name.split(" ").map((word) => word[0]).join("")
                    }
                </p>
            </div>


            <div className='flex flex-col justify-center ml-4'>
                <p className='text-sm font-bold'>
                    {display_name}
                </p>
                <p className='text-left'>
                    Detalles
                </p>
            </div>

        </button>

        <UserMenu 
            display_name={display_name}
            id={id}
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
        />
    </>
  )
}
