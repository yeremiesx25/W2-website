import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png';
import { UserAuth } from "../../Context/AuthContext";
import logo from '../../assets/Logo Power.png';

function HeaderPowerAuth() {
  const { user, signOut } = UserAuth();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className="bg-gray-900 text-gray-50 font-dmsans flex justify-around w-full flex-wrap fixed z-10" style={{ height: '78px' }}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/Power">
            <img src={logo} alt="Power" className="w-16 h-auto" />
          </a>
        </div>

        <div className="md:hidden w-full flex justify-end flex-wrap">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
            <img src={menuMobilePower} alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        <div className="md:flex w-96 text-sm justify-around hidden">
          <Link to="/" className="text-gray-300 hover:text-white">Inicio</Link>
          <Link to="/Empresas" className="text-gray-300 hover:text-white">Empresas</Link>
          <Link to="/Practicantes" className="text-gray-300 hover:text-white">Descubriendo Talentos</Link>
          <Link to="/PowerAuth" className="font-semibold text-amber-400 hover:text-white underline decoration-amber-400 underline-offset-4">Power</Link>
        </div>

        <div className="flex items-center">
          {user && (
            <>
              <div className="relative inline-block text-left" ref={menuRef}>
                <div>
                  <button onClick={toggleMenu} type="button" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    <img className='w-12 h-12 rounded-full' src={user.picture} alt="" />
                  </button>
                </div>

                {showMenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      <button onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cerrar sesión</button>
                    </div>
                  </div>
                )}
              </div>
              <p>{user.name}</p>
            </>
          )}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden bg-gray-900 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/Empresas" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Empresas</Link>
            <Link to="/Power" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Power</Link>
            <Link to="/Practicantes" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Descubriendo Talentos</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderPowerAuth;