import React, { useState, useEffect, useRef } from 'react';
import { FaLocationDot } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { CiShare2 } from 'react-icons/ci';
import { UserAuth } from '../../Context/AuthContext';
import QuestionsModal from './QuestionsModal';
import { supabase } from '../../supabase/supabase.config';

function InfoJobMovil({ selectedJob }) {
  const { user } = UserAuth();
  const [atBottom, setAtBottom] = useState(false);
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const contentRef = useRef(null);
  const shareButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          setAtBottom(true);
        } else {
          setAtBottom(false);
        }
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target)
      ) {
        setIsShareMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  if (!selectedJob) {
    return null;
  }

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
      content: formatContentAsList(selectedJob.beneficios),
    },
    {
      title: '¿Qué buscamos?',
      content: formatContentAsList(selectedJob.requisitos),
    },
    {
      title: '¿Qué es lo que harás?',
      content: formatContentAsList(selectedJob.funciones),
    },
    {
      title: 'Horario de Trabajo',
      content: formatContentAsList(selectedJob.horario),
    },
  ];

  const whatsappBaseUrl = selectedJob.wtsp_url
    ? selectedJob.wtsp_url.split('?')[0]
    : '';
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob.puesto}`;
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
    const shareUrl = `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`;
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

  return (
    <div
      className='selected-job-info w-full sm:w-1/2 border rounded-lg flex flex-col p-4 mx-8 bg-white shadow-lg'
      style={{ height: '650px', overflowY: 'auto', position: 'relative' }}
    >
      <h2 className='ml-1 mt-3 font-bold text-3xl mb-3 text-black'>
        {selectedJob.puesto}
      </h2>
      <div className='flex items-center justify-between mb-2 mt-2'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-start'>
            <span
              className='text-black text-sm uppercase font-semibold tracking-wide'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {selectedJob.empresa}
            </span>
            <span className='inline-block mx-4 h-4 w-px bg-gray-400'></span>
            <span
              className='text-black text-sm uppercase font-semibold tracking-wide'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaLocationDot
                style={{ color: 'black', marginRight: '5px' }}
              />
              {selectedJob.ubicacion}
            </span>
            <span className='inline-block mx-4 h-4 w-px bg-gray-400'></span>
            <span className='text-black text-sm uppercase font-semibold tracking-wide'>
              ${selectedJob.salario}
            </span>
          </div>
        </div>
      </div>
      <div
        ref={contentRef}
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
        <div ref={shareButtonRef}>
          <button
            className='flex items-center ml-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleShareClick}
          >
            <CiShare2 className='mr-1' />
            Compartir
          </button>
          {isShareMenuOpen && (
            <div
              className='flex flex-col absolute bg-white shadow-lg rounded-lg mt-2 top-12 right-0 z-10'
              style={{ minWidth: '120px' }}
            >
              <button
                className='flex items-center text-black hover:bg-gray-200 py-2 px-4 rounded-t-lg'
                onClick={handleCopyLink}
              >
                <FaCopy className='mr-2' />
                Copiar Enlace
              </button>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-black hover:bg-gray-200 py-2 px-4 rounded-b-lg'
              >
                <IoLogoWhatsapp className='mr-2' />
                WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
      <QuestionsModal
        isOpen={isQuestionsModalOpen}
        onClose={() => setIsQuestionsModalOpen(false)}
        selectedJob={selectedJob}
      />
    </div>
  );
}

export default InfoJobMovil;