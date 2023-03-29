import React from 'react'
import { mission } from '../../utils/Items'
import MissionCard from '../missioncard'
import Head from '../title'
import './index.scss'

const Mission = () => {
  return (
   <>
   <div className='mission-section'>
    <Head title={'Our Mission'} head={'DISCOVER'}/>
    <div className='mission-section_main'>
        <div className='lootie'>lootie</div>
        {mission.map(item=>{
            return <MissionCard key={item.id} {...item}/>
        })}
    </div>
   </div>
   </>
  )
}

export default Mission
