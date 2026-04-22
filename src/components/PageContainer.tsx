import React, { DetailedHTMLProps } from 'react'

export const PageContainer = ({
  children,
  className: classStyles,
  ...rest
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      className={`
    ${classStyles}
        py-12
        px-5
        sm:px-10
        md:px-16
        lg:px-24
        xl:px-30
        mx-auto
        max-w-362.5
      `}
      {...rest}
    >
      {children}
    </div>
  )
}
