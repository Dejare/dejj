import React from 'react'
// import {HiSearch} from 'react-icons/hi'
import {AiOutlineSetting, AiOutlineBell, AiOutlinePlus} from 'react-icons/ai'
import { UserAuth } from "../../context/AuthContext";
import CenterCards from './CenterCards';
import { useHistory } from 'react-router-dom';
const Center = () => {
    const { user, logout } = UserAuth();
    const history = useHistory()
    function newProject() {
      history.push("/project")
    }
  return (
      <>
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
              <input type="search" className='dashboard_input rounded-xl focus:ring-1 hidden md:block' placeholder="Search templates.."/>
        </div>
        <div className='flex flex-row m-12'>
            <AiOutlineBell className='mr-8 text-3xl text-gray-600'/>
            <AiOutlineSetting className='mr-8 text-3xl text-gray-600'/>
            <h1 className='mr-8 text-3xl text-gray-600'>{user.email}</h1>
        </div>
    </div>
    <div className='md:m-12 md:mt-52 mt-12 m-4'>
        <h1 className='text-5xl coolvetica m-12'>Welcome <br /> <span className='coolvetica'>{user.email}</span></h1>
        <h1 className='m-12 text-5xl coolvetica text-blue-600'>Ready to create an online presence?</h1>
        <button className='cta rounded-xl text-white bg-blue-600 ml-12' onClick={newProject}>New Project &rarr;</button>
    </div>
    <div className='cardMain'>
    <CenterCards rotate="rotate(-4deg)" text="tell us a bit" text2="about YOU"/>
    <CenterCards rotate="rotate(16deg)" bg="#6fd08c" text="pick from a wide " text2=" range of templates"/>
    <CenterCards rotate="rotate(32deg)" bg="#fe5d26" text="Reach clients" text2="with one link"/>
    {/* <CenterCards rotate="rotate(-32deg)" bg="#fe5d26"/> */}
    </div>
    </>
  )
}

export default Center