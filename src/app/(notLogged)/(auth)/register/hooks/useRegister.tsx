"use client"

import React from "react"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { createUserSchema } from "../schema"
import { RegisterFormValues } from "../interfaces"
import { registerUser } from "../api"
import { useSnackBarStore } from "@/hooks/useSnackbar"

type RegisterResult = {
    success: boolean
    message: string
}

const requiredFields: Array<keyof RegisterFormValues> = [
    "first_name",
    "last_name",
    "email",
    "password",
    "password_confirmation",
]

const optionalFields: Array<keyof RegisterFormValues> = [
    "phone",
    "bio",
    "country",
    "city",
    "birth_date",
    "headline",
    "professional_title",
    "specialization",
    "years_experience",
    "website_url",
    "linkedin_url",
]

export const useRegister = () => {
    const steps = ["Datos", "Bio", "Confirmacion"]
    const [activeStep, setActiveStep] = React.useState(0)
    const [registerResult, setRegisterResult] = React.useState<RegisterResult | null>(null)
    const { showSnackBar } = useSnackBarStore()
    const router = useRouter()

    const formik = useFormik<RegisterFormValues>({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            phone: "",
            bio: "",
            country: "",
            city: "",
            birth_date: new Date().toISOString().split("T")[0],
            headline: "",
            professional_title: "",
            specialization: "",
            years_experience: 0,
            website_url: "",
            linkedin_url: "",
        },
        validationSchema: createUserSchema,
        onSubmit: () => handleFormSubmit(),
    })

    const isFirstStep = activeStep === 0
    const isLastStep = activeStep === steps.length - 1
    const canFinish = Boolean(registerResult?.success)

    const handleFormSubmit = async () => {
        if (isLastStep) {
            handleFinish()
            return
        }

        await handleNext()
    }

    const handleFinish = () => {
        if (!registerResult?.success) return

        router.push("/login")
    }

    const applyBackendErrors = (errors?: Record<string, string[]>) => {
        if (!errors) return

        const fieldErrors = Object.entries(errors).filter(([field]) => field in formik.values)

        fieldErrors.forEach(([field, messages]) => {
            formik.setFieldError(field, messages[0])
        })

        formik.setTouched({
            ...formik.touched,
            ...fieldErrors.reduce((acc, [field]) => {
                acc[field as keyof RegisterFormValues] = true
                return acc
            }, {} as Partial<Record<keyof RegisterFormValues, boolean>>),
        })
    }

    const submitRegister = async () => {
        if (formik.isSubmitting) return

        formik.setSubmitting(true)

        try {
            const response = await registerUser(formik.values)
            const message = response.message || (response.success
                ? "Registro completado correctamente."
                : "No pudimos completar el registro.")

            setRegisterResult({
                success: response.success,
                message,
            })
            applyBackendErrors(response.errors)
            showSnackBar(message, response.success ? "success" : "error")
            setActiveStep(2)
        } finally {
            formik.setSubmitting(false)
        }
    }

    const validateFields = async (fields: Array<keyof RegisterFormValues>) => {
        const touched = fields.reduce((acc, field) => {
            acc[field] = true
            return acc
        }, {} as Partial<Record<keyof RegisterFormValues, boolean>>)

        const errors: Partial<Record<keyof RegisterFormValues, string>> = {}

        await Promise.all(fields.map(async (field) => {
            try {
                await createUserSchema.validateAt(field, formik.values)
                formik.setFieldError(field, undefined)
            } catch (error) {
                if (error instanceof Error) {
                    errors[field] = error.message
                }
            }
        }))

        formik.setTouched({ ...formik.touched, ...touched })

        Object.entries(errors).forEach(([field, message]) => {
            formik.setFieldError(field, message)
        })

        return Object.keys(errors).length === 0
    }

    const validateOptionalFields = async () => {
        const filledOptionalFields = optionalFields.filter((field) => {
            const value = formik.values[field]
            return value !== "" && value !== null && value !== undefined
        })

        if (filledOptionalFields.length === 0) return true

        return validateFields(filledOptionalFields)
    }

    const handleNext = async () => {
        if (isLastStep || formik.isSubmitting) return

        const isCurrentStepValid = activeStep === 0
            ? await validateFields(requiredFields)
            : await validateOptionalFields()

        if (!isCurrentStepValid) return

        if (activeStep === 1) {
            await submitRegister()
            return
        }

        setRegisterResult(null)
        setActiveStep((prev) => prev + 1)
    }

    const handleBack = () => {
        if (activeStep === 2) {
            setRegisterResult(null)
        }

        setActiveStep((prev) => Math.max(prev - 1, 0))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        formik.handleChange(event)
    }

    const handleDateChange = (name: string, value: string) => {
        formik.setFieldValue(name, value)
    }

    return {
        formik,
        steps,
        activeStep,
        isFirstStep,
        isLastStep,
        registerResult,
        canFinish,
        handleNext,
        handleBack,
        handleFinish,
        handleChange,
        handleDateChange,
    }
}
