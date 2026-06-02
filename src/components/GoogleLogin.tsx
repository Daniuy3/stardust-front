"use client"

import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export const GoogleLogin = () => {

    const handleLoginWithGoogle = () => {
        window.location.href = 'https://api.stardustui.com/api/auth/google/redirect';
    }
    
  return (
    <button 
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer"
        onClick={handleLoginWithGoogle}
    >
        <FaGoogle />
        Iniciar con Google
    </button>
  )
}
