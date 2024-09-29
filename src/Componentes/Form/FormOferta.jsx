import React, { useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from '../../Context/AuthContext';
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
        id_reclutador: user?.id || null, // Agregar el ID del reclutador aquí
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { data, error } = await supabase
            .from('Oferta')
            .insert([
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
                    estado: 'activa', // Valor por defecto
                    id_reclutador: formData.id_reclutador, // Incluir el ID del reclutador
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
                id_reclutador: user?.id || null, // Restablecer el ID del reclutador
            });
            // Aquí puedes redirigir a otra página o mostrar un mensaje de éxito
        }
    };

    return (
        <div className="max-w-lg mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Registrar Oferta</h1>
            <form onSubmit={handleSubmit}>
                {step === 1 && <Step1 data={formData} handleChange={handleChange} nextStep={nextStep} />}
                {step === 2 && <Step2 data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Step3 data={formData} handleChange={handleChange} prevStep={prevStep} />}
            </form>
        </div>
    );
};

export default FormOferta;