import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import ExperienciaForm from './ExperienciaForm';
import { UserAuth } from "../../Context/AuthContext";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';
import { GrEdit } from "react-icons/gr";

const Profile1 = () => {
  const { user } = UserAuth();
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    dni: '',
    distrito: '',
    telefono: '',
    fecha_nac: '',
    cv_url: '',
    cv_file_name: '',
    cargo_1: '',
    empresa_1: '',
    avatar_url: '',  // Avatar URL
    tiempo_1: '',
    funcion_1: '',
    cargo_2: '',
    empresa_2: '',
    tiempo_2: '',
    funcion_2: '',
    estudio: '',
    institucion: '',
    año: ''
  });

  // Función para subir imagen a Supabase Storage
  const uploadAvatar = async (file) => {
    try {
      const filePath = `${user.id}/${file.name}`;
      const { data, error } = await supabase.storage
        .from('avatar_user')
        .upload(filePath, file);
  
      if (error) throw error;
  
      const avatarUrl = supabase.storage
        .from('avatar_user')
        .getPublicUrl(filePath).data.publicUrl;
  
      setFormData({ ...formData, avatar_url: avatarUrl });
  
      // Update the avatar_url in the perfiles table
      const { error: updateError } = await supabase
        .from('perfiles')
        .update({ avatar_url: avatarUrl })
        .eq('user_id', user.id);
  
      if (updateError) throw updateError;
  
      console.log("Avatar updated successfully");
    } catch (error) {
      console.error("Error uploading avatar:", error.message);
    }
  };
  
  // Función para manejar la selección de archivo
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadAvatar(file);
  };

  useEffect(() => {
    const fetchPerfil = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error(sessionError.message);
        setLoading(false);
        return;
      }

      const user = session?.user;
      if (user) {
        try {
          const { data: perfilData, error: perfilError } = await supabase
            .from('perfiles')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();

          const { data: experienciaData, error: experienciaError } = await supabase
            .from('Experiencia')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();

          if (perfilError || experienciaError) {
            console.error(perfilError?.message || experienciaError?.message);
          } else {
            setPerfil(perfilData);
            setFormData({ ...perfilData, ...experienciaData });
          }
        } catch (error) {
          console.error('Error al obtener los datos:', error.message);
        }
      } else {
        console.error('No se encontró el usuario autenticado.');
      }
      setLoading(false);
    };

    fetchPerfil();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
      console.error('Error obtaining session:', sessionError.message);
      return;
    }

    const user = session?.user;

    if (user) {
      try {
        const perfilOperation = perfil ? 'update' : 'insert';
        const perfilData = {
          nombre: formData.nombre,
          correo: formData.correo,
          dni: formData.dni,
          avatar_url: formData.avatar_url,  // Incluir avatar_url
          distrito: formData.distrito,
          telefono: formData.telefono,
          fecha_nac: formData.fecha_nac,
          user_id: user.id
        };

        const { error: perfilError } = await supabase
          .from('perfiles')
          [perfilOperation](perfilData)
          .eq('user_id', user.id);

        if (perfilError) throw new Error('Error updating profile: ' + perfilError.message);

        const { data: experienciaExistente, error: experienciaCheckError } = await supabase
          .from('Experiencia')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (experienciaCheckError && experienciaCheckError.code !== 'PGRST116') {
          throw new Error('Error checking experience: ' + experienciaCheckError.message);
        }

        const experienciaOperation = experienciaExistente ? 'update' : 'insert';
        const experienciaData = {
          user_id: user.id,
          cv_url: formData.cv_url,
          cv_file_name: formData.cv_file_name,
          cargo_1: formData.cargo_1,
          empresa_1: formData.empresa_1,
          tiempo_1: formData.tiempo_1,
          funcion_1: formData.funcion_1,
          cargo_2: formData.cargo_2,
          empresa_2: formData.empresa_2,
          tiempo_2: formData.tiempo_2,
          funcion_2: formData.funcion_2,
          estudio: formData.estudio,
          institucion: formData.institucion,
          año: formData.año
        };

        const { error: experienciaError } = await supabase
          .from('Experiencia')
          [experienciaOperation](experienciaData)
          .eq('user_id', user.id);

        if (experienciaError) throw new Error('Error saving experience: ' + experienciaError.message);

        console.log("Datos guardados correctamente:", experienciaData);

        // Mostrar el mensaje de "Guardado correctamente"
        const savedMessage = document.createElement("div");
        savedMessage.textContent = "Guardado correctamente";
        savedMessage.style.backgroundColor = "rgba(0, 128, 0, 0.8)";
        savedMessage.style.color = "white";
        savedMessage.style.position = "fixed";
        savedMessage.style.top = "20px";
        savedMessage.style.left = "50%";
        savedMessage.style.transform = "translateX(-50%)";
        savedMessage.style.padding = "10px 20px";
        savedMessage.style.borderRadius = "5px";
        savedMessage.style.zIndex = "9999";
        document.body.appendChild(savedMessage);

        setTimeout(() => {
          document.body.removeChild(savedMessage);
        }, 2000);

        // Cambiar el modo de edición a falso después de guardar
        setEditMode(false);

      } catch (error) {
        console.error("Error guardando los datos:", error.message);
      }
    } else {
      console.error('No se encontró el usuario autenticado.');
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );


  return (
    <div className="w-full h-screen font-dmsans bg-gray-50">
      <HeaderPowerAuth />
      <div className="max-w-4xl mx-auto p-6  pt-32 rounded-lg">
        <div className="flex items-center justify-between  mb-6 w-full bg-primarycolor px-10 py-6 rounded-lg flex-wrap">
          <div className="flex items-center flex-wrap">
            <div className="w-40">
              {/* Imagen de perfil */}
              <img
                src={formData.avatar_url}
                alt="profile"
                className="w-24 h-24 rounded-full border-2 border-white"
              />

              {/* Campo para subir avatar */}
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
                  className={`mt-1 block w-full px-2 py-1  rounded-md focus:outline-none md:text-xl ${
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
                  className={`text-gray-300 text-sm px-2 font-extralight ${
                    editMode
                      ? "border-gray-300 text-gray-800"
                      : "bg-transparent text-white"
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`text-gray-300 text-sm px-2 font-extralight ${
                    editMode
                      ? "border-gray-300 text-gray-800"
                      : "bg-transparent text-white"
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="distrito"
                  value={formData.distrito}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`text-gray-300 text-sm px-2 font-extralight ${
                    editMode
                      ? "border-gray-300 text-gray-800"
                      : "bg-transparent text-white"
                  }`}
                />
              </div>
              <p className="text-gray-300 text-sm px-2 font-extralight">
                {formData.correo}
              </p>
            </div>
            {/* Mostrar botones solo en modo de edición */}
            {editMode && (
              <form onSubmit={handleSubmit} className="space-y-4 w-1/2 p-4">
                <div className="flex justify-end space-x-4">
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
                </div>{" "}
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

        <div className="w-full flex">
          <ExperienciaForm
            formData={formData}
            handleChange={handleChange}
            editMode={editMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile1;
