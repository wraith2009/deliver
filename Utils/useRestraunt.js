import React, { useState , useEffect} from 'react'

function useRestraunt(id) {
    const [Restaurant, setRestaurant] = useState(null);

     //get data from api
    
    useEffect(()=> {
        getRestrauntInfo();
      },[]);
  
      async function getRestrauntInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json =  await data.json();
        setRestaurant(json.data)
      }
  
      return Restaurant;
};

export default useRestraunt