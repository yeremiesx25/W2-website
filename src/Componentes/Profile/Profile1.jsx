import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import ExperienciaForm from './ExperienciaForm'; // Importar el componente
import { UserAuth } from "../../Context/AuthContext"; // Importar autenticación de usuario

const Profile1 = () => {
  const { user } = UserAuth(); // Asegúrate de que UserAuth esté bien implementado
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false); // Estado para controlar el modo de edición
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    dni: '',
    distrito: '',
    telefono: '',
    fecha_nac: '',
    // Campos para la tabla de experiencia
    cv_url: '',
    cv_file_name: '',
    cargo_1: '',
    empresa_1: '',
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

  useEffect(() => {
    const fetchPerfil = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
      if (sessionError) {
        console.error(sessionError.message); // Log error instead of showing
        setLoading(false);
        return;
      }
    
      const user = session?.user;
      if (user) {
        try {
          // Obtener datos de la tabla perfiles
          const { data: perfilData, error: perfilError } = await supabase
            .from('perfiles')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();
    
          // Obtener datos de la tabla experiencia
          const { data: experienciaData, error: experienciaError } = await supabase
            .from('Experiencia')
            .select('*')
            .eq('user_id', user.id); // Removed maybeSingle()
    
          if (perfilError || experienciaError) {
            console.error(perfilError?.message || experienciaError?.message); // Log errors
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
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
  
    if (user) {
      try {
        // Actualizar o crear perfil en la tabla perfiles
        if (perfil) {
          await supabase
            .from('perfiles')
            .update({
              nombre: formData.nombre,
              correo: formData.correo,
              dni: formData.dni,
              distrito: formData.distrito,
              telefono: formData.telefono,
              fecha_nac: formData.fecha_nac
            })
            .eq('user_id', user.id);
        } else {
          await supabase
            .from('perfiles')
            .insert({
              nombre: formData.nombre,
              correo: formData.correo,
              dni: formData.dni,
              distrito: formData.distrito,
              telefono: formData.telefono,
              fecha_nac: formData.fecha_nac,
              user_id: user.id
            });
        }
  
        // Verificar si ya existe la fila en la tabla experiencia
        const { data: experienciaExistente, error: errorExperiencia } = await supabase
          .from('Experiencia')
          .select('*')
          .eq('user_id', user.id)
          .single(); // Cambiar a .single() para obtener solo una fila
  
        if (errorExperiencia) {
          throw new Error('Error al verificar la experiencia: ' + errorExperiencia.message);
        }
  
        // Si ya existe la experiencia, la actualizamos; si no, la creamos
        if (experienciaExistente) {
          // Actualizar la experiencia existente
          await supabase
            .from('Experiencia')
            .update({
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
            })
            .eq('user_id', user.id);
        } else {
          // Insertar una nueva experiencia si no existe
          await supabase
            .from('Experiencia')
            .insert({
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
            });
        }
  
        alert('Datos guardados correctamente.');
      } catch (error) {
        console.error('Error al guardar los datos:', error.message);
      }
    } else {
      console.error('No se encontró el usuario autenticado.');
    }
  };

  const handleCancel = () => {
    setFormData(perfil || {});
    setEditMode(false); // Desactivar modo de edición si se cancela
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Perfil</h1>

      {!editMode && (
        <button onClick={() => setEditMode(true)}>Editar</button>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            readOnly={!editMode} // Solo editable en modo edición
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div>
          <label>DNI:</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div>
          <label>Distrito:</label>
          <input
            type="text"
            name="distrito"
            value={formData.distrito}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="fecha_nac"
            value={formData.fecha_nac}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>

        {/* Renderizar campos de experiencia */}
        <ExperienciaForm formData={formData} handleChange={handleChange} editMode={editMode} />

        {editMode && (
          <>
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Profile1;