import React from 'react'
import { AiOutlineSetting,AiOutlineDashboard, AiOutlineBell, AiOutlineExport, AiOutlineApartment,AiOutlineBgColors } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
const Left = () => {
    const history = useHistory()
    function dashboard() {
        history.push("/dashboard")
    }
    return (
        <div>
            <div className="logo text-blue-600 text-center pt-8">Yoursite!</div>
            <div className='leftIcons' >
            <div className='flex flex-row align-center mt-12 text-gray-700 hover:text-blue-600' onClick={dashboard}>
                    <AiOutlineDashboard className='mr-4' />
                    <h2>Dashboard</h2>
                </div>
                <div className='flex flex-row align-center mt-12 text-gray-700 hover:text-blue-600'>
                    <AiOutlineApartment className='mr-4' />
                    <h2>Projects</h2>
                </div>
                <div className='flex flex-row align-center mt-12 text-gray-700 hover:text-blue-600'>
                    <AiOutlineBgColors className='mr-4' />
                    <h2>Templates</h2>
                </div>
                
                <div className='flex flex-row align-center mt-12 text-gray-700  hover:text-blue-600'>
                    <AiOutlineExport className='mr-4' />
                    <h2>Export</h2>
                </div>
                <div className='flex flex-row align-center mt-12 text-gray-700 hover:text-blue-600'>
                    <AiOutlineSetting className='mr-4' />
                    <h2>Settings</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Left