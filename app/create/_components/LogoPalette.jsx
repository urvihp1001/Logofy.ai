import { Heading } from 'lucide-react'
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

function LogoPalette({onHandleInputChange}) {

    const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='my-10'>
        <HeadingDesc    title={Lookup.LogoColorPaletteTitle} description={Lookup.LogoColorPaletteDesc} />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Colors.map((palette, index) => (
  <div
    key={index}
   onClick={() => {
  setSelectedOption(palette.name);
  onHandleInputChange(palette.name);
}}

    
    className={`flex cursor-pointer rounded-lg overflow-hidden transition border-2 ${
      selectedOption === palette.name ? 'border-primary' : 'border-transparent'
    }`}
  >
    {palette.colors.map((item, idx) => (
      <div
        key={idx}
        className="h-24 w-full"
        style={{ backgroundColor: item }}
      ></div>
    ))}
  </div>

                   
            ))}
        </div>
    </div>
  )
}

export default LogoPalette