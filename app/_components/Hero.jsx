import React from 'react'
import Lookup from '../_data/Lookup'

function Hero() {
  return (
    <div className='mt-32  flex flex-col items-center gap-5'>
        <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
        <h3 className='text-5xl text-center font-bold'>{Lookup.HeroSubhead}</h3>
        <p>{Lookup.HeroDesc}</p>
    </div>
  )
}

export default Hero