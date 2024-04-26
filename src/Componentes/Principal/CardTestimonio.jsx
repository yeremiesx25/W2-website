import React from 'react'
import redondos from '../../assets/logo-lacruz.png'


function CardTestimonio() {
  return (
    <div 
    style={{width:'500px'}}
    className='flex flex-col items-center justify-center h-80 w-96'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet ipsum impedit totam consectetur tenetur enim iure soluta mollitia repellat?</p>
        <div className='w-32 h-32 bg-white rounded-full'>
          <img className='w-32 h-32' src={redondos} alt="" />
        </div>
        <h3></h3>
        <h4></h4>
    </div>
  )
}

export default CardTestimonio