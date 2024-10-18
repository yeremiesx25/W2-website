import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoChatbubbleOutline, IoCalendarClearOutline, IoStatsChartOutline } from "react-icons/io5";
import { RxAvatar, RxDashboard } from "react-icons/rx";
import { useSpring, animated } from '@react-spring/web';
import { supabase } from "../../supabase/supabase.config";
import Advice from './Advice'

// Componente reutilizable para los items del menú
const MenuItem = ({ to, icon: Icon, label, theme }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const styles = useSpring({
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.35)' : 'transparent',
    color: isActive ? (theme === 'dark' ? 'white' : 'black') : (theme === 'dark' ? '#fff' : '#000'),
  });

  return (
    <animated.div style={styles} className="rounded-lg">
      <Link
        to={to}
        className="flex items-center py-2 px-6 font-lato font-regular"
      >
        <Icon className="mr-3" /> {label}
      </Link>
    </animated.div>
  );
};

function MenuAdmin() {
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate('/Power');
    } else {
      console.error('Error cerrando sesión:', error.message);
    }
  };

  // Memoriza el menú para evitar renders innecesarios
  const menuItems = useMemo(() => [
    { to: "/Admin", icon: RxDashboard, label: "Ofertas" },
    { to: "/Programa", icon: IoCalendarClearOutline, label: "Entrevistas" },
    { to: "/Conversaciones", icon: IoChatbubbleOutline, label: "Conversaciones" },
    { to: "/Estadisticas", icon: IoStatsChartOutline, label: "Estadísticas" },
    { to: "/AdminProfile", icon: RxAvatar, label: "Mi Perfil" },
  ], []);

  return (
    <div className={`w-64 h-screen ${theme === 'dark' ? 'bg-newprimarycolor' : 'bg-white'} px-2 shadow flex flex-col justify-around pt-24  z-10 fixed`}>
      {/* <div className="p-4 flex justify-center">
        <div
          onClick={toggleTheme}
          className={`w-14 h-7 flex items-center bg-gray-800 border-white rounded-full p-1 cursor-pointer ${theme === 'light' ? 'bg-yellow-300' : ''}`}
        >
          <div className={`icon w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out flex items-center ${theme === 'light' ? 'translate-x-7' : ''}`}>
            {theme === 'light' ? (
              <span role="img" aria-label="sun" className="text-yellow-600">☀️</span>
            ) : (
              <span role="img" aria-label="moon" className="text-gray-00">🌙</span>
            )}
          </div>
        </div>
      </div> */}

      <ul className="space-y-4 p-4 mt-12">
        {menuItems.map(({ to, icon, label }) => (
          <li key={to}>
            <MenuItem to={to} icon={icon} label={label} theme={theme} />
          </li>
        ))}
      </ul>
      {/* <Advice /> */}
      <div className="p-6">
        <button onClick={handleLogout} className="flex items-center text-red-500">
          <FaSignOutAlt className="mr-3" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default MenuAdmin;
