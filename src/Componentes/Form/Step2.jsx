import React from 'react';

const Step2 = ({ data, handleChange, nextStep, prevStep }) => {
    return (
        <div>
            <h2 className="text-xl mb-4">Paso 2: Requisitos y Ubicación</h2>
            <div className="mb-4">
                <label className="block mb-2">Requisitos</label>
                <textarea
                    name="requisitos"
                    value={data.requisitos}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Funciones</label>
                <textarea
                    name="funciones"
                    value={data.funciones}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Beneficios</label>
                <textarea
                    name="beneficios"
                    value={data.beneficios}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Anterior</button>
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Siguiente</button>
            </div>
        </div>
    );
};

export default Step2;