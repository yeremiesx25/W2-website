import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import HeaderPowerAuth from "../PowerAuth/HeaderPowerAuth";
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import Portada from "./Portada";
import { RiEditLine } from "react-icons/ri";
import Agenda from "../../assets/agenda.png";
import Maletin from "../../assets/maletin.png";

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
  const [errorMessages, setErrorMessages] = useState({});
  const [experiences, setExperiences] = useState(["", "", "", "", ""]);

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
          setExperiences([
            data.exp_1 || "",
            data.exp_2 || "",
            data.exp_3 || "",
            data.exp_4 || "",
            data.exp_5 || "",
          ]);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error.message);
      }
    }

    fetchUserData();
  }, [user.id]);

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTelefonoChange = (e) => setTelefono(e.target.value);
  const handleDniChange = (e) => setDni(e.target.value);
  const handleFechaNacChange = (e) => setFechaNac(e.target.value);
  const handleDistritoChange = (e) => setDistrito(e.target.value);
  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
    setCvFileName(file.name);
  };
  const handleExperienceChange = (index, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = value;
    setExperiences(updatedExperiences);
  };

  const handleEdit = () => setIsEditing(true);

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

    setIsEditing(false);

    try {
      let userDataToSave = {
        user_id: user.id,
        nombre,
        email,
        telefono,
        dni_user: dni,
        fecha_nac: fechaNac,
        distrito,
        cv_file_name: cvFileName,
        exp_1: experiences[0] || null,
        exp_2: experiences[1] || null,
        exp_3: experiences[2] || null,
        exp_4: experiences[3] || null,
        exp_5: experiences[4] || null,
        profile_complete: true,
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

      // Display success message
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
    } catch (error) {
      console.error("Error guardando los datos:", error.message);
    }
  };

  const generatePdf = async () => {
    const doc = new jsPDF();
  
    // Add user photo
    if (user.user_metadata.avatar_url) {
      const response = await fetch(user.user_metadata.avatar_url);
      const blob = await response.blob();
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64data = reader.result;
  
        // Draw circular image
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(0, 0, 0);
        doc.circle(105, 40, 25, "FD");
        doc.addImage(base64data, "PNG", 80, 15, 50, 50, undefined, 'FAST');
  
        // Add user name
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text(nombre, 105, 80, { align: "center" });
  
        // Add contact icon
        const agendaImg = new Image();
        agendaImg.src = Agenda;
        doc.addImage(agendaImg, "PNG", 10, 95, 10, 10);
  
        // Add contact details
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("CONTACTO:", 25, 100);
  
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Teléfono: ${telefono}`, 10, 110);
        doc.text(`Email: ${email}`, 10, 120);
        doc.text(`DNI: ${dni}`, 10, 130);
        doc.text(`Fecha de Nacimiento: ${fechaNac}`, 10, 140);
        doc.text(`Distrito: ${distrito}`, 10, 150);
  
        // Add experience icon
        const maletinImg = new Image();
        maletinImg.src = Maletin;
        doc.addImage(maletinImg, "PNG", 10, 165, 10, 10);
  
        // Add experiences
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("EXPERIENCIA LABORAL:", 25, 170);
  
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        let yOffset = 180;
        experiences.forEach((exp, index) => {
          doc.text(`${index + 1}. ${exp}`, 10, yOffset);
          yOffset += 10;
        });
  
        doc.save("cv.pdf");
      };
  
      reader.readAsDataURL(blob);
    }
  };
  
  return (
    <div className="w-full font-dmsans flex">
      <HeaderPowerAuth />
      <div className="md:pl-20 md:p-4 w-full flex justify-center">
        <div className="md:w-4/5 w-full md:rounded-xl bg-white shadow overflow-hidden pt-12 md:pt-0">
          <Portada />
          <div className="flex w-full justify-start px-4 md:px-12 py-6 items-center">
            <img
              id="user-avatar"
              className="w-24 h-24 rounded-full border-2 border-white"
              src={user.user_metadata.avatar_url}
              alt="Avatar"
            />
            <div className="flex flex-col">
              <div className="">
                <input
                  type="text"
                  className={`md:w-96 rounded-md text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                    !isEditing ? "bg-white" : "border-2 border-indigo-500 py-2"
                  } px-3`}
                  value={nombre}
                  onChange={handleNombreChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="">
                <input
                  type="email"
                  className={`md:w-96 rounded-md text-gray-500 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                    !isEditing ? "bg-white" : "border-2 border-indigo-500 py-2"
                  } px-3`}
                  value={email}
                  onChange={handleEmailChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-12 space-x-2">
              {!isEditing ? (
                <>
                  <button
                    className="bg-primarycolor text-white text-lg px-4 py-2 rounded-full flex items-center space-x-2"
                    onClick={handleEdit}
                  >
                    <RiEditLine className="text-xl" />
                    <span>Editar</span>
                  </button>
                  <button
                    className="bg-blue-500 text-white text-lg px-4 py-2 rounded-full"
                    onClick={generatePdf}
                  >
                    Genera tu CV
                  </button>
                </>
              ) : (
                <div className="flex w-full"></div>
              )}
            </div>
          </div>

          <div className="flex w-full">
            {/* Left side inputs */}
            <div className="px-4 w-1/2 border-r">
              <div className="w-full px-8 flex flex-col gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-regular text-gray-700">
                    DNI
                  </label>
                  <input
                    type="text"
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                      !isEditing ? "bg-gray-50" : "border-2 border-indigo-500"
                    } py-2 px-3`}
                    placeholder="Ingrese su DNI"
                    value={dni}
                    onChange={handleDniChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-regular text-gray-700">
                    Celular
                  </label>
                  <input
                    type="text"
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                      !isEditing ? "bg-gray-50" : "border-2 border-indigo-500"
                    } py-2 px-3`}
                    placeholder="Ingrese su teléfono"
                    value={telefono}
                    onChange={handleTelefonoChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-regular text-gray-700">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                      !isEditing ? "bg-gray-50" : "border-2 border-indigo-500"
                    } py-2 px-3`}
                    value={fechaNac}
                    onChange={handleFechaNacChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-regular text-gray-700">
                    Distrito de residencia
                  </label>
                  <input
                    type="text"
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                      !isEditing ? "bg-gray-50" : "border-2 border-indigo-500"
                    } py-2 px-3`}
                    placeholder="Ingrese su distrito"
                    value={distrito}
                    onChange={handleDistritoChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-regular text-gray-700">
                    Cv (Formato pdf)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-500 ${
                        !isEditing ? "bg-gray-50" : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      onChange={handleCvUpload}
                    />
                  ) : (
                    <div className="mt-1 block w-full py-2 px-3 bg-gray-50 rounded-md">
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
            </div>

            {/* Experiencia Laboral */}
            <div className="px-4 w-1/2">
              <div className="w-full px-8 flex flex-col gap-4">
                <h3 className="text-lg font-medium text-gray-700">
                  Experiencia Laboral
                </h3>
                {experiences.map((exp, index) => (
                  <div className="mb-4" key={index}>
                    <label
                      className="block text-sm font-regular text-gray-700"
                      htmlFor={`exp_${index}`}
                    >
                      {`Experiencia ${index + 1}`}
                    </label>
                    <input
                      type="text"
                      id={`exp_${index}`}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing ? "bg-gray-50" : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      placeholder={`Ingrese experiencia ${index + 1}`}
                      value={exp}
                      onChange={(e) =>
                        handleExperienceChange(index, e.target.value)
                      }
                      disabled={!isEditing}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            {!isEditing ? (
              <div></div>
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