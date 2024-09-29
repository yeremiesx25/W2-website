import React from 'react';

const Step3 = ({ data, handleChange, prevStep }) => {
    return (
        <div>
            <h2 className="text-xl mb-4">Paso 3: Información Adicional</h2>
            
            <div className="mb-4">
                <label className="block mb-2">Modalidad</label>
                <select
                    name="modalidad"
                    value={data.modalidad}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                >
                    <option value="">Selecciona una modalidad</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Remoto">Remoto</option>
                    <option value="Híbrido">Híbrido</option>
                </select>
            </div>
            
            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Anterior</button>
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Enviar</button>
            </div>
        </div>
    );
};

export default Step3;