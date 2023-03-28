import React from 'react'
import { item } from '../../utils/Items'
import Head from '../title'
import './index.scss'

const Company = () => {
  return (
    <>
    <div className='company-section'>
        <Head head={'RECOGNITION'} title={'Press Freatures'}/>
        <div className='companies'>
            {item.map(item=>{
                return <img src={item.icon} alt='img' key={item.id}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Company
