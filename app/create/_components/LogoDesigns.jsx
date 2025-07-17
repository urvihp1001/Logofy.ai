import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import LogoDesig from '@/app/_data/LogoDesig'
import { set } from 'mongoose';

function LogoDesigns({onHandleInputChange}) {
     const [selectedOption, setSelectedOption] = useState();
return (
    <div className="my-10">
        <HeadingDesc 
            title={Lookup.LogoDesignTitle}
            description={Lookup.LogoDesignDesc}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {LogoDesig.map((design, index) => (
                <div
                    key={index}
                    onClick={() => {
                        setSelectedOption(design.title);
                        onHandleInputChange(design.title);
                    }}
                    className={`rounded-2xl overflow-hidden border-2 ${selectedOption === design.title ? 'border-primary' : 'border-gray-300'} hover:border-primary cursor-pointer transition-shadow w-full`}
                >
                    <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    </div>
)
}

export default LogoDesigns