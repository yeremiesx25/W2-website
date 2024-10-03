import React, {useState, useEffect} from 'react';
import {supabase} from '../../supabase/supabase.config'
import { UserAuth } from "../../Context/AuthContext";
import BuscadorJob from './BuscadorJob';

function HeaderAdmin() {
    const { user } = UserAuth();
     // Estado para los datos del perfil
  const [profile, setProfile] = useState({
    nombre: '',
    avatar_url: ''
  });
  // Función para obtener el perfil desde la tabla 'perfiles'
  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('perfiles') // Asegúrate de que el nombre de tu tabla es 'perfiles'
        .select('nombre, avatar_url')
        .eq('id', user.id) // Filtra por el id del usuario autenticado
        .single(); // Obtiene solo un perfil

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setProfile({
          nombre: data.nombre,
          avatar_url: data.avatar_url,
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  useEffect(() => {
    if (user) {
      fetchProfile(); // Obtiene el perfil cuando el usuario esté disponible
    }
  }, [user]);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm px-14 fixed w-full z-10">
      {/* Logo de la empresa */}
      <div className="flex items-center space-x-4">
        {/* <img
          src="logo.png" // Reemplaza con la ruta de tu logo
          alt="Logo"
          className="w-10 h-10"
        /> */}
        <span className="text-xl font-bold text-primarycolor">Power</span>
      </div>
      
      {/* Saludo al reclutador */}
      <div className="text-gray-800">
        <span className="text-lg font-semibold">Hola, {profile.nombre}!</span>
        <div className="text-sm text-gray-600">
        Echemos un vistazo a tu actividad hoy.</div>
      </div>
      
      {/* Barra de búsqueda */}
      <BuscadorJob />
      
      {/* Nombre y foto del logueado */}
      <div className="flex items-center space-x-4">
        <img
          src={profile.avatar_url || 'https://static-00.iconduck.com/assets.00/user-avatar-happy-icon-2048x2048-ssmbv1ou.png'} // Usa una imagen por defecto si no hay avatar
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-gray-800 text-base font-medium">{profile.nombre}</span>
      </div>
    </div>
  );
}

export default HeaderAdmin;