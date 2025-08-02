"use client"
import React,{useState} from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesigns from './_components/LogoDesigns'
import LogoPalette from './_components/LogoPalette'
import LogoDesc from './_components/LogoDesc'
import PricingModel from './_components/PricingModel'


function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const onHandleInputChange = (field,value) => {
    // Handle input change logic here 
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
    console.log('Form Data:', formData);
  }

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
       {step==1?<LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title',v)} formData={formData}/>:
        step==2?<LogoDesc onHandleInputChange={(v)=>onHandleInputChange('description',v)} formData={formData}/>:
        step==4?<LogoPalette onHandleInputChange={(v)=>onHandleInputChange('palette',v)} formData={formData}/>:
        step==3?<LogoDesigns onHandleInputChange={(v)=>onHandleInputChange('designs',v)} formData={formData}/>:
        step==5?<PricingModel formData={formData}/>:
       
        null}
      <div className='flex items-center justify-between mt-10'>
       {step!=1&& <Button variant={"outline"} onClick={()=>setStep(step-1)}>
          <ArrowLeft/>Previous
        </Button>}
        <Button onClick={()=>setStep(step+1)}><ArrowRight/>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CreateLogo