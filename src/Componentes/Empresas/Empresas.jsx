import React from 'react'
import Navbar from "../Principal/Navbar";
import Intermedio from './IntermedioEmpresa'
import Footer from '../Principal/Footer'
import HeroEmpresa from './HeroEmpresa'

function Empresas() {
  return (
    <>
      <Navbar />
      <HeroEmpresa />
      <Intermedio />
      <Footer />  
    </>
  )
}

export default Empresas
