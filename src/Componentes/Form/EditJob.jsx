import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FormAdminImg from "../../assets/formAdminImg.svg";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';

function EditJob() {
  const { id_oferta } = useParams();
  const [job, setJob] = useState({
    puesto: '',
    empresa: '',
    ubicacion: '',
    modalidad: '',
    sueldo: '',
    beneficios: '',
    requisitos: '',
    funciones: '',
    horario: '',
    preg_1: '',
    preg_2: '',
    preg_3: '',
    preg_4: '',
    preg_5: '',
    preg_6: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    if (!id_oferta) {
      setError('No job ID provided');
      setLoading(false);
      return;
    }

    const fetchJob = async () => {
      const { data, error } = await supabase
        .from('Oferta')
        .select('id_oferta, puesto, empresa, ubicacion, modalidad, sueldo, beneficios, requisitos, funciones, horario, preg_1, preg_2, preg_3, preg_4, preg_5, preg_6')
        .eq('id_oferta', id_oferta)
        .single();

      if (error) {
        setError('Error fetching job details');
        console.error('Error fetching job:', error);
      } else {
        setJob(data);
      }

      setLoading(false);
    };

    fetchJob();
  }, [id_oferta]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleInputKeyDown = (e, nextFieldId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextField = document.getElementById(nextFieldId);
      if (nextField) {
        nextField.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('Oferta')
      .update({
        puesto: job.puesto,
        empresa: job.empresa,
        ubicacion: job.ubicacion,
        modalidad: job.modalidad,
        sueldo: job.sueldo,
        beneficios: job.beneficios,
        requisitos: job.requisitos,
        funciones: job.funciones,
        horario: job.horario,
        preg_1: job.preg_1,
        preg_2: job.preg_2,
        preg_3: job.preg_3,
        preg_4: job.preg_4,
        preg_5: job.preg_5,
        preg_6: job.preg_6
      })
      .eq('id_oferta', id_oferta);

    if (error) {
      setError('Error updating job details');
      console.error('Error updating job:', error);
    } else {
      alert('Job details updated successfully');
    }
  };

  const nextStep = () => setFormStep((prevStep) => prevStep + 1);
  const prevStep = () => setFormStep((prevStep) => prevStep - 1);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <HeaderPowerAuth /> 
      <div className="pl-20 w-[100%] h-screen flex font-dmsans items-center">
        <div className="w-[600px] h-full bg-primarycolor">
          <img src={FormAdminImg} className="w-full h-full" alt="" />
        </div>
        <div className="w-[calc(100%-600px)] h-full py-6 overflow-y-scroll">
          <h2 className="text-primarytext font-bold text-3xl text-center mt-8">
            Completa todos los campos
          </h2>
          <p className="text-gray-700 text-center pt-8 font-medium">
            Información básica sobre el empleo
          </p>
          <div className="flex items-center justify-center p-2 ">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <>
                    <div className="mb-5">
                      <label htmlFor="puesto" className="mb-3 block text-base font-medium text-[#07074D]">
                        Nombre del puesto
                      </label>
                      <input
                        type="text"
                        name="puesto"
                        value={job.puesto}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'empresa')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="empresa" className="mb-3 block text-base font-medium text-[#07074D]">
                        Nombre de la Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={job.empresa}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'ubicacion')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="ubicacion" className="mb-3 block text-base font-medium text-[#07074D]">
                        Ubicacion
                      </label>
                      <input
                        type="text"
                        id="ubicacion"
                        name="ubicacion"
                        value={job.ubicacion}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'modalidad')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="modalidad" className="mb-3 block text-base font-medium text-[#07074D]">
                        Modalidad
                      </label>
                      <input
                        type="text"
                        id="modalidad"
                        name="modalidad"
                        value={job.modalidad}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'sueldo')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="sueldo" className="mb-3 block text-base font-medium text-[#07074D]">
                        Sueldo
                      </label>
                      <input
                        type="text"
                        id="sueldo"
                        name="sueldo"
                        value={job.sueldo}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <button type="button" onClick={nextStep} className="ml-44 hover:shadow-form rounded-md w-56 bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Siguiente
                    </button>
                  </>
                )}

                {formStep === 2 && (
                  <>
                    <div className="mb-5">
                      <label htmlFor="beneficios" className="mb-3 block text-base font-medium text-[#07074D]">
                        Beneficios del trabajo
                      </label>
                      <ReactQuill
                        value={job.beneficios}
                        onChange={(value) => handleChange({ target: { name: 'beneficios', value } })}
                        className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-black focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="requisitos" className="mb-3 block text-base font-medium text-[#07074D]">
                        Requisitos del trabajo
                      </label>
                      <ReactQuill
                        value={job.requisitos}
                        onChange={(value) => handleChange({ target: { name: 'requisitos', value } })}
                        className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-black focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="funciones" className="mb-3 block text-base font-medium text-[#07074D]">
                        Funciones del trabajo
                      </label>
                      <ReactQuill
                        value={job.funciones}
                        onChange={(value) => handleChange({ target: { name: 'funciones', value } })}
                        className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-black focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="horario" className="mb-3 block text-base font-medium text-[#07074D]">
                        Horario del trabajo
                      </label>
                      <ReactQuill
                        value={job.horario}
                        onChange={(value) => handleChange({ target: { name: 'horario', value } })}
                        className="rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-black focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <button type="button" onClick={prevStep} className="mr-24 hover:shadow-form rounded-md w-56 bg-powercolor py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Atrás
            </button>
            <button type="button" onClick={nextStep} className="hover:shadow-form rounded-md w-56 bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Siguiente
            </button>
                  </>
                )}

                {formStep === 3 && (
                  <>
                    <div className="mb-5">
                      <label htmlFor="preg_1" className="mb-3 block text-base font-medium text-[#07074D]">
                        Pregunta 1
                      </label>
                      <input
                        type="text"
                        name="preg_1"
                        value={job.preg_1}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_2')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="preg_2" className="mb-3 block text-base font-medium text-[#07074D]">
                        Pregunta 2
                      </label>
                      <input
                        type="text"
                        id="preg_2"
                        name="preg_2"
                        value={job.preg_2}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_3')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="preg_3" className="mb-3 block text-base font-medium text-[#07074D]">
                        Pregunta 3
                      </label>
                      <input
                        type="text"
                        id="preg_3"
                        name="preg_3"
                        value={job.preg_3}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_4')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="preg_4" className="mb-3 block text-base font-medium text-[#07074D]">
                        Pregunta 4
                      </label>
                      <input
                        type="text"
                        id="preg_4"
                        name="preg_4"
                        value={job.preg_4}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_5')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="preg_5" className="mb-3 block text-base font-medium text-[#07074D]">
                        Pregunta 5
                      </label>
                      <input
                        type="text"
                        id="preg_5"
                        name="preg_5"
                        value={job.preg_5}
                        onChange={handleChange}
                        onKeyDown={(e) => handleInputKeyDown(e, 'preg_6')}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="preg_6" className="mb-3 block text-base font-medium text-[#07074D]">
                        Pregunta 6
                      </label>
                      <input
                        type="text"
                        id="preg_6"
                        name="preg_6"
                        value={job.preg_6}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <button type="button" onClick={prevStep} className="mr-24 hover:shadow-form rounded-md w-56 bg-powercolor py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Atrás
            </button>
            <button type="submit" className="hover:shadow-form rounded-md w-56 bg-primarycolor py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Editar
            </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditJob;