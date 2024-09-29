import React, { useEffect, useState } from 'react';
import BuscadorJob from './BuscadorJob';
import { UserAuth } from '../../Context/AuthContext'; // Importa tu contexto de autenticación
import { supabase } from '../../supabase/supabase.config'; // Importa la configuración de Supabase

function HeaderDashboard() {
  const { user } = UserAuth(); // Obtén el usuario desde el contexto
  const [reclutadorNombre, setReclutadorNombre] = useState('');

  useEffect(() => {
    // Función para obtener los detalles del perfil del reclutador
    const fetchPerfilReclutador = async () => {
      if (user && user.id) {
        try {
          // Consulta la tabla 'perfiles' en base al id del usuario autenticado
          const { data: perfil, error } = await supabase
            .from('perfiles')
            .select('nombre')
            .eq('id', user.id) // Asegúrate de que 'id' sea el campo correcto
            .single();
          
          if (error) {
            throw error;
          }

          // Si se obtiene el perfil, actualiza el estado con el nombre
          if (perfil && perfil.nombre) {
            setReclutadorNombre(perfil.nombre);
          } else {
            setReclutadorNombre('Reclutador');
          }
        } catch (error) {
          console.error('Error al obtener el perfil del reclutador:', error.message);
          setReclutadorNombre('Reclutador');
        }
      }
    };

    fetchPerfilReclutador();
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