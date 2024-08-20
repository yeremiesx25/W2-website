import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png'; // Importa el icono de hamburguesa
import Login from './Login';
import logo from '../../assets/LogoPower.png';

function HeaderPower() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <header 
      className="bg-primarycolor fixed w-full z-10 shadow-lg font-dmsans">
      <div className="container mx-auto px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/Power">
            <img src={logo} alt="Power" className="w-24 h-auto" /> 
          </a>
        </div>

        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img src={menuMobilePower} alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Opciones de navegación */}
        <div className="hidden md:flex justify-around items-center text-white text-sm gap-4 font-dmsans">
          <Link to="/" className="hover:text-yellowprimary">Inicio</Link>
          <Link to="/Empresas" className="hover:text-yellowprimary">Empresas</Link>
          <Link to="/DescubriendoTalentos" className="hover:text-yellowprimary">Descubriendo Talentos</Link>
          <Link to="/Coworking" className="hover:text-yellowprimary">Coworking</Link>
          <Link to="/Power" className="font-semibold text-yellowprimary hover:text-white underline decoration-yellowprimary underline-offset-4">Power</Link>
        </div>

        {/* Botones de login y registro (solo en escritorio) */}
        <div className="hidden md:flex items-center">
          <button onClick={handleModalOpen} className="text-md font-bold bg-yellowprimary hover:bg-yellow-200 text-primarycolor px-4 py-2 rounded-md ml-4">Iniciar sesión</button>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden bg-gray-900 w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/Empresas" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Empresas</Link>
            <Link to="/DescubriendoTalentos" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Descubriendo Talentos</Link>
            <Link to="/Coworking" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Coworking</Link>
            <Link to="/Power" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Power</Link>
            <button onClick={handleModalOpen} className="bg-amber-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2 w-full">Iniciar Sesión</button>
            <button className="bg-amber-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2 w-full">Registrar</button>
          </div>
        </div>
      )}
      {modalOpen && <Login closeModal={handleModalClose} />}
    </header>
  );
}

export default HeaderPower;