import React from 'react'
import fondo from '../../assets/gradiantFondo.png'
import imgHero from '../../assets/imgPracticas.png'
function HeroEmpresa() {
  return (
    <section  style={{backgroundImage: `url(${fondo})` }}
    className="pt-20 font-dmsans flex flex-col items-center bg-no-repeat bg-cover md:h-[650px]">
    <div className="w-full max-w-7xl sm:px-6 lg:px-8 flex flex-wrap">
        <div className="text-center sm:text-left w-[600px] px-2">
            <p
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-primarytext sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight animate-fade-up">
                <span className='text-primarycolor'>Programa de prácticas</span> Pre Profesionales
            </p>
            <h1 className="max-w-2xl mx-auto text-lg text-primarytext font-inter animate-fade-up">
            Potenciamos tu éxito empresarial con soluciones de gestión humana y tecnología de vanguardia, incluso sin un departamento de recursos humanos.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a href="#" title=""
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primarycolor border-2 border-transparent sm:w-auto rounded-xl hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-fade-up"
                    role="button">
                    Postula Aquí   
                </a>
                <button href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-primarytext transition-all duration-200 hover:bg-gray-50 sm:w-auto rounded-xl animate-fade-up"
                    role="button">Aprender más</button>
            </div>
        </div>
        <div className='md:ml-8 animate-fade-left '>
            <img className='' src={imgHero} alt="" />
        </div>      
    </div>
</section>
  )
}

export default HeroEmpresa