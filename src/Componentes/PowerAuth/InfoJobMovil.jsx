// InfoJobMovil.jsx

import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { CiShare2 } from 'react-icons/ci';
import { useNavigate, useParams } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import QuestionsModal from './QuestionsModal';
import { supabase } from '../../supabase/supabase.config';
import HeaderPowerAuth from './HeaderPowerAuth'

function InfoJobMovil() {
  const { id } = useParams();
  const { user } = UserAuth();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
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

  const formatContentAsList = (content) => {
    if (!content) return null;
    const isList = content.includes('-') || content.includes('•');
    if (isList) {
      return content.split(/\n/).map((item, index) => (
        <li key={index} className='mt-2'>
          {item.trim()}
        </li>
      ));
    } else {
      return content;
    }
  };

  const jobDetails = [
    {
      title: '¿Por qué deberías unirte a nosotros?',
      content: formatContentAsList(selectedJob?.beneficios),
    },
    {
      title: '¿Qué buscamos?',
      content: formatContentAsList(selectedJob?.requisitos),
    },
    {
      title: '¿Qué es lo que harás?',
      content: formatContentAsList(selectedJob?.funciones),
    },
    {
      title: 'Horario de Trabajo',
      content: formatContentAsList(selectedJob?.horario),
    },
  ];

  const whatsappBaseUrl = selectedJob?.wtsp_url
    ? selectedJob.wtsp_url.split('?')[0]
    : '';
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob?.puesto}`;
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleApplyClick = () => {
    setIsQuestionsModalOpen(true);
  };

  const handleShareClick = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const handleCopyLink = () => {
    const shareUrl = `https://w2asesoresyconsultores.com/Share?id=${selectedJob?.id_oferta}`;
    navigator.clipboard.writeText(shareUrl);

    const copiedMessage = document.createElement('div');
    copiedMessage.textContent = 'Enlace Copiado';
    copiedMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    copiedMessage.style.color = 'white';
    copiedMessage.style.position = 'fixed';
    copiedMessage.style.bottom = '20px';
    copiedMessage.style.left = '50%';
    copiedMessage.style.transform = 'translateX(-50%)';
    copiedMessage.style.padding = '10px 20px';
    copiedMessage.style.borderRadius = '5px';
    copiedMessage.style.zIndex = '9999';
    document.body.appendChild(copiedMessage);

    setTimeout(() => {
      copiedMessage.remove();
    }, 3000);

    setIsShareMenuOpen(false);
  };

  if (!selectedJob) {
    return null; // Puedes mostrar un spinner de carga o un mensaje mientras se carga la información
  }

  return (
    <div className='w-full h-screen font-dmsans'>
      <HeaderPowerAuth />
    <div
      className='selected-job-info w-full flex flex-col p-4 pt-16 pb-8 bg-white '
      style={{ height: '650px', overflowY: 'auto' }}
    >
      
      <h2 className='ml-1 mt-3 font-bold text-3xl mb-3 text-black'>
        {selectedJob?.puesto}
      </h2>
      <div className='flex items-center justify-between mb-2 mt-2'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-start'>
            <span
              className='text-black text-sm uppercase font-semibold tracking-wide'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {selectedJob?.empresa}
            </span>
            <span className='inline-block mx-4 h-4 w-px bg-gray-400'></span>
            <span
              className='text-black text-sm uppercase font-semibold tracking-wide'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaLocationDot
                style={{ color: 'black', marginRight: '5px' }}
              />
              {selectedJob?.ubicacion}
            </span>
            <span className='inline-block mx-4 h-4 w-px bg-gray-400'></span>
            <span className='text-black text-sm uppercase font-semibold tracking-wide'>
              ${selectedJob?.salario}
            </span>
          </div>
        </div>
      </div>
      <div
        className='mt-2 mb-2 mx-0 md:mx-10 font-normal text-gray-600 text-sm sm:text-base'
        style={{ height: '400px', overflowY: 'auto' }}
      >
        {jobDetails.map((detail, index) => (
          <div key={index} className='mb-4'>
            <h3 className='font-semibold text-xl'>{detail.title}</h3>
            {detail.content ? (
              <ul className='mt-2'>{detail.content}</ul>
            ) : (
              <p>{detail.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center'>
        <button
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            hasApplied ? 'cursor-default' : 'cursor-pointer'
          }`}
          onClick={hasApplied ? null : handleApplyClick}
          disabled={hasApplied}
        >
          {hasApplied ? 'Ya Aplicado' : 'Aplicar'}
        </button>
        <div>
          <button
            className='flex items-center ml-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleShareClick}
          >
            <CiShare2 className='mr-1' />
            Compartir
          </button>
          {isShareMenuOpen && (
            <div className='absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-lg'>
              <button
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                onClick={handleCopyLink}
              >
                Copiar Enlace
              </button>
              <a
                href={whatsappUrl}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                target='_blank'
                rel='noopener noreferrer'
              >
                <IoLogoWhatsapp className='inline-block mr-1' />
                Compartir por WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
      {isQuestionsModalOpen && (
        <QuestionsModal
          selectedJob={selectedJob}
          onClose={() => setIsQuestionsModalOpen(false)}
        />
      )}
    </div>
    </div>
  );
}

export default InfoJobMovil;