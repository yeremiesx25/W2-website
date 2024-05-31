import React from 'react'
import Navbar from '../Principal/Navbar'
import Footer from '../Principal/Footer'
import BtnWsp from '../Principal/BtnWsp'

function Home() {
  return (
    <div className='flex flex-col' >
      
      <Navbar/>
      <Footer/>
      <BtnWsp />

    </div>
  )
}

export default Home