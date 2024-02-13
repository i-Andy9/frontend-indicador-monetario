import React, { useState } from 'react'

const useSelectIndicator = (msg,opcion) => {

  const [state, setState] = useState('')

  const SelectMoneda = () => (
    <>

      <p className='text-white text-lg pb-3'>{msg}</p>

      <select
      className='rounded-full px-2 mb-3'
        value={state}
        onChange={e => { setState(e.target.value) }}
      >
        <option
          key=''
          value=''

        >Seleccione</option>

        {opcion.length > 0 && opcion.map(o => (
          <option key={o.id} value={o.id}>{o.text}</option>
        ))
        }
      </select>
    </>
  )

  return [state, SelectMoneda]
}

export default useSelectIndicator