import React from 'react'
import Navbar from "../Principal/Navbar";
import Intermedio from '../Empresas/Intermedio'
import Servicio from '../Empresas/Servicio'
import Footer from '../Empresas/Footer'
import HeroEmpresa from './HeroEmpresa';

function Empresas() {
  return (
    <>
      <Navbar />
      <HeroEmpresa />
      <Intermedio />
      <Servicio />
    </>
  )
}

export default Empresas
