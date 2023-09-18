import React from 'react'
import "../styles/About.css"
import Hero from '../components/Hero'
import img2 from "../image/14.jpg"
const About = () => {
  return (
    <div>
      <Hero
       cName="hero-about"
       heroImage={img2}
       title="About"
    //    text="Chose Your Favourite Destination."  
      />
    </div>
  )
}

export default About
