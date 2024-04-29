import React from 'react'
import imgempresas from '../../assets/Designer-rafiki.png'
import imgpostulantes from '../../assets/Programming-rafiki.png'
import imgpracticantes from '../../assets/Notes-rafiki.png'
import { motion } from "framer-motion"


function Dirigido() {
  return (
    <div>
      <div className='flex'>
        <div className='w-96 bg-primarycolor flex flex-col items-center justify-center'>
          <span>icon</span>
          <h3>Empresas</h3>
          <p>Contribuir a la formación de valores en niños de diversos sectores del país.</p>
          <button>Ver más</button>
        </div>
        <div>
        <span>icon</span>
          <h3>Empresas</h3>
          <p>Contribuir a la formación de valores en niños de diversos sectores del país.</p>
          <button>Ver más</button>
        </div>
        <div>
        <span>icon</span>
          <h3>Empresas</h3>
          <p>Contribuir a la formación de valores en niños de diversos sectores del país.</p>
          <button>Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default Dirigido