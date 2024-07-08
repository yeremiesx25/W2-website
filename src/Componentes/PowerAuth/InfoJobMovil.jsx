import React, { useEffect, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import QuestionsModal from './QuestionsModal';
import { supabase } from '../../supabase/supabase.config';
import HeaderPowerAuth from './HeaderPowerAuth';
import { TbMoneybag } from 'react-icons/tb';
import { FaRegBuilding } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from "react-icons/md";

function InfoJobMovil() {
  const { id } = useParams();
  const { user } = UserAuth();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const { data: jobData, error } = await supabase
          .from('Oferta')
          .select('*')
          .eq('id_oferta', id)
          .single();

        if (error) {
          console.error('Error fetching job details:', error.message);
          return;
        }

        setSelectedJob(jobData);
      } catch (error) {
        console.error('Error fetching job details:', error.message);
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    const checkIfApplied = async () => {
      if (user && selectedJob) {
        const { data, error } = await supabase
          .from('Postulacion')
          .select('id_postulacion')
          .eq('user_id', user.id)
          .eq('id_oferta', selectedJob.id_oferta)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking if user has applied:', error.message);
        } else {
          setHasApplied(!!data);
        }
      }
    };

    checkIfApplied();
  }, [user, selectedJob]);

  const formatContent = (content) => {
    if (!content) return null;

    // Aplicar clases de Tailwind a las listas desordenadas y ordenadas
    const formattedContent = content
      .replaceAll('<ul>', '<ul class="list-disc pl-6">')
      .replaceAll('<ol>', '<ol class="list-decimal pl-6">');

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: formattedContent,
        }}
      />
    );
  };

  const whatsappBaseUrl = selectedJob?.wtsp_url
    ? selectedJob.wtsp_url.split('?')[0]
    : '';
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${
    selectedJob?.puesto
  }`;
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleApplyClick = () => {
    setIsQuestionsModalOpen(true);
  };

  if (!selectedJob) {
    return null; // Puedes mostrar un spinner de carga o un mensaje mientras se carga la información
  }

  return (
    <div className='w-full h-screen font-dmsans flex flex-col'>
      <HeaderPowerAuth />
      <div className='selected-job-info flex-1 p-4 pt-16 pb-20 bg-white overflow-y-auto'>
        <h2 className='ml-1 mt-3 font-bold text-3xl text-center text-black break-words whitespace-normal'>
          {selectedJob?.puesto}
        </h2>
        <div className='flex items-center justify-center mb-2 mt-2'>
          <span className='text-black text-m text-center'>
            <MdOutlineVerifiedUser className='inline-block mr-2 text-green-500' />
            {selectedJob?.empresa} - {selectedJob?.ubicacion}
          </span>
        </div>
        <div className='mt-4 text-sm text-gray-700 flex items-center '>
          <TbMoneybag className='mr-2' />
          <span className='font-semibold'>S/. {selectedJob?.sueldo}</span>
          <span className='mx-2'> | </span>
          <FaRegBuilding className='inline-block mr-2' />
          <span className='font-semibold'>{selectedJob?.modalidad}</span>
        </div>
        <div className='mt-4 text-sm text-gray-700'>
          <h3 className='font-semibold mb-2'>DESCRIPCION DEL EMPLEO:</h3>
          {selectedJob?.beneficios && (
            <div className='mb-4'>
              <h3 className='font-semibold'>BENEFICIOS</h3>
              {formatContent(selectedJob.beneficios)}
            </div>
          )}
          {selectedJob?.requisitos && (
            <div className='mb-4'>
              <h3 className='font-semibold'>REQUISITOS</h3>
              {formatContent(selectedJob.requisitos)}
            </div>
          )}
          {selectedJob?.funciones && (
            <div className='mb-4'>
              <h3 className='font-semibold'>FUNCIONES</h3>
              {formatContent(selectedJob.funciones)}
            </div>
          )}
          {selectedJob?.horario && (
            <div className='mb-4'>
              <h3 className='font-semibold'>HORARIO</h3>
              {formatContent(selectedJob.horario)}
            </div>
          )}
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 bg-white py-2 z-10'>
        <div className='w-full flex justify-center'>
          <button
            className={`font-bold py-2 px-4 rounded-full ${
              hasApplied ? 'bg-[#0057c2] text-white' : 'bg-[#0057c2] text-white'
            }`}
            onClick={hasApplied ? null : handleApplyClick}
            disabled={hasApplied}
          >
            {hasApplied ? 'Ya te has postulado' : 'POSTULARME'}
          </button>
          {whatsappBaseUrl && (
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-4'
            >
              <button className='bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center'>
                <IoLogoWhatsapp className='mr-2' size={24} />
                WhatsApp
              </button>
            </a>
          )}
        </div>
      </div>
      {isQuestionsModalOpen && (
        <QuestionsModal
          isOpen={isQuestionsModalOpen}
          onClose={() => setIsQuestionsModalOpen(false)}
          jobId={selectedJob?.id_oferta}
          userId={user?.id}
        />
      )}
    </div>
  );
}

export default InfoJobMovil;