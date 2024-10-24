import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';
import { UserAuth } from "../../Context/AuthContext";

function AdminProfile() {
  const { user } = UserAuth();

  const [profile, setProfile] = useState({
    nombre: '',
    telefono: '',
    avatar_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [avatarFile, setAvatarFile] = useState(null);

  const fetchProfile = async (userId) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('perfiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setProfile({
          nombre: data.nombre,
          telefono: data.telefono,
          avatar_url: data.avatar_url,
        });
        localStorage.setItem('profile', JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      setLoading(true);
      let avatarUrl = profile.avatar_url;
  
      if (avatarFile) {
        // Subir el archivo a Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase
          .storage
          .from('avatar_user') // Nombre del bucket de storage
          .upload(`public/${user.id}/${avatarFile.name}`, avatarFile);
  
        if (uploadError) {
          console.error('Error uploading avatar:', uploadError);
          return;
        }
  
        // Obtener la URL pública de la imagen
        avatarUrl = supabase.storage
          .from('avatar_user')
          .getPublicUrl(uploadData.path).publicURL; // Cambiado a publicURL
  
        // Actualizar el estado del perfil con la nueva URL de avatar
        setProfile((prevProfile) => ({
          ...prevProfile,
          avatar_url: avatarUrl,
        }));
      }
  
      // Asegúrate de que avatarUrl tenga un valor válido antes de actualizar la base de datos
      console.log("URL del avatar a actualizar:", avatarUrl); // Verifica la URL
  
      // Actualizar el perfil con la nueva URL de avatar
      const { error } = await supabase
        .from('perfiles')
        .update({
          nombre: profile.nombre,
          telefono: profile.telefono,
          avatar_url: avatarUrl,
        })
        .eq('id', user.id);
  
      if (error) {
        console.error("Error updating profile:", error);
        return;
      }
  
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchProfile(user.id);
    }
  }, [user?.id]);

  return (
    <div className='w-full h-screen'>
      <HeaderAdmin />
      <MenuAdmin />
      <div className='w-full h-screen pl-64 pt-20 flex justify-center items-center bg-gray-50'>
        <div className="flex w-full max-w-[900px] h-[600px] rounded-xl border-2 border-gray-300 bg-white shadow-lg flex-col justify-between">
          <div
            className="flex flex-col items-center rounded-t-xl w-full h-[50%] bg-cover p-10"
            style={{ backgroundImage: 'url("https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2024/06/14/cielo-estrellado.jpeg")' }}
          >
            <img
              src={profile.avatar_url || "/path/to/profile-image.jpg"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white"
            />
            <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Select Image
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex flex-col justify-center w-full space-y-6 p-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="nombre"
                value={profile.nombre}
                onChange={handleInputChange}
                className="w-full mt-2 border border-gray-300 rounded-md p-3 text-lg"
                disabled={loading} // Deshabilitar mientras se cargan los datos
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile number</label>
              <input
                type="text"
                name="telefono"
                value={profile.telefono}
                onChange={handleInputChange}
                className="w-full mt-2 border border-gray-300 rounded-md p-3 text-lg"
                disabled={loading} // Deshabilitar mientras se cargan los datos
              />
            </div>
            <button
              className="w-full py-3 bg-primarycolor text-white rounded-md hover:bg-blue-700 text-lg"
              onClick={updateProfile}
              disabled={loading} // Deshabilitar mientras se actualiza el perfil
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
