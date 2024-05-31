import React from 'react'
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth'
import AddButton from './AddButton'
import JobsList from './JobsList'

function Admin() {
  return (
    <div className='w-full'>
        <HeaderPowerAuth />
        <AddButton />
        <JobsList />
    </div>
  )
}

export default Admin