"use client"

import React from 'react'
import { User } from '../../interfaces'
import { OutlinedButton } from '@/components/Button'
import { FaCheckCircle, FaEdit } from 'react-icons/fa'
import { Select } from '@/components/Select'
import UserModal from '../../components/UserModal'
import { useManageUser } from '../../hooks/useManageUser'
import { fromUserUpdateData } from '../../DTO/userDto'
import { PiProhibitBold } from 'react-icons/pi'
import { ReactivateModal } from '../../components/ReactivateModal'

interface Props {
    user: User
}
export const UserActions = ({ user } : Props) => {

    const {
        formik,
        modalOpen,
        handleCloseModal,
        handleDateChange,
        handleOpenModal,
        handleRoles,
        activeModal,
        handleCloseActiveModal,
        handleToggleActive,
        handleOpenActiveModal
    } = useManageUser({mode: "update", initialValues: fromUserUpdateData(user)})

  return (
    <div className="flex flex-col justify-between  xl:ml-auto gap-3">
        <div className="flex flex-col sm:flex-row justify-center xl:justify-end gap-5 md:max-h-10 items-center">
            <OutlinedButton
                startIcon={<FaEdit size={14}/>}
                size="small"
                onClick={() => handleOpenModal(fromUserUpdateData(user))}
            >
                Editar Usuario
            </OutlinedButton>

            <OutlinedButton
                onClick={() => handleOpenActiveModal(user.status === "active", user.id)}
                startIcon={
                    user.status === 'active' ? <PiProhibitBold size={14} /> : <FaCheckCircle size={14} />
                }
            >
                {
                    user.status === 'active' ? 'Desactivar Usuario' : 'Activar Usuario'
                }
            </OutlinedButton>

        </div>

        <UserModal 
            open={modalOpen}
            formik={formik}
            handleChange={formik.handleChange}
            handleDateChange={handleDateChange}
            handleRoles={handleRoles}
            onClose={handleCloseModal}
            title='Editar Usuario'
        />

        <ReactivateModal 
            open={activeModal.open}
            title={activeModal.title}
            description={activeModal.description}
            loading={activeModal.loading}
            onClose={handleCloseActiveModal}
            onReactivate={handleToggleActive}
        />
    </div>
  )
}
