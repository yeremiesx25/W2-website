import React from 'react'

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
        <nav>
          <ul className="flex w-96 text-sm justify-around">
            <li className="text-gray-300 hover:text-white">Inicio</li>
            <li className="text-gray-300 hover:text-white">Servicios</li>
            <li className="text-gray-300 hover:text-white">Contacto</li>
          </ul>
        </nav>

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