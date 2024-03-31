import React, { useContext } from "react";
import { IMG_URL } from "./config";


const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo
}) => {
  
  return (
    <div className="Res-card-sm">
      <img src={IMG_URL + cloudinaryImageId} alt={name} />
      <h3 className="res-name">{name}</h3>
      <span className="res-rating-cost">{avgRating}  {costForTwo}</span>

      {Array.isArray(cuisines) && cuisines.length > 0 && (
        <span className="res-cuisines">{cuisines.join(", ")}</span>
      )}
      {/* <h4>📍 {lastMileTravelString} Away</h4> */}
      
    </div>
  );
};

export default RestrauntCard;
