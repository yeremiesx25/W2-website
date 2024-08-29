import React from 'react'
import HeroCoworking from './HeroCoworking'
import Navbar from '../Principal/Navbar'
import Reserva from '../Reserva/Reserva'
import Footer from '../Principal/Footer'
import Info from './Info'
import Rooms from './Rooms'
import Ubicacion from './Ubicacion'

function Coworking() {
  return (
    <div>

        <Navbar />
        <HeroCoworking />
        <Rooms />
        <Info />
        <Ubicacion />
        <Footer />
    </div>
  )
}

export default Coworking