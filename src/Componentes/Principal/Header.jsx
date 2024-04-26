import React from 'react'
import logo from '../../assets/Logo horizontal W2 Black.png'
import menu from '../../assets/menu-mobile.svg'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

function Header() {
  
  return (
    <div className='w-full h-16 bg-white flex items-center justify-around font-medium text-gray-600 top-0 fixed z-10 shadow'>
      <button className='w-32 flex items-center justify-center'>
        <img src={logo} alt="Logo de w2" />
      </button>
      <nav className='w-1/3 justify-around hidden md:flex'>
        <ul className='w-full flex items-center justify-around'>
          <Link to="/" href="/" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Inicio</li></Link>
          <Link to="/Empresas" href="/Empresas" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Empresas</li></Link>
          <Link href="" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Candidatos</li></Link>
          <Link to="/Prácticas" href="" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Prácticas</li></Link>
        </ul>
      </nav>
      <button style={{height: "40px"}} className='w-32 bg-primarycolor text-white font-semibold rounded-xl hover:border-2 hover:border-primarycolor hover:bg-white  hover:text-primarycolor transition-colors duration-500 hidden md:block'>Contáctanos</button>
      <button className="md:hidden w-12 h-12"> {/* Muestra el icono solo en dispositivos con ancho menor o igual a 800px */}
        <img src={menu} alt="" />
      </button>
    </div>
    
  )
}

export default Header