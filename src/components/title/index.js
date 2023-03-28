import React from 'react'
import './index.scss'

const Head = ({head, title, text}) => {
  return (
   <>
   <div className='head-section'>
    <div className='head-section_sub'>
        <h4>{head}</h4>
        <h1>{title}</h1>
        <hr className='hr-line'/>
        <p>{text}</p>
    </div>
   </div>
   </>
  )
}

export default Head
