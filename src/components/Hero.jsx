import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { PiReadCvLogo } from "react-icons/pi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [LoadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 1;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    sethasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  }

  useEffect (() => {
    if(LoadedVideos == totalVideos -1) {
      setisLoading(false);
    }
  }, [LoadedVideos]);

  

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 30% 1%'
    })

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true
      }
    })
  })
  

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div id="hero" className='relative h-dvh w-screen overflow-x-hidden'>

      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
          <div className='three-body'>
            <div className='three-body__dot' />
            <div className='three-body__dot' />
            <div className='three-body__dot' />
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
        </div>
        <div>
          <video 
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
          />

          <video 
            src={getVideoSrc(currentIndex == totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
          WEB DEVELOPER
        </h1>

        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>RUSIRU DS</h1>
            <p className='mb-5 max-w-68 font-robert-regular text-blue-100 font-bold uppercase'>Crafting Digital Experiences That Inspire.<br />Web Developer | UI/UX Designer | Software Engineer</p>
          
            <Button 
              id="watch-trailer" 
              title="Download CV" 
              rightIcon={<PiReadCvLogo />} 
              containerClass="!bg-white flex-center gap-1"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'cv/RusiruCV.pdf'; 
                link.download = 'Rusiru_CV.pdf';
                link.click();
              }}
            />
          
          </div>
        </div>
      </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
          WEB DEVELOPER
        </h1>

    </div>
  )
}

export default Hero