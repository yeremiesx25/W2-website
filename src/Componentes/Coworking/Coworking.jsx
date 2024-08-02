import React from 'react'
import HeroCoworking from './HeroCoworking'
import Navbar from '../Principal/Navbar'
import Reserva from '../Reserva/Reserva'
import Footer from '../Principal/Footer'

function Coworking() {
  return (
    <div>

        <Navbar />
        <HeroCoworking />
        <Reserva />
        <Footer />
    </div>
  )
}

export default Coworking