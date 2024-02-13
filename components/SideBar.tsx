import React from 'react'
import FormIndicator from './FormIndicator'

const SideBar = (props: any) => {
  console.log(props.indicatorsData)
  console.log(props.isLoading)

  return (
    <aside className='bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5 pt-12'>

      <div className='text-center'>
        <p className='text-white text-2xl font-black' > Indicador economico </p>
      </div >
      {!props.isLoading?
      (<div className='flex grid grid-cols-1 place-content-center h-96'>
        <FormIndicator indicatorsData={props.indicatorsData} />
      </div>)
      :
      (<div> wena</div>)
}
    </aside >
  )
}

export default SideBar 