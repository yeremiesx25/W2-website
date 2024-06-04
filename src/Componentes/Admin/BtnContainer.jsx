import React from 'react'
import AddButton from './AddButton'
import CountOfertas from './CountOfertas'

function BtnContainer() {
  return (
    <div className='w-1/2 gap-28 px-8 flex justify-center mb-8'>
        <CountOfertas />
        <AddButton />
    </div>
  )
}

export default BtnContainer