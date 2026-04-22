"use client";

import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const pages = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Cursos", href: "/cursos" },
    { name: "Proyectos", href: "/#proyectos", disabled: true },
  ]

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center px-5 md:px-10 shadow sticky top-0 bg-white z-50">
        <div className="aspect-video relative min-w-36">
          <Image 
            src="/stardust.svg"
            alt="Stardust Logo"
            className="object-cover absolute "
            fill
          />
        </div>

        <div className="gap-5 items-center hidden md:flex">
          {
            pages.map((page) => (
              <button
                key={page.name}
                disabled={page.disabled}
              >
                <Link 
                  href={page.href}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {page.name}
                </Link>
              </button>
            ))
          }

          <Link 
            href="/#contact"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-300"
          >
            Contacto
          </Link>
        </div>

        <div className="md:hidden flex items-center">
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
              paper: {
                elevation: 0,
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
              
              <MenuItem onClick={handleClose} sx={{px:7}}>
                <p className="text-center w-full">
                  Inicio
                </p>
              </MenuItem>
              
              <MenuItem onClick={handleClose} sx={{px:7, textAlign: "center"}}>
                <p className="text-center w-full">
                  Servicios
                </p>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{px:7, textAlign: "center"}}>
                <p className="text-center w-full">
                  Proyectos
                </p>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{px:7, textAlign: "center"}}>
                <Link href="/cursos" className="text-center w-full">
                  Cursos
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose} sx={{px:7, textAlign: "center"}}>
                <p className="text-center w-full">
                  Contacto
                </p>
              </MenuItem>
            </Menu>
        </div>
    </div>
  )
}
