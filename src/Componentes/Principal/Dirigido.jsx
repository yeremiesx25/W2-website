import React from 'react'
import empresa from '../../assets/Empresa@2x-8.png' 
import candidatos from '../../assets/Postulantes@2x-8.png'
import practicantes from '../../assets/Practicantes@2x-8.png'

function Dirigido() {
  return (
<section id='dirigido' class="text-primarytext bg-white body-font font-dmsans pt-8">
  <h2 class="sm:text-3xl text-2xl font-medium title-font text-center text-primarytext mb-8">A quiénes está dirigido nuestro servicio...
    </h2>
  <div class="container px-5 pb-8 mx-auto flex justify-center gap-10 flex-wrap">
    <div className='w-96 h-[400px] shadow-lg rounded-lg flex flex-col items-center text-center justify-around py-8 border border-blue-500 px-8'>
      <img className='w-24 h-24' src={empresa} alt="" />
      <h3 className=' font-medium text-xl'>Empresas</h3>
      <p>Libérate del estrés de reclutamiento
y selección con nuestro soporte
estratégico de atracción de personal
incluso si ya cuentan con un área
de RR.HH.</p>
      <a href="/Empresas" className='bg-primarycolor text-white font-semibold w-32 h-8 flex items-center justify-center rounded-lg'>Ver más</a>
    </div>
    <div className='w-96 h-[400px] shadow-lg rounded-lg flex flex-col items-center text-center justify-around py-8 border border-blue-500 px-8'>
      <img className='w-24 h-24' src={candidatos} alt="" />
      <h3 className=' font-medium text-xl'>Candidatos</h3>
      <p>Ayudamos a personas sin trabajo
en busca de estabilidad laboral.
Logren ingresar a trabajar en una
empresa formal con los beneficios
de ley mediante nuestra metodología
de atracción incluso si no tienen CV. </p>
      <a href="/Empresas" className='bg-primarycolor text-white font-semibold w-32 h-8 flex items-center justify-center rounded-lg'>Ver más</a>
    </div>
    <div className='w-96 h-[400px] shadow-lg rounded-lg flex flex-col items-center text-center justify-around py-8 border border-blue-500 px-8'>
      <img className='w-24 h-24' src={practicantes} alt="" />
      <h3 className=' font-medium text-xl'>Practicantes</h3>
      <p>Programa dirigido a estudiantes de
los últimos ciclos de sus carreras
que deseen formarse y formar parte
de W2. Revisa nuestro apartado de
beneficios y vive tu primera
experiencia laboral con nosotros</p>
      <a href="/Empresas" className='bg-primarycolor text-white font-semibold w-32 h-8 flex items-center justify-center rounded-lg'>Ver más</a>
    </div>
  </div>
</section>
  )
}

export default Dirigido