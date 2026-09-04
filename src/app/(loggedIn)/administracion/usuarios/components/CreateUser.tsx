"use client";


import { ContainedButton } from '@/components/Button';
import { FaPlus } from 'react-icons/fa';
import { useManageUser } from '../hooks/useManageUser';
import { UserModal } from './UserModal';

export const CreateUser = () => {

    const { 
        formik, 
        modalOpen, 
        handleCloseModal, 
        handleOpenModal, 
        handleDateChange, 
        handleRoles, 
    } = useManageUser({mode: "create"});

    return (
        <>
            <ContainedButton
                data-umami-event="Click en agregar usuario"
                sx={{
                    ml: 2,
                    borderRadius: "4px",
                }}
                startIcon={<FaPlus size={12}/>}
                variant="contained"
                onClick={() => handleOpenModal(null)}
            >
                Agregar Usuario
            </ContainedButton>

            <UserModal
                key={"User create modal"}
                open={modalOpen}
                title="Añadir Usuario"
                formik={formik}
                onClose={handleCloseModal}
                handleChange={formik.handleChange}
                handleDateChange={handleDateChange}
                handleRoles={handleRoles}
            />
        </>
    )
}
