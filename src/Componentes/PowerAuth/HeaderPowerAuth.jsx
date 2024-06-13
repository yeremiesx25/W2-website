import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../Context/AuthContext";
import { FiHome } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineMenu } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

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
    <div className="flex font-dmsans">
      {!isExpanded && (
        <button onClick={toggleMenu} className="fixed top-4 left-6 z-50 text-white">
          <MdOutlineMenu size={32} />
        </button>
      )}
      <nav className={`bg-primarycolor text-white drop-shadow-xl ${isExpanded ? 'w-72' : 'w-20'} flex flex-col items-center justify-around py-4 px-2 fixed h-full transition-width duration-300 pt-8 ${isExpanded ? 'block' : 'hidden'} md:block`}>
        {isExpanded && (
          <>
            <button onClick={toggleMenu} className="md:hidden mb-4 text-white absolute top-2 right-2">
              <IoIosClose size={40} />
            </button>
            <button onClick={toggleMenu} className="mb-4">
              {isExpanded ? (
                <IoIosClose size={40} className="absolute top-2 right-2 text-white " onClick={handleModalClose} />
              ) : (
                <MdOutlineMenu size={32} />
              )}
            </button>
          </>
        )}

        {user && (
          <div className={`flex items-center ${isExpanded ? 'px-4' : 'justify-center'}`}>
            <img className="w-10 h-10 rounded-full my-8" src={user.user_metadata.avatar_url} alt="User" />
            {isExpanded && <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis my-8">{user.user_metadata.full_name}</span>}
          </div>
        )}

        <div className="flex flex-col w-full">
          <Link to="/PowerAuth" className={`my-2 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <FiHome size={24} />
            {isExpanded && <span className="ml-4">Inicio</span>}
          </Link>
          <Link to="/AdminLogin" className={`my-3 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <RiAdminLine size={24} />
            {isExpanded && <span className="ml-4">Reclutador</span>}
          </Link>
          <Link to="/" className={`my-3 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
            <MdOutlineSettings size={24} />
            {isExpanded && <span className="ml-4">Configuración</span>}
          </Link>
          {isExpanded && <hr className="border-t border-gray-500 my-2 w-[90%] self-center" />}
        </div>

        <div className="flex flex-col mt-4 justify-center w-full">
          <div className="flex flex-col justify-center h-full mb-4">
            <Link to="/" className={`my-3 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
              <LuFileSpreadsheet size={24} />
              {isExpanded && <span className="ml-4">Mi CV</span>}
            </Link>
            <Link to="/Empresas" className={`my-3 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
              <FaSearchengin size={24} />
              {isExpanded && <span className="ml-4">Buscar Ofertas</span>}
            </Link>
            <Link to="/Practicantes" className={`my-3 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover:opacity-100 transition-opacity duration-300`}>
              <RiMailSendLine size={24} />
              {isExpanded && <span className="ml-4">Mis Postulaciones</span>}
            </Link>
            <Link to="/PowerAuth" className={`my-3 flex items-center ${isExpanded ? 'px-4' : 'justify-center'} opacity-75 hover
transition-opacity duration-300`}>
<AiOutlineThunderbolt size={24} />
{isExpanded && <span className="ml-4">Power</span>}
</Link>
</div>
{isExpanded && <hr className="border-t border-gray-500 my-2 w-[90%] self-center" />}
</div>
<div className="flex flex-col mt-12 w-full">
      {isExpanded && (
        <button onClick={signOut} className="flex items-center px-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
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
