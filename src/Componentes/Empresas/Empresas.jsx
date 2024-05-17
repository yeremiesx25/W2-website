import React from 'react'
import Navbar from "../Principal/Navbar";
import Intermedio from './IntermedioEmpresa'
import Footer from  "../Principal/Footer"
import CtaEmpresa from './CtaEmpresa'
import HeroEmpresa from './HeroEmpresa'
import CardTrabajo from './CardTrabajo'
import BtnWsp from '../Principal/BtnWsp'

function Empresas() {
  return (
    <>
      <Navbar />
      <HeroEmpresa />
      <Intermedio />
      <CtaEmpresa />
      <Footer />
      <CardTrabajo />
      <BtnWsp />
    </>
  )
}

export default Empresas
