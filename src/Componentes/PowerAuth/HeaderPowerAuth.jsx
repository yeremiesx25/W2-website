import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png'; // Importa el icono de hamburguesa
import logo from '../../assets/LogoPower.png';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import { RxAvatar } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";


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

  const [menuOpen, setMenuOpen] = useState(false);


  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header 
    className={`bg-newprimarycolor fixed w-full z-10 font-dmsans transition-shadow duration-300 ${
      hasShadow ? 'shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/Power">
            <img src={logo} alt="Power" className="w-24 h-auto" /> 
          </a>
        </div>

        {/* Icono de menú para dispositivos móviles */}
        

        {/* Opciones de navegación */}
        <div className="hidden md:flex justify-around items-center text-white text-md gap-4 font-dmsans">
          <Link to="/" className="hover:text-yellowprimary">Inicio</Link>
          <Link to="/Empresas" className="hover:text-yellowprimary">Empresas</Link>
          <Link to="/DescubriendoTalentos" className="hover:text-yellowprimary">Descubriendo Talentos</Link>
          <Link to="/Coworking" className="hover:text-yellowprimary">Coworking</Link>
          <Link to="/Power" className="font-semibold text-yellowprimary hover:text-white underline decoration-yellowprimary underline-offset-4">Power</Link>
        </div>

        {/* Botones de login y registro (solo en escritorio) */}
        <div className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center focus:outline-none"
      >
        <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis text-white font-base w-40">
          {user.user_metadata.full_name}
        </span>
        <img
          className="w-10 h-10 rounded-full my-2"
          src={user.user_metadata.avatar_url}
          alt="User"
        />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0  w-48 bg-white rounded-md shadow-lg py-2 z-10">
          <Link
            to="/Profile"
            className="flex px-4 py-2 text-newprimarycolor hover:bg-blue-50"
          > <RxAvatar size={24} className='mr-2' />
            Perfil
          </Link>
          <button
            onClick={signOut}
            className="flex items-center px-4 py-2 w-full text-red-600 hover:bg-blue-50"
          >
            <BiLogOut size={24} />
            <span className="ml-2">Cerrar sesión</span>
          </button>
        </div>
      )}
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
            
          </div>
        </div>
      )}
      {modalOpen && <Login closeModal={handleModalClose} />}
    </header>
  );
}

export default HeaderPower;