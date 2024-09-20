import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaChartLine, FaComments, FaCalendarAlt, FaClipboard, FaCog, FaSignOutAlt } from 'react-icons/fa';

// Componente reutilizable para los items del menú
const MenuItem = ({ to, icon: Icon, label }) => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center ${isActive ? 'text-white font-semibold bg-primarycolor p-2 rounded-lg' : 'text-[#8B9DD7] hover:text-primarycolor p-2 font-light'}`}
    >
      <Icon className="mr-3" /> {label}
    </Link>
  );
};

function MenuAdmin() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between pt-20 font-dmsans">
      <ul className="space-y-4 p-6 mt-20">
        <li>
          <MenuItem to="/Admin" icon={FaTachometerAlt} label="Dashboard" />
        </li>
        <li>
          <MenuItem to="/ofertas" icon={FaChartLine} label="Ofertas" />
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
        <button className="flex items-center text-red-500">
          <FaSignOutAlt className="mr-3" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default MenuAdmin;
