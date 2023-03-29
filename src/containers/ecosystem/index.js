import React from 'react'
import MainSection from '../../components/mainsection'
import logo from '../../assets/img/cmdx.png'
import { simple } from '../../utils/section'
import RowReverse from '../../components/rowReverse'

const EcoGlobal = () => {
  return (
   <>
   <div className='ecoGlobal-section'>
     <MainSection title={'Get CMDX and Stake'} img={logo}/>
   </div>
   <div>
    {simple.map(item=>{
        return <RowReverse {...item} key={item.id}/>
    })}
   </div>
   </>
  )
}

export default EcoGlobal
