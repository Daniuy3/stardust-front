import Link from 'next/link';
import React from 'react'

export const ProfileItem = ({ display_name, id }: { display_name: string; id: number }) => {
  return (
    <div className='flex border-t border-gray-300 pt-3'>
        <div className='relative h-12 w-12 bg-purple-800 rounded-full'>
            <p className='text-white font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                {
                    display_name.split(" ").map((word) => word[0]).join("")
                }
            </p>
        </div>
        <div className='flex flex-col justify-center ml-4'>
            <p className='text-sm font-bold'>
                {display_name}
            </p>
            <Link
                href={`/administracion/usuarios/${id}`}
            >
                <p className='text-xs text-gray-500'>
                    Ver Perfil
                </p>
            </Link>
        </div>
    </div>
  )
}
