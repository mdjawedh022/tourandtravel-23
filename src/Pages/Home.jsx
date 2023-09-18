import React from 'react'
import "../styles/Home.css";
import Hero from '../components/Hero';
import img1 from "../image/15.jpg"
import Destination from '../components/Destination';
const Home = () => {
  return (
    <div>
  <Hero
  cName="hero"
  heroImage={img1}
  title="Explore The Dream place"
  text="Chose Your Favourite Destination."
  btntext="Travel Plan"
  url="/"
  btncl="showbtn"
  />
  <Destination/>
    </div>
  )
}

export default Home
