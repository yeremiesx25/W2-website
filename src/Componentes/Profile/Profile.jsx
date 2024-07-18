import React, { useState, useEffect } from "react";
import HeaderPowerAuth from "../PowerAuth/HeaderPowerAuth";
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import Portada from "./Portada";

function Profile() {
  const { user } = UserAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [cvFileName, setCvFileName] = useState("");
  const [existingRecord, setExistingRecord] = useState(null);
  const [dni, setDni] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [distrito, setDistrito] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data, error } = await supabase
          .from("usuario")
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
          setDni(data.dni_user || "");
          setFechaNac(data.fecha_nac || "");
          setDistrito(data.distrito || "");
          setCvFileName(data.cv_file_name || "");
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error.message);
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

  const handleDniChange = (e) => {
    setDni(e.target.value);
  };

  const handleFechaNacChange = (e) => {
    setFechaNac(e.target.value);
  };

  const handleDistritoChange = (e) => {
    setDistrito(e.target.value);
  };

  const handleCvUpload = async (e) => {
    const file = e.target.files[0];
    setCvFile(file);
    setCvFileName(file.name);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    let errors = {};

    if (!nombre) errors.nombre = "Campo Obligatorio";
    if (!email) errors.email = "Campo Obligatorio";
    if (!telefono) errors.telefono = "Campo Obligatorio";
    if (!dni) errors.dni = "Campo Obligatorio";
    if (!fechaNac) errors.fechaNac = "Campo Obligatorio";
    if (!distrito) errors.distrito = "Campo Obligatorio";

    setErrorMessages(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      let userDataToSave = {
        user_id: user.id,
        nombre: nombre,
        email: email,
        telefono: telefono,
        dni_user: dni,
        fecha_nac: fechaNac,
        distrito: distrito,
        cv_file_name: cvFileName,
      };

      if (cvFile) {
        const { data: fileData, error: fileError } = await supabase.storage
          .from("cv_user")
          .upload(`cv_${user.id}/${cvFile.name}`, cvFile);

        if (fileError) {
          throw fileError;
        }

        const { data: files, error: listError } = await supabase.storage
          .from("cv_user")
          .list(`cv_${user.id}`, {
            limit: 1,
            sortBy: { column: "created_at", order: "desc" },
          });

        if (listError || !files || files.length === 0) {
          throw new Error("Failed to retrieve uploaded file information");
        }

        const latestFile = files[0];
        const cvUrl = `https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/cv_user/cv_${user.id}/${latestFile.name}`;

        userDataToSave.cv_url = cvUrl;
        userDataToSave.cv_file_name = cvFile.name;
      } else if (existingRecord && existingRecord.cv_url) {
        userDataToSave.cv_url = existingRecord.cv_url;
      }

      const { data: savedData, error: saveError } = existingRecord
        ? await supabase
            .from("usuario")
            .upsert([{ ...existingRecord, ...userDataToSave }])
        : await supabase.from("usuario").insert([userDataToSave]);

      if (saveError) {
        throw saveError;
      }

      console.log("Datos guardados correctamente:", savedData);
      setIsEditing(false);

      // Mostrar mensaje de guardado correctamente en la parte superior
      const savedMessage = document.createElement("div");
      savedMessage.textContent = "Guardado correctamente";
      savedMessage.style.backgroundColor = "rgba(0, 128, 0, 0.8)"; // Verde oscuro
      savedMessage.style.color = "white";
      savedMessage.style.position = "fixed";
      savedMessage.style.top = "20px"; // Ajustar la posición superior deseada
      savedMessage.style.left = "50%";
      savedMessage.style.transform = "translateX(-50%)";
      savedMessage.style.padding = "10px 20px";
      savedMessage.style.borderRadius = "5px";
      savedMessage.style.zIndex = "9999";
      document.body.appendChild(savedMessage);

      // Remover el mensaje después de 2 segundos
      setTimeout(() => {
        document.body.removeChild(savedMessage);
      }, 2000);
    } catch (error) {
      console.error("Error guardando los datos:", error.message);
    }
  };

  return (
    <div className="w-full h-screen font-dmsans flex">
      <HeaderPowerAuth />
      <div className="md:pl-20 md:p-10 pt-12 md:pt-auto w-full h-full flex justify-center bg-[#fcfcfd]">
        <div className="md:w-2/5 md:rounded-xl overflow-hidden overflow-y-auto bg-white shadow">
          <Portada />
          <img
            className="relative top-3/2 mx-auto transform -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white"
            src={user.user_metadata.avatar_url}
            alt="Avatar"
          />

          <div className="px-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nombres y Apellidos
              </label>
              <input
                type="text"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                } py-2 px-3`}
                value={nombre}
                onChange={handleNombreChange}
                disabled={!isEditing}
              />
              {errorMessages.nombre && (
                <div className="text-red-500 text-sm">{errorMessages.nombre}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                DNI
              </label>
              <input
                type="text"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                } py-2 px-3`}
                placeholder="Ingrese su DNI"
                value={dni}
                onChange={handleDniChange}
                disabled={!isEditing}
              />
              {errorMessages.dni && (
                <div className="text-red-500 text-sm">{errorMessages.dni}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                } py-2 px-3`}
                value={email}
                onChange={handleEmailChange}
                disabled={!isEditing}
              />
              {errorMessages.email && (
                <div className="text-red-500 text-sm">{errorMessages.email}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Celular
              </label>
              <input
                type="text"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                } py-2 px-3`}
                placeholder="Ingrese su teléfono"
                value={telefono}
                onChange={handleTelefonoChange}
                disabled={!isEditing}
              />
              {errorMessages.telefono && (
                <div className="text-red-500 text-sm">{errorMessages.telefono}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                } py-2 px-3`}
                value={fechaNac}
                onChange={handleFechaNacChange}
                disabled={!isEditing}
              />
              {errorMessages.fechaNac && (
                <div className="text-red-500 text-sm">{errorMessages.fechaNac}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Distrito donde Vive
              </label>
              <input
                type="text"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                } py-2 px-3`}
                placeholder="Ingrese su distrito"
                value={distrito}
                onChange={handleDistritoChange}
                disabled={!isEditing}
              />
              {errorMessages.distrito && (
                <div className="text-red-500 text-sm">{errorMessages.distrito}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                CV (PDF)
              </label>
              {isEditing ? (
                <input
                  type="file"
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                    !isEditing ? "bg-gray-200" : "border-2 border-indigo-500"
                  } py-2 px-3`}
                  onChange={handleCvUpload}
                />
              ) : (
                <div className="mt-1 block w-full py-2 px-3 bg-gray-200 rounded-md">
                  {cvFileName ? (
                    <a
                      href={existingRecord?.cv_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {cvFileName}
                    </a>
                  ) : (
                    "No se ha subido ningún CV"
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            {!isEditing ? (
              <button
                className="w-full bg-indigo-500 text-white p-2 rounded-md"
                onClick={handleEdit}
              >
                Editar
              </button>
            ) : (
              <div className="flex w-full">
                <button
                  className="w-1/2 bg-gray-500 text-white p-2 rounded-md mr-2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
                <button
                  className="w-1/2 bg-green-500 text-white p-2 rounded-md"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;