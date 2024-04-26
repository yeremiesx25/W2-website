import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importar componentes
import MainDiv from './Componentes/Empresas/MainDiv'
import Intermedio from './Componentes/Empresas/Intermedio'
import Servicio from './Componentes/Empresas/Servicio'
import Preguntas from './Componentes/Empresas/Preguntas'
import Footer from './Componentes/Empresas/Footer'

import MainDiv2 from './Componentes/Principal/MainDiv'
import MarcasSlider from './Componentes/Principal/MarcasSlider'
import Counts from './Componentes/Principal/Counts'
import Dirigido from './Componentes/Principal/Dirigido'
function App() {

  return (
    <>
      <MainDiv />
      <Intermedio />
      <Servicio />
      <Preguntas />
      <Footer />
    </>
  )
}

export default App
