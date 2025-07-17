import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({ onHandleInputChange }) {
  return (
    <div className='my-10'>
        <HeadingDesc title={Lookup.LogoDescTitle} description={Lookup.LogoDescDesc} />
         <input type='text' placeholder={Lookup.InputTitlePlaceholdernputTitlePlaceholder} className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
              
              onChange={(e)=>onHandleInputChange(e.target.value)}/>
    </div>
  )
}

export default LogoDesc