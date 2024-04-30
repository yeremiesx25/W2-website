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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Empresa from './Componentes/Empresas/Empresa'
import Power from './Componentes/Power/HeaderPower'
import Header from './Componentes/Principal/Header'
import Practicantes from './Componentes/Practicantes/Practicantes';

function App() {
  return (
    <>
      <MainDiv />
      <MarcasSlider />
      <Counts />
      <Dirigido />
    </>
  )
}

export default App;
