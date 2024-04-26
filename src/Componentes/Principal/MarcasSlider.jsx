import React, { useRef, useEffect } from 'react';
import redondos from '../../assets/logo-lacruz.png';

function MarcasSlider() {
  

  return (
    <div class="slider font-dmsans">
        <h2 className='text-3xl font-semibold'>Empresas que confían en nosotros</h2>
        <div class="slide-track">
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>

            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
            <div class="slide">
                <img src={redondos} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default MarcasSlider;
