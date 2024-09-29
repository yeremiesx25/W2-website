import React from 'react';

const Step1 = ({ data, handleChange, nextStep }) => {
    return (
        <div>
            <h2 className="text-xl mb-4">Paso 1: Información General</h2>
            <div className="mb-4">
                <label className="block mb-2">Puesto</label>
                <input
                    type="text"
                    name="puesto"
                    value={data.puesto}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Descripción</label>
                <textarea
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Ubicación</label>
                <input
                    type="text"
                    name="ubicacion"
                    value={data.ubicacion}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Empresa</label>
                <input
                    type="text"
                    name="empresa"
                    value={data.empresa}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Sueldo</label>
                <input
                    type="text"
                    name="sueldo"
                    value={data.sueldo}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>
            
            <button type="button" onClick={nextStep} className="bg-primarycolor text-white p-2 rounded">Siguiente</button>
        </div>
    );
};

export default Step1;