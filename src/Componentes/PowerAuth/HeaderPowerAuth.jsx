import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { RxAvatar } from "react-icons/rx";
import { BiLogOut, BiMenuAltRight } from "react-icons/bi";

function HeaderPowerAuth() {
  const { user, signOut } = UserAuth();
  const [profile, setProfile] = useState({
    nombre: '',
    avatar_url: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('perfiles')
        .select('nombre, avatar_url')
        .eq('id', user.id)
        .single();

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
      fetchProfile();
    }
  }, [user]);

  return (
    <header className="bg-white border-b fixed w-full z-10 font-dmsans transition-shadow flex justify-center duration-300">
      <div className="container md:mx-auto md:px-8 flex justify-between items-center py-2">
        <div className="md:flex items-center hidden">
          <a className="text-primarycolor text-2xl font-bold" href="/PowerAuth">
            Power
          </a>
        </div>

        {/* Desktop view */}
        <div className="items-center gap-4 md:flex hidden">
          {/* Icono de notificaciones con tooltip */}
          <Tooltip title="Notificaciones" arrow>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none transition">
              <NotificationsIcon fontSize="small" className="text-gray-700" />
            </button>
          </Tooltip>

          {/* Icono de Mis Postulaciones con tooltip */}
          <Tooltip title="Mis Postulaciones" arrow>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none transition">
              <WorkOutlineIcon fontSize="small" className="text-gray-700" />
            </button>
          </Tooltip>

          {/* Nombre del usuario con tooltip para Mi Perfil */}
          <span className="overflow-hidden whitespace-nowrap text-sm font-medium overflow-ellipsis text-gray-800 font-regular w-auto flex items-center">
            {profile.nombre || 'Usuario'}
          </span>

          {/* Foto del usuario con tooltip para Mi Perfil */}
          <Tooltip title="Mi Perfil" arrow>
            <Link to="/Profile1">
              <img
                className="w-10 h-10 rounded-full my-2"
                src={profile.avatar_url || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                alt="User"
              />
            </Link>
          </Tooltip>

          {/* Botón de cerrar sesión con tooltip */}
          <Tooltip title="Cerrar sesión" arrow>
            <button
              onClick={signOut}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none transition"
            >
              <BiLogOut size={24} className="text-red-500" />
            </button>
          </Tooltip>
        </div>

        {/* Mobile view */}
        <div className="flex items-center justify-between w-full px-4 md:hidden">
          
          <a className="text-primarycolor text-2xl font-bold" href="/PowerAuth">
            Power
          </a>
          <div className='flex gap-4'>
            <Link to="/Profile1">
            <img
              className="w-10 h-10 rounded-full"
              src={profile.avatar_url || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
              alt="User"
            />
          </Link>
          <button
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <BiMenuAltRight size={24} className="text-gray-700" />
          </button>
          </div>
          
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 mt-[233px] absolute right-0 z-10">
            <Tooltip title="Notificaciones" arrow>
              <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition">
                <NotificationsIcon fontSize="small" className="text-gray-700" />
                <span className="text-sm text-gray-800">Notificaciones</span>
              </button>
            </Tooltip>
            <Tooltip title="Mis Postulaciones" arrow>
              <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition">
                <WorkOutlineIcon fontSize="small" className="text-gray-700" />
                <span className="text-sm text-gray-800">Mis Postulaciones</span>
              </button>
            </Tooltip>
            <Tooltip title="Mi Perfil" arrow>
              <Link to="/Profile1" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition">
                <RxAvatar size={20} className="text-gray-700" />
                <span className="text-sm text-gray-800">Mi Perfil</span>
              </Link>
            </Tooltip>
            <Tooltip title="Cerrar sesión" arrow>
              <button
                onClick={signOut}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition"
              >
                <BiLogOut size={20} className="text-red-500" />
                <span className="text-sm text-gray-800">Cerrar sesión</span>
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderPowerAuth;