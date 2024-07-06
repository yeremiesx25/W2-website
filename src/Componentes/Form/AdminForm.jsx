import React from 'react'
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import FormOferta from './FormOferta'
import EditJob from './EditJob'


function AdminForm() {
  return (
    <div>
        <HeaderPowerAuth />
        <FormOferta />
        <EditJob />
    </div>
    
  )
}

export default AdminForm