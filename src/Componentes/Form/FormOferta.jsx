import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo por defecto de Quill
import FormAdminImg from "../../assets/formAdminImg.svg";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import { MdDeleteForever } from "react-icons/md";

function FormOferta() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    location: "",
    salary: "",
    jobDescription: "",
    requirements: "",
    funciones: "",
    horario: "",
    celular: "",
    preg_1: "",
    preg_2: "",
    preg_3: "",
    preg_4: "",
    preg_5: "",
    user_id: "",
    modalidad: ""
  });

  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showThirdQuestion, setShowThirdQuestion] = useState(false);
  const [showFourthQuestion, setShowFourthQuestion] = useState(false);
  const [showFifthQuestion, setShowFifthQuestion] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        user_id: user.id
      }));
    }
  }, [user]);

  const [formStep, setFormStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (formStep === 1) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setFormStep(2);
    } else if (formStep === 2) {
      setFormStep(3);
    } else {
      saveFormDataToSupabase();
    }
  };

  const handleBackButtonClick = (e) => {
    e.preventDefault();
    if (formStep === 2) {
      setFormStep(1);
    } else if (formStep === 3) {
      setFormStep(2);
    }
  };

  const handleAddQuestion = () => {
    if (!showSecondQuestion) {
      setShowSecondQuestion(true);
    } else if (!showThirdQuestion) {
      setShowThirdQuestion(true);
    } else if (!showFourthQuestion) {
      setShowFourthQuestion(true);
    } else if (!showFifthQuestion) {
      setShowFifthQuestion(true);
    }
  };

  const handleDeleteQuestion = (questionNumber) => {
    setFormData((prevData) => ({
      ...prevData,
      [`preg_${questionNumber}`]: ""
    }));
    switch (questionNumber) {
      case 2:
        setShowSecondQuestion(false);
        break;
      case 3:
        setShowThirdQuestion(false);
        break;
      case 4:
        setShowFourthQuestion(false);
        break;
      case 5:
        setShowFifthQuestion(false);
        break;
      default:
        break;
    }
  };

  const saveFormDataToSupabase = async () => {
    const { name, company, location, salary, jobDescription, requirements, funciones, horario, celular, preg_1, preg_2, preg_3, preg_4, preg_5, user_id, modalidad } = formData;

    const whatsappMessage = `Hola, estoy interesado en el puesto de ${name}`;
    const whatsappUrl = `https://wa.me/${celular}?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      const { data, error } = await supabase
        .from('Oferta')
        .insert({
          puesto: name,
          empresa: company,
          ubicacion: location,
          sueldo: salary,
          requisitos: requirements,
          beneficios: jobDescription,
          funciones: funciones,
          wtsp_url: whatsappUrl,
          horario: horario,
          preg_1: preg_1,
          preg_2: preg_2,
          preg_3: preg_3,
          preg_4: preg_4,
          preg_5: preg_5,
          user_id: user_id,
          modalidad: modalidad
        });

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        navigate('/Admin');
      }
    } catch (error) {
      console.error('Error saving data to Supabase:', error);
    }
  };

  const handleInputKeyDown = (e, nextInputName) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextInput = document.getElementsByName(nextInputName)[0];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div className="pl-20 w-[100%] h-screen flex font-dmsans items-center ">
      <div className="w-[600px] h-full bg-primarycolor bg-no-repeat">
        <img src={FormAdminImg} className="w-full h-full" alt="" />
      </div>
      <div className="w-[calc(100%-600px)] h-full py-2 overflow-y-scroll">
        <h2 className="text-gray-700 font-bold text-3xl text-center mt-8">
          Completa todos los campos
        </h2>
        <p className="text-gray-700 text-center pt-4 font-medium">
          Información básica sobre el empleo
        </p>
        <div className="flex items-center justify-center p-2 ">
          <div className="mx-auto w-full max-w-[550px] bg-white ">
            <form className="">
              {formStep === 1 && (
                <>
                  <div className="mb-5">
                    <label htmlFor="name" className="mb-3 block text-base font-medium text-gray-600">
                      Nombre del puesto
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Puesto"
                      value={formData.name}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'company')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="company" className="mb-3 block text-base font-medium text-gray-600">
                      Nombre de la empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'location')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="location" className="mb-3 block text-base font-medium text-gray-600">
                      Ubicación de la empresa
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Ubicación"
                      value={formData.location}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'modalidad')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="modalidad" className="mb-3 block text-base font-medium text-gray-600">
                      Modalidad de trabajo
                    </label>
                    <input
                      type="text"
                      name="modalidad"
                      id="modalidad"
                      placeholder="Modalidad"
                      value={formData.modalidad}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'celular')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="celular" className="mb-3 block text-base font-medium text-gray-600">
                      Número de WhatsApp
                    </label>
                    <input
                      type="text"
                      name="celular"
                      id="celular"
                      placeholder="Número de celular"
                      value={formData.celular}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'salary')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <button
                    onClick={handleNextButtonClick}
                    className="hover:shadow-form w-full rounded-md bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Siguiente
                  </button>
                </>
              )}
              {formStep === 2 && (
                <>
                  <div className="mb-5">
                    <label htmlFor="salary" className="mb-3 block text-base font-medium text-gray-600">
                      Salario
                    </label>
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      placeholder="Salario"
                      value={formData.salary}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'jobDescription')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="jobDescription" className="mb-3 block text-base font-medium text-gray-600">
                      Beneficios del trabajo
                    </label>
                    <ReactQuill
                      name="jobDescription"
                      id="jobDescription"
                      value={formData.jobDescription}
                      onChange={(value) => setFormData({ ...formData, jobDescription: value })}
                      className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="requirements" className="mb-3 block text-base font-medium text-gray-600">
                      Requisitos
                    </label>
                    <ReactQuill
                      name="requirements"
                      id="requirements"
                      value={formData.requirements}
                      onChange={(value) => setFormData({ ...formData, requirements: value })}
                      className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="funciones" className="mb-3 block text-base font-medium text-gray-600">
                      Funciones del puesto
                    </label>
                    <ReactQuill
                      name="funciones"
                      id="funciones"
                      value={formData.funciones}
                      onChange={(value) => setFormData({ ...formData, funciones: value })}
                      className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="horario" className="mb-3 block text-base font-medium text-gray-600">
                      Horario de trabajo
                    </label>
                    <ReactQuill
                      name="horario"
                      id="horario"
                      value={formData.horario}
                      onChange={(value) => setFormData({ ...formData, horario: value })}
                      className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={handleBackButtonClick}
                      className="hover:shadow-form rounded-md w-56 bg-powercolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={handleNextButtonClick}
                      className="hover:shadow-form rounded-md w-56 bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Siguiente
                    </button>
                  </div>
                </>
              )}

{formStep === 3 && (
                <>
                Preguntas para el Postulante
                  <div className="mb-5 flex items-center">
                    <label htmlFor="preg_1" className="mb-3 block text-base font-medium text-gray-600">
                    </label>
                    <input
                      type="text"
                      name="preg_1"
                      id="preg_1"
                      placeholder="Pregunta 1"
                      value={formData.preg_1}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleInputKeyDown(e, 'preg_2')}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(1)}
                      className="ml-3 text-2xl text-red-500"
                    >

                    </button>
                  </div>
                  {showSecondQuestion && (
                    <div className="mb-5 flex items-center">
                      <label htmlFor="preg_2" className="mb-3 block text-base font-medium text-gray-600">
                       
                      </label>
                      <input
                        type="text"
                        name="preg_2"
                        id="preg_2"
                        placeholder="Pregunta 2"
                        value={formData.preg_2}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_3')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(2)}
                        className="ml-3 text-2xl text-red-500"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  )}
                  {showThirdQuestion && (
                    <div className="mb-5 flex items-center">
                      <label htmlFor="preg_3" className="mb-3 block text-base font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="preg_3"
                        id="preg_3"
                        placeholder="Pregunta 3"
                        value={formData.preg_3}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_4')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(3)}
                        className="ml-3 text-2xl text-red-500"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  )}
                  {showFourthQuestion && (
                    <div className="mb-5 flex items-center">
                      <label htmlFor="preg_4" className="mb-3 block text-base font-medium text-gray-600">
                       
                      </label>
                      <input
                        type="text"
                        name="preg_4"
                        id="preg_4"
                        placeholder="Pregunta 4"
                        value={formData.preg_4}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_5')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(4)}
                        className="ml-3 text-2xl text-red-500"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  )}
                  {showFifthQuestion && (
                    <div className="mb-5 flex items-center">
                      <label htmlFor="preg_5" className="mb-3 block text-base font-medium text-gray-600">
                       
                      </label>
                      <input
                        type="text"
                        name="preg_5"
                        id="preg_5"
                        placeholder="Pregunta 5"
                        value={formData.preg_5}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_6')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(5)}
                        className="ml-3 text-2xl text-red-500"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  )}
                  {!showSecondQuestion || !showThirdQuestion || !showFourthQuestion || !showFifthQuestion ? (
                    <button
                      type="button"
                      onClick={handleAddQuestion}
                      className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 text-black text-2xl outline-none focus:shadow-md"
                    >
                      +
                    </button>
                  ) : null}
                  <div className="flex justify-between">
                    <button
                      onClick={handleBackButtonClick}
                      className="hover:shadow-form rounded-md w-56 bg-powercolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={handleNextButtonClick}
                      className="hover:shadow-form rounded-md w-56 bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Guardar
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormOferta;

