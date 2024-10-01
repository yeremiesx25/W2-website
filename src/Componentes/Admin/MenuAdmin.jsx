import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaChartLine, FaComments, FaCalendarAlt, FaClipboard, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { supabase } from "../../supabase/supabase.config"; // Supongamos que usas Supabase para autenticación

// Componente reutilizable para los items del menú
const MenuItem = ({ to, icon: Icon, label }) => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center ${isActive ? 'text-white  bg-primarycolor p-2 rounded-lg' : 'text-[#8B9DD7] hover:text-primarycolor p-2 font-light'}`}
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
    <div className="w-64 h-screen bg-g   shadow flex flex-col justify-between pt-20 font-dmsans fixed">
      <ul className="space-y-4 p-6 mt-20">
        <li>
          <MenuItem to="/Admin" icon={FaTachometerAlt} label="Ofertas" />
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
      </ul>
      <div className="p-6">
        <button onClick={handleLogout} className="flex items-center text-red-500">
          <FaSignOutAlt className="mr-3" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default MenuAdmin;