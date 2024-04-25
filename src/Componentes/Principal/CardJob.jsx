import React from 'react'

function CardJob({NombreDelPuesto, ImagenEmpresa, ImagenUbicacion}) {
  return (
    <div className='h-28 bg-slate-100 rounded-xl flex items-center justify-around p-4 text-sky-950 font-lato' style={{borderRadius: ".5rem" , maxWidth: "700px"}}>
        <div className='w-16 h-16 max-w-16 bg-white overflow-hidden flex items-center justify-center' style={{borderRadius: "4px"}}>
            <img src={ImagenEmpresa} alt="" />
        </div>
        <div>
            <h2 className='text-base font-bold text-center'>{NombreDelPuesto}</h2>
            <div className='min-w-32 flex items-center justify-center flex-wrap p-2'>
                <strong className='text-sm p-2'>Lima Innovation Lab</strong>
                
                <div className='w-4 h-2.5 flex justify-center items-center'>
                    <img className='w-full' src={ImagenUbicacion} alt="" />
                </div>
                <span className='p-2'>Lima (Híbrido)</span>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default CardJob