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
    { name: "Servicios", href: "/servicios" },
    { name: "Cursos", href: "/cursos" },
    { name: "Proyectos", href: "/#proyectos", disabled: true },
    { name: "Contacto", href: "/contacto", main: true },
    { name: "Iniciar sesión", href: "/login" },
  ]

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav
        aria-label="Navegación principal"
        className="flex items-center justify-between px-5 md:px-10"
      >
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
                page.disabled ? (
                  <span
                    key={page.name}
                    aria-disabled="true"
                    className="cursor-not-allowed text-gray-400"
                  >
                    {page.name}
                  </span>
                ) : page.main ? (
                  <Link
                    key={page.name}
                    href={page.href}
                    data-umami-event={`Click en ${page.name.toLowerCase()}`}
                    className="rounded bg-purple-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    {page.name}
                  </Link>)
                : (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="text-gray-700 transition-colors hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    {page.name}
                  </Link>
                )
            ))
          }
        </div>

        <div className="md:hidden flex items-center">
          <IconButton
            data-umami-event={open ? "Click en cerrar menú de navegación" : "Click en abrir menú de navegación"}
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
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
              <MenuItem
                component={Link}
                href="/#inicio"
                onClick={handleClose}
                sx={{px:7, justifyContent: "center"}}
              >
                Inicio
              </MenuItem>
              
              <MenuItem
                component={Link}
                href="/servicios"
                onClick={handleClose}
                sx={{px:7, justifyContent: "center"}}
              >
                Servicios
              </MenuItem>
              <MenuItem
                component={Link}
                href="/cursos"
                onClick={handleClose}
                sx={{px:7, justifyContent: "center"}}
              >
                Cursos
              </MenuItem>
              <MenuItem disabled sx={{px:7, justifyContent: "center"}}>
                Proyectos
              </MenuItem>
              <Divider />
              <MenuItem
                component={Link}
                href="/contacto"
                onClick={handleClose}
                sx={{px:7, justifyContent: "center"}}
              >
                Contacto
              </MenuItem>

              <MenuItem
                component={Link}
                href="/login"
                onClick={handleClose}
                sx={{px:7, justifyContent: "center"}}
              >
                Iniciar sesión
              </MenuItem>
            </Menu>
        </div>
      </nav>
    </header>
  )
}
