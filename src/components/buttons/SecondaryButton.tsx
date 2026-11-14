import { Button, ButtonProps } from '@heroui/react';
import React from 'react'

interface MainButtonProps extends ButtonProps {
  text: string;
  icon?: React.ReactNode;
}

export const SecondaryButton = ({ text, icon, className, ...props }: MainButtonProps) => {
  return (
    <Button
      className={`py-3 px-4 bg-[#DEEAFB] text-accent flex gap-3 hover:bg-gray-200 transition-all cursor-pointer shadow-sm hover:shadow-lg ${className}`}
        {...props}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </Button>
  )
}
