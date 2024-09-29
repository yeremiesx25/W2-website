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
                    className="w-full border p-2 rounded"
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
                    className="w-full border p-2 rounded"
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