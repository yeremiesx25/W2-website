import React, { useState, useEffect } from "react";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";

function Profile() {
  const { user } = UserAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [existingRecord, setExistingRecord] = useState(null); // State to hold existing record
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode

  // Fetch existing user data on component mount
  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data, error } = await supabase
          .from("Usuario")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setExistingRecord(data);
          setNombre(data.nombre || "");
          setEmail(data.email || "");
          setTelefono(data.telefono || "");
          // You might want to set cvFile state if cv_url exists in data
          // setCvFile(data.cv_url ? new File([data.cv_url], 'cvFile') : null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }

    fetchUserData();
  }, [user.id]);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleCvUpload = async (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      let userDataToSave = {
        user_id: user.id,
        nombre: nombre,
        email: email,
        telefono: telefono,
      };

      // Add cv_url to userDataToSave if cvFile exists
      if (cvFile) {
        userDataToSave.cv_url = URL.createObjectURL(cvFile);
      } else if (existingRecord && existingRecord.cv_url) {
        // If cvFile does not exist but there's an existing cv_url, keep it
        userDataToSave.cv_url = existingRecord.cv_url;
      }

      // Perform upsert based on whether existingRecord exists
      const { data, error } = existingRecord
        ? await supabase.from("Usuario").upsert([
            { ...existingRecord, ...userDataToSave },
          ])
        : await supabase.from("Usuario").insert([userDataToSave]);

      if (error) {
        throw error;
      }

      console.log("Data saved successfully:", data);
      alert("Datos guardados correctamente.");
      setIsEditing(false); // Disable editing after saving
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  return (
    <div className="w-full h-screen font-dmsans flex">
      <HeaderPowerAuth />
      <div className="pl-24 p-10 w-full h-full">
        <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isEditing && "bg-gray-200"}`}
            value={nombre}
            onChange={handleNombreChange}
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isEditing && "bg-gray-200"}`}
            value={email}
            onChange={handleEmailChange}
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isEditing && "bg-gray-200"}`}
            placeholder="Ingrese su teléfono"
            value={telefono}
            onChange={handleTelefonoChange}
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Subir CV
          </label>
          <input
            type="file"
            className="mt-1 block"
            accept=".pdf,.doc,.docx"
            onChange={handleCvUpload}
            disabled={!isEditing}
          />
          {cvFile && (
            <p className="mt-2 text-sm text-gray-500">{cvFile.name}</p>
          )}
        </div>

        {!isEditing ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleEdit}
          >
            Editar
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSave}
          >
            Guardar
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;