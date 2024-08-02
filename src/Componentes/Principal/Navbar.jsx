  import React, { useState } from 'react';
  import {NavLink, Link}from 'react-router-dom'
  import logo from '../../assets/Logo horizontal W2 WHITE.png'
  function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const activeStyle = 'underline underline-offset-4 text-blue-500 font-medium'
    const classDefault = 'text-white hover:text-primarycolor font-light'
    return (
      <nav className="bg-primarytext shadow z-10 top-0 fixed w-full justify-around font-dmsans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo o título */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-lg font-bold text-white">
                <img className='w-36' src={logo} alt="" />
              </NavLink>
            </div>
            {/* Navegación de escritorio */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <NavLink to="/"  className={({isActive}) => isActive ? activeStyle : classDefault }>
                Inicio
              </NavLink>
              <NavLink to="/Empresas" className={({isActive}) => isActive ? activeStyle : classDefault }>
                Empresas
              </NavLink>
              <NavLink to="/DescubriendoTalentos" className={({isActive}) => isActive ? activeStyle : classDefault }>
                Descubriendo Talentos
              </NavLink>
              <NavLink to="/Power" className={({isActive}) => isActive ? activeStyle : classDefault }>
                Power
              </NavLink>
              
              <Link to='/Coworking' className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                Reserva CoWorking
              </Link>
            </div>
            {/* Botón de menú para dispositivos móviles */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <img className='w-12 h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        {/* Navegación de dispositivos móviles */}
        {showMenu && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </NavLink>
              <NavLink
                to="/Empresas"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Empresas
              </NavLink>
              <NavLink
                to="/DescubriendoTalentos"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Descubriendo Talentos
              </NavLink>
              <NavLink
                to="/Power"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Power
              </NavLink>
              
              <Link to='/Coworking' className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">
                Reserva CoWorking
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }

  export default Navbar;
