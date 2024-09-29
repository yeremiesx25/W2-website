import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';

const Profile1 = () => {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    dni: '',
    distrito: '',
    telefono: '',
    fecha_nac: '',
    rol: 'candidato', // Asignar el rol predeterminado
  });

  useEffect(() => {
    const fetchPerfil = async () => {
      const { user } = supabase.auth;
      if (user) {
        const { data, error } = await supabase
          .from('perfiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) {
          setError(error.message);
        } else {
          setPerfil(data);
          setFormData(data); // Cargar datos en el formulario si existen
        }
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
    const { user } = supabase.auth;

    if (perfil) {
      // Actualizar perfil existente
      const { error } = await supabase
        .from('perfiles')
        .update(formData)
        .eq('user_id', user.id);

      if (error) setError(error.message);
    } else {
      // Crear nuevo perfil si no existe
      const { error } = await supabase
        .from('perfiles')
        .insert({ ...formData, user_id: user.id });

      if (error) setError(error.message);
    }
    // Puedes agregar lógica adicional aquí para manejar el éxito
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>DNI:</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Distrito:</label>
          <input
            type="text"
            name="distrito"
            value={formData.distrito}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="fecha_nac"
            value={formData.fecha_nac}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{perfil ? 'Actualizar' : 'Crear'} Perfil</button>
      </form>
    </div>
  );
};

export default Profile1;