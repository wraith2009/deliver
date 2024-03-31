import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import useRestraunt from '../Utils/useRestraunt';
import { IMG_URL } from './config';
import Category from "./Category";
import logofake from '../images/for res-menu.jpg'
import Shimmer from "./Shimmer";



function Restaurantmenu() {
    const params = useParams();
    const { id } = params;

    // const [restaurant, setrestaurant] = useState(null);
      const[showRestraunt,setShowRestraunt]=useState([]);
      const restaurant = useRestraunt(id);
      console.log(restaurant);
      const filteredRestaurant=restaurant ?
        restaurant.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (f)=>f?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"||f?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
      :[]
      // console.log(restaurant);

      const restaurantdetail = restaurant ? 
      restaurant.cards[2]?.card?.card?.info
      : []
      console.log(restaurantdetail);
      console.log(filteredRestaurant)
      return (
        <div className="menu-sec">
        <div className="restraunt-details">
              <div className="left-side">
                <img src= {restaurantdetail?.logo ? IMG_URL + restaurantdetail?.logo : logofake} alt="logo"/> 
                
              </div>
              <div className="middle-side">
                <h2 className="res-name1">{restaurantdetail?.name}</h2> 
                
                <p>Locality: {restaurantdetail?.locality}</p>
                <p>Rating : {restaurantdetail?.avgRating} ({restaurantdetail?.totalRatings})</p>
                {/* <p>cuisines: {restaurantdetail.cuisines.join(", ")}</p> */}

                <p>{restaurantdetail.costForTwoMessage}</p>
              </div>
              <div className="right-side">
                <img src={IMG_URL+ restaurantdetail.cloudinaryImageId}/>
              </div>
        </div>
        {/* <h1>restaurant id: {id}</h1> */}
        {/* <h1>kyu nhi ho rha fetch</h1> */}
        <div className='menu-titles'>
        {filteredRestaurant?
          filteredRestaurant.map((title, index) => (
                    <div>
                      {/* <h2 key={index}>{title?.card?.card?.title}</h2>
                       */}
                      
                      <Category key={index} category={title}/>
                      
                    </ div>
                ))
              :<Shimmer />}


        </div>
    </div>
  )
}

export default Restaurantmenu;