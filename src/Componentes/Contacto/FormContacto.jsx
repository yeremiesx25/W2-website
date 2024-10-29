import React, { useState } from "react";
import Progreso from "./Progreso";
import { TbUserSearch } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { GrValidate } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { supabase } from '../../supabase/supabase.config';
import SuccessModal from './SuccessModal';
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
  const [errors, setErrors] = useState({}); // Estado para errores

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Por favor ingresa tu nombre";
    if (currentStep === 2 && !formData.company) newErrors.company = "Este campo es obligatorio";
    if (currentStep === 3 && selectedOptions.length === 0) newErrors.challenges = "Debes seleccionar al menos una opción";
    if (currentStep === 4) {
      if (!formData.whatsapp) newErrors.whatsapp = "Este campo es obligatorio";
      if (!formData.email) newErrors.email = "Este campo es obligatorio";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validate()) {
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
    { id: "head-hunting", label: "Head Hunting", icon: <GrValidate /> },
    { id: "capacitación", label: "Capacitación y Desarrollo", icon: <GrWorkshop /> },
    { id: "evaluación-desempeño", label: "Evaluación de Desempeño", icon: <SiTestcafe /> },
    { id: "clima", label: "Evaluación de Clima", icon: <GiTeamIdea /> },
    { id: "branding", label: "Employer Branding", icon: <FaBuildingCircleCheck /> }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Limpiar el error al cambiar el valor
  };

  const handleSubmit = async () => {
    if (validate()) {
      await handleConfirm(); // Guardar datos en Supabase

      const templateParams = {
        from_name: formData.name,
        to_name: "Tu Nombre o Empresa",
        empresa: formData.company,
        desafios: formData.challenges.join(', '),
        whatsapp: formData.whatsapp,
        email: formData.email,
      };

      emailjs
        .send(
          'service_lfr6o8h',
          'template_679w4vh',
          templateParams,
          'HKs52tfMp79D0GiOY'
        )
        .then(
          (response) => {
            console.log('Correo enviado exitosamente!', response.status, response.text);
            setIsSuccessModalOpen(true);
          },
          (error) => {
            console.error('Error al enviar el correo:', error);
          }
        );
    }
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
    setFormData({
      name: "",
      company: "",
      challenges: [],
      whatsapp: "",
      email: ""
    });
    setErrors({});
    setCurrentStep(1);
  };

  return (
    <div className="w-full max-w-lg mx-auto h-full flex flex-col justify-center overflow-auto py-4">
      <Progreso steps={steps} currentStep={currentStep} />
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
              className={`mt-1 p-3 w-full border rounded-xl focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-400'} text-gray-700`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
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
              className={`mt-1 p-3 w-full border rounded-xl focus:outline-none ${errors.company ? 'border-red-500' : 'border-gray-400'} text-gray-700`}
            />
            {errors.company && <p className="text-red-500">{errors.company}</p>}
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
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex justify-center items-center"><span className="text-primarycolor">{icon}</span></span>
                  <span className="ml-2 text-sm">{label}</span>
                </label>
              </div>
            ))}
          </div>
          {errors.challenges && <p className="text-red-500 text-center">{errors.challenges}</p>}
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
              className={`mt-1 p-3 w-full border rounded-xl focus:outline-none ${errors.whatsapp ? 'border-red-500' : 'border-gray-400'} text-gray-700`}
            />
            {errors.whatsapp && <p className="text-red-500">{errors.whatsapp}</p>}

            <label className="block font-medium text-gray-700">
              Déjanos tu correo electrónico
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              className={`mt-1 p-3 w-full border rounded-xl focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-400'} text-gray-700`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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