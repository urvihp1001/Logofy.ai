"use client";

import Lookup from '@/app/_data/Lookup';
import HeadingDesc from './HeadingDesc';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/configs/FirebaseConfig';

function PricingModel({ formData }) {
  const router = useRouter();

  useEffect(() => {
    if (formData?.title && typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  const handleAuthAndSelect = async (pricing) => {
    const user = auth.currentUser;
    if (!user) {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (err) {
        console.error('Sign-in error:', err);
        return;
      }
    }
    const updatedData = { ...formData, pricingModel: pricing.title };
    localStorage.setItem('formData', JSON.stringify(updatedData));
    router.push('/generate-logo');  // Your route here
  };

  return (
    <div>
      <HeadingDesc
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />
      <div className="grid grid-cols-2 gap-10 mt-10">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          >
            <Image src={pricing.icon} alt={pricing.title} width={60} height={60} />
            <h2 className="font-medium text-2xl">{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, idx) => (
                <p key={idx} className="text-gray-600 text-sm mt-2">
                  {feature}
                </p>
              ))}
            </div>
            <Button className="mt-5" onClick={() => handleAuthAndSelect(pricing)}>
              {pricing.button}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;
