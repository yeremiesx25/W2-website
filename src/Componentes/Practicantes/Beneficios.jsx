import React from 'react'
import foto from '../../assets/Aprendizaje Continuo.gif' 
import icon1 from '../../assets/healthicons_exercise-yoga.png'
function Beneficios() {
  return (
    <div className='w-full h-auto font-dmsans flex justify-center mt-24 flex-wrap'>
        <div className='flex flex-wrap w-72 h-88 md:mx-16'>
        <h2 className='text-2xl md:text-3xl font-semibold text-center mb-8'>Descubre lo que nos hace diferentes</h2>
            <p className='mb-8'>Explora los beneficios que brindamos a nuestros dedicado y talentoso equipo de trabajo.</p>
            <img className='w-80 h-60 rounded-lg' src={foto} alt="" />
        </div>
        <div className='flex flex-col items-center justify-around w-[500px] md:mx-16'>
            <div className='flex gap-6 flex-wrap justify-center'>
                <div className='my-2'>
                    <div className='w-16 h-16 bg-teal-300 flex items-center justify-center rounded-lg'>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='text-center md:text-left my-2' >
                    <h4 className='text-xl font-semibold w-80'>Flexibilidad en el trabajo</h4>
                    <p className='text-sm font-regular w-80'>El equilibrio personal y laboral es nuestra prioridad, asegurando una calidad de vida de nuestro equipo</p>
                </div>
            </div>
            <div className='flex gap-6 flex-wrap justify-center'>
                <div>
                    <div className='w-16 h-16 bg-teal-300 flex items-center justify-center rounded-lg'>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='text-center md:text-left my-2'>
                    <h4 className='text-xl font-semibold w-80'>Flexibilidad en el trabajo</h4>
                    <p className='text-sm font-regular w-80'>El equilibrio personal y laboral es nuestra prioridad, asegurando una calidad de vida de nuestro equipo</p>
                </div>
            </div>
            <div className='flex gap-6 flex-wrap justify-center'>
                <div>
                    <div className='w-16 h-16 bg-teal-300 flex items-center justify-center rounded-lg'>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='text-center md:text-left my-2'>
                    <h4 className='text-xl font-semibold w-80'>Flexibilidad en el trabajo</h4>
                    <p className='text-sm font-regular w-80'>El equilibrio personal y laboral es nuestra prioridad, asegurando una calidad de vida de nuestro equipo</p>
                </div>
            </div>
            <div className='flex gap-6 flex-wrap justify-center'>
                <div>
                    <div className='w-16 h-16 bg-teal-300 flex items-center justify-center rounded-lg'>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='text-center md:text-left my-2'>
                    <h4 className='text-xl font-semibold w-80'>Flexibilidad en el trabajo</h4>
                    <p className='text-sm font-regular w-80'>El equilibrio personal y laboral es nuestra prioridad, asegurando una calidad de vida de nuestro equipo</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneficios