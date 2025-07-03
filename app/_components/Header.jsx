import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex items-center justify-between'>
       <Image src="/logo.svg" alt="Logo" width={180} height={50} /> 
       <Button>Get Started</Button>
    </div>
  )
}

export default Header