"use client"
import React from 'react'

import { CarouselPlugin } from './Carousel'
import Conatainer from './Container'



const Projects: React.FC = () => (
  <div id="projects">

  <Conatainer>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Recent Works</h2>
    <CarouselPlugin
      />
  </Conatainer>
  </div>
)




export default Projects