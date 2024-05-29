import React from 'react'
import HeaderPowerAuth from './HeaderPowerAuth'
import HeroPowerAuth from './HeroPowerAuth'
import MarcasSliderAuth from './MarcasSliderAuth'
import TrabajosContainer from '../Power/TrabajosContainer'
import BeneficiosPower from '../Power/BeneficiosPower'
import CtaPower from '../Power/CtaPower'
import ContainerVideos from '../Power/ContainerVideos'
import FooterPower from '../Power/FooterPower'
import BtnWsp from '../Principal/BtnWsp'
import {Outlet} from 'react-router-dom'
function PowerAuth() {
  return (
    <>
    <HeaderPowerAuth />
    <HeroPowerAuth />
    <TrabajosContainer />
    <FooterPower />
    <BtnWsp />
    <Outlet />
    </>
  )
}

export default PowerAuth