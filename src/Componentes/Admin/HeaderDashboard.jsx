import React from 'react';
import BuscadorJob from './BuscadorJob'; // Asegúrate de que la ruta sea correcta

function HeaderDashboard() {
  return (
    <div className="flex justify-between items-center pt-8  ">
      <div>
        <p className="text-sm text-gray-500">Hi Alexander,</p>
        <h1 className="text-3xl font-bold text-blue-900">Bienvenido a Power</h1>
      </div>
      <div className="w-1/4">
        <BuscadorJob />
      </div>
    </div>
  );
}

export default HeaderDashboard;
