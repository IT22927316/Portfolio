import React from 'react'
import AniProject from '../prosection/AniProject'
import AnimatedTitle from './AnimatedTitle'

const Projects = () => {
  return (
    <div id="projects" className='bg-black pb-52'>
      <AnimatedTitle title="Projects" containerClass="!text-white text-center"/>
      <AniProject />
    </div>
  )
}

export default Projects