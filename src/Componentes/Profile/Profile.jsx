import React, { useState } from "react";
import HeaderPowerAuth from "../PowerAuth/HeaderPowerAuth";
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
    // Guardar el número de teléfono y el URL del CV en la tabla Postulacion
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
        // Limpiar campos después de la inserción exitosa (opcional)
        setTelefono("");
        setCvFile(null);
        alert("Datos guardados correctamente.");
      }
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };

  return (
    <div className="w-full h-screen font-dmsans">
      <HeaderPowerAuth />
      <div className="pl-20 w-full h-full flex bg-gray-50 justify-center">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-[90%] h-[90%] bg-white shadow rounded-lg flex flex-col items-center">
            <div className="rounded-t-lg h-32 overflow-hidden w-full">
              <img
                className="object-cover object-top w-full"
                src="https://debugpointnews.com/wp-content/uploads/2022/08/Fedora-37-Wallpaper-day-option-1.png"
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src={user.user_metadata.avatar_url}
                alt="Perfil del candidato"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">{user.user_metadata.full_name}</h2>
              <p className="text-gray-500 text-sm w-96">{user.email}</p>
            </div>
            <div className="mt-4 px-6 w-[80%]">
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                Número de Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={telefono}
                onChange={handleTelefonoChange}
                autoComplete="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4 px-6 w-full">
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                Subir CV
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleCvUpload}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4 px-6 w-full">
              <button
                onClick={handleSubmit}
                className="w-full bg-primarycolor text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Guardar Datos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
