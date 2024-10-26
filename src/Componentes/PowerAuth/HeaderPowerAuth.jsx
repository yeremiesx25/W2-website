import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import { RxAvatar } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";

function HeaderPowerAuth() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const { user, signOut } = UserAuth();
  const [profile, setProfile] = useState({
    nombre: '',
    avatar_url: ''
  });

  // Obtener perfil desde la tabla 'perfiles'
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

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detectar clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".menu-content")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={`bg-newprimarycolor fixed w-full z-10 font-dmsans transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-8 flex justify-between items-center md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a className='text-yellowprimary text-2xl font-medium' href="/PowerAuth">
            Power
          </a>
        </div>

        {/* Avatar y menú desplegable */}
        <div className="relative">
          <button 
            className="flex items-center justify-between focus:outline-none gap-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="overflow-hidden whitespace-nowrap overflow-ellipsis text-white font-regular w-auto hidden md:flex items-center">
              {profile.nombre || 'Usuario'}
            </span>
            <TiArrowSortedDown className='text-white ml-1' />
            <img
              className="w-10 h-10 rounded-full my-2"
              src={profile.avatar_url || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
              alt="User"
            />
          </button>

          {/* Menú desplegable */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute right-0 w-56 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-2xl py-4 z-20 border border-gray-200 menu-content"
            >
              <Link
                to="/Profile1"
                className="flex items-center px-6 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 transition-all duration-300 rounded-md"
              >
                <RxAvatar size={26} className="mr-3 text-blue-600" />
                <span className="font-semibold text-sm">Mi Perfil</span>
              </Link>
              <button
                onClick={signOut}
                className="flex items-center px-6 py-3 w-full text-red-500 hover:bg-gradient-to-r hover:from-red-100 hover:to-red-50 transition-all duration-300 rounded-md mt-2"
              >
                <BiLogOut size={26} className="mr-3" />
                <span className="font-semibold text-sm">Cerrar sesión</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderPowerAuth;
