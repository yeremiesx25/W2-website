import React, {useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CtaForm from '../../assets/CtaForm.svg';
import img3d from '../../assets/3d-flame-two-colleagues-having-a-work-conversation.png';
import { Link } from 'react-router-dom';
import JobsContext from '../../Context/JobsContext';

const validationSchema = Yup.object().shape({
  puesto: Yup.string().required('El nombre del puesto es requerido'),
  ubicacion: Yup.string().required('El lugar es requerido'),
  empresa: Yup.string().required('La empresa es requerida'),
  sueldo: Yup.string().required('El sueldo es requerido').min(0, 'El sueldo no puede ser negativo'),
  beneficios: Yup.string().required('Los beneficios son requeridos'),
  requisitos: Yup.string().required('Los requisitos son requeridos'),
  funciones: Yup.string().required('Las funciones son requeridas'),
  horario: Yup.string().required('El horario es requerido')
});

function PruebaForm() {
    const { setJobs } = useContext(JobsContext);

  const handleSubmit = async (values) => {
    try {
      // Insertar los datos del formulario en la base de datos Supabase
      const { data, error } = await supabase.from('Oferta').insert([values]);

      if (error) {
        console.error('Error al guardar los datos:', error);
      } else {
        console.log('Datos guardados exitosamente:', data);
        // Actualizar el estado global de trabajos con los datos recién insertados
        setJobs(prevJobs => [...prevJobs, data[0]]);
      }
    } catch (error) {
      console.error('Error al interactuar con Supabase:', error);
    }
  };
  return (
    <div className='w-full h-full flex flex-col items-center font-dmsans pl-20 py-12'>
      <div className='flex justify-center w-[700px] h-[210px] bg-cover bg-no-repeat items-center mb-8' style={{ backgroundImage: `url(${CtaForm})` }}>
        <h2 className='text-white text-2xl font-semibold w-1/2 text-center'>Complete la información básica del empleo</h2>
        <img className='w-40' src={img3d} alt="" />
      </div>
      <div>
        <Formik
          initialValues={{ puesto: '', ubicacion: '', empresa: '', sueldo: '', beneficios: '', requisitos: '', funciones: '', horario: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className='w-full'>
              <div className="mb-4">
                <label htmlFor="puesto" className="block text-gray-700 font-medium mb-2">Nombre del Puesto</label>
                <Field
                  name="puesto"
                  className="w-[650px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="puesto" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="ubicacion" className="block text-gray-700 font-medium mb-2">Lugar</label>
                <Field
                  name="ubicacion"
                  className="w-[650px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="ubicacion" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="empresa" className="block text-gray-700 font-medium mb-2">Empresa</label>
                <Field
                  name="empresa"
                  className="w-[650px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarycolor"
                />
                <ErrorMessage name="empresa" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="sueldo" className="block text-gray-700 font-medium mb-2">Sueldo</label>
                <Field
                  name="sueldo"
                  className="w-[650px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="sueldo" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="beneficios" className="block text-gray-700 font-medium mb-2">Beneficios</label>
                <Field
                  name="beneficios"
                  as="textarea"
                  className="w-[650px] h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="beneficios" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="requisitos" className="block text-gray-700 font-medium mb-2">Requisitos</label>
                <Field
                  name="requisitos"
                  as="textarea"
                  className="w-[650px] h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="requisitos" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="funciones" className="block text-gray-700 font-medium mb-2">Funciones</label>
                <Field
                  name="funciones"
                  as="textarea"
                  className="w-[650px] h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="funciones" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="horario" className="block text-gray-700 font-medium mb-2">Horario</label>
                <Field
                  name="horario"
                  className="w-[650px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="horario" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className='flex justify-between'>
              <Link to="/Admin">
                <button className='w-[220px] bg-powercolor text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
                  Cancelar
                </button>
                </Link>
                <button onClick={handleSubmit}
                  type="submit"
                  className="w-1/3 bg-primarycolor text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PruebaForm;