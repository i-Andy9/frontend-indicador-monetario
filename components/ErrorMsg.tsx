import React from 'react'

const ErrorMsg = ({children}) =>  {
    return (
    <div className='text-red-500'>{children}</div>
  )
}

export default ErrorMsg