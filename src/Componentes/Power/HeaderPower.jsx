import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png'; // Importa el icono de hamburguesa
import Login from './Login';
import logo from '../../assets/Logo Power.png';

function HeaderPower() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <header className="bg-gray-900 text-gray-50 font-dmsans flex justify-around w-full flex-wrap fixed z-10" style={{ height: '78px' }}>
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/Power">
          <img src={logo} alt="Power" className="w-16 h-auto" />
        </a>
      </div>

        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden w-full flex justify-end flex-wrap">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
            {/* Icono de hamburguesa */}
            <img src={menuMobilePower} alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Opciones de navegación */}
        <div className="md:flex w-96 text-sm justify-around hidden">
          <Link to="/" className="text-gray-300 hover:text-white">Inicio</Link>
          <Link to="/Empresas" className="text-gray-300 hover:text-white">Empresas</Link>
          <Link to="/Practicantes" className="text-gray-300 hover:text-white">Descubriendo Talentos</Link>
          <Link to="/Power" className="font-semibold text-amber-400 hover:text-white underline decoration-amber-400 underline-offset-4">Power</Link>
        </div>

        {/* Botones de login y registro */}
        <div className="flex items-center">
          <button onClick={handleModalOpen} className="text-sm text-amber-400 hover:text-white hidden md:flex">Iniciar sesión</button>
          <button className="text-sm bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-lg ml-4 hidden md:flex">Registrarse</button>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden bg-primarytext w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/Empresas" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Empresas</Link>
            <Link to="/Power" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Power</Link>
            <Link to="/Practicantes" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Descubriendo Talentos</Link>
            <button className="bg-amber-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2 mr-2">Iniciar</button>
            <button className="bg-amber-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">Registrar</button>
          </div>
        </div>
      )}
      {modalOpen && (<Login closeModal={handleModalClose} />)}
    </header>
  );
}

export default HeaderPower;
