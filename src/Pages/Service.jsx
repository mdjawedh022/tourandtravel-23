import React from 'react'
import "../styles/Service.css";
import Hero from '../components/Hero';
import img4 from "../image/16.jpg"
import Trip from '../components/Trip';
 const Service = () => {
  return (
    <div>
        <Hero
       cName="hero-service"
       heroImage={img4}
       title="Service"
    //    text="Chose Your Favourite Destination."  
      />
      <Trip/>
    </div>
  )
}

export default Service
