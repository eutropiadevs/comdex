import React from 'react'
import { table } from '../../utils/DataInt'
import Secure from '../secure'
import Head from '../title'
import './index.scss'

const Cards = () => {
  return (
    <>
    <div className='cards-section'>
        <Head head={'DEVLOPERS'} title={'Why Build on Comdex'}/>
        <div className='cards-section_main'>
            {table.map(item=>{
                return <Secure key={item.id} {...item}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Cards
