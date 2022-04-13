import React from 'react'
import '../styles/btn.scss'
const Button = ({btnName}) => {
  return (
    <div className='btn'>
        <button>
            {btnName}
        </button>
    </div>
  )
}

export default Button