import React from 'react'
import Left from './Left'
import './dashboard.scss'
import Center from './Center'

const Dashboard = () => {
  return (
    <div className='dashboard flex flex-row'>
    
      <div className='dashboard_left bg-blue-600 flex flex-col'>
        <Left/>
      </div>
      <div className='center'>
        <Center/>
      </div>
    </div>
  )
}

export default Dashboard