import React from 'react'
import fondo from '../../assets/gradiantFondo.png'
import imgHero from '../../assets/imgPracticas.png'

function HeroEmpresa() {
    
  return (
    <section style={{backgroundImage: `url(${fondo})`, height: '700px' }}
    className=" bg-white sm:pt-24 font-dmsans flex flex-col items-center bg-no-repeat bg-cover">
    <div className="w-full max-w-7xl sm:px-6 lg:px-8 flex flex-wrap pt-8">
        <div className="text-center sm:text-left w-[600px] px-2">
            <p
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-primarytext sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                <span className='text-primarycolor'>Alcanza tu objetivo</span> de gestión humana
            </p>
            <h1 className="max-w-2xl mx-auto text-lg text-primarytext font-inter">
            Potenciamos tu éxito empresarial con soluciones de gestión humana y tecnología de vanguardia, incluso sin un departamento de recursos humanos.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <button href="#" title=""
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primarycolor border-2 border-transparent sm:w-auto rounded-xl hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    role="button">
                    Contratar W2  
                </button>
                <button href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-primarytext transition-all duration-200 hover:bg-gray-50 sm:w-auto rounded-xl"
                    role="button">Aprender más</button>
            </div>
        </div>
        <div className='md:ml-8'>
        <div class="relative">
    <div class="carousel max-w-xl flex">
        
        <div class="carousel-item">
            <img src="https://source.unsplash.com/random/800x600" alt="Carousel Image 1"
                class="w-full h-96 object-cover"/>
        </div>
        <div class="carousel-item">
            <img src="https://source.unsplash.com/random/800x600?2" alt="Carousel Image 2"
                class="w-full h-96 object-cover"/>
        </div>
        <div class="carousel-item">
            <img src="https://source.unsplash.com/random/800x600?3" alt="Carousel Image 3"
                class="w-full h-96 object-cover"/>
        </div>
    </div>

    <div class="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
        <button
            class="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
        <button
            class="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>
</div>

        </div>      
    </div>
    
</section>
  )
}

export default HeroEmpresa