"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './button'
import Image from 'next/image'

const HeroSection = () => {

const Imageref = useRef(null) 

useEffect(() =>{

    const imageElement = Imageref.current;

    const handleScroll =()=>{

        const scrollPosition = window.scrollY;
        const scrollThreshold = 100
        
        if (scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
          } else {
            imageElement.classList.remove("scrolled");
          }
    };
    window.addEventListener('scroll', handleScroll)
    return () => 
        window.removeEventListener('scroll', handleScroll);
}, []);

  return (
   <section className='w-full pt-34 md:48 pb-10'>
    <div className='space-y-6 text-center '>
        <div className='space-y-6 mx-auto'>
            <h1 className='gradient-title text-7xl font-bold md:text-6xl  lg:text-7xl xl:text-8xl '>
            Your AI Career Coach for
            <br />
             Professional Success</h1>
             <p className='text-muted-foreground  mx-auto max-w-[600px] md:text-xl '>
             
                Advance your Career with personalized AI coaching and insights.
             </p>
             </div>
             <div className='flex justify-center space-x-4'>
                <Link href={"/dashboard"}>
                <Button size="lg" className='px-8'>
                    Get Started</Button>
                    </Link>
                    <Link href={"/dashboard"}>
                <Button variant="outline" size="lg" className='px-8'>
                    Get Started</Button>
                    </Link>
             </div>

             <div className="hero-image-wrapper mt-5 md:mt-0 mb-20">

                <div ref={Imageref} className='hero-image'>
                    <Image
                     
                    src={"/banner.jpeg"}
                    width={1140}
                    height={600}
                    alt="hero image"
                    className='rounded-lg shadow-2xl border mx-auto' 
                    priority
                    />

                </div>
             </div>
    </div>
   </section>
  )
}

export default HeroSection
