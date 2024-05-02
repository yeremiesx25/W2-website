import React from 'react';
import { motion } from 'framer-motion';
import Alma from '../../assets/Logos Clientes/Alma@2x.png'
import Altisa from '../../assets/Logos Clientes/Altisa@2x.png'
import Bomi from '../../assets/Logos Clientes/Bomi@2x.png'
import Cardioclinic from '../../assets/Logos Clientes/Cardioclinic@2x.png'
import Depsa from '../../assets/Logos Clientes/Depsa@2x.png'
import Econolentes from '../../assets/Logos Clientes/Econolentes@2x.png'
import Germsa from '../../assets/Logos Clientes/Germsa@2x.png'
import Palomino from '../../assets/Logos Clientes/Palomino@2x.png'
import Ransa from '../../assets/Logos Clientes/RANSA@2x.png'
import SLA from '../../assets/Logos Clientes/SLA@2x.png'

// Define the array of slides with numbers
const slides = [
    {Alma },
    { Altisa },
    { Bomi },
    { Cardioclinic },
    { Depsa },
    {Econolentes},
    {Germsa},
    {Palomino},
    {Ransa},
    {SLA}
];

const MarcasSlider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden p-8 mt-8">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100/ slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center  text-6xl mr-2 ml-2">
                            <img className='w-32' src={slide.Alma} alt="" />
                            <img className='w-32' src={slide.Altisa} alt="" />
                            <img className='w-32' src={slide.Bomi} alt="" />
                            <img className='w-32' src={slide.Cardioclinic} alt="" />
                            <img className='w-32' src={slide.Depsa} alt="" />
                            <img className='w-32' src={slide.Econolentes} alt="" />
                            <img className='w-32' src={slide.Germsa} alt="" />
                            <img className='w-32' src={slide.Palomino} alt="" />
                            <img className='w-32' src={slide.Ransa} alt="" />
                            <img className='w-32' src={slide.SLA} alt="" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarcasSlider;