import React from 'react'
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import AdminLayout from './AdminLayout'
import MenuAdmin from './MenuAdmin'
import JobList from './JobList'
import BtnContainer from './BtnContainer'


function Admin() {
  return (
    <div className="flex font-dmsans">
      <HeaderPowerAuth />
      <MenuAdmin />
      <div className="flex-1 p-8 bg-gray-100 pt-20">
        <BtnContainer />
        <JobList />
      </div>
    </div>
  )
}

export default Admin