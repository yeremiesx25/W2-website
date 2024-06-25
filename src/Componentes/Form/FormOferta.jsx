import React, { useState, useEffect } from "react";
import FormAdminImg from "../../assets/formAdminImg.svg";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config'; // Ajusta la ruta según la ubicación de tu archivo

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
        celular: "",
        horario: "",
        preg_1: "",
        preg_2: "",
        preg_3: "",
        user_id: ""
    });

    const [showSecondQuestion, setShowSecondQuestion] = useState(false);
    const [showThirdQuestion, setShowThirdQuestion] = useState(false);

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
            // Guardar los valores del formulario en el almacenamiento local
            localStorage.setItem("formData", JSON.stringify(formData));
            // Mostrar la siguiente sección del formulario
            setFormStep(2);
        } else if (formStep === 2) {
            // Avanzar a la siguiente sección del formulario
            setFormStep(3);
        } else {
            // Llamar a la función para insertar datos en Supabase
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
        }
    };

    const saveFormDataToSupabase = async () => {
        const { name, company, location, salary, jobDescription, requirements, funciones, celular, horario, preg_1, preg_2, preg_3, user_id } = formData;

        // Generar la URL de WhatsApp
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
                    user_id: user_id
                });

            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log('Data inserted successfully:', data);
                // Navegar a otra página si es necesario
                navigate('/Admin');
            }
        } catch (error) {
            console.error('Error saving data to Supabase:', error);
        }
    };

    return (
        <div className="pl-20 w-[100%] h-screen flex font-dmsans items-center">
            <div className="w-[600px] h-full bg-primarycolor">
                <img src={FormAdminImg} className="w-full h-full" alt="" />
            </div>
            <div className="w-[calc(100%-600px)] h-full py-6 overflow-y-scroll">
                <h2 className="text-primarytext font-bold text-3xl text-center mt-8">
                    Completa todos los campos
                </h2>
                <p className="text-gray-700 text-center pt-8 font-medium">
                    Información básica sobre el empleo
                </p>
                <div className="flex items-center justify-center p-2 ">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <form>
                            {formStep === 1 && (
                                <>
                                    <div className="mb-5">
                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Nombre del puesto
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Puesto"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="company" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Nombre de la empresa
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            placeholder="Empresa"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="location" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Ubicación de la empresa
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            placeholder="Ubicación"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="celular" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Número de WhatsApp
                                        </label>
                                        <input
                                            type="text"
                                            name="celular"
                                            id="celular"
                                            placeholder="Número de celular"
                                            value={formData.celular}
                                            onChange={handleInputChange}
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
                                        <label htmlFor="salary" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Salario
                                        </label>
                                        <input
                                            type="text"
                                            name="salary"
                                            id="salary"
                                            placeholder="Salario"
                                            value={formData.salary}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="jobDescription" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Beneficios del trabajo
                                        </label>
                                        <textarea
                                            name="jobDescription"
                                            id="jobDescription"
                                            placeholder="Descripción del trabajo"
                                            value={formData.jobDescription}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        ></textarea>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="requirements" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Requisitos del trabajo
                                        </label>
                                        <textarea
                                            name="requirements"
                                            id="requirements"
                                            placeholder="Requisitos"
                                            value={formData.requirements}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        ></textarea>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="funciones" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Funciones del trabajador
                                        </label>
                                        <textarea
                                            name="funciones"
                                            id="funciones"
                                            placeholder="Funciones"
                                            value={formData.funciones}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        ></textarea>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="horario" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Horario del puesto
                                        </label>
                                        <input
                                            type="text"
                                            name="horario"
                                            id="horario"
                                            placeholder="Horario"
                                            value={formData.horario}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                    <div className="mb-5">
                                        <label htmlFor="preg_1" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Pregunta 1 para el postulante
                                        </label>
                                        <input
                                            type="text"
                                            name="preg_1"
                                            id="preg_1"
                                            placeholder="Pregunta 1"
                                            value={formData.preg_1}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    {showSecondQuestion && (
                                        <div className="mb-5">
                                            <label htmlFor="preg_2" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Pregunta 2 para el postulante
                                            </label>
                                            <input
                                                type="text"
                                                name="preg_2"
                                                id="preg_2"
                                                placeholder="Pregunta 2"
                                                value={formData.preg_2}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    )}
                                    {showThirdQuestion && (
                                        <div className="mb-5">
                                            <label htmlFor="preg_3" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Pregunta 3 para el postulante
                                            </label>
                                            <input
                                                type="text"
                                                name="preg_3"
                                                id="preg_3"
                                                placeholder="Pregunta 3"
                                                value={formData.preg_3}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    )}
                                    {!showSecondQuestion || !showThirdQuestion ? (
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