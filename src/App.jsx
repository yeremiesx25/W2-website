import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importar componentes
import MainDiv from './Componentes/Principal/MainDiv'
import MarcasSlider from './Componentes/Principal/MarcasSlider'
import Counts from './Componentes/Principal/Counts'
import Dirigido from './Componentes/Principal/Dirigido'
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

export default App
