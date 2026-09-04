"use client"

import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FormikProps } from 'formik'
import { Dayjs } from 'dayjs'
import { Input } from '@/components/Input'
import { PasswordInput } from '@/components/PasswordInput'
import { Accordion } from '@/components/Accordion'
import { DatePicker } from '@/components/DatePicker'
import dayjs from 'dayjs'
import { ContainedButton, OutlinedButton } from '@/components/Button'
import { UserFormValues } from '../interfaces'



interface Props {
    open: boolean
    title?: string
    formik: FormikProps<UserFormValues>
    onClose: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleDateChange: (name: string, value: string) => void
    handleRoles: (event: React.MouseEvent<HTMLElement>, newRoles: string[]) => void
}

export const UserModal = ({ open, title = 'Añadir Usuario', formik, onClose, handleChange, handleDateChange, handleRoles }: Props) => {
    return (
        <Dialog open={open} onClose={onClose} scroll='paper' maxWidth="xs" fullWidth>
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                <div className='flex flex-col gap-2 mt-2'>
                    <div className='flex gap-5'>
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
                        title="Contraseña"
                        name="password"
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        onChange={handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        errorMessage={formik.touched.password && formik.errors.password}
                    />

                    <PasswordInput 
                        fullWidth
                        title="Confirmar Contraseña"
                        name="password_confirmation"
                            onBlur={formik.handleBlur}
                        value={formik.values.password_confirmation}
                        onChange={handleChange}
                        error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
                        errorMessage={formik.touched.password_confirmation && formik.errors.password_confirmation}
                    />

                    <div className='flex justify-center my-3'>
                        <ToggleButtonGroup
                            value={formik.values.roles}
                            exclusive={false}
                            onChange={handleRoles}
                            aria-label="roles"
                        >
                            <ToggleButton data-umami-event="Click en asignar rol administrador" value="admin" aria-label="admin">
                                Administrador
                            </ToggleButton>
                            <ToggleButton data-umami-event="Click en asignar rol profesor" value="teacher" aria-label="teacher">
                                Profesor
                            </ToggleButton>
                            <ToggleButton data-umami-event="Click en asignar rol estudiante" value="student" aria-label="student">
                                Estudiante
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    
                    <Accordion title="Información Adicional">
                        <div className='flex flex-col gap-2'>
                            <Input
                                fullWidth
                                label="Teléfono"
                                name="phone"
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                onChange={handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                errorMessage={formik.touched.phone && formik.errors.phone}
                            />
                            <Input
                                fullWidth
                                label="Biografía"
                                name="bio"
                                onBlur={formik.handleBlur}
                                value={formik.values.bio}
                                onChange={handleChange}
                                error={formik.touched.bio && Boolean(formik.errors.bio)}
                                errorMessage={formik.touched.bio && formik.errors.bio}
                                multiline
                                rows={3}
                            />
                            <div className='flex gap-5 mb-5'>
                                <Input
                                    fullWidth
                                    label="País"
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

                            <DatePicker 
                                label="Fecha de Nacimiento"
                                name="birth_date"
                                value={formik.values.birth_date ? dayjs(formik.values.birth_date) : null}
                                onChange={ (value: Dayjs | null) => handleDateChange("birth_date", value ? value.toISOString() : "")}
                            />
                            
                            <Input
                                fullWidth
                                label="Título"
                                name="headline"
                                onBlur={formik.handleBlur}
                                value={formik.values.headline}
                                onChange={handleChange}
                                error={formik.touched.headline && Boolean(formik.errors.headline)}
                                errorMessage={formik.touched.headline && formik.errors.headline}
                            />
                            <Input
                                fullWidth
                                label="Cargo Profesional"
                                name="professional_title"
                                onBlur={formik.handleBlur}
                                value={formik.values.professional_title}
                                onChange={handleChange}
                                error={formik.touched.professional_title && Boolean(formik.errors.professional_title)}
                                errorMessage={formik.touched.professional_title && formik.errors.professional_title}
                            />
                            <Input
                                fullWidth
                                label="Especialización"
                                name="specialization"
                                onBlur={formik.handleBlur}
                                value={formik.values.specialization}
                                onChange={handleChange}
                                error={formik.touched.specialization && Boolean(formik.errors.specialization)}
                                errorMessage={formik.touched.specialization && formik.errors.specialization}
                            />
                            <Input
                                fullWidth
                                label="Años de Experiencia"
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
                                label="Sitio Web"
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
                    </Accordion>
                </div>
            </DialogContent>

            <DialogActions>
                <OutlinedButton data-umami-event="Click en cancelar edición de usuario" onClick={onClose}>
                    Cancelar
                </OutlinedButton>
                <ContainedButton 
                    data-umami-event="Click en guardar usuario"
                    onClick={() => formik.handleSubmit()} 
                    loading={formik.isSubmitting}
                    disabled={!formik.isValid || formik.isSubmitting}
                >
                    Guardar
                </ContainedButton>
            </DialogActions>
        </Dialog>
    )
}

export default UserModal
