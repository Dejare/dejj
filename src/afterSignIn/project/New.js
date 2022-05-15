import React, { useState } from 'react'
import Left from '../dashboard/Left'
import Aboutproject from './Aboutproject'
const New = () => {
    const [ProjectCreated, setProjectCreated] = useState(false)
    const [Load, setLoad] = useState(true)
    const getData = function (data) {
        console.log(data);
        setProjectCreated((prevData) => {
            return [...prevData, data];
        });
        console.log(ProjectCreated);
    };
    return (

        <div className='dashboard flex flex-row'>

            <div className='dashboard_left bg-blue-600 flex flex-col'>
                <Left />
            </div>
            <div className='center'>
                <div>New</div>
                {/* {ProjectCreated.map((proj)=> {
                    return(
                        <h1 key={proj.id}>{proj.pro}</h1>
                    )
                })} */}

                {Load ? <Aboutproject onAddData={getData} /> : null}


            </div>
        </div>
    )

}

export default New