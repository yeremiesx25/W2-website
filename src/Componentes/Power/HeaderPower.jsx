import React from 'react'
import {Link}from 'react-router-dom'
function HeaderPower() {
  return (
<header className="bg-primarytext text-gray-50 font-dmsans"
style={{height: '78px'}}
>
      <div className="container mx-auto px-4 py-6 flex justify-around items-center">
        {/* Logo */}
        <div className="flex items-center">

          <span className="text-xl font-semibold text-amber-400">Power</span>
        </div>

        {/* Opciones de navegación */}
          <div className="flex w-96 text-sm justify-around">
          <Link to="/" className="text-gray-300 hover:text-white">
              Inicio
          </Link>
          <Link to="/Empresas" className="text-gray-300 hover:text-white">
              Empresas
          </Link>
          <Link to="/Power" className="text-gray-300 hover:text-white">
              Power
          </Link>
          <Link to="/Practicantes" className="text-gray-300 hover:text-white">
              Practicantes
          </Link>
          </div>

        {/* Botones de login y registro */}
        <div className="flex items-center">
          <button className="text-sm text-amber-400 hover:text-white">Iniciar sesión</button>
          <button className="text-sm bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-lg ml-4">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}


export default HeaderPower