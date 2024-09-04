import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png'; // Importa el icono de hamburguesa
import logo from '../../assets/LogoPower.png';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

function HeaderPower() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { user, signOut } = UserAuth();

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
        <button onClick={signOut} className="flex items-center px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
              <MdOutlinePowerSettingsNew size={24} />
              <span className="ml-4">Cerrar sesión</span>
            </button>
        <Link to="/Profile" className="hidden md:flex items-center">
          
        <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis my-8 text-white font-base w-40">{user.user_metadata.full_name}</span>
        <img className="w-10 h-10 rounded-full my-8" src={user.user_metadata.avatar_url} alt="User" />
        </Link>
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
            
          </div>
        </div>
      )}
      {modalOpen && <Login closeModal={handleModalClose} />}
    </header>
  );
}

export default HeaderPower;