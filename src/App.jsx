import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importar componentes
import MainDiv from './Componentes/Principal/MainDiv'
import MarcasSlider from './Componentes/Principal/MarcasSlider'
import Counts from './Componentes/Principal/Counts'
import Dirigido from './Componentes/Principal/Dirigido'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Empresa from './Componentes/Empresas/Empresa'
import Power from './Componentes/Power/HeaderPower'
import Header from './Componentes/Principal/Header'
function App() {

  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainDiv/>} />
      <Route path="/Empresas" element={<Empresa />} />
      <Route path="/Power" element={<Power />} />
    </Routes>
    </BrowserRouter>
      
      
    
  )
}

export default App
