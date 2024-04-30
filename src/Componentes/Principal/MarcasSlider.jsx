import React from 'react';
import { motion } from 'framer-motion';
import redondos from '../../assets/logo-redondos.png'
// Define the array of slides with numbers
const slides = [
    { redondos },
    { redondos },
    { redondos },
    { redondos },
    { redondos },
];

const MarcasSlider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden p-8">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center  text-6xl mr-2 ml-2">
                            <img className='w-32' src={slide.redondos} alt="" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarcasSlider;