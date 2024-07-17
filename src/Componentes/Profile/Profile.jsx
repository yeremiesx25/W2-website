import React, { useState, useEffect } from "react";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import mammoth from 'mammoth';
import Portada from "./Portada";

function Profile() {
  const { user } = UserAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [existingRecord, setExistingRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

      if (cvFile) {
        const { data: fileData, error: fileError } = await supabase.storage
          .from('cv_user')
          .upload(`cv_${user.id}/${cvFile.name}`, cvFile);

        if (fileError) {
          throw fileError;
        }

        // Fetch the uploaded file to get its path
        const { data: files, error: listError } = await supabase
          .storage
          .from('cv_user')
          .list(`cv_${user.id}`, { limit: 1, sortBy: { column: 'created_at', order: 'desc' } });

        if (listError || !files || files.length === 0) {
          throw new Error('Failed to retrieve uploaded file information');
        }

        const latestFile = files[0];
        const cvUrl = `https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/cv_user/cv_${user.id}/${latestFile.name}`;

        userDataToSave.cv_url = cvUrl;
      } else if (existingRecord && existingRecord.cv_url) {
        userDataToSave.cv_url = existingRecord.cv_url;
      }

      const { data: savedData, error: saveError } = existingRecord
        ? await supabase.from("usuario").upsert([
            { ...existingRecord, ...userDataToSave },
          ])
        : await supabase.from("usuario").insert([userDataToSave]);

      if (saveError) {
        throw saveError;
      }

      console.log("Datos guardados correctamente:", savedData);
      setShowSuccessMessage(true);
      setIsEditing(false);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.error("Error guardando los datos:", error.message);
    }
  };

  return (
    <div className="w-full h-screen font-dmsans flex ">
      <HeaderPowerAuth />
      <div className="md:pl-20 md:p-10 pt-12 md:pt-auto w-full h-full flex justify-center bg-[#fcfcfd]">
        <div className="md:w-2/5 md:rounded-xl overflow-hidden bg-white shadow">
        <Portada />
        <img 
        className="relative top-3/2 mx-auto  transform  -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white" 
        src={user.user_metadata.avatar_url} 
        alt="Avatar" 
      />
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">Guardado correctamente.</span>
          </div>
        )}

        <div className="px-4">
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
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
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleCvUpload}
            disabled={!isEditing}
          />
          </label>
          
          
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

        

        {/* {cvContent && cvContent.type === "pdf" && (
          <div className="mt-4">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl={cvContent.content} />
            </Worker>
          </div>
        )}

        {cvContent && cvContent.type === "doc" && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Contenido del CV:</h2>
            <pre className="whitespace-pre-wrap">{cvContent.content}</pre>
            <a
              href={cvContent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Descargar CV
            </a>
          </div>
        )} */}
        </div>
      </div>
    </div>
  );
}

export default Profile;