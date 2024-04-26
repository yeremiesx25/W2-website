import React from 'react'
import IncrementingNumber from './Increment';


function Counts() {

  return (
    <div className='w-full bg-bgsecundary flex items-center justify-center p-4 font-dmsans'
    style={{height: '320px'}}
    >
        <div className='bg-white shadow rounded-lg flex items-center justify-around flex-wrap'
        style={{height: '200px', width: '1100px'}}  
        >
            <div className='flex w-32 h-32 flex-col items-center justify-center text-center'>
                <IncrementingNumber finalNumber={7} label="Años en el mercado" tiempo ="400" />    
            </div>
            <div className='flex w-32 h-32 flex-col items-center justify-center text-center'>
                <IncrementingNumber finalNumber={298} label="Clientes satisfechos" tiempo ="5" />
            </div>
            <div className='flex w-32 h-32 flex-col items-center justify-center text-center'>
                <IncrementingNumber finalNumber={128} label="Trabajos desarrollados" tiempo ="10" />
            </div>
            <div className='flex w-32 h-32 flex-col items-center justify-center text-center'>
                <IncrementingNumber finalNumber={4589} label="Vacantes cubiertas" tiempo =".00001" />
            </div>
        </div>
    </div>
  )
}

export default Counts