import React from 'react'
import MainDiv from './MainDiv'
import MarcasSlider from './MarcasSlider'
import Counts from './Counts'
import Dirigido from './Dirigido'
import Testimonio from './Testimonio'

import Navbar from './Navbar'
import Footer from './Footer'
import Founders from './Founders'

import BtnWsp from './BtnWsp'

function Home() {
  return (
    <div className='flex flex-col' >
      
      <Navbar/>
      <MainDiv/>
      <Dirigido/>
      <Counts />
      <MarcasSlider/>
      <Testimonio/>
      <Founders />
      <Footer/>
      <BtnWsp />
    </div>
  )
}

export default Home