import React from 'react'
import EquipoW2 from '../../assets/Familia W22.gif'
function Equipo() {
  return (
    <div>
        <h2>¿Y tú quieres ser parte de W2?</h2>
        <div style={{backgroundImage: `url(${EquipoW2})` }}
        className='w-full h-96 bg-center'>

        </div>
    </div>
  )
}

export default Equipo