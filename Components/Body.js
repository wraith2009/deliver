import React, { useState, useEffect } from 'react';
import RestrauntCard from './RestrauntCard';
import { IMG_URL, RES_API } from './config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';
import Crowsel from './Crowsel';
import {useDispatch} from 'react-redux';
import { clearCart } from "../Utils/cartSlice"

const filterData = (searchText, restaurants) => {
    return restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
};



function Body() {
    const [Allrestaurants, setAllrestaurants] = useState([]);
    const [Filteredrestaurants, setFilteredrestaurants] = useState([]);
    const [SearchText, setSearchText] = useState("");

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const response = await fetch(RES_API);
            if (!response.ok) {
                throw new Error('Failed to fetch restaurants');
            }
            const json = await response.json();
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setAllrestaurants(restaurants);
            setFilteredrestaurants(restaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline, please check your internet connection..</h1>;
    }

    if (!Filteredrestaurants || !Filteredrestaurants.length) {
        return <Shimmer />;
    }

    return (
        <div className="Body-main">
            <Crowsel />
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={SearchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(SearchText, Allrestaurants);
                        setFilteredrestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-pick">
                <h2>Top Restaurant Pick For You</h2>
            </div>
            <div className="res-card">
                {Filteredrestaurants.map((restaurantObject) => (
                    <Link to={`/restaurant/${restaurantObject.info.id}`} key={restaurantObject.info.id} onClick={() => handleClearCart()}>
                        <RestrauntCard {...restaurantObject.info}   />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
