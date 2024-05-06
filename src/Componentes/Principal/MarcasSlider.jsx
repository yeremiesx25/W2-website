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
    Alma,
    Altisa,
    Bomi,
    Cardioclinic,
    Depsa,
    Econolentes,
    Germsa,
    Palomino,
    Ransa,
    SLA
];

const MarcasSlider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div class="slider">
            <div class="move bg-white flex items-center justify-center">
                {/* Mapear cada elemento del array y renderizar la imagen dentro de un div */}
                {duplicatedSlides.map((slide, index) => (
                    <div className="box flex items-center justify-center" key={index}>
                        <img className="img-marca" src={slide} alt={`Marca ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarcasSlider;
