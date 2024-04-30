import React from 'react'
import Navbar from "../Principal/Navbar";
import MainDiv from '../Empresas/MainDiv'
import Intermedio from '../Empresas/Intermedio'
import Servicio from '../Empresas/Servicio'
import Preguntas from '../Empresas/Preguntas'
import Footer from '../Empresas/Footer'

function Empresas() {
  return (
    <>
      <Navbar />
      <MainDiv />
      <Intermedio />
      <Servicio />
      <Preguntas />
      <Footer />
    </>
  )
}

export default Empresas
