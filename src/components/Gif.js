import React from 'react'
import Button from './Button'
import '../styles/gif.scss'

const Gif = ({image, text}) => {
  return (
      <div className='gifs'>
    <div className='container'>
    <div className='image'>
        <img  src={image}/>
    </div>
    <div className='containerDown'>
    <div>{text}</div>
    <button><a href={image} download="myimage">Download</a>
</button>
    </div>
    </div>
    </div>
  )
}

export default Gif