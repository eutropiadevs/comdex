import React from 'react'
import './index.scss';


const CardTrans = ({icon, integer, text, id}) => {
  return (
    <>
        <div className='card-section' key={id}>
          <div className='card-section_main'>
            <div><span><img src={icon} alt='img'/></span></div>
            <h2>{integer}</h2>
            <p>{text}</p>
          </div>
        </div>
    </>
  )
}

export default CardTrans
