import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import talent from "../../assets/talent_hub.jpg";
import creative from "../../assets/Copia de IMG_4036.jpg";
import tech from "../../assets/tech_lab.jpg";
import mind from "../../assets/mind_mastery.jpg";
import money from "../../assets/money_matrix.jpg";
import flecha from "../../assets/flecha.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",  borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",  borderRadius: "55%" }}
      onClick={onClick}
      
    />
  );
}

function AreasPracticantes() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1, 
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        nombreBeneficio: "Talent Hub: El Corazón de la Atracción de Talento",
        descripcionBeneficio: "Dirigido a estudiantes de Psicología Organizacional, Recursos Humanos, Ing. Industrial (enfocada en RR.HH)",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfKakGbX6w4XxAFw7RqZlDosQ_RrgHm0Y-zRDxQoD8d6iwM0Q/viewform",
        imagen: talent
      },
      {
        nombreBeneficio: "Creative Nexus: Conectando Marcas con Audiencias de Impacto ",
        descripcionBeneficio: "Dirigido a estudiantes de las carreras de Comunicaciones, Marketing, Diseño gráfico, Edición de video, Fotografía, y afines.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfKakGbX6w4XxAFw7RqZlDosQ_RrgHm0Y-zRDxQoD8d6iwM0Q/viewform",
        imagen: creative
      },
      {
        nombreBeneficio: "Tech Lab: Donde la Innovación Define el Futuro",
        descripcionBeneficio: "Dirigido a estudiantes de las carreras de Ingeniería en Sistemas, Ingeniería de Software, Ciencias de la Computación, Ingeniería en Informática, y afines.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfKakGbX6w4XxAFw7RqZlDosQ_RrgHm0Y-zRDxQoD8d6iwM0Q/viewform",
        imagen: tech

      },
      {
        nombreBeneficio: "Mind Mastery: Desarrollando el Potencial a Través del Conocimiento",
        descripcionBeneficio: "Dirigido a estudiantes de las carreras de Educación, Pedagogía, Ciencias de la Educación, Psicopedagogía, y afines.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfKakGbX6w4XxAFw7RqZlDosQ_RrgHm0Y-zRDxQoD8d6iwM0Q/viewform",
        imagen: mind
      },
      {
        nombreBeneficio: "MoneyMatrix: Construyendo futuros financieros",
        descripcionBeneficio: "Dirigido a estudiantes de Administración, Contabilidad, Finanzas, Economía y carreras profesionales afines.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfKakGbX6w4XxAFw7RqZlDosQ_RrgHm0Y-zRDxQoD8d6iwM0Q/viewform",
        imagen: money

      }
    ];

    return (
        <section className="py-12 text-gray-100 sm:py-12 lg:py-16 font-dmsans">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center w-full mx-auto py-2 px-4 sm:px-6 lg:pt-4 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-5xl">
                        <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2"/>Descubre nuestras áreas,
                        <span className="text-primarycolor"> sé parte de nuestro equipo</span>
                    </h2>
                    <p className="text-xl mt-4  mx-auto text-gray-600">
                        Emocionantes proyectos, mentoría de expertos y un ambiente inclusivo
                        que fomenta el aprendizaje y el crecimiento profesional
                    </p>
                </div>
                <div className="mt-8 sm:mt-12 lg:mt-20">
                    <Slider {...settings}>
                        {beneficios.map((beneficio, index) => (
                            <div key={index} className="px-2">
                                <CardPracticante 
                                    nombreBeneficio={beneficio.nombreBeneficio} 
                                    descripcionBeneficio={beneficio.descripcionBeneficio}
                                    link={beneficio.link}
                                    imagen={beneficio.imagen}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

function CardPracticante({ nombreBeneficio, descripcionBeneficio, link, imagen }) {
    return (
        <div className="w-full flex flex-wrap justify-center gap-8 font-dmsans mb-8">
            <div className="rounded overflow-hidden shadow-lg flex flex-col w-96">
                <div className="relative">
                <img className="w-full h-full" src={imagen} alt={nombreBeneficio} />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div>
                <div className="px-6 py-4 mb-auto">
                    <p className="text-lg text-primarytext font-semibold transition duration-500 ease-in-out inline-block mb-2">
                        {nombreBeneficio}
                    </p>
                    <p className="text-gray-700 text-sm">
                        {descripcionBeneficio}
                    </p>
                </div>
                <a href={link} className="px-6 py-3 flex flex-row items-center justify-center bg-primarycolor cursor-pointer">
                    <span className="ml-1 text-white font-semibold">Postula Aquí</span>
                </a>
            </div>
        </div>
    );
}

export default AreasPracticantes;