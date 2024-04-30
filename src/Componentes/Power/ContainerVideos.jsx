import React from 'react'

function ContainerVideos() {
  return (
    <div className='w-full h-auto py-8 md:h-[650px] bg-primarytext flex flex-wrap items-center justify-center flex-col font-dmsans'>
        <h2 className='text-white text-2xl font-semibold text-center'>Te mostramos cómo funciona Power</h2>
        <p className='text-white mb-8 text-center w-80 md:w-auto'>Si te quedaron dudas nuestro equipo te lo explica</p>
        <div className='w-full flex justify-center flex-wrap'>
        <div className='w-[340px] h-[450px] bg-white text-primarytext flex flex-col items-center justify-center rounded-xl my-4 mx-8'>
            <iframe className='w-[300px] h-[200px] rounded-lg bg-white mb-4' src="https://www.youtube.com/embed/tbRC1UJXlE8" title="W2 Asesores y Consultores - Conectarse para Crecer 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 className='text-xl font-semibold mb-4'>Prepárate para tu entrevista</h2>
            <p className='w-[230px] md:w-[300px] text-center text-gray-600'>Te asesoraremos durante cada una de las etapas ANTES - DURANTE - DESPUES en tu entrevista laboral</p>
        </div>

        <div className='w-[340px] h-[450px] bg-white text-primarytext flex flex-col items-center justify-center rounded-xl my-4 mx-8'>
            <iframe className='w-[300px] h-[200px] rounded-lg bg-white mb-4' src="https://www.youtube.com/embed/tbRC1UJXlE8" title="W2 Asesores y Consultores - Conectarse para Crecer 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 className='text-xl font-semibold mb-4'>¿Cómo funciona Teams?</h2>
            <p className='w-[230px] md:w-[300px] text-center text-gray-600'>Te asesoraremos durante cada una de las etapas ANTES - DURANTE - DESPUES en tu entrevista laboral</p>
        </div>

        <div className='w-[340px] h-[450px] bg-white text-primarytext flex flex-col items-center justify-center rounded-xl my-4 mx-8'>
            <iframe className='w-[300px] h-[200px] rounded-lg bg-white mb-4' src="https://www.youtube.com/embed/tbRC1UJXlE8" title="W2 Asesores y Consultores - Conectarse para Crecer 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 className='text-xl font-semibold mb-4'>¿Cómo funciona Zoom?</h2>
            <p className='w-[230px] md:w-[300px] text-center text-gray-600'>Te asesoraremos durante cada una de las etapas ANTES - DURANTE - DESPUES en tu entrevista laboral</p>
        </div>
        </div>
        
    </div>
  )
}

export default ContainerVideos