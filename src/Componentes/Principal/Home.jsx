import React from 'react'
import MainDiv from './MainDiv'
import Hero from './Hero'
import MarcasSlider from './MarcasSlider'
import Counts from './Counts'
import Dirigido from './Dirigido'
import Testimonio from './Testimonio'
import Faq from './Faq'

function Home() {
  return (
    <div className='flex flex-col' >
      <MainDiv/>
      <Hero />
      <MarcasSlider/>
      <Counts />
      <Dirigido/>
      <Testimonio/>
      <Faq/>
    </div>
  )
}

export default Home