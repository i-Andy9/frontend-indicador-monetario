import React, { useState } from 'react'
import ErrorMsg from './ErrorMsg'
// import useSelectIndicator from '../hooks'

const FormIndicator = () => {

  const [flagError, setFlag] = useState(false)
  //   const [moneda,SelectMoneda ] = useSelectIndicator('Selecciona el indicador',[
  //     {id:'CLP',text:'Peso de chile ',},
  //     {id:'MXN',text:'Peso mexicano',},
  //     {id:'USD',text:'Dolar EEUU',},
  //     {id:'EUR',text:'Euro',},
  // ])

  return (
    <>
      <div className="">
        {flagError && <ErrorMsg>Por favor seleccione opciones validas</ErrorMsg>}

        
        {/* <SelectMoneda/> */}
      </div>

      <button
        className=' rounded-full bg-sky-400 hover:bg-sky-500 active:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-200 '
        onClick={() => { console.log('holi') }}
      > Verificar </button>

    </>
  )
}

export default FormIndicator