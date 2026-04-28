"use client"

import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NestedListItem {
  Icon: React.ReactNode
  text: string
  link: string
}

interface Props {
  items: NestedListItem[]
}


export default function NestedList({ items } : Props) {

    const pathname = usePathname();


  return (

        <div className='flex flex-col gap-1'>
          {
            items.map((item, index) => (
                <Link href={item.link} key={index} className='w-full'>
                    <ListItemButton 
                        sx={{ 
                            pl: 2, 
                            borderRadius: "8px",
                            "&.Mui-selected":{
                                backgroundColor: "#faf5ff",
                                fontWeight: 600,
                                color: "#7C3AED",
                                border: "1px solid #d1d5dc",
                                borderLeft: "2px solid #7C3AED",
                                "&:hover": {
                                    backgroundColor: "#7C3AED",
                                    color: "#fff",
                                }
                            }
                        }} 
                        selected={pathname === item.link}
                    >
                        <div className='flex gap-3 items-center text-sm'>
                            
                            {item.Icon}

                            <p>
                                {item.text}
                            </p>
                        </div>
                    </ListItemButton>
                </Link>
            ))
          }
        </div>
  );
}