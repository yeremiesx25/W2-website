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
          <CardBeneficioPower />
        </div>
        <div>
        <CardBeneficioPower />
        </div>
        <div>
        <CardBeneficioPower />
        </div>
        <div>
        <CardBeneficioPower />
        </div>
        <div>
        <CardBeneficioPower />
        </div>
        <div>
        <CardBeneficioPower />
        </div>
      </Slider>
      
    </div>
  );
}

export default BeneficiosPower;
