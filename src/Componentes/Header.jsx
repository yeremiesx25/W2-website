import React from 'react'
import logo from '../assets/Logo horizontal W2 Black.png'
import menu from '../assets/menuMobile.png'


function Header() {
  
  return (
    <header className='w-full h-16 bg-white flex items-center justify-around font-medium text-gray-600 top-0 fixed'>
      <button className='w-32 flex items-center justify-center'>
        <img src={logo} alt="Logo de w2" />
      </button>
      <nav className='w-1/3 justify-around hidden md:flex'>
        <ul className='w-full flex items-center justify-around'>
          <a href="" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Inicio</li></a>
          <a href="" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Empresas</li></a>
          <a href="" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Candidatos</li></a>
          <a href="" className='p-1 rounded-lg hover:text-primarycolor hover:bg-slate-100 transition all duration-300'><li>Prácticas</li></a>
        </ul>
      </nav>
      <button style={{height: "40px"}} className='w-32 bg-white text-primarycolor font-semibold rounded-3xl border-2 border-primarycolor hover:bg-primarycolor  hover:text-white transition-colors duration-500 hidden md:block'>Contáctanos</button>
      <button className="md:hidden"> {/* Muestra el icono solo en dispositivos con ancho menor o igual a 800px */}
        <img src={menu} alt="" />
      </button>
    </header>
    
  )
}

export default Header