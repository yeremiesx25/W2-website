import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from "../../Context/AuthContext";

function HeaderAdmin() {
  const { user } = UserAuth();

  // Estado para los datos del perfil y cargando
  const [profile, setProfile] = useState({
    nombre: '',
    avatar_url: ''
  });
  const [loading, setLoading] = useState(true);

  // Función para obtener el perfil desde la tabla 'perfiles'
  const fetchProfile = async (userId) => {
    try {
      setLoading(true); // Inicia el estado de cargando
      const { data, error } = await supabase
        .from('perfiles') // Nombre de la tabla 'perfiles'
        .select('nombre, avatar_url')
        .eq('id', userId) // Filtra por el id del usuario autenticado
        .single(); // Obtiene solo un perfil

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        // Guarda los datos en el estado y en localStorage
        setProfile({
          nombre: data.nombre,
          avatar_url: data.avatar_url,
        });

        // Guarda los datos del perfil en localStorage
        localStorage.setItem('profile', JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false); // Termina el estado de cargando
    }
  };

  useEffect(() => {
    if (user?.id) {
      // Obtener el perfil del Local Storage o Supabase cuando se cargue el componente
      const storedProfile = localStorage.getItem('profile');
      
      if (storedProfile) {
        // Si hay datos en localStorage, cargar esos datos
        setProfile(JSON.parse(storedProfile));
        setLoading(false); // Termina el estado de cargando
      } else {
        // Si no hay datos en localStorage, obtener los datos de la base de datos
        fetchProfile(user.id);
      }

      // Suscripción a cambios en tiempo real en la tabla 'perfiles'
      const subscription = supabase
        .channel('custom-perfiles-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'perfiles', filter: `id=eq.${user.id}` }, 
          (payload) => {
            console.log('Cambio detectado en perfil:', payload.new);
            const newProfile = {
              nombre: payload.new.nombre,
              avatar_url: payload.new.avatar_url,
            };

            // Actualiza el estado del perfil y guarda en localStorage
            setProfile(newProfile);
            localStorage.setItem('profile', JSON.stringify(newProfile)); // Actualiza el localStorage
          }
        )
        .subscribe();

      // Limpiar la suscripción cuando el componente se desmonte
      return () => {
        supabase.removeChannel(subscription);
      };
    }
  }, [user?.id]);

  // Función para obtener solo el primer nombre
  const getFirstName = (nombreCompleto) => {
    return nombreCompleto.split(' ')[0]; // Divide por espacios y obtiene el primer elemento
  };

  return (
    <div className="flex items-center pl-72  justify-between p-4   bg-white border-b fixed w-full z-10 font-lato">

      {/* Saludo al reclutador */}
      <div className="text-gray-800">
        <span className="text-lg font-semibold">
          Hola, {getFirstName(profile.nombre)} 👋
        </span>
        <div className="text-sm text-gray-600">
          Echemos un vistazo a tu actividad hoy.
        </div>
      </div>

      {/* Barra de búsqueda */}
      

      {/* Nombre y foto del logueado */}
      <div className="flex items-center space-x-4 min-w-64">
        {loading ? ( // Muestra un spinner o mensaje mientras carga
          <div className="flex items-center space-x-2">
            <div className="loader"></div> {/* Puedes reemplazar esto con un spinner real */}
            <span>Cargando...</span>
          </div>
        ) : (
          <>
          <span className="text-gray-800 text-base font-medium w-44 truncate">
              {profile.nombre}
            </span>
            <img
              src={profile.avatar_url || 'https://static-00.iconduck.com/assets.00/user-avatar-happy-icon-2048x2048-ssmbv1ou.png'} // Usa una imagen por defecto si no hay avatar
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderAdmin;
