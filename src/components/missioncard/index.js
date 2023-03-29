import React from 'react'
import './index.scss'

const MissionCard = ({id, title, icon, text}) => {
  return (
   <>
   <div className='missioncard-section' key={id}> 
    <div className='mission-img'>
        <img src={icon} alt='img'/>
    </div>
    <div className='missioncard-section_sub'>
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
   </div>
   </>
  )
}

export default MissionCard
