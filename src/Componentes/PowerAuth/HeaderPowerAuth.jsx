import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../Context/AuthContext";
import logo from '../../assets/Logo Power.png';
import menuIcon from '../../assets/menu (4).png';

function HeaderPowerAuth() {
  const { user, signOut } = UserAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      <nav className={`bg-gray-900 text-white ${isExpanded ? 'w-64' : 'w-16'} flex flex-col items-center py-4 fixed h-full transition-width duration-300`}>
        <button onClick={toggleMenu} className="mb-4">
          <img src={menuIcon} alt="Menu" className="w-8 h-8" />
        </button>
        {user && (
          <div className="flex flex-col items-center">
            <img className="w-10 h-10 rounded-full" src={user.picture} alt="User" />
            {isExpanded && <p className="mt-2 text-sm">{user.name}</p>}
          </div>
        )}
        <Link to="/" className="my-2 flex items-center w-full px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          {isExpanded && <span className="ml-4">Inicio</span>}
        </Link>
        <Link to="/Empresas" className="my-2 flex items-center w-full px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2L2 22z"/></svg>
          {isExpanded && <span className="ml-4">Empresas</span>}
        </Link>
        <Link to="/Practicantes" className="my-2 flex items-center w-full px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 14v4h-4l-4 4-4-4H4v-4L0 10l4-4V2h4l4-4 4 4h4v4l4 4-4 4z"/></svg>
          {isExpanded && <span className="ml-4">Descubriendo Talentos</span>}
        </Link>
        <Link to="/PowerAuth" className="my-2 flex items-center w-full px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L2 20h20L12 0z"/></svg>
          {isExpanded && <span className="ml-4">Power</span>}
        </Link>
        {isExpanded && (
          <button onClick={signOut} className="my-2 flex items-center w-full px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 13v-2h-4V9h-2v2H6v2h4v2h2v-2z"/></svg>
            <span className="ml-4">Cerrar sesión</span>
          </button>
        )}
      </nav>
      <main className="ml-16 flex-1">
        {/* Resto del contenido de tu página */}
      </main>
    </div>
  );
}

export default HeaderPowerAuth;