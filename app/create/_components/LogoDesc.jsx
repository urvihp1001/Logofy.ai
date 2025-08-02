import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className='my-10'>
        <HeadingDesc title={Lookup.LogoDescTitle} description={Lookup.LogoDescDesc} />
         <input type='text' placeholder="Enter Logo Description"
        value={formData.description || ''}
         className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
              
              onChange={(e)=>onHandleInputChange(e.target.value)}/>
    </div>
  )
}

export default LogoDesc