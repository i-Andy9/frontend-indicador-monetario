import React from 'react'
import FormIndicator from './FormIndicator'

const SideBar = () => {
  return (
    <aside className='bg-gray-800 sm:w-1/4 xl:w-1/6 sm:min-h-screen p-5 pt-12'>

      <div className='text-center'>
        <p p className='text-white text-2xl font-black' > Indicador economico </p>
      </div >

      <div className='flex grid grid-cols-1 place-content-center h-96'>
        <FormIndicator />
      </div>
    </aside >
  )
}

export default SideBar 