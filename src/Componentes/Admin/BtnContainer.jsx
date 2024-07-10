import React from 'react'
import AddButton from './AddButton'
import CountOfertas from './CountOfertas'
import BuscadorJob from './BuscadorJob'

function BtnContainer() {
  return (
    <div className='w-full gap-24 px-8 flex justify-center items-center my-4 flex-wrap'>
        <CountOfertas />
        {/* <AddButton /> */}
    </div>
  )
}

export default BtnContainer