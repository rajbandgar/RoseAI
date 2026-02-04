"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useCallback } from 'react'
import { Button } from './button'
import Image from 'next/image'

const HeroSection = () => {
  const imageRef = useRef(null) 

  // Optimized scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!imageRef.current) return;
    
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;
    
    // Use classList toggle for better performance
    imageRef.current.classList.toggle("scrolled", scrollPosition > scrollThreshold);
  }, []);

  useEffect(() => {
    // Throttle scroll events using requestAnimationFrame
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  return (
    <section className='w-full pt-34 md:48 pb-10'>
      <div className='space-y-6 text-center '>
        <div className='space-y-6 mx-auto'>
          <h1 className='gradient-title text-7xl font-bold md:text-6xl  lg:text-7xl xl:text-8xl '>
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className='text-muted-foreground  mx-auto max-w-[600px] md:text-xl '>
            Advance your Career with personalized AI coaching and insights.
          </p>
        </div>
        <div className='flex justify-center space-x-4'>
          <Link href={"/dashboard"}>
            <Button size="lg" className='px-8'>
              Get Started
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button variant="outline" size="lg" className='px-8'>
              Learn More
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0 mb-20">
          <div ref={imageRef} className='hero-image'>
            <Image
              src={"/banner.jpeg"}
              width={1140}
              height={600}
              alt="AI Career Coach Dashboard Preview"
              className='rounded-lg shadow-2xl border mx-auto' 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1140px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
