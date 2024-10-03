import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  FaChartLine, FaComments, FaCalendarAlt, FaClipboard, FaCog, FaSignOutAlt, FaThList } from 'react-icons/fa';
import { supabase } from "../../supabase/supabase.config"; // Supongamos que usas Supabase para autenticación
import Advice from './Advice';

// Componente reutilizable para los items del menú
const MenuItem = ({ to, icon: Icon, label }) => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center py-2 px-6 ${isActive ? 'text-white  bg-primarycolor rounded-lg' : 'text-[#A3AED0] hover:text-primarycolor font-light'}`}
    >
      <Icon className="mr-3" /> {label}
    </Link>
  );
};

function MenuAdmin() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Lógica de cierre de sesión (en este caso usando Supabase)
    const { error } = await supabase.auth.signOut();
    
    if (!error) {
      // Redirigir a la página /Power después de cerrar sesión
      navigate('/Power');
    } else {
      console.error('Error cerrando sesión:', error.message);
    }
  };

  return (
    <div className="w-64 h-screen bg-white  px-2 shadow flex flex-col justify-around pt-24 font-dmsans fixed">
      
      <ul className="space-y-4 p-4 mt-12">
        <li>
          <MenuItem to="/Admin" icon={FaThList} label="Ofertas" />
        </li>
        <li>
          <MenuItem to="/Postulados" icon={FaChartLine} label="Postulantes" />
        </li>
        <li>
          <MenuItem to="/conversaciones" icon={FaComments} label="Conversaciones" />
        </li>
        <li>
          <MenuItem to="/entrevistas" icon={FaCalendarAlt} label="Programar entrevistas" />
        </li>
        <li>
          <MenuItem to="/estadisticas" icon={FaClipboard} label="Estadísticas" />
        </li>
        <li>
          <MenuItem to="/ajustes" icon={FaCog} label="Ajustes" />
        </li>
      </ul><Advice />
      <div className="p-6">
        <button onClick={handleLogout} className="flex items-center text-red-500">
          <FaSignOutAlt className="mr-3" /> Cerrar sesión
        </button>
      </div>
      
    </div>
  );
}

export default MenuAdmin;