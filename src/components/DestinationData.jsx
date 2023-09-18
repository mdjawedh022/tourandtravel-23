import React from 'react'
import "../styles/Destination.css";
import { Link } from 'react-router-dom';


const DestinationData = (props) => {
  return (
    <div>
       <div className={props.clName}>
        <div className="des-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image-volcano">
            <img src={props.img1} alt="img" />
            <img src={props.img2} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default DestinationData
