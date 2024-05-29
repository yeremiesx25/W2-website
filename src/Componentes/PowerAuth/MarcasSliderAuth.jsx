import React from 'react';
import Alma from '../../assets/Logos Clientes/Alma@2x.png';
import Altisa from '../../assets/Logos Clientes/Altisa@2x.png';
import Bomi from '../../assets/Logos Clientes/Bomi@2x.png';
import Cardioclinic from '../../assets/Logos Clientes/Cardioclinic@2x.png';
import Depsa from '../../assets/Logos Clientes/Depsa@2x.png';
import Germsa from '../../assets/Logos Clientes/Germsa@2x.png';
import Palomino from '../../assets/Logos Clientes/Palomino@2x.png';
import Ransa from '../../assets/Logos Clientes/RANSA@2x.png';
import SLA from '../../assets/Logos Clientes/SLA@2x.png';

// Define the array of slides with numbers
const slides = [
    Alma,
    Altisa,
    Bomi,
    Cardioclinic,
    Depsa,
    Germsa,
    Palomino,
    Ransa,
    SLA
];

const MarcasSliderAuth = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <section className=" py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-black mb-8">Estas Empresas necesitan tu Talento</h2>
                <div className="slider bg-gray-900">
                    <div className="move flex items-center justify-center gap-2">
                        {/* Mapear cada elemento del array y renderizar la imagen dentro de un div */}
                        {duplicatedSlides.map((slide, index) => (
                            <div className="box flex items-center justify-center p-2 border-2 border-gray-200 rounded-lg bg-white" key={index}>
                                <img className="img-marca" src={slide} alt={`Marca ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarcasSliderAuth;