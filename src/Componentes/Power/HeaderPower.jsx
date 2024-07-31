import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png'; // Importa el icono de hamburguesa
import Login from './Login';
import logo from '../../assets/Logo Power.png';
import gradiantPower from '../../assets/gradiantPower.svg'

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
    className="bg-cover font-dmsans flex justify-around w-full flex-wrap fixed z-10" style={{ height: '78px', backgroundImage: `url(${gradiantPower})` }}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center px-20 ">
          <a href="/Power">
            <img src={logo} alt="Power" className="w-20 h-auto" />
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
        <div className="md:flex w-96 text-sm justify-around hidden text-gray-700">
          <Link to="/" className=" hover:text-primarycolor">Inicio</Link>
          <Link to="/Empresas" className=" hover:text-primarycolor">Empresas</Link>
          <Link to="/DescubriendoTalentos" className=" hover:text-primarycolor">Descubriendo Talentos</Link>
          <Link to="/Power" className="font-semibold text-primarycolor hover:text-primarycolor underline decoration-primarycolor underline-offset-4">Power</Link>
        </div>

        {/* Botones de login y registro (solo en escritorio) */}
        <div className="hidden md:flex items-center">
          <button onClick={handleModalOpen} className="text-md w-48 font-bold bg-yellowprimary hover:bg-yellow-200 text-primarycolor px-4 py-2 rounded-md ml-4">Iniciar sesión</button>
          {/* <button className="text-sm bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-lg ml-4">Registrarse</button> */}
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden bg-gray-900 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/Empresas" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Empresas</Link>
            <Link to="/Power" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Power</Link>
            <Link to="/DescubriendoTalentos" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Descubriendo Talentos</Link>
            <button onClick={handleModalOpen} className="bg-amber-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2 mr-2">Iniciar Sesión</button>
            <button className="bg-amber-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">Registrar</button>
          </div>
        </div>
      )}
      {modalOpen && <Login closeModal={handleModalClose} />}
    </header>
  );
}

export default HeaderPower;