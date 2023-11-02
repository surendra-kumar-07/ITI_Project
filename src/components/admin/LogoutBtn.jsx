import React from 'react'

const Logout = ({className='', ...props}) => {
  return (
    <button className={`${className}`} {...props}>Logout</button>
  )
}

export default Logout