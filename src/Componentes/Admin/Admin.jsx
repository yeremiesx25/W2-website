import React from 'react'
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import AdminLayout from './AdminLayout'


function Admin() {
  return (
    <div className='w-full h-screen'>
        <HeaderPowerAuth />
        <AdminLayout />
    </div>
  )
}

export default Admin