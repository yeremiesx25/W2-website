import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importar componentes
import MainDiv from './Componentes/Principal/MainDiv'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Componentes/Principal/Home'

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
