"use client"

import { useFormik } from "formik"
import { createUserSchema } from "../schema"
import { useUsersStore } from "../store/UsersStore"
import { useEffect } from "react"
import { UserCreationData } from "../interfaces"
import { createUser, getUsers } from "../api"
import { useSnackBarStore } from "@/hooks/useSnackbar"

export const useCreateUser = () => {

    const { activeUser, setUsers, setModalOpen, setActiveUser, setLoading } = useUsersStore()
    const { showSnackBar } = useSnackBarStore()

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            roles: ["student"],

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
        onSubmit: () => handleSubmit(),
        isInitialValid(props : Record<string, string | Date | number | string[]>) {
            return createUserSchema.isValidSync(props.initialValues)
        },
        validationSchema: createUserSchema,

    })

    const handleSubmit = async () => {
        if (formik.isValid) {

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

            
            return
        }
        
        setLoading(false)
        showSnackBar("Por favor, corrige los errores en el formulario", "error")
        
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
        
        if (user) {
            setActiveUser(user)
        } else {
            setActiveUser(null)
        }

        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setActiveUser(null)
        formik.resetForm()
        setModalOpen(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActiveUser({
            ...activeUser,
            [e.target.name]: e.target.value,
        } as UserCreationData)
    }

    const handleDateChange = (name: string, value: string) => {
        setActiveUser({
            ...activeUser,
            [name]: value,
        } as UserCreationData)
    }

    const handleRoles = (event: React.MouseEvent<HTMLElement>, newRoles: string[]) => {
        setActiveUser({
            ...activeUser,
            roles: newRoles,
        } as UserCreationData)
    }

    useEffect(() => {
        if (activeUser) {
            formik.setValues({
                first_name: activeUser.first_name,
                last_name: activeUser.last_name,
                email: activeUser.email,
                password: activeUser.password,
                password_confirmation: activeUser.password_confirmation,
                phone: activeUser.phone || "",
                bio: activeUser.bio || "",
                country: activeUser.country || "",
                city: activeUser.city || "",
                birth_date: activeUser.birth_date ? new Date(activeUser.birth_date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                headline: activeUser.headline || "",
                professional_title: activeUser.professional_title || "",
                specialization: activeUser.specialization || "",
                years_experience: activeUser.years_experience || 0,
                website_url: activeUser.website_url || "",
                linkedin_url: activeUser.linkedin_url || "",
                roles: activeUser.roles || ["student"],
            })
        } else {
            formik.resetForm()
        }
    }, [activeUser])
    
    return {
        formik,
        handleOpenModal,
        handleCloseModal,
        handleChange,
        handleDateChange,
        handleRoles,
    }
}