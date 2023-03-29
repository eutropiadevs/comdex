import React from 'react'
import './index.scss'
import Head from '../title'
import { card } from '../../utils/Items'
import ComunityCard from '../communityCard'

const Community = () => {
  return (
    <>
    <div className='community-section'> 
        <Head title={'Join The Community'} head={'OUR COMMUNITY'}/>
        <div className='community-section_main'>
            {card.map(item=>{
                return <ComunityCard key={item.id} {...item}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Community
