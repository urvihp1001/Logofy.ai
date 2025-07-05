"use client"
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Hero() {
  const [logoTitle, setLogoTitle] = useState()
  return (
    <div className='mt-32 flex flex-col items-center gap-5'>
      <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h3 className='text-5xl text-center font-bold'>{Lookup.HeroSubhead}</h3>
      <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>
      <div className='w-full max-w-2xl mt-10 flex gap-6'>
        <input
          type="text"
          placeholder={Lookup.InputPlaceholder}
          className='p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary shadow-md'
          onChange={(e) => setLogoTitle(e.target.value)}
        />
        <Link href={`/create?title=`+logoTitle}>
        <Button className='bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors p-6'>
            Get Started
          </Button></Link>
          
        
      </div>
    </div>
  )
}

export default Hero