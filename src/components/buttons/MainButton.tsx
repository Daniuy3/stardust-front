"use client"

import { Button, ButtonProps } from '@heroui/react';
import React from 'react'

interface MainButtonProps extends ButtonProps {
  text: string;
  icon?: React.ReactNode;
}

export const MainButton = ({ text, icon, ...props }: MainButtonProps) => {
  return (
    <Button
        className="py-3 px-4 bg-blue-600 text-white flex gap-2 items-center rounded-full hover:bg-blue-700 transition-all cursor-pointer shadow-sm hover:shadow-lg"
        {...props}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </Button>
  )
}
