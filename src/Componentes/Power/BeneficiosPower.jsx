import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardBeneficioPower from './CardBeneficioPower';
import icon1 from '../../assets/cv.png';
import icon2 from '../../assets/entrevista.png';
import icon3 from '../../assets/blandas.png';
import icon4 from '../../assets/retro.png';
import icon5 from '../../assets/suport.png';
import flecha from "../../assets/flechasFalabella.png";

function BeneficiosPower() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Mostrar tres tarjetas a la vez
        slidesToScroll: 1, // Avanzar una tarjeta a la vez
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000, // Avanzar cada 3 segundos
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const beneficios = [
      {
        nombreBeneficio: "Asesoría y orientación de CV",
        iconBeneficio: icon1
      },
      {
        nombreBeneficio: "Preparación para la entrevista",
        iconBeneficio: icon2
      },
      {
        nombreBeneficio: "Desarrollo de habilidades blandas",
        iconBeneficio: icon3
      },
      {
        nombreBeneficio: "Retroalimentación",
        iconBeneficio: icon4
      },
      {
        nombreBeneficio: "Soporte",
        iconBeneficio: icon5
      }
    ];

    return (
        <section className="py-12 bg-powercolor text-gray-100 sm:py-12 lg:py-16 font-dmsans">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-5xl xl:text-5xl mb-6"> <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2"></img>
                        Beneficios <span className="text-amber-400 xl:inline"> Power</span>
                    </h2>
                    <p className="mb-4">Conectamos talentos con grandes empresas</p>
                </div>
                <div className="mt-8 sm:mt-12 lg:mt-20 flex justify-center">
                    <Slider {...settings} className='w-72 md:w-[90%]'>
                        {beneficios.map((beneficio, index) => (
                            <div key={index} className="px-2">
                                <CardBeneficioPower 
                                    nombreBeneficio={beneficio.nombreBeneficio} 
                                    iconBeneficio={beneficio.iconBeneficio} 
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default BeneficiosPower;