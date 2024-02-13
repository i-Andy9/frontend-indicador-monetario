import React from 'react';
import { Indicator } from '@/redux/services/apiRest';

const FormIndicator = ({indicatorsData}: any ) => {
  console.log(indicatorsData)
  return (
    <>
      <div className="">
        {/* Mostrar información de Redux */}
        <select className='my-4 w-60 rounded-full'>{
          indicatorsData?.map( (indicator:Indicator) => 
            <option key={indicator.codigo}>{indicator.nombre}</option> )
        }</select>;

      </div>

      <button
        className='rounded-full bg-sky-400 hover:bg-sky-500 active:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-200'
        onClick={() => { 
        }}
      > Verificar </button>
    </>
  );
}

export default FormIndicator;
