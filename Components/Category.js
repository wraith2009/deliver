import React, { useState } from "react";
import { IMG_URL } from './config'; // Assuming IMG_URL is imported from config file
import { addItem } from "../Utils/cartSlice";
import { addItem } from "../Utils/cartSlice";
import {useDispatch} from "react-redux";

const Category = ({ category }) => {
    const [showItems, setShowItems] = useState(false);

    const handleAccordion = () => {
        setShowItems(prevState => !prevState);
    };
    const dispatch = useDispatch();

    // const handleAddItems = () => {
    //     dispatch(addItem("grapes"));
    // }

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    // console.log(category)
    return (
        <div className="Menu-items">
              <button className="menu-bar-btn" onClick={handleAccordion}>
                <h2 className="menu-title">
                    {category?.card?.card?.title}
                    {/* {category?.card?.card?.itemCards ? (${category?.card?.card?.itemCards.length}) : (${category?.card?.card?.categories.length})} */}
                </h2>
            </button>


            {showItems &&
            <div>{
            Array.isArray(category?.card?.card?.itemCards) ?
                category?.card?.card?.itemCards.map((item, index) => (
                    <div className="Item-n" key={index}>
                        <div className="item-left">
                            <p className="item-name">{item?.card?.info?.name}</p>
                            <div className="item-price">₹
                                {item?.card?.info?.price ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)}
                            </div>
                            <p className='item-description'>
                                {item?.card?.info?.description ? item?.card?.info?.description : ""}
                            </p>
                        </div>
                        {item?.card?.info.imageId ?
                         <div className="item-right">
                        
                         <img src={ IMG_URL + item?.card?.info.imageId } />
                         <button onClick={() => addFoodItem(item)}>Add+</button>
                        </div>
                         :
                         <div className="item-right">
                         <button onClick={() => addFoodItem(item)}>Add+</button>
                            </div>
                        }

                            
                           
                    </div>
                ))
                : category?.card?.card?.categories.map((categoryItem,subIndex)=>(categoryItem?.itemCards.map((item, indexCategory) => (
                    <div className="Item-n" key={indexCategory}>
                        <div className="left-item">
                            <p className="item-name">{item?.card?.info?.name}</p>
                            <div className="item-price">₹
                                {item?.card?.info?.price ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)}
                            </div>
                            <p className='item-description'>
                                {item?.card?.info?.description ? item?.card?.info?.description : ""}
                            </p>
                        </div>
                        {item?.card?.info.imageId ?
                         <div className="item-right">
                        
                         <img src={ IMG_URL + item?.card?.info.imageId } />
                         <button onClick={() => addFoodItem(item)}>Add+</button>
                        </div>
                         :
                         <div className="item-right">
                         <button onClick={() => addFoodItem(item)}>Add+</button>
                            </div>
                        }
                    </div>
                )
                )))
            }</div>}
        </div>
    );
};

export default Category;
