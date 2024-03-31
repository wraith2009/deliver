import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; // Example icon

import logoimg from '../images/foodapp-logo.jpg';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector(store => store.cart.items);
    const userName = useSelector((state) => state.auth.username);
    console.log(cartItems);

    return (
        <div className="header-main">
            <div className="app-logo">
                <img src={logoimg} alt='logo' />
            </div>
            <div className="nav-tags">
                <Link to="/">
                    <a>Home</a>
                </Link>

                <Link to="/about">
                    <a>About</a>
                </Link>

                <Link to="/Contact">
                    <a>Contact</a>
                </Link>

                <Link to="/Instamart">
                    <a>Instamart</a>
                </Link>

                <Link to="/cart">
                    <a>
                        <FontAwesomeIcon icon={faCartPlus} />
                        Cart - {cartItems.length}
                    </a>
                </Link>
                
                {!userName && (
                    <Link to="/Authentication">
                    <button className="login-btn">Login</button>
                </Link>
                )}
                {userName && (
                    <a>
                        {userName}
                    </a>
                )
                }
                

            </div>
        </div>
    );
}

export default Header;
