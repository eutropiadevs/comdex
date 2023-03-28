import React from 'react'
import './index.scss'

const ComdexCard = ({id, title, text, date, icon, img, btn}) => {
  return (
   <>
   <div className='comdexCard-section' key={id}>
    <img src={img} alt='img' className='main-img'/>
    <div className='comdexCard'>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className='btn-section'>
            <strong>LEARN MORE</strong>
            <img src={icon} alt='img'/>
        </div>
    </div>
   </div>
   </>
  )
}

export default ComdexCard
