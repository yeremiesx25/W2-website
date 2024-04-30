import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importar componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Componentes/Principal/Home.jsx'
import Empresas from './Componentes/Empresas/Empresas.jsx'
import Power from './Componentes/Power/Power.jsx'
import Practicantes from './Componentes/Practicantes/Practicantes.jsx'

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Empresas" element={<Empresas />} />
        <Route path="/Power" element={<Power />} />
        <Route path="/Practicantes" element={<Practicantes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
