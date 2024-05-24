import React from 'react'
import Navbar from '../Principal/Navbar'
import HeroPracticantes from './HeroPracticantes'
import Descubre from './Descubre'
import CtaAreas from './CtaAreas'
import Beneficios from './Beneficios'
import FaqPracticantes from './FaqPracticantes'
import AreasPracticantes from './AreasPracticantes'
import Footer from '../Principal/Footer'
import CtaOtraCarrera from './CtaOtraCarrera'
import BtnWsp from '../Principal/BtnWsp'
import Equipo from './Equipo'

function Practicantes() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <HeroPracticantes />
      <Descubre />
      <Equipo />
      <AreasPracticantes />
      <CtaOtraCarrera />
      <FaqPracticantes />
      <Footer />
      <BtnWsp />
    </div>
  )
}

export default Practicantes