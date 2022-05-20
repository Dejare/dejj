import React, {useState, useRef, useEffect} from 'react'
import './home.scss'
import  {HiOutlineMenuAlt3, HiPlay} from 'react-icons/hi'
import { Link, useHistory } from 'react-router-dom'
import Register from '../auth/Register'
const Home = () => {
    const [Darkmode, setDarkmode] = useState(false)
    const navigate = useHistory()
    function dark() {
        setDarkmode(!Darkmode)
    }
    function handleClick() {
        navigate.push("/register")
    }
  return (
    <div className='home bg-white text-blue-600'>
    <div className='flex flex-row justify-between p-8'>
        <div className="logo">Yoursite.</div>
        <div>
            <HiOutlineMenuAlt3 onClick={dark}/>
        </div>
    </div>
    <div className='hero absolute ml-12'>
        <div className="text">
            <h1 className='text-8xl coolvetica'>Create your online presence <br /> in minutes.</h1>
            <p className='mt-4 pr-12'>It doesnt matter if you are a writer, photographer, teacher. Yoursite helps to showcase your works on the internet for FREE.</p>
            <div className='flex pr-12'>
            
                    <Link className='w-100 bg-blue-600 text-white rounded mt-2 text-left p-4' onClick={handleClick}>Get Started</Link>
              
                <Link to="/hiw" className='flex flex-row bg-blue-600 text-white rounded mt-2 text-left ml-4 p-4'>
                  <HiPlay/>  Watch How it Works
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home