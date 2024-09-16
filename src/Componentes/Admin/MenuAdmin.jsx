import React from 'react';
import { FaTachometerAlt, FaChartLine, FaComments, FaCalendarAlt, FaClipboard, FaCog, FaSignOutAlt } from 'react-icons/fa';

function MenuAdmin() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between pt-20">
      <ul className="space-y-6 p-6 mt-20">
        <li className="flex items-center text-primarycolor font-bold ">
          <FaTachometerAlt className="mr-3" /> Dashboard
        </li>
        <li className="flex items-center text-gray-500 hover:text-primarycolor ">
          <FaChartLine className="mr-3" /> Ofertas
        </li>
        <li className="flex items-center text-gray-500 hover:text-primarycolor ">
          <FaComments className="mr-3" /> Conversaciones
        </li>
        <li className="flex items-center text-gray-500 hover:text-primarycolor ">
          <FaCalendarAlt className="mr-3" /> Programar entrevistas
        </li>
        <li className="flex items-center text-gray-500 hover:text-primarycolor ">
          <FaClipboard className="mr-3" /> Estadísticas
        </li>
        <li className="flex items-center text-gray-500 hover:text-primarycolor ">
          <FaCog className="mr-3" /> Ajustes
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
