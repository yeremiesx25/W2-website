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
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Descripción</label>
                <textarea
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <button type="button" onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Siguiente</button>
        </div>
    );
};

export default Step1;