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
  const [gradoAcademico, setGradoAcademico] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [ultimoAnioEstudio, setUltimoAnioEstudio] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [experiences, setExperiences] = useState(["", "", "", "", ""]);
  const [step, setStep] = useState(1);

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
          setGradoAcademico(data.estudio || "");
          setInstitucion(data.institucion || "");
          setUltimoAnioEstudio(data.año || "");
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
  const handleGradoAcademicoChange = (e) => setGradoAcademico(e.target.value);
  const handleInstitucionChange = (e) => setInstitucion(e.target.value);
  const handleUltimoAnioEstudioChange = (e) => setUltimoAnioEstudio(e.target.value);

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    let errors = {};

    if (!nombre) errors.nombre = "Campo Obligatorio";
    if (!email) errors.email = "Campo Obligatorio";
    if (!telefono) errors.telefono = "Campo Obligatorio";
    if (!dni) errors.dni = "Campo Obligatorio";
    if (!fechaNac) errors.fechaNac = "Campo Obligatorio";
    if (!distrito) errors.distrito = "Campo Obligatorio";
    if (!gradoAcademico) errors.gradoAcademico = "Campo Obligatorio";
    if (!institucion) errors.institucion = "Campo Obligatorio";
    if (!ultimoAnioEstudio) errors.ultimoAnioEstudio = "Campo Obligatorio";

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
        estudio: gradoAcademico,
        institucion,
        año: ultimoAnioEstudio,
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

    if (user.user_metadata.avatar_url) {
      const response = await fetch(user.user_metadata.avatar_url);
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result;

        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(0, 0, 0);
        doc.circle(105, 40, 20, "FD");
        doc.addImage(base64data, "PNG", 85, 20, 40, 40, undefined, 'FAST');

        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(85, 85, 85);
        doc.text(nombre, 105, 80, { align: "center" });

        const agendaImg = new Image();
        agendaImg.src = Agenda;
        doc.addImage(agendaImg, "PNG", 10, 95, 10, 10);

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(85, 85, 85);
        doc.text("CONTACTO:", 25, 100);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(64, 64, 64);
        doc.text("Teléfono:", 25, 110);
        doc.text(`${telefono}`, 25, 117);
        doc.text("Email:", 25, 125);
        doc.text(`${email}`, 25, 132);
        doc.text("DNI:", 25, 140);
        doc.text(`${dni}`, 25, 147);
        doc.text("Fecha de Nacimiento:", 25, 155);
        doc.text(`${fechaNac}`, 25, 162);
        doc.text("Distrito:", 25, 170);
        doc.text(`${distrito}`, 25, 177);

        const maletinImg = new Image();
        maletinImg.src = Maletin;
        doc.addImage(maletinImg, "PNG", 10, 185, 10, 10);

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(85, 85, 85);
        doc.text("EXPERIENCIA LABORAL:", 25, 190);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(64, 64, 64);
        let yOffset = 200;
        experiences.forEach((exp, index) => {
          doc.text(`${index + 1}. ${exp}`, 25, yOffset);
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
                    className="bg-primarycolor text-white text-lg px-4 py-2 rounded-full"
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

          {step === 1 && (
            <div className="flex w-full">
              <div className="px-4 w-1/2 border-r">
                <div className="w-full px-8 flex flex-col gap-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Datos Personales
                  </h3>
                  <div className="mb-2">
                    <label className="block text-sm font-regular text-gray-700">
                      DNI
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      placeholder="Ingrese su DNI"
                      value={dni}
                      onChange={handleDniChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-regular text-gray-700">
                      Celular
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      placeholder="Ingrese su teléfono"
                      value={telefono}
                      onChange={handleTelefonoChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-regular text-gray-700">
                      Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
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
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      placeholder="Ingrese su distrito"
                      value={distrito}
                      onChange={handleDistritoChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 w-1/2">
                <div className="w-full px-8 flex flex-col gap-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Grado Académico
                  </h3>

                  <div className="mb-2">
                    <label className="block text-sm font-regular text-gray-700">
                      Último Grado Académico
                    </label>
                    <select
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      value={gradoAcademico}
                      onChange={handleGradoAcademicoChange}
                      disabled={!isEditing}
                    >
                      <option value="">Seleccione</option>
                      <option value="Secundaria Incompleta">
                        Secundaria Incompleta
                      </option>
                      <option value="Secundaria Completa">
                        Secundaria Completa
                      </option>
                      <option value="Técnico Incompleto">
                        Técnico Incompleto
                      </option>
                      <option value="Técnico Completo">
                        Técnico Completo
                      </option>
                      <option value="Universitario Incompleto">
                        Universitario Incompleto
                      </option>
                      <option value="Universitario Completo">
                        Universitario Completo
                      </option>
                      <option value="Postgrado">
                        Postgrado
                      </option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-regular text-gray-700">
                      Institución Educativa
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      placeholder="Ingrese el nombre de la institución"
                      value={institucion}
                      onChange={handleInstitucionChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-regular text-gray-700">
                      Último Año de Estudio
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                        !isEditing
                          ? "bg-gray-50"
                          : "border-2 border-indigo-500"
                      } py-2 px-3`}
                      placeholder="Ingrese el año"
                      value={ultimoAnioEstudio}
                      onChange={handleUltimoAnioEstudioChange}
                      disabled={!isEditing}
                    />
                    </div>
                  <div className="mb-2">
                    <label className="block text-sm font-regular text-gray-700">
                      Cv (Formato pdf)
                    </label>
                    {isEditing ? (
                      <input
                        type="file"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-500 ${
                          !isEditing
                            ? "bg-gray-50"
                            : "border-2 border-indigo-500"
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
            </div>
          )}

          {step === 2 && (
            <div className="flex w-full">
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
                      ></label>
                      <input
                        type="text"
                        id={`exp_${index}`}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
                          !isEditing
                            ? "bg-gray-50"
                            : "border-2 border-indigo-500"
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
          )}

          <div className="flex justify-center mt-6">
            {!isEditing ? (
              <div className="flex space-x-2">
                {step === 1 ? (
                  <button
                    className="bg-primarycolor text-white text-lg px-6 py-2 rounded-full mb-4 "
                    onClick={() => setStep(2)}
                  >
                    Siguiente
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-gray-500 text-white text-lg px-6 py-2 rounded-full mb-4 "
                      onClick={() => setStep(1)}
                    >
                      Atrás
                    </button>
                  
                  </>
                )}
                 </div>
            ) : (
              <div className="flex justify-center space-x-2">
                <button
                  className="bg-gray-500 text-white text-lg px-6 py-2 rounded-full mb-4"
                  onClick={() => setStep(step === 1 ? 2 : 1)}
                >
                  {step === 1 ? "Siguiente" : "Atrás"}
                </button>
                <button
                  className="bg-primarycolor text-white text-lg px-6 py-2 rounded-full mb-4"
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