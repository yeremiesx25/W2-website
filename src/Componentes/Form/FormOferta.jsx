import React, { useState } from "react";
import FormAdminImg from "../../assets/formAdminImg.svg";

function FormOferta() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        location: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNextButtonClick = () => {
        // Guardar los valores del formulario en el almacenamiento local
        localStorage.setItem("formData", JSON.stringify(formData));
        // Redireccionar o realizar la acción siguiente
        // Aquí podrías redirigir a la siguiente página, por ejemplo:
        // history.push("/siguiente-pagina");
    };

    return (
        <div className="pl-20 w-[100%] h-screen flex font-dmsans items-center">
            <div className="w-[600px] h-full bg-primarycolor">
                <img src={FormAdminImg} className="w-full h-full" alt="" />
            </div>
            <div className="w-[calc(100%-600px)] h-full py-24">
                <h2 className="text-primarytext font-bold text-3xl text-center mt-8">
                    Completa todos los campos
                </h2>
                <p className="text-gray-700 text-center pt-8 font-medium">
                    Información básica sobre el empleo
                </p>
                <div class="flex items-center justify-center p-12">
                    <div class="mx-auto w-full max-w-[550px] bg-white">
                        <form>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Nombre del puesto
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Puesto"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label for="company" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Nombre de la empresa
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Empresa"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label for="location" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Ubicación de la empresa
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    placeholder="Ubicación"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div>
                                <button
                                    onClick={handleNextButtonClick}
                                    class="hover:shadow-form w-full rounded-md bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Siguiente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormOferta;
