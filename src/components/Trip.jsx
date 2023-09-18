import React from "react";
import "../styles/Trip.css";
import TripData from "./TripData";
import im2 from "../image/2.jpg";
import im3 from "../image/6.jpg";
import im4 from "../image/15.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination Google Maps.</p>

      <div className="tripcard">
        <TripData
          image={im2}
          heading="Trip in Indonesia"
          text="The best time to visit Indonesia is between April and October, when the weather is perfect for island-hopping, snorkeling, and beach relaxation. Bridging the Equator, Indonesia is hot all year round, with the only change coming between November and March when the country sees widespread rain, particularly in the south."
        />

        <TripData
          image={im3}
          heading="Trip in Malaysia"
          text=" Malaysia is famous for its diverse landscapes, such as the tropical resorts in the coastal cities of Malacca and Georgetown. Additionally, there are several natural heritage sites including Gunung Mulu National Park and Kinabalu Park.Rich cultural history, beautiful historical landmarks and mesmerizing local lifestyle attracts so many tourists from around the globe."
        />

        <TripData
          image={im4}
          heading="Trip in Italy"
          text="It has beautiful scenery ranging from its scenic coastal areas to its colourful mountain ranges. It has a vast wealth of culture, architecture and ancient sites. It has modern cities that embody contemporary Italy, and don't forget Italy's gifts to the world's taste buds, its wonderful cuisine and wines."
        />
      </div>
    </div>
  );
};

export default Trip;
