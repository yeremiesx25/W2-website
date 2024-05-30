import React from 'react'
import Navbar from '.Navbar'
import Footer from '.Footer'
import BtnWsp from './BtnWsp'

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