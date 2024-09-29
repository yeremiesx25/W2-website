import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import ShareModal from './ShareModal'; // Import ShareModal

const Step3 = ({ data, handleChange, prevStep, onSubmit }) => {
    const [recruiterNumber, setRecruiterNumber] = useState('');
    const [questions, setQuestions] = useState(['']); // Initialize with an empty question
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility
    const [updatedData, setUpdatedData] = useState(null); // State to hold the updated data

    const handleRecruiterNumberChange = (e) => {
        setRecruiterNumber(e.target.value);
    };

    const handleQuestionChange = (index, e) => {
        const newQuestions = [...questions];
        newQuestions[index] = e.target.value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        if (questions.length < 6) { // Limit to 6 questions
            setQuestions([...questions, '']); // Add a new question
        }
    };

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions); // Remove the question
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const wtspUrl = `https://wa.me/${recruiterNumber}?text=Hola,%20estoy%20interesado%20en%20el%20puesto%20de%20${encodeURIComponent(data.puesto)}`;

        // Store questions in the data object
        const newData = {
            ...data,
            wtsp_url: wtspUrl,
            preg_1: questions[0] || '',
            preg_2: questions[1] || '',
            preg_3: questions[2] || '',
            preg_4: questions[3] || '',
            preg_5: questions[4] || '',
            preg_6: questions[5] || '',
        };

        // Verifica los datos actualizados antes de abrir el modal
        console.log("Datos actualizados:", newData);
        
        // Almacena los datos actualizados en el estado
        setUpdatedData(newData);
        
        // Abre el modal
        setModalOpen(true);

        // Llama a onSubmit con los datos actualizados
        onSubmit(newData); // Si necesitas seguir usando esta función para otros propósitos
    };

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

            <div className="mb-4">
                <label className="block mb-2">Número de Reclutador</label>
                <input
                    type="text"
                    name="recruiterNumber"
                    value={recruiterNumber}
                    onChange={handleRecruiterNumberChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">Preguntas para el Postulante</label>
                {questions.map((question, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => handleQuestionChange(index, e)}
                            className="flex-1 rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder={`Pregunta ${index + 1}`}
                            required={index === 0} // Only the first question is required
                        />
                        {index === questions.length - 1 && questions.length < 6 && ( // Show add icon only on the last question if less than 6
                            <IoMdAdd 
                                className="ml-2 text-green-500 cursor-pointer" 
                                onClick={addQuestion} 
                                size={24} 
                            />
                        )}
                        {index > 0 && ( // Show delete icon only if not the first question
                            <MdDeleteForever 
                                className="ml-2 text-red-500 cursor-pointer" 
                                onClick={() => removeQuestion(index)} 
                                size={24} 
                            />
                        )}
                    </div>
                ))}
            </div>
            
            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Anterior</button>
                <button type="submit" onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded">Enviar</button>
            </div>

            {/* Render ShareModal when isModalOpen is true */}
            {isModalOpen && updatedData && ( // Asegúrate de que updatedData tenga datos
                <ShareModal 
                    selectedJob={updatedData} // Pasa los datos actualizados a ShareModal
                    onClose={() => setModalOpen(false)} // Función para cerrar el modal
                />
            )}
        </div>
    );
};

export default Step3;
