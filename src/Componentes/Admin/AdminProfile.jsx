import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from "../../Context/AuthContext";
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';
import { GrEdit } from "react-icons/gr";

const AdminProfile = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    avatar_url: ''
  });

  const uploadAvatar = async (file) => {
    try {
      const filePath = `Reclutadores/${user.id}/${file.name}`;
      const { data, error } = await supabase.storage
        .from('avatar_user')
        .upload(filePath, file);

      if (error) throw error;

      const avatarUrl = supabase.storage
        .from('avatar_user')
        .getPublicUrl(filePath).data.publicUrl;

      setFormData({ ...formData, avatar_url: avatarUrl });

      const { error: updateError } = await supabase
        .from('perfiles')
        .update({ avatar_url: avatarUrl })
        .eq('id', user.id); // Utiliza el user_id para identificar al usuario correcto

      if (updateError) throw updateError;

      console.log("Avatar updated successfully");
    } catch (error) {
      console.error("Error uploading avatar:", error.message);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadAvatar(file);
  };

  useEffect(() => {
    const fetchPerfil = async () => {
      if (!user) {
        console.error('No authenticated user found.');
        setLoading(false);
        return;
      }

      try {
        // Cargar los datos de perfil del usuario específico usando su user_id
        const { data: perfilData, error: perfilError } = await supabase
          .from('perfiles')
          .select('nombre, telefono, avatar_url')
          .eq('id', user.id) // Filtra por user_id
          .maybeSingle();

        if (perfilError) {
          console.error(perfilError.message);
        } else {
          setFormData(perfilData || {}); // Asegúrate de manejar casos donde no haya datos
        }
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }
      
      setLoading(false);
    };

    fetchPerfil();
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error('No authenticated user found.');
      return;
    }

    try {
      const { data: existingProfile, error: fetchError } = await supabase
        .from('perfiles')
        .select('id')
        .eq('id', user.id)
        .maybeSingle();

      if (fetchError) throw new Error('Error fetching existing profile: ' + fetchError.message);

      // Decide si debes hacer update o insert basado en la existencia del perfil
      if (existingProfile) {
        // Actualiza el perfil existente
        const { error: updateError } = await supabase
          .from('perfiles')
          .update({
            nombre: formData.nombre,
            telefono: formData.telefono,
            avatar_url: formData.avatar_url
          })
          .eq('user_id', user.id);

        if (updateError) throw new Error('Error updating profile: ' + updateError.message);
      } else {
        // Crea un nuevo perfil si no existe
        const { error: insertError } = await supabase
          .from('perfiles')
          .insert({
            user_id: user.id,
            nombre: formData.nombre,
            telefono: formData.telefono,
            avatar_url: formData.avatar_url
          });

        if (insertError) throw new Error('Error inserting profile: ' + insertError.message);
      }

      console.log("Datos actualizados correctamente");

      setEditMode(false);
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primarycolor"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
    <HeaderAdmin />
    <MenuAdmin />
      <div className="max-w-4xl mx-auto p-6 pt-32 rounded-lg">
      <div
  className="flex items-center justify-between mb-6 w-full px-10 py-6 rounded-lg flex-wrap"
  style={{
    backgroundImage: `url('https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2024/06/14/cielo-estrellado.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
          <div className="flex items-center flex-wrap">
            <div className="relative">
              <img
                src={formData.avatar_url}
                alt="profile"
                className="w-24 h-24 rounded-full border-2 border-white"
              />
              {editMode && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-80 rounded-full">
                  <label
                    htmlFor="avatar"
                    className="flex flex-col items-center cursor-pointer text-primarycolor bg-opacity-80 bg-white h-8 w-8 justify-center rounded-full"
                  >
                    <GrEdit className="text-xl" />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              )}
            </div>
            <div className='w-auto'>
              <div>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`mt-1 block w-full px-2 py-1 ml-5 rounded-md focus:outline-none md:text-xl ${
                    editMode
                      ? "border-gray-300 text-gray-800"
                      : "bg-transparent text-white"
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`mt-1 block w-full px-2 py-1 ml-5 rounded-md focus:outline-none md:text-xl ${
                    editMode
                      ? "border-gray-300 text-gray-800"
                      : "bg-transparent text-white"
                  }`}
                />
              </div>
            </div>
            {editMode && (
              <form onSubmit={handleSubmit} className="space-y-4 p-4 justify-center w-full">
                <div className="flex justify-center space-x-4 w-full">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="ml-auto px-4 py-2 bg-white text-primarycolor rounded-md hover:bg-blue-100 transition-colors duration-100 flex items-center gap-2"
            >
              Editar <GrEdit />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;