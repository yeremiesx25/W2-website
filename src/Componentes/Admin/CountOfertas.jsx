import { useContext } from 'react'
import React  from 'react'
import JobsContext from '../../Context/JobsContext'
function CountOfertas() {
    const { jobs } = useContext(JobsContext);
  return (
    <div className='w-60 h-16 bg-gray-100 flex flex-col items-center justify-center'>
      <p className='font-bold text-2xl'>{jobs.length}</p>
      <p className='font-medium'>Ofertas laborales</p>
    </div>
  )
}

export default CountOfertas