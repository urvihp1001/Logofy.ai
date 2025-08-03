import Lookup from '@/app/_data/Lookup'
import HeadingDesc from './HeadingDesc'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { SignInButton, useUser } from '@clerk/nextjs';

function PricingModel({formData}) {
    const {user}=useUser();
    useEffect(() => {
        // This effect runs once when the component mounts
       if(formData?.title&& typeof window!== 'undefined') {
        console.log('Form Data in PricingModel:', formData);
        localStorage.setItem('formData', JSON.stringify(formData));
       }

    }, [formData]);
  return (
    <div className=''>
        <HeadingDesc title={Lookup.LogoPricingModelTitle} description={Lookup.LogoPricingModelDesc} />
        <div className='grid grid-cols-2   gap-10 mt-10'>
            {Lookup.pricingOption.map((pricing, index) => {
                return (
                    <div key={index} className='flex flex-col items-center p-5 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer'>
                        <Image src={pricing.icon} alt={pricing.title} width={60} height={60} />
                        <h2 className='font-medium text-2xl'>{pricing.title}</h2>
                        <div>
                            {pricing.features.map((feature, idx) => (
                                <p key={idx} className='text-gray-600 text-sm mt-2'>{feature}</p>
                            ))}
                        </div>
                        {user?
                    <Button className="mt-5">{pricing.button}</Button> :
                    <SignInButton></SignInButton>   
                    }
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PricingModel
