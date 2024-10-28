import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from "../../Context/AuthContext";
import { Box, Avatar, IconButton, TextField, Button, LinearProgress } from '@mui/material';
import { FiEdit3 } from "react-icons/fi";
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';

const AdminProfile = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true); // Estado de carga global del perfil
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
        .eq('id', user.id);

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
        const { data: perfilData, error: perfilError } = await supabase
          .from('perfiles')
          .select('nombre, telefono, avatar_url')
          .eq('id', user.id)
          .maybeSingle();

        if (perfilError) {
          console.error(perfilError.message);
        } else {
          setFormData(perfilData || {});
        }
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }

      setLoading(false); // Detener el loading después de obtener los datos
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

      if (existingProfile) {
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

  return (
    <Box minHeight="100vh" bgcolor="gray.100">
      <HeaderAdmin />
      <MenuAdmin />

      {/* Loading Spinner envuelve el contenido principal */}
      <Box display="flex" justifyContent="center" alignItems="center" pt={20} pl={28}>
        {loading ? (
          <div className="flex pt-40  w-full h-full justify-center">
          <div className="w-3/4 md:w-1/2">
            <LinearProgress 
              sx={{
                width: '80%',
                backgroundColor: '#e2e8f0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#2563eb',
                }
              }}
            />
          </div>
        </div>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Avatar */}
            <Box position="relative" display="flex" justifyContent="center" alignItems="center">
              <Avatar
                src={formData.avatar_url}
                alt="profile"
                sx={{ width: 120, height: 120, border: "2px solid white" }}
              />
              {editMode && (
                <IconButton
                  color="primary"
                  component="label"
                  sx={{
                    position: 'absolute',
                    bottom: -10,
                    right: -10,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: 3,
                  }}
                >
                  <FiEdit3 />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleAvatarChange}
                  />
                </IconButton>
              )}
            </Box>

            {/* Campos de perfil */}
            <Box mt={3} width="100%" maxWidth={500}>
              <TextField
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                InputProps={{
                  readOnly: !editMode,
                }}
                variant={editMode ? "outlined" : "standard"}
                fullWidth
                label="Nombre"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
              />
              <TextField
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                InputProps={{
                  readOnly: !editMode,
                }}
                variant={editMode ? "outlined" : "standard"}
                fullWidth
                label="Teléfono"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
              />
            </Box>

            {/* Botones */}
            <Box mt={3} display="flex" gap={2}>
              {!editMode ? (
                <Button variant="contained" onClick={() => setEditMode(true)}>
                  Editar Perfil
                </Button>
              ) : (
                <>
                  <Button variant="contained" color="success" onClick={handleSubmit}>
                    Guardar
                  </Button>
                  <Button variant="contained" color="error" onClick={handleCancel}>
                    Cancelar
                  </Button>
                </>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AdminProfile;
