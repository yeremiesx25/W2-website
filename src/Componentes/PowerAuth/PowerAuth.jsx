import React from 'react'
import HeaderPowerAuth from './HeaderPowerAuth'
import HeroPowerAuth from './HeroPowerAuth'
import {Outlet} from 'react-router-dom'
import TrabajosContainer2 from '../Power/TrabajosContainer2'

function PowerAuth() {
  return (
    <div className='bg-white'>
    <HeaderPowerAuth />
    <HeroPowerAuth />
    <TrabajosContainer2 />

    <Outlet />
    </div>
  )
}

export default PowerAuth