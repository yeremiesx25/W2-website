import React, { useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from '../../Context/AuthContext';
import ChatAiOferta from './ChatAiOferta';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const FormOferta = () => {
    const { user } = UserAuth();
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

    const handleSubmit = async (submittedData) => {
        const { data, error } = await supabase.from("Oferta").insert([submittedData]);

        if (error) {
            console.error('Error al insertar:', error);
        } else {
            console.log('Oferta creada:', data);
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
        }
    };

    return (
        <div className="w-full h-screen flex">
            <HeaderAdmin />
            <MenuAdmin />
            
            <div className="w-full h-full bg-white flex flex-col font-dmsans overflow-y-scroll pl-72 pt-24">
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '7%', fontFamily: 'sans-serif'}}>
                    <Stepper activeStep={step - 1} orientation="vertical" sx={{ mr: 4 }}>
                        <Step>
                            <StepLabel>Información general</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Sobre el trabajo</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Información adicional</StepLabel>
                        </Step>
                    </Stepper>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {step === 1 && <Step1 data={formData} handleChange={handleChange} nextStep={nextStep} />}
                        {step === 2 && <Step2 data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
                        {step === 3 && <Step3 data={formData} handleChange={handleChange} prevStep={prevStep} onSubmit={handleSubmit} />}
                    </form>
                </Box>
            </div>
        </div>
    );
};

export default FormOferta;