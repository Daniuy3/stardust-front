"use client"

import { styled, SxProps, Table, TableBody, TableCell, tableCellClasses, TableContainer,  TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { User } from '../interfaces';
import { SlLocationPin } from 'react-icons/sl';
import { useUsersStore } from '../store/UsersStore';
import { TableLoader } from './TableLoader';
import { useTablePagination } from '@/hooks/useTablePagination';
import { UserActions } from './UserActions';
import UserModal from './UserModal';
import { useManageUser } from '../hooks/useManageUser';
import { ReactivateModal } from './ReactivateModal';
import Link from 'next/link';
import { Theme } from '@mui/material/styles';
import { RoleOutlined } from '@/components/RoleOutlined';


const StyledTableCell = styled(TableCell)(() => ({
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

const EstatusWithCircle = ({ status }: { status: string }) => {
  const color = status.toLowerCase() === "active" ? "bg-green-500" : "bg-yellow-500";
  const estatusText = status.toLowerCase() === "active" ? "Activo" : "Inactivo";
  return (    
    <div className="flex items-center gap-2">
      <div className={`h-2 w-2 rounded-full ${color}`} />
      <span>
        {estatusText}
      </span>
    </div>
  );
}

const RedirectTableCell = ({ children, userId, sx }: { children: React.ReactNode, userId: number, sx?: SxProps<Theme> }) => {

  return (
    <StyledTableCell sx={sx}>
      <Link href={`/administracion/usuarios/${userId}`} >
        {children}
      </Link>
    </StyledTableCell>
  )
}

export const TableHandler = ({ initialUsers }: Props) => {

  const { users, loading, setUsers} = useUsersStore();
  const {slice, setPage, ...rest} = useTablePagination({ initialRowsPerPage: 10})
  const { 
        formik, 
        modalOpen, 
        activeModal,
        handleCloseModal, 
        handleOpenModal, 
        handleDateChange, 
        handleRoles, 
        handleOpenActiveModal,
        handleCloseActiveModal,
        handleToggleActive,
  } = useManageUser({ mode: 'update' });

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers])

  useEffect(() => {
    setPage(0);
  },  [users, setPage]) 

  return (
    <>
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
                  {
                      loading && [1,2,3,4,5].map((i) => (
                        <TableLoader key={i + "skeleton"}/>
                      ))
                  }
                  {
                      users.length === 0 && !loading && (
                        <TableRow>
                          <TableCell colSpan={8} align="center" sx={{height:400}}>
                            No hay usuarios para mostrar.
                          </TableCell>
                        </TableRow>
                      )
                  }
                    {
                      users.length > 0 && !loading && users.slice(...slice).map((user) => (
                        <StyledTableRow key={user.id + "row"}>
                            <RedirectTableCell userId={user.id}>
                              <div className='flex gap-3 items-center'>
                                <div className='h-9 w-9 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-700'>
                                  {user.first_name[0]}
                                </div>
                                <div className='flex flex-col'>
                                  <p>{user.display_name}</p>
                                  <p className='text-sm text-gray-500'>{user.email}</p>
                                </div>
                              </div>
                            </RedirectTableCell>
                            <RedirectTableCell userId={user.id}>
                                {user.roles.map((role) => (
                                    <RoleOutlined key={role.id} name={role.name} />
                                ))}
                            </RedirectTableCell>
                            <RedirectTableCell userId={user.id}>
                                <EstatusWithCircle status={user.status} />
                            </RedirectTableCell>
                            <RedirectTableCell userId={user.id}>
                              {user.profile?.phone ?? "Sin teléfono"}
                            </RedirectTableCell>
                            <RedirectTableCell userId={user.id} >
                              <div className='flex items-center gap-1'>
                                <SlLocationPin size={16} className='text-gray-500'/> 
                                {user.profile?.city ?? "Sin ciudad"}
                              </div>
                            </RedirectTableCell>
                            <RedirectTableCell userId={user.id}>
                              {new Date().toLocaleString("es-ES", {
                                day: "2-digit",
                                month: "short",
                                year: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </RedirectTableCell>
                            <StyledTableCell>
                                <UserActions 
                                  user={user} 
                                  onOpenEdit={(userData) => {
                                    handleOpenModal(userData);
                                  }}
                                  onOpenToggleActive={(isActive, userId) => {
                                    handleOpenActiveModal(isActive, userId);
                                  }}
                                  onClose={handleCloseModal}
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className='shrink-0 border-t border-gray-300'>
              <TablePagination
                count={users.length}
                {...rest}
            />

            
          </div>
      </div>

      <UserModal 
          key={"User update modal"}
          open={modalOpen}
          title="Editar Usuario"
          onClose={handleCloseModal}
          formik={formik}
          handleChange={formik.handleChange}
          handleDateChange={handleDateChange}
          handleRoles={handleRoles}
      />

      <ReactivateModal 
        open={activeModal.open}
        title={activeModal.title}
        description={activeModal.description}
        loading={activeModal.loading}
        onClose={handleCloseActiveModal}
        onReactivate={handleToggleActive}
      />
    </>
  )
}
