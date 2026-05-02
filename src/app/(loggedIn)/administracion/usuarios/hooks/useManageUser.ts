"use client"

import { useFormik } from "formik"
import { createUserSchema, updateUserSchema } from "../schema"
import { useUsersStore } from "../store/UsersStore"
import { useRef, useState } from "react"
import { RoleType, UserCreationData } from "../interfaces"
import { createUser, getUsers, updateUser } from "../api"
import { useSnackBarStore } from "@/hooks/useSnackbar"


interface Props {
    mode: 'create' | 'update';
    initialValues?: UserCreationData | null;
}

export const useManageUser = ({ mode, initialValues } : Props) => {

    const { setUsers, setLoading } = useUsersStore()
    const [modalOpen, setModalOpen] = useState(false)
    const initialValuesRef = useRef(initialValues)
    const { showSnackBar } = useSnackBarStore()
    
    const [activeModal, setActiveModal] = useState({
        open: false,
        id: -1,
        loading: false,
        active: false,
        title: "",
        description: "",
    })

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            roles: ["student"] as RoleType[],

            phone: "",
            bio: "",
            country: "",
            city: "",
            birth_date: new Date().toISOString().split('T')[0],
            headline: "",
            professional_title: "",
            specialization: "",
            years_experience: 0,
            website_url: "",
            linkedin_url: "",
        },
        onSubmit: () => {
            if(mode === 'create') {
                handleCreateUser()
            } else {
                handleUpdateUser()
            }
        },
        validationSchema: mode === 'create' ? createUserSchema : updateUserSchema,
    })

    const handleCreateUser = async () => {
        if(formik.isValid) {
            
            const reponse = await createUser({
                ...formik.values,
                birth_date: formik.values.birth_date !== formik.initialValues.birth_date ? new Date(formik.values.birth_date) : undefined,
                years_experience: formik.touched.years_experience ? formik.values.years_experience : undefined,
            })

            if (reponse.success) {
                showSnackBar("Usuario creado exitosamente", "success")
                handleRefetchUsers()
                formik.resetForm()
                setModalOpen(false)
            } else {
                showSnackBar(reponse.message || "Error al crear usuario", "error")
            }
        }
    }

    const handleUpdateUser = async () => {
        if(formik.isValid && initialValuesRef.current && initialValuesRef.current.id) {

            const diffValues = Object.keys(formik.values).reduce((acc, key) => {
                const formikValue = formik.values[key as keyof typeof formik.values];
                const initialValue = initialValuesRef.current ? initialValuesRef.current[key as keyof typeof initialValuesRef.current] : undefined;

                if (formikValue !== initialValue) {
                    acc[key] = formikValue;
                }

                return acc;
            }, {} as Record<string, unknown>);

            const isChangedDate = formik.values.birth_date !== initialValuesRef.current.birth_date?.toISOString().split('T')[0];

            if(isChangedDate) {
                diffValues.birth_date = formik.values.birth_date;
            }
            else delete diffValues.birth_date;

            if(Object.keys(diffValues).length === 0) {
                showSnackBar("No se han realizado cambios", "info")
                formik.setSubmitting(false);
                return;
            }

            const response = await updateUser({ id: initialValuesRef.current.id, ...diffValues })

            if (response.success) {
                showSnackBar("Usuario actualizado exitosamente", "success")
                handleRefetchUsers()
                formik.resetForm()
                setModalOpen(false)
            } else {
                showSnackBar(response.message || "Error al actualizar usuario", "error")
            }
        }
    }

    const handleRefetchUsers = async () => {
        setLoading(true)

        const response = await getUsers()

        if (response.success && response.data) {
            setUsers(response.data.data)
            showSnackBar("Usuarios actualizados", "success")
        } else {
            showSnackBar("Error al actualizar usuarios", "error")
        }

        setLoading(false)
        setModalOpen(false)
    }

    const handleOpenModal = (user : UserCreationData | null) => {
        
        if(user) {
            initialValuesRef.current = {
                ...user,
                birth_date: user.birth_date ? new Date(user.birth_date) : new Date(),
            }

            formik.setValues({
                ...formik.values,
                ...user,
                birth_date: user.birth_date ? new Date(user.birth_date).toISOString().split('T')[0] : formik.values.birth_date,
                password: "",
                password_confirmation: "",
            })
        }
        else initialValuesRef.current = null
        
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        initialValuesRef.current = null
        formik.resetForm()
        setModalOpen(false)
    }
    

    const handleDateChange = (name: string, value: string) => {
        formik.setFieldValue(name, value)
    }

    const handleRoles = (event: React.MouseEvent<HTMLElement>, newRoles: string[]) => {
        formik.setFieldValue("roles", newRoles)
    }

    const handleOpenActiveModal = (isActive: boolean, userId: number) => {
        setActiveModal({
            open: true,
            loading: false,
            id: userId,
            active: isActive,
            title: isActive ? "¿Deseas desactivar este usuario?" : "¿Deseas reactivar este usuario?",
            description: isActive ? "Al desactivar el usuario, este no podrá acceder a su cuenta ni realizar ninguna acción dentro de la plataforma. Sin embargo, sus datos y actividades previas se mantendrán intactos." : "Al reactivar el usuario, este podrá acceder nuevamente a su cuenta y utilizar todas las funcionalidades de la plataforma como antes."
        })
    }

    const handleCloseActiveModal = () => {
        setActiveModal({
            open: false,
            active: false,
            title: "",
            loading: false,
            id: -1,
            description: "",
        })
    }

    const handleToggleActive = async () => {
        
        setActiveModal(prev => ({
            ...prev,
            loading: true,
        }))

        const response = await updateUser({
            id: activeModal.id,
            status: activeModal.active ? "inactive" : "active",
        })

        handleCloseActiveModal()
        
        if(response.success) {
            showSnackBar(`Usuario ${activeModal.active ? "desactivado" : "reactivado"} exitosamente`, "success")
            handleRefetchUsers()
        }
        else {
            showSnackBar(response.message || `Error al ${activeModal.active ? "desactivar" : "reactivar"} usuario`, "error")
        }
    }

    return {
        formik,
        modalOpen,
        activeModal,
        handleOpenModal,
        handleCloseModal,
        handleDateChange,
        handleRoles,
        handleOpenActiveModal,
        handleCloseActiveModal,
        handleToggleActive,
    }
}