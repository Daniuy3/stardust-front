import { Button, ButtonProps } from '@heroui/react';
import React from 'react'

interface MainButtonProps extends ButtonProps {
  text: string;
  icon?: React.ReactNode;
}

export const OutlinedButton = ({ text, icon, className, ...props }: MainButtonProps) => {
  return (
    <Button
      className={`py-3 px-4 bg-transparent text-blue-950 border border-blue-950 rounded-sm flex gap-3 transition-all cursor-pointer  ${className}`}
        {...props}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </Button>
  )
}
