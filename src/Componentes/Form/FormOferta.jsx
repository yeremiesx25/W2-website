import React, { useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from '../../Context/AuthContext';
import ChatAiOferta from './ChatAiOferta';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const FormOferta = () => {
    const { user } = UserAuth(); // Obtener el usuario del contexto
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        puesto: '',
        descripcion: '',
        requisitos: '',
        ubicacion: '',
        sueldo: '',
        funciones: '',
        horario: '',
        empresa: '',
        wtsp_url: '',
        beneficios: '',
        modalidad: '',
        preg_1: '',
        preg_2: '',
        preg_3: '',
        preg_4: '',
        preg_5: '',
        preg_6: '',
        id_reclutador: user?.id || null,
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuestionsChange = (questions) => {
        setFormData({ ...formData, 
            preg_1: questions[0] || '',
            preg_2: questions[1] || '',
            preg_3: questions[2] || '',
            preg_4: questions[3] || '',
            preg_5: questions[4] || '',
            preg_6: questions[5] || '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.from("Oferta").insert([
            {
                puesto: formData.puesto,
                descripcion: formData.descripcion,
                requisitos: formData.requisitos,
                ubicacion: formData.ubicacion,
                sueldo: formData.sueldo,
                funciones: formData.funciones,
                horario: formData.horario,
                empresa: formData.empresa,
                wtsp_url: formData.wtsp_url,
                beneficios: formData.beneficios,
                modalidad: formData.modalidad,
                estado: "activa", // Valor por defecto
                id_reclutador: formData.id_reclutador, // Incluir el ID del reclutador
                preg_1: formData.preg_1,
                preg_2: formData.preg_2,
                preg_3: formData.preg_3,
                preg_4: formData.preg_4,
                preg_5: formData.preg_5,
                preg_6: formData.preg_6,
            },
        ]);

        if (error) {
            console.error('Error al insertar:', error);
        } else {
            console.log('Oferta creada:', data);
            // Opcional: Resetear el formulario o redirigir
            setFormData({
                puesto: '',
                descripcion: '',
                requisitos: '',
                ubicacion: '',
                sueldo: '',
                funciones: '',
                horario: '',
                empresa: '',
                wtsp_url: '',
                beneficios: '',
                modalidad: '',
                preg_1: '',
                preg_2: '',
                preg_3: '',
                preg_4: '',
                preg_5: '',
                preg_6: '',
                id_reclutador: user?.id || null,
            });
            // Aquí puedes redirigir a otra página o mostrar un mensaje de éxito
        }
    };

    return (
        <div className="w-full h-screen flex">
            <div className="w-1/2 h-full bg-primarygradientdark hidden lg:block">
                <ChatAiOferta />
            </div>
            <div className="w-1/2 h-full bg-white flex flex-col p-8 font-dmsans overflow-y-scroll">
                <h1 className="text-2xl font-semibold mb-4">Registrar Oferta</h1>
                <form onSubmit={handleSubmit}>
                    {step === 1 && <Step1 data={formData} handleChange={handleChange} nextStep={nextStep} />}
                    {step === 2 && <Step2 data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
                    {step === 3 && <Step3 data={formData} handleChange={handleChange} prevStep={prevStep} onQuestionsChange={handleQuestionsChange} />}
                </form>
            </div>
        </div>
    );
};

export default FormOferta;