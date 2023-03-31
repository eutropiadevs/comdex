import React from 'react'
import './index.scss'

const FundTitle = ({title, text}) => {
  return (
   <>
    <div className='fundtitle-section'>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
   </>
  )
}

export default FundTitle
