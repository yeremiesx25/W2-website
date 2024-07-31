import React from 'react'
import HeaderPower from './HeaderPower'
import HeroPower from './HeroPower'
import TrabajosContainer from './TrabajosContainer'
import BeneficiosPower from './BeneficiosPower'
import CardBeneficioPower from './CardBeneficioPower'
import CtaPower from './CtaPower'
import ContainerVideos from './ContainerVideos'
import FaqPower from './FaqPower'
import FooterPower from './FooterPower'
import BtnWsp from '../Principal/BtnWsp'
import gradiantPower from '../../assets/gradiantPower.svg'
function Power() {
  return (
    <>
    <div style={{ backgroundImage: `url(${gradiantPower})` }}
    className='w-full bg-cover'>
      <HeaderPower />
      <HeroPower />
    </div>
    
    <BeneficiosPower />
    <TrabajosContainer />
    <CtaPower />
    <ContainerVideos />
    <FooterPower />
    <BtnWsp />
    </>
  )
}

export default Power