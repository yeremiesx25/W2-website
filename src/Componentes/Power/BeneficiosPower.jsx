import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardBeneficioPower from './CardBeneficioPower';

function BeneficiosPower() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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

  return (
    <div className="slider-container mt-4 px-8 font-dmsans">
        <h2 className='text-center text-2xl font-semibold'>Beneficios de Power</h2>
        <p className='text-center mb-8'>Con nuestra metodología Power el proceso de buscar un empleo se vuelve una experiencia.</p>
      <Slider {...settings} className='font-dmsans'>
        <div>
          <CardBeneficioPower
          iconBeneficio= ""
          nombreBeneficio= "Asesoría y orientación de Cv"
          parrafoBeneficio= "Si tu CV no esta correctamente direccionado para el puesto, nosotros te apoyamos."
          />
        </div>
        <div>
        <CardBeneficioPower 
        nombreBeneficio= "Preparación para la entrevista"
        parrafoBeneficio= "Te preparamos para las entrevistas con los tips exactos de cada pregunta."
        />
        </div>
        <div>
        <CardBeneficioPower
        nombreBeneficio= "Desarrollo de habildiades blandas"
        parrafoBeneficio= "Te ayudamos en el desarrollo de las habilidades requeridas para el área."
        />
        </div>
        <div>
        <CardBeneficioPower 
        nombreBeneficio= "Retroalimentación"
        parrafoBeneficio= "Retroalimentación constructiva para fortalecer tu autoconfianza."
        />
        </div>
        <div>
        <CardBeneficioPower 
        nombreBeneficio= "Soporte"
        parrafoBeneficio= "Te brindamos soporte emocional durante todo el proceso de selcción."
        />
        </div>
      </Slider>
      
    </div>
  );
}

export default BeneficiosPower;
