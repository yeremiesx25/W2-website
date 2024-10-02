import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuMobilePower from '../../assets/menu (4).png'; // Icono de hamburguesa
import logo from '../../assets/LogoPower.png';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import { RxAvatar } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";

function HeaderPowerAuth() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { user, signOut } = UserAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Estado para los datos del perfil
  const [profile, setProfile] = useState({
    nombre: '',
    avatar_url: ''
  });

  // Función para obtener el perfil desde la tabla 'perfiles'
  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('perfiles') // Asegúrate de que el nombre de tu tabla es 'perfiles'
        .select('nombre, avatar_url')
        .eq('id', user.id) // Filtra por el id del usuario autenticado
        .single(); // Obtiene solo un perfil

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setProfile({
          nombre: data.nombre,
          avatar_url: data.avatar_url,
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfile(); // Obtiene el perfil cuando el usuario esté disponible
    }
  }, [user]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
    className={`bg-newprimarycolor fixed w-full z-10 font-dmsans transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/Power">
            <img src={logo} alt="Power" className="w-24 h-auto" /> 
          </a>
        </div>

        {/* Opciones de navegación */}
        <div className="hidden md:flex justify-around items-center text-white text-md gap-4 font-dmsans">
          <Link to="/PowerAuth" className="hover:text-yellowprimary">Inicio</Link>
          <Link to="/Empresas" className="hover:text-yellowprimary">Empresas</Link>
          <Link to="/DescubriendoTalentos" className="hover:text-yellowprimary">Descubriendo Talentos</Link>
          <Link to="/Coworking" className="hover:text-yellowprimary">Coworking</Link>
          <Link to="/PowerAuth" className="font-semibold text-yellowprimary hover:text-white underline decoration-yellowprimary underline-offset-4">Power</Link>
        </div>

        {/* Avatar y menú desplegable */}
        <div 
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* Botón de avatar */}
          <button className="flex items-center focus:outline-none">
            <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis text-white font-regular w-40">
              {profile.nombre || 'Usuario'}
            </span>
            <img
              className="w-10 h-10 rounded-full my-2"
              src={profile.avatar_url || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'} // Puedes agregar una URL por defecto si no hay avatar
              alt="User"
            />
          </button>

          {/* Menú desplegable con transición */}
          <div 
            className={`absolute right-0 w-48 bg-white rounded-md shadow-lg py-2 z-10 transition-opacity duration-300 ease-in-out transform ${
              menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Link
              to="/Profile1"
              className="flex px-4 py-2 text-newprimarycolor hover:bg-blue-50"
            >
              <RxAvatar size={24} className='mr-2' />
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
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden bg-gray-900 w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/PowerAuth" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
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

export default HeaderPowerAuth;
