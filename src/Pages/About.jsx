import React from 'react'
import "../styles/About.css"
import Hero from '../components/Hero'
import img2 from "../image/14.jpg"
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <div>
      <Hero
       cName="hero-about"
       heroImage={img2}
       title="About"   />
        <AboutUs/>
    </div>
  )
}

export default About
