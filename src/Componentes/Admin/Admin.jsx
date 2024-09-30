import React from 'react'
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import AdminLayout from './AdminLayout'
import MenuAdmin from './MenuAdmin'
import JobList from './JobList'
import BtnContainer from './BtnContainer'
import HeaderDashboard from './HeaderDashboard'
import HeaderAdmin from './HeaderAdmin'


function Admin() {
  return (
    <div className="flex font-dmsans flex-col">
      <HeaderAdmin />
      <MenuAdmin />
      <AdminLayout />
    </div>
  )
}

export default Admin