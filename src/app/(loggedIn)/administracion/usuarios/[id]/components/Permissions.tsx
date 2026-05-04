import React from 'react'
import { GoShieldCheck } from 'react-icons/go'
import { Role } from '../../interfaces'
import { RoleOutlined } from '@/components/RoleOutlined'
import { FaRegCheckCircle } from 'react-icons/fa'

interface Props {
    roles : Role[]
}

export const Permissions = ({ roles }: Props) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5 ">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <GoShieldCheck   size={28} /> 
            Roles y Permisos
        </h2>
        <div className="flex gap-3">
            {roles.map((role) => (
                <RoleOutlined key={role.id} name={role.name} />
            ))}
        </div>
        <div className="mt-2">
            <p>
                Permisos principales
            </p>

            <p className="flex items-center gap-2 mt-2">
                <span className="text-purple-600">
                    <FaRegCheckCircle /> 
                </span>
                Acceso a cursos
            </p>

            <p className="flex items-center gap-2">
                <span className="text-purple-600">
                    <FaRegCheckCircle /> 
                </span>
                Gestión de clases
            </p>

            <p className="flex items-center gap-2">
                <span className="text-purple-600">
                    <FaRegCheckCircle /> 
                </span>
                Visualización de certificados
            </p>

            <p className="flex items-center gap-2">
                <span className="text-purple-600">
                    <FaRegCheckCircle /> 
                </span>
                Visualización de certificados
            </p>
            
            <p className="flex items-center gap-2">
                <span className="text-purple-600">
                    <FaRegCheckCircle /> 
                </span>
                Administración básica
            </p>

        </div>
    </div>
  )
}
