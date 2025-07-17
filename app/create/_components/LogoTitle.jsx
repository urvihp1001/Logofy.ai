"use client"
import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({ onHandleInputChange }) {
  const searchParams=useSearchParams()
  const [title, setTitle] = React.useState(searchParams?.get('title') || '')
  return (
    <div className='my-10'>
      <HeadingDesc title={Lookup.LogoTitle} description={Lookup.LogoTitleDesc} />
      <input type='text' placeholder={Lookup.InputTitlePlaceholdernputTitlePlaceholder} className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
      defaultValue={title}
      onChange={(e)=>onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoTitle