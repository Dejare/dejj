import React from 'react'

const CenterCards = ({text, text2, rotate, bg}) => {
  return (
    <div className='centerCards bg-pink-500 rounded-xl mt-12 flex align-center justify-center items-center' style={{transform: `${rotate}`, backgroundColor: `${bg}`}}>
      <h1 className='text-center '>
      {text} <br /> {text2}
      </h1>
    </div>
  )
}

export default CenterCards