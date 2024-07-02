import React, { useState } from "react";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";

function Profile() {
  const { user } = UserAuth();
  const [telefono, setTelefono] = useState("");
  const [cvFile, setCvFile] = useState(null);

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleCvUpload = async (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase.from("Postulacion").insert([
        {
          user_id: user.id,
          id_oferta: 1, // Reemplaza con la oferta actual
          telefono: telefono,
          cv_url: cvFile ? URL.createObjectURL(cvFile) : null,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        setTelefono("");
        setCvFile(null);
        alert("Datos guardados correctamente.");
      }
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };

  return (
    <div className="w-full h-screen font-dmsans flex">
      <HeaderPowerAuth />
      <div className="pl-24 p-10 w-full h-full">
        
      </div>
    </div>
  );
}

export default Profile;
