import React, { useState, useEffect } from 'react';
import BuscadorJob from './BuscadorJob'; // Asegúrate de que la ruta sea correcta
import { supabase } from '../../supabase/supabase.config'; // Importar configuración de Supabase

function HeaderDashboard() {
  const [recruiterName, setRecruiterName] = useState('');

  useEffect(() => {
    const fetchRecruiterName = async () => {
      const { data, error } = await supabase
        .from('reclutador') // Cambia 'reclutador' si es necesario
        .select('nombre')
        .eq('id_reclutador', 'el_id_del_reclutador') // Reemplaza 'el_id_del_reclutador' por la lógica correcta
        .single(); // Obtener un solo resultado

      if (error) {
        console.error('Error al obtener el nombre del reclutador:', error);
      } else {
        setRecruiterName(data.nombre);
      }
    };

    fetchRecruiterName();
  }, []);

  return (
    <div className="flex justify-between items-center pt-8">
      <div>
        <p className="text-sm text-gray-500">Hola ,</p>
        <h1 className="text-3xl font-bold text-blue-900">Bienvenido a Power</h1>
      </div>
      <div className="w-1/4">
        <BuscadorJob />
      </div>
    </div>
  );
}

export default HeaderDashboard;

