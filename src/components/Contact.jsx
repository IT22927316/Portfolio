import React from 'react'
import AnimatedTitle from './AnimatedTitle';

const Contact = () => {
  return (
    <div id="contact" className='bg-black pb-24'>
      <div className='text-center text-2xl pt-10 '>
        <AnimatedTitle title="Contact Now" containerClass="!text-white text-center"/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <video className='md:max-w-[420px]' 
        src="videos/lastloop.mp4" 
        alt="" 
        autoPlay
        muted
        loop
        />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-circular-web text-3xl text-white'><b>Rusiru De Silva</b></p>
          <p className='font-circular-web text-xl text-white'>Address : <br />No. 184,Kanampitiya Road,<br />Galle,<br /> Sri Lanka </p>
          <p className='font-circular-web text-xl text-white'>Mobile:  <br />(+94)-7570-33-849</p>
          <p className='font-circular-web text-xl text-white'>Email:  <br />russapaypal@gmail.com</p>
        </div>
      </div>

    </div>
  )
}

export default Contact;
