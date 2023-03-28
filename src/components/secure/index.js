import React from 'react'
import './index.scss'

const Secure = ({id, title, icon, text}) => {
  return (
   <>
   <div className='secure-section' key={id}> 
    <div className='img-section'>
        <img src={icon} alt='img'/>
    </div>
    <h2>{title}</h2>
    <p>{text}</p>
   </div>
   </>
  )
}

export default Secure
