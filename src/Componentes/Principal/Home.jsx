import React from 'react'
import MainDiv from './MainDiv'
import Hero from './Hero'
import MarcasSlider from './MarcasSlider'
import Counts from './Counts'
import Dirigido from './Dirigido'
import Testimonio from './Testimonio'
import Faq from './Faq'
<<<<<<< HEAD
=======
import Navbar from './Navbar'
import Footer from './Footer'
>>>>>>> 12c07a32530f1f9f3c9e7ed65901932de8f532d5

function Home() {
  return (
    <div className='flex flex-col' >
<<<<<<< HEAD
      <MainDiv/>
      <Hero />
      <MarcasSlider/>
      <Counts />
      <Dirigido/>
      <Testimonio/>
      <Faq/>
=======
      <Navbar/>
      <MainDiv/>
      <Dirigido/>
      <Counts /> 
      <MarcasSlider/>
      <Testimonio/>
      <Faq/>
      <Footer />
>>>>>>> 12c07a32530f1f9f3c9e7ed65901932de8f532d5
    </div>
  )
}

export default Home