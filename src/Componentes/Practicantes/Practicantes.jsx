import React from 'react'
import Navbar from '../Principal/Navbar'
import HeroPracticantes from './HeroPracticantes'
import Descubre from './Descubre'
import CtaAreas from './CtaAreas'
import Beneficios from './Beneficios'
import FaqPracticantes from './FaqPracticantes'

function Practicantes() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <HeroPracticantes />
      <Descubre />
      <Beneficios />
      <CtaAreas />
      <FaqPracticantes />
    </div>
  )
}

export default Practicantes