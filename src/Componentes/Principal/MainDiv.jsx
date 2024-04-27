import React from 'react'
import Fondo2 from '../../assets/FondoBanner2.png'
import { motion } from "framer-motion"



function MainDiv() {
  return (
    <section className="pt-24 bg-white sm:pt-24 font-dmsans">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-primarytext sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                <span className='text-primarycolor'>Potenciamos talentos,</span> impulsamos resultados
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-primarytext font-inter">
            Potenciamos tu éxito empresarial con soluciones de gestión humana y tecnología de vanguardia, incluso sin un departamento de recursos humanos.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <button href="#" title=""
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primarycolor border-2 border-transparent sm:w-auto rounded-xl hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    role="button">
                    Empezar
                </button>
                <button href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-primarytext transition-all duration-200 hover:bg-gray-50 sm:w-auto rounded-xl"
                    role="button">Aprender más</button>
            </div>
        </div>
    </div>
    <div className="bg-white pl-2 pr-2">
        <div className="relative mx-auto mt-4 md:mt-8">
            <div className="lg:max-w-4xl lg:mx-auto">
                <img className="rounded-lg" src="https://plus.unsplash.com/premium_photo-1678917476447-478a8cf22e5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    </div>
</section>
  )
}

export default MainDiv