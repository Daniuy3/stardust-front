

import React from 'react'
import { CiLock } from 'react-icons/ci'

interface Props {
    status: string;
    email?: string;
    last_login?: string | Date;
    registration_date?: string | Date;
}

export const Access = ({ status, email }: Props) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <CiLock   size={28} /> 
            Seguridad y acceso
        </h2>
        
        <div className="flex justify-between">
            <p>
                Estado
            </p>

            <div className="flex gap-2 items-center">
                <div 
                    className={`h-2 w-2 rounded-full ${status === "active" ? 'bg-green-500' : 'bg-red-500'}`}
                />
                {status === "active" ? "Activo" : "Inactivo"}
            </div>
        </div>

        <div className="flex justify-between mt-2">
            <p>
                Correo verificado
            </p>
            <div className="flex gap-2 items-center">
                <div 
                    className={`h-2 w-2 rounded-full ${email ? 'bg-green-500' : 'bg-red-500'}`}
                />
                {email ? "Verificado" : "No verificado"}
            </div>
        </div>

        <div className="flex justify-between mt-2">
            <p>
                Último inicio de sesión
            </p>
            <p>
                Hace 3 días
            </p>
        </div>

        <div className="flex justify-between mt-2">
            <p>
                Fecha de registro
            </p>

            <p>
                15/03/2024
            </p>
        </div>
    </div>
  )
}
