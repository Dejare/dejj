import React from 'react'
import '../dashboard/dashboard.scss'

const Projectcard = ({bg, num, projectProgress, projectName}) => {
  return (
    <div
            className="savingCardBottom bg-blue-600 rounded-xl text-white circular"
            style={{ backgroundColor: `${bg}` }}
        >
            <div className="heading">
                <div className="m-4 pt-4">
                    <p className="bold">#{num} Project</p>
                    <p className='text-lg'>{projectName}</p>
                </div>
                <hr className="w-2/4" />
                <div className="flex flex-row justify-between">
                    <div className="content m-8 m-auto">
                      <h1 className="text-9xl ">{projectProgress}</h1>
                      <p className="text-xl">of 100%</p>
                    </div>
                </div>
     
            </div>
        </div>
  )
}

export default Projectcard