import axios, { Axios } from 'axios'
import React,{useEffect, useState} from 'react'
import Search from './Search'
import '../styles/main.scss'
import Button from './Button'
import Gifcard from './Gifcard'
import Gif from './Gif'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const [gifs, setGifs] = useState()
const [Active, setActive] = useState(false)
const [Activesticker, setActivesticker] = useState(false)
  useEffect(() => {
    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=YpvCPjedOXNcK5LMK9DbfmSvl4TUqZSU")
    .then((res)=>{
      setGifs(res.data.data)
      console.log(res.data.data)
    })
}, [])

const history = useHistory();
const stickers = ()=> {
  history.push("/sticker")
  setActive(false)
  setActivesticker(true)
}
const giif = () => {
  history.push("/")
  setActive(true)
  setActivesticker(false)
}

  return (
    <>
    <div className='home'>
            <header className='header'>
            <div className='logo'>GIFZONE</div>
            <div className='nav'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
        <div className='hero'>
            <h1>GIF ZONE!</h1>
            <p>Use cool stickers and GIF</p>
            <Search/>
            <h2>Trending !</h2>
            <div className='btnHolder'>
            <div className='btn'>
       {Active ? <button onClick={giif} style={{background: "crimson"}}>
            GIF's
        </button>:  <button onClick={giif}>
            GIF's
        </button>}
    </div>
    <div className='btn'>
       {Activesticker ?  <button onClick={stickers} style={{background: "crimson"}}>Stickers
        </button> :  <button onClick={stickers}>Stickers
        </button>}
    </div>
            </div>
            <div className='gifwrapper'>
            </div>
        </div>
   
    </div> 

    </> 
  )
}

export default Home