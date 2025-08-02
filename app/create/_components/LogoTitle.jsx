'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'

function LogoTitle({ onHandleInputChange, formData }) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const titleParam = searchParams?.get('title')
    if (titleParam && titleParam !== formData?.title) {
      onHandleInputChange(titleParam)
    }
  }, [])

  return (
    <div className='my-10'>
      <HeadingDesc title={Lookup.LogoTitle} description={Lookup.LogoTitleDesc} />
      <input
        type='text'
        placeholder={Lookup.InputTitlePlaceholdernputTitlePlaceholder}
        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={formData?.title || ''}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoTitle
