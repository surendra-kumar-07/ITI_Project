import React from 'react'

const Button = ({
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    btnName,
    ...props
}) => {
  return (
    <button className={`px-4 py-2 ${bgColor} ${textColor} ${className}`} {...props}>{btnName}</button>
  )
}

export default Button