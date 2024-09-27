import React, { useEffect, useState } from 'react';
import BuscadorJob from './BuscadorJob';
import { UserAuth } from '../../Context/AuthContext'; // Importa tu contexto de autenticación

function HeaderDashboard() {
  const { user } = UserAuth(); // Obtén el usuario desde el contexto
  const [reclutadorNombre, setReclutadorNombre] = useState('');

  useEffect(() => {
    if (user && user.nombre) {
      setReclutadorNombre(user.nombre); // Accede al nombre del usuario
    } else {
      setReclutadorNombre('Reclutador'); // Si no hay nombre, usa un valor predeterminado
    }
  }, [user]);

  return (
    <div className="flex justify-between items-center pt-8">
      <div>
        <p className="text-sm text-gray-500">Hola {reclutadorNombre}</p>
        <h1 className="text-3xl font-bold text-blue-900">Bienvenido a Power</h1>
      </div>
      <div className="w-1/4">
        <BuscadorJob />
      </div>
    </div>
  );
}

export default HeaderDashboard;
