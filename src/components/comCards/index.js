import React from 'react'
import { data } from '../../utils/Items'
import ComdexCard from '../comdexCard'
import Head from '../title'
import './index.scss'

const ComCards = () => {
  return (
    <>
    <div className='comCards'>
        <Head title={'Recent Articles'} head={'EXPLORE'}/>
        <div className='comCards-section'>
            {data.map(item=>{
                return <ComdexCard {...item}/>
            })}
        </div>
    </div>
    </>
  )
}

export default ComCards
