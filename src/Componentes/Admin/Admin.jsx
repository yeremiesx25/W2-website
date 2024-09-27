import React from 'react'
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import AdminLayout from './AdminLayout'
import MenuAdmin from './MenuAdmin'
import JobList from './JobList'
import BtnContainer from './BtnContainer'
import HeaderDashboard from './HeaderDashboard'


function Admin() {
  return (
    <div className="flex font-dmsans">
      <HeaderPowerAuth />
      <MenuAdmin />
      <div className="flex-1 p-8 bg-gray-100 pt-20">
      <HeaderDashboard />
        <BtnContainer />
        <JobList />
      </div>
    </div>
  )
}

export default Admin