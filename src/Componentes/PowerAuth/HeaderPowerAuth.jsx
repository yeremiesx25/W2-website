import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../Context/AuthContext";
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import logo from '../../assets/Logo Power.png';
import menuIcon from '../../assets/menu (4).png';

function HeaderPowerAuth() {
  const { user, signOut } = UserAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleModalClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="flex">
      <nav className={`bg-powercolor text-white ${isExpanded ? 'w-72' : 'w-20'} flex flex-col items-center py-4 fixed h-full transition-width duration-300`}>
        <button onClick={toggleMenu} className="mb-4">
          {isExpanded ? (
            <button onClick={handleModalClose} className="absolute top-2 right-2 bg-amber-400 text-black px-3 py-1 rounded-lg font-semibold">X</button>
          ) : (
            <img src={menuIcon} alt="Menu" className="w-8 h-8" />
          )}
        </button>
        {user && (
          <div className={`flex items-center ${isExpanded ? 'px-4' : 'justify-center'}`}>
            <img className="w-10 h-10 rounded-full" src={user.picture} alt="User" />
            {isExpanded && <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{user.name}</span>}
          </div>
        )}

        <div className="flex flex-col mt-4 w-full">

          <Link to="/" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            {isExpanded && <span className="ml-4">Inicio</span>}
          </Link>

          <Link to="/" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <MdOutlineSettings size={24} />
            {isExpanded && <span className="ml-4">Configuración</span>}
          </Link>

          <Link to="/" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <LuFileSpreadsheet size={24} />
            {isExpanded && <span className="ml-4">Mi CV</span>}
          </Link>

  
          {isExpanded && <hr className="border-t border-gray-400 my-2 w-full" />}
        </div>

        <div className="flex flex-col flex-grow justify-center w-full">
       
          <Link to="/Empresas" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <FaSearchengin size={24} />
            {isExpanded && <span className="ml-4">Buscar Ofertas</span>}
          </Link>

          <Link to="/Practicantes" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <RiMailSendLine size={24} />
            {isExpanded && <span className="ml-4">Mis Postulaciones</span>}
          </Link>

          <Link to="/PowerAuth" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <ImPower size={24} />
            {isExpanded && <span className="ml-4">Power</span>}
          </Link>

     
          {isExpanded && <hr className="border-t border-gray-400 my-2 w-full" />}
        </div>

        <div className="flex flex-col mt-auto w-full">
      
          {isExpanded && (
            <button onClick={signOut} className="my-2 flex items-center px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
              <MdOutlinePowerSettingsNew size={24} />
              <span className="ml-4">Cerrar sesión</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default HeaderPowerAuth;
