import React, { useEffect, useState } from 'react';
import BuscadorJob from './BuscadorJob';
import { UserAuth } from '../../Context/AuthContext'; // Importa tu contexto de autenticación
import { supabase } from '../../supabase/supabase.config'; // Importa la configuración de Supabase
import AddButton from './AddButton';

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
    <div className="flex w-full gap-8 px-6 items-center py-8">
        <BuscadorJob />
        <AddButton />
    </div>
  );
}

export default HeaderDashboard;