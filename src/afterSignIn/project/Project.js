import React from 'react'
import Left from '../dashboard/Left'
import '../dashboard/dashboard.scss'
import Projectmain from './Projectmain'
const Project = () => {
  return (
    <div className='dashboard flex flex-row'>
    
    <div className='dashboard_left bg-blue-600 flex flex-col'>
      <Left/>
    </div>
    <div className='center'>
      <Projectmain/>
    </div>
  </div>
  )
}

export default Project