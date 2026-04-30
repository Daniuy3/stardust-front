"use client"

import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import { User } from '../interfaces';
import { TextButton } from '@/components/Button';
import { TbDots } from 'react-icons/tb';
import { SlLocationPin } from 'react-icons/sl';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e5e7eb",
    color: "#4a5565",
    fontWeight: 500,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Props {
    initialUsers: User[];
}

const RoleOutlined = ({ name }: { name: string }) => {
  if (name.toLowerCase() === "alumno") {
    return <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-sm text-xs">Alumno</span>;
  }

  if (name.toLowerCase() === "profesor") {
    return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-sm text-xs">Profesor</span>;
  }

  return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-sm text-xs">{name}</span>;
};

const EstatusWithCircle = ({ status }: { status: string }) => {
  const color = status.toLowerCase() === "active" ? "bg-green-500" : "bg-yellow-500";
  const estatusText = status.toLowerCase() === "active" ? "Activo" : "Inactivo";
  return (    <div className="flex items-center gap-2">
      <div className={`h-2 w-2 rounded-full ${color}`} />
      <span>
        {estatusText}
      </span>
    </div>
  );
}
export const TableHandler = ({ initialUsers }: Props) => {
  return (
    <div className='flex min-h-0 flex-1 flex-col'>

        <div className='min-h-0 flex-1 overflow-auto'>
          <TableContainer>
            <Table stickyHeader size='small'>
              <TableHead>
                  <TableRow>
                      <StyledTableCell>Nombre</StyledTableCell>
                      <StyledTableCell>Roles</StyledTableCell>
                      <StyledTableCell>Estado</StyledTableCell>
                      <StyledTableCell>Contacto</StyledTableCell>
                      <StyledTableCell>Ubicación</StyledTableCell>
                      <StyledTableCell>Último acceso</StyledTableCell>
                      <StyledTableCell>Acciones</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {initialUsers.map((user) => (
                      <StyledTableRow key={user.id}>
                          <StyledTableCell>
                            <div className='flex gap-3 items-center'>
                              <div className='h-9 w-9 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-700'>
                                {user.first_name[0]}
                              </div>
                              <div className='flex flex-col'>
                                <p>{user.display_name}</p>
                                <p className='text-sm text-gray-500'>{user.email}</p>
                              </div>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell sx={{display: "flex", gap: 1, py: 1.8}}>
                              {user.roles.map((role) => (
                                  <RoleOutlined key={role.id} name={role.name} />
                              ))}
                          </StyledTableCell>
                          <StyledTableCell>
                              <EstatusWithCircle status={user.status} />
                          </StyledTableCell>
                          <StyledTableCell>{user.profile?.phone ?? "Sin teléfono"}</StyledTableCell>
                          <StyledTableCell>
                            <div className='flex items-center gap-1'>
                              <SlLocationPin size={16} className='text-gray-500'/> 
                              {user.profile?.city ?? "Sin ciudad"}
                            </div>
                          </StyledTableCell>
                          <StyledTableCell>{user.bio}</StyledTableCell>
                          <StyledTableCell>
                              <TextButton>
                                  <TbDots size={18} />
                              </TextButton>
                          </StyledTableCell>
                      </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className='shrink-0 border-t border-gray-300'>
            <TablePagination
              labelDisplayedRows={(info) => (`${info.to} de ${info.count}`)}
              labelRowsPerPage="Filas por página"
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={initialUsers.length}
              slotProps={{
                select: {
                  label: 'Filas por página',
                  inputProps: {
                    'aria-label': 'Filas por página',
                    
                  },
                  native: true,
                },
              }}
              rowsPerPage={5}
              page={0}
              onPageChange={() => {}}
              onRowsPerPageChange={() => {}}
          />
        </div>
    </div>
  )
}
