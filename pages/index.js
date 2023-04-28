import Image from 'next/image'
import { Inter } from 'next/font/google'
import BgVideo from '@/components/BgVideo'
import TextTransition, { presets } from 'react-text-transition';
import React from 'react';
const TEXTS = ['No credit check', 'Zero fees', 'Free wires' ,'Unlimited rewards'];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <main
    className='bg-grey-gradient relative'
    >
     
      <div className=' min-h-screen relative overflow-y-visible'>
      <BgVideo/>
        <div className='container mx-auto py-[318px] bg-transparent z-20 relative'>
        <h1 className='font-medium rubik text-[45px] leading-[60px] md:text-[95px] md:leading-[104px] text-clips switching-text'>
          <span className='text-[35px] leading-[50px] md:text-[59px]  md:leading-[80px] font-medium block text-clips small-header'>
            Business  banking with
          </span>
          <TextTransition springConfig={presets.gentle} className='z-[100] relative'>{TEXTS[index % TEXTS.length]}</TextTransition>
        </h1>
        <p className='my-6 text-lg text-clips description-text'>
          Thousands of entrepreneurs bank on Winden to start or grow their business. Open an account in under 3 minutes.
        </p>
        <button className='flex gap-[30px] bg-[#6936F5] text-white py-4 px-8 text-[15px] font-medium '>
          Get Started
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1027)">
              <path d="M15.6867 11.2362L11.5892 7.13873L12.6694 6L18.6109 12L12.6694 18L11.5892 16.8615L15.6867 12.764H6.38867V11.2362H15.6867Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_1027">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <img />
        </button>
        <div className='flex space-x-3 items-center mt-6 '>
          <img src='/images/sign-up-icon.png'/>
          <span className='text-sm description-text text-clips'>
          Sign up today and earn up to $200. Conditions apply. **
          </span>
        </div>
        </div>
       
      </div>
      <div className='relative bottom-[100px] md:bottom-[160px] lg:bottom-[210px] xl:bottom-[320px] overflow-y-visible container flex-col items-center flex justify-center mx-auto '>
          <img src='/images/section.png'/>
          {/* <img src='/images/phones.png'/> */}
        </div>

    </main>
  )
}
