import React, { useState } from "react";
import FormAdminImg from "../../assets/formAdminImg.svg";
import { useNavigate } from 'react-router-dom';

function FormOferta() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        location: "",
        salary: "",
        jobDescription: "",
        requirements: ""
    });

    const [showInitialFields, setShowInitialFields] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNextButtonClick = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        // Guardar los valores del formulario en el almacenamiento local
        localStorage.setItem("formData", JSON.stringify(formData));
        // Redirigir a la siguiente página
        setShowInitialFields(false);
    };

    const handleBackButtonClick = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        // Mostrar los campos iniciales
        setShowInitialFields(true);
    };

    return (
        <div className="pl-20 w-[100%] h-screen flex font-dmsans items-center">
            <div className="w-[600px] h-full bg-primarycolor">
                <img src={FormAdminImg} className="w-full h-full" alt="" />
            </div>
            <div className="w-[calc(100%-600px)] h-full py-6">
                <h2 className="text-primarytext font-bold text-3xl text-center mt-8">
                    Completa todos los campos
                </h2>
                <p className="text-gray-700 text-center pt-8 font-medium">
                    Información básica sobre el empleo
                </p>
                <div className="flex items-center justify-center p-2">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <form>
                            {showInitialFields ? (
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
                                    <button
                                            onClick={handleNextButtonClick}
                                            className="hover:shadow-form w-full rounded-md bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                        >
                                            Siguiente
                                        </button>
                                </>
                            ) : (
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
                                        <label htmlFor="requirements" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Funciones del trabajador
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
