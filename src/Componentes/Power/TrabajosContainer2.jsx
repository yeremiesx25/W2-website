import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import CardTrabajo2 from './CardTrabajo2';
import InfoJob from '../PowerAuth/InfoJob';
import flecha from "../../assets/flecha.png";

function TrabajosContainer2() {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    
    useEffect(() => {
        async function fetchJobs() {
            const { data, error } = await supabase
                .from('Oferta')
                .select('puesto, requisitos, ubicacion, sueldo, fecha_publicacion, imagen_url');

            if (error) {
                console.error('Error fetching jobs:', error.message);
            } else {
                setJobs(data);
            }
        }

        fetchJobs();
    }, []);

    return (
        <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-6 px-4 justify-center'>
            <h2 className="font-dmsans sm:text-4xl text-2xl font-bold title-font text-center text-transparent bg-clip-text bg-gradient-to-r from-primarytext to-black mb-12 mt-6 "> 
                <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2" />
                Ofertas <span className="text-amber-500 xl:inline"> Laborales </span>
            </h2>
            <div className='flex w-full justify-center items-center'>
                <div className='flex flex-col w-full md:w-1/2 justify-start items-center py-4 gap-4 h-[650px] overflow-auto pl-12'>
                    {jobs.map((job, index) => (
                        <CardTrabajo2
                            key={index}
                            job={job}
                            onSelectJob={setSelectedJob}
                        />
                    ))}
                </div>
                {selectedJob && (
                    <InfoJob selectedJob={selectedJob} />
                )}
            </div>
        </div>
    );
}

export default TrabajosContainer2;