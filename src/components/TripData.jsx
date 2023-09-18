import React from 'react'
import "../styles/Trip.css"
const TripData = (props) => {
  return (
  <div className="trip-card">
    <div className="trip-img">
      <img src={props.image} alt="" />
    </div>
    <h4>{props.heading}</h4>
    <p>{props.text}</p>
  </div>
  )
}

export default TripData
