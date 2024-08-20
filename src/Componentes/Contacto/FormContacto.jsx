import React, { useState, useEffect } from "react";
import Progreso from "./Progreso"; // Asegúrate de importar tu componente Progreso
import { TbUserSearch } from "react-icons/tb";
import { supabase } from '../../supabase/supabase.config'; // Ajusta el path si es necesario
import SuccessModal from './SuccessModal'
import emailjs from 'emailjs-com';

const FormContacto = () => {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    challenges: [],
    whatsapp: "",
    email: ""
  });

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  // Eliminar el efecto de carga de datos desde localStorage.
  // const storedData = JSON.parse(localStorage.getItem("formData"));
  // if (storedData) {
  //   setFormData(storedData);
  // }

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const options = [
    { id: "reclutamiento", label: "Reclutamiento y Selección", icon: <TbUserSearch /> },
    { id: "head-hunting", label: "Head Hunting", icon: <TbUserSearch /> },
    { id: "capacitación", label: "Capacitación y Desarrollo", icon: <TbUserSearch /> },
    { id: "evaluación-desempeño", label: "Evaluación de Desempeño", icon: <TbUserSearch /> },
    { id: "clima", label: "Evaluación de Clima", icon: <TbUserSearch /> },
    { id: "branding", label: "Employer Branding", icon: <TbUserSearch /> }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    handleConfirm(); // Guardar datos en Supabase
  
    // Datos del formulario para el correo
    const templateParams = {
      from_name: formData.name, // Nombre del remitente
      to_name: "Tu Nombre o Empresa", // El destinatario
      empresa: formData.company, // Empresa en la que trabaja
      desafios: formData.challenges.join(', '), // Desafíos seleccionados, como texto
      whatsapp: formData.whatsapp, // Número de WhatsApp
      email: formData.email, // Correo electrónico
    };
  
    emailjs
      .send(
        'service_lfr6o8h', // Reemplaza con tu Service ID
        'template_679w4vh', // Reemplaza con tu Template ID
        templateParams,
        'HKs52tfMp79D0GiOY' // Reemplaza con tu User ID
      )
      .then(
        (response) => {
          console.log('Correo enviado exitosamente!', response.status, response.text);
          setIsSuccessModalOpen(true); // Mostrar modal de éxito
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
        }
      );
  };
  

  const handleConfirm = async () => {
    const { name, company, whatsapp, email, challenges } = formData;
    const servicio = challenges.join(', ');

    const { data, error } = await supabase
      .from('Contacto')
      .insert([{ nombre: name, empresa: company, servicio, telefono: whatsapp, correo: email }]);

    if (error) {
      console.error("Error al guardar los datos:", error);
    } else {
      console.log("Datos guardados correctamente:", data);
      setIsSuccessModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    // Reiniciar el formulario si es necesario
    setFormData({
      name: "",
      company: "",
      challenges: [],
      whatsapp: "",
      email: ""
    });
    setCurrentStep(1);
  };
  
  return (
    <div className="w-full max-w-lg mx-auto h-full">
      <Progreso steps={steps} currentStep={currentStep} />
{/* Mostrar el modal de éxito si está abierto */}
{isSuccessModalOpen && <SuccessModal onClose={closeModal} />}

      {currentStep === 1 && (
        <div className="flex flex-col justify-around w-full h-full">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Detalles del contacto</h2>
            <p className="text-gray-500">Completa tus datos</p>
          </div>

          <div className="mt-4">
            <label className="block font-medium text-gray-700">
              ¿Cuál es tu nombre?
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              className="mt-1 p-3 w-full border border-gray-400 rounded-xl focus:outline-none text-gray-700"
            />
          </div>

          <button
            onClick={handleNextStep}
            className="mt-6 bg-primarycolor text-white px-6 py-2 rounded-full"
          >
            Siguiente
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex flex-col justify-around w-full h-full">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Hola, {formData.name}</h2>
            <p className="text-gray-500">Por favor cuéntanos...</p>
          </div>

          <div className="mt-4">
            <label className="block font-medium text-gray-700">
              ¿En qué empresa trabajas actualmente?
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Ingresa una empresa"
              className="mt-1 p-3 w-full border border-gray-400 rounded-xl focus:outline-none text-gray-700"
            />
          </div>

          <div className="flex justify-around gap-4">
            <button
              onClick={handlePrevStep}
              className="mt-6 bg-white border border-primarycolor w-full text-primarycolor px-6 py-2 rounded-full"
            >
              Anterior
            </button>
            <button
              onClick={handleNextStep}
              className="mt-6 bg-primarycolor w-full text-white px-6 py-2 rounded-full"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="flex flex-col justify-between w-full h-full py-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">{formData.name}</h2>
            <p className="text-gray-500">¿Qué desafío se te está presentando?</p>
          </div>
          <div className="flex flex-wrap gap-2 p-2">
            {options.map(({ id, label, icon }) => (
              <div key={id} className="flex items-center">
                <label
                  className={`flex items-center border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${selectedOptions.includes(label) ? 'border-primarycolor bg-primarycolor text-white' : 'border-gray-300 text-gray-700'}`}
                  onClick={() => toggleOption(label)}
                >
                  <span className="text-primarycolor">{icon}</span>
                  <span className="ml-2 text-sm">{label}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-around gap-4">
            <button
              onClick={handlePrevStep}
              className="mt-6 bg-white border border-primarycolor w-full text-primarycolor px-6 py-2 rounded-full"
            >
              Anterior
            </button>
            <button
              onClick={() => {
                setFormData({ ...formData, challenges: selectedOptions });
                handleNextStep();
              }}
              className="mt-6 bg-primarycolor w-full text-white px-6 py-2 rounded-full"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="flex flex-col justify-around w-full h-full">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">{formData.name}</h2>
            <p className="text-gray-500">Para ponernos en contacto</p>
          </div>

          <div className="flex flex-col gap-4">
            <label className="block font-medium text-gray-700">
              ¿Cuál es tu número de Whatsapp?
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Ingresa tu número"
              className="mt-1 p-3 w-full border border-gray-400 rounded-xl focus:outline-none text-gray-700"
            />

            <label className="block font-medium text-gray-700">
              Déjanos tu correo electrónico
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              className="mt-1 p-3 w-full border border-gray-400 rounded-xl focus:outline-none text-gray-700"
            />
          </div>

          <div className="flex justify-around gap-4">
            <button
              onClick={handlePrevStep}
              className="mt-6 bg-white border border-primarycolor w-full text-primarycolor px-6 py-2 rounded-full"
            >
              Anterior
            </button>
            <button onClick={handleSubmit}
              className="mt-6 bg-primarycolor w-full text-white px-6 py-2 rounded-full"
            >
              Finalizar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContacto;