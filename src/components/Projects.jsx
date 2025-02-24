import React from 'react'
import AniProject from '../prosection/AniProject'
import AnimatedTitle from './AnimatedTitle'

const Projects = () => {
  return (
    <div id="projects" className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
      <AnimatedTitle title="Projects" containerClass="!text-white text-center"/>
      <AniProject />
      </div>
    </div>
  )
}

export default Projects