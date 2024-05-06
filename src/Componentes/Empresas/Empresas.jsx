import React from 'react'
import Navbar from "../Principal/Navbar";
import Intermedio from './IntermedioEmpresa'
import Servicio from './ServicioEmpresa'
import Footer from './FooterEmpresa'
import HeroEmpresa from './HeroEmpresa';
import Preguntas from './PreguntasEmpresa';

function Empresas() {
  return (
    <>
      <Navbar />
      <HeroEmpresa />
      <Intermedio />
      <Preguntas />
      <Footer />
    </>
  )
}

export default Empresas
