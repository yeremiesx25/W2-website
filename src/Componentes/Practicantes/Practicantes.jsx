import React from 'react'
import Navbar from '../Principal/Navbar'
import HeroPracticantes from './HeroPracticantes'
import Descubre from './Descubre'
import CtaAreas from './CtaAreas'

function Practicantes() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <HeroPracticantes />
      <Descubre />
      <CtaAreas />
    </div>
  )
}

export default Practicantes