import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Logo horizontal W2 WHITE.png";
import Contacto from "../Contacto/Contacto";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const activeStyle =
    "underline underline-offset-4 text-white font-regular text-sm";
  const classDefault = "text-white hover:text-primarycolor font-light text-sm";
  return (
    <nav className="bg-primarytext shadow-md z-10 top-0 fixed w-full justify-around font-dmsans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo o título */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-lg font-bold text-white">
              <img className="w-36" src={logo} alt="" />
            </NavLink>
          </div>
          {/* Navegación de escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : classDefault
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/Empresas"
              className={({ isActive }) =>
                isActive ? activeStyle : classDefault
              }
            >
              Empresas
            </NavLink>
            <NavLink
              to="/DescubriendoTalentos"
              className={({ isActive }) =>
                isActive ? activeStyle : classDefault
              }
            >
              Descubriendo Talentos
            </NavLink>
            <NavLink
              to="/Coworking"
              className={({ isActive }) =>
                isActive ? activeStyle : classDefault
              }
            >
              Coworking
            </NavLink>
            <NavLink
              to="/Power"
              className={({ isActive }) =>
                isActive ? activeStyle : classDefault
              }
            >
              Power
            </NavLink>
          </div>
          <button
            onClick={openModal}
            className="bg-primarycolor hover:bg-white hover:border hover:border-primarycolor hover:text-primarycolor text-white font-semibold py-2 px-6 rounded-xl hidden md:block"
          >
            Contáctanos
          </button>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg md:w-max-[500px] flex items-start justify-end">
                <Contacto closeModal={closeModal} />{" "}
                {/* Pasa la función aquí */}
              </div>
            </div>
          )}
          {/* Botón de menú para dispositivos móviles */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <img
                className="w-12 h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
                alt=""
              />
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
              to="/Coworking"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Coworking
            </NavLink>
            <NavLink
              to="/Power"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Power
            </NavLink>

            <button
              onClick={openModal}
              className="bg-primarycolor hover:bg-blue-50 text-white font-semibold py-2 px-6 rounded-xl block"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
