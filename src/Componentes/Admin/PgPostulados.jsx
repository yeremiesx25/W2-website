import React from 'react'
import AdminLayout from './AdminLayout'
import Postulados from './Postulados'
import HeaderAdmin from './HeaderAdmin'
import MenuAdmin from './MenuAdmin'

function PgPostulados() {
  return (
    <div className='w-full h-screen max-h-screen'>
        
            <HeaderAdmin />
        <MenuAdmin />
        
        <div className='w-full h-screen flex flex-col  pl-64  pt-20'>
        <Postulados /></div>
    </div>
  )
}

export default PgPostulados