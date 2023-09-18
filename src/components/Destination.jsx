import React from "react";
import "../styles/Destination.css";
import DestinationData from "./DestinationData";
import im1 from "../image/1.jpg";
import im2 from "../image/2.jpg";
import im3 from "../image/3.jpg";
import im4 from "../image/17.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see lot, within a time frame.</p>
      <DestinationData
        clName="first-destination"
        title="Taal Volcano, Batangas"
        text=" Taal Volcano is the smallest active volcano in the world. Its
     unexplained shape and location on an island within a lake within an
     island, makes it a unique geologic wonder, enthralling thousands of
     tourists and geologists yearly.Taal Volcano is the smallest active
     volcano in the world. Its unexplained shape and location on an
     island within a lake within an island, makes it a unique geologic
     wonder, enthralling thousands of tourists and geologists yearly. The municipality of Taal and the Taa-lan River (now known as Pansipit River) were named after the Taa-lan tree, which grows along the river. The tree also grew along the shore of Bombon Lake (now known as Taal Lake)."
        img1={im1}
        img2={im2}
      />
      <DestinationData
        clName="first-destination-reverse"
        title="Taj Mahal, India"
        text=" It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD.When Mumtaz died of postpartum complications, Jahan was inconsolable and plunged the imperial court into mourning for two entire years. He began planning the construction of the Taj Mahal, the ultimate testament of his love for his favorite wife."
        img1={im4}
        img2={im3}
      />
    </div>
  );
};

export default Destination;
