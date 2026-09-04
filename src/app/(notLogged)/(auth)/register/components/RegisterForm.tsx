"use client"

import { ContainedButton, OutlinedButton } from "@/components/Button"
import { Input } from "@/components/Input"
import { PasswordInput } from "@/components/PasswordInput"
import { Step, StepIconProps, StepLabel, Stepper, styled } from "@mui/material"
import { BiCheck } from "react-icons/bi"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import { useRegister } from "../hooks/useRegister"

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
    () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
        backgroundColor: "#9810fa",
        borderRadius: "50%",
        "& .QontoStepIcon-completedIcon": {
            color: "#fff",
            zIndex: 1,
            fontSize: 18,
        },
        variants: [
            {
                props: ({ ownerState }) => ownerState.active,
                style: {
                    color: "#784af4",
                },
            },
        ],
    }),
)

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className, icon } = props

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <BiCheck className="QontoStepIcon-completedIcon" />
            ) : (
                <p className="text-white text-sm">{icon}</p>
            )}
        </QontoStepIconRoot>
    )
}

export const RegisterForm = () => {
    const {
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
    } = useRegister()

    return (
        <form className="flex flex-col justify-between h-full" onSubmit={formik.handleSubmit}>
            <div className="space-y-5">
                <div>
                    <h1 className="text-xl font-bold text-center">Registro</h1>
                    <p className="text-gray-600 text-center">
                        Crea tu cuenta para acceder a nuestros cursos y recursos.
                    </p>
                </div>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        const stepProps: { completed?: boolean } = {}
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {}

                        return (
                            <Step key={label} color="#9ea9bc" {...stepProps}>
                                <StepLabel slots={{ stepIcon: QontoStepIcon }} {...labelProps}>
                                    {label}
                                </StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </div>

            {activeStep === 0 && (
                <div className="flex flex-col gap-3 my-2 text-purple-600">
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Input
                            fullWidth
                            label="Nombre"
                            name="first_name"
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                            onChange={handleChange}
                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                            errorMessage={formik.touched.first_name && formik.errors.first_name}
                        />
                        <Input
                            fullWidth
                            label="Apellido"
                            name="last_name"
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                            onChange={handleChange}
                            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                            errorMessage={formik.touched.last_name && formik.errors.last_name}
                        />
                    </div>

                    <Input
                        fullWidth
                        label="Email"
                        name="email"
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorMessage={formik.touched.email && formik.errors.email}
                    />

                    <PasswordInput
                        fullWidth
                        title="Contrasena"
                        name="password"
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        onChange={handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        errorMessage={formik.touched.password && formik.errors.password}
                    />

                    <PasswordInput
                        fullWidth
                        title="Confirmar Contrasena"
                        name="password_confirmation"
                        onBlur={formik.handleBlur}
                        value={formik.values.password_confirmation}
                        onChange={handleChange}
                        error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
                        errorMessage={formik.touched.password_confirmation && formik.errors.password_confirmation}
                    />
                </div>
            )}

            {activeStep === 1 && (
                <div className="flex flex-col gap-3 my-2 text-purple-600 h-full overflow-y-auto">
                    <Input
                        fullWidth
                        label="Telefono"
                        name="phone"
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        onChange={handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        errorMessage={formik.touched.phone && formik.errors.phone}
                    />
                    <Input
                        fullWidth
                        label="Biografia"
                        name="bio"
                        onBlur={formik.handleBlur}
                        value={formik.values.bio}
                        onChange={handleChange}
                        error={formik.touched.bio && Boolean(formik.errors.bio)}
                        errorMessage={formik.touched.bio && formik.errors.bio}
                        multiline
                        rows={3}
                    />
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Input
                            fullWidth
                            label="Pais"
                            name="country"
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                            onChange={handleChange}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            errorMessage={formik.touched.country && formik.errors.country}
                        />
                        <Input
                            fullWidth
                            label="Ciudad"
                            name="city"
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                            onChange={handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            errorMessage={formik.touched.city && formik.errors.city}
                        />
                    </div>
                    <Input
                        fullWidth
                        label="Fecha de nacimiento"
                        name="birth_date"
                        type="date"
                        onBlur={formik.handleBlur}
                        value={formik.values.birth_date}
                        onChange={handleChange}
                        error={formik.touched.birth_date && Boolean(formik.errors.birth_date)}
                        errorMessage={formik.touched.birth_date && formik.errors.birth_date}
                    />
                    <Input
                        fullWidth
                        label="Titulo"
                        name="headline"
                        onBlur={formik.handleBlur}
                        value={formik.values.headline}
                        onChange={handleChange}
                        error={formik.touched.headline && Boolean(formik.errors.headline)}
                        errorMessage={formik.touched.headline && formik.errors.headline}
                    />
                    <Input
                        fullWidth
                        label="Cargo profesional"
                        name="professional_title"
                        onBlur={formik.handleBlur}
                        value={formik.values.professional_title}
                        onChange={handleChange}
                        error={formik.touched.professional_title && Boolean(formik.errors.professional_title)}
                        errorMessage={formik.touched.professional_title && formik.errors.professional_title}
                    />
                    <Input
                        fullWidth
                        label="Especializacion"
                        name="specialization"
                        onBlur={formik.handleBlur}
                        value={formik.values.specialization}
                        onChange={handleChange}
                        error={formik.touched.specialization && Boolean(formik.errors.specialization)}
                        errorMessage={formik.touched.specialization && formik.errors.specialization}
                    />
                    <Input
                        fullWidth
                        label="Anos de experiencia"
                        name="years_experience"
                        type="number"
                        onBlur={formik.handleBlur}
                        value={formik.values.years_experience}
                        onChange={handleChange}
                        error={formik.touched.years_experience && Boolean(formik.errors.years_experience)}
                        errorMessage={formik.touched.years_experience && formik.errors.years_experience}
                    />
                    <Input
                        fullWidth
                        label="Sitio web"
                        name="website_url"
                        type="url"
                        onBlur={formik.handleBlur}
                        value={formik.values.website_url}
                        onChange={handleChange}
                        error={formik.touched.website_url && Boolean(formik.errors.website_url)}
                        errorMessage={formik.touched.website_url && formik.errors.website_url}
                    />
                    <Input
                        fullWidth
                        label="LinkedIn"
                        name="linkedin_url"
                        type="url"
                        onBlur={formik.handleBlur}
                        value={formik.values.linkedin_url}
                        onChange={handleChange}
                        error={formik.touched.linkedin_url && Boolean(formik.errors.linkedin_url)}
                        errorMessage={formik.touched.linkedin_url && formik.errors.linkedin_url}
                    />
                </div>
            )}

            {activeStep === 2 && (
                <div className="flex flex-col gap-3 my-2 ">
                    {registerResult?.success ? (
                        <FaCheckCircle size={96} className="text-center text-green-500 mx-auto"/>
                    ) : (
                        <FaTimesCircle size={96} className="text-center text-red-500 mx-auto"/>
                    )}
                    <h2 className={`text-2xl font-bold text-center ${registerResult?.success ? "text-purple-600" : "text-red-600"}`}>
                        {registerResult?.success ? "¡Completaste el registro!" : "No pudimos completar el registro"}
                    </h2>
                    <p className="text-center">
                        {registerResult?.message || "Revisa tus datos e intenta nuevamente."}
                    </p>
                </div>
            )}

            <div className="ml-auto flex gap-2">
                {!isFirstStep && (
                    <OutlinedButton
                        data-umami-event="Click en regresar un paso del registro"
                        type="button"
                        onClick={handleBack}
                    >
                        Atras
                    </OutlinedButton>
                )}
                <ContainedButton
                    data-umami-event={activeStep === 2 ? "Click en finalizar registro" : "Click en avanzar registro"}
                    type="button"
                    onClick={activeStep === 2 ? handleFinish : handleNext}
                    disabled={formik.isSubmitting || (isLastStep && !canFinish)}
                    loading={formik.isSubmitting}
                >
                    {isLastStep ? "Finalizar" : "Siguiente"}
                </ContainedButton>
            </div>
        </form>
    )
}
