import {useSelector, useDispatch} from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "../Utils/cartSlice"
import cartBnaner from '../images/banner for cart.jpg'
import cartempty from '../images/cart-empty.png'


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) //if i only write im subscribing to the store
    //if i write store.cart then im subscribing to that cart slice
    //if i write store.cart.items then im only subscribing to only that items array
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (item?.card?.info?.price ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100));
    }, 0);
    
    const deliveryTax = (totalPrice/100)*5;

    const total = totalPrice + deliveryTax;
    // console.log(totalPrice);

    // console.log(cartItems);
    return(
        
        <div className="main-div-2">
        {cartItems.length === 0 ? (
            <img src={cartempty} className="cart-empty"/>
        ):(
            <div></div>
        )}
         
            
                
                
                {cartItems.length !== 0 ? (
                <div className="main-cart-div"> 
                    <div className="fun-sec">
                        <img className="banner" src={cartBnaner}/>
                    </div> 
                    <div className="below-section">
                        <div className="cart-items">
                            <div className="heading-CI">
                                <span>Cart-Items</span>
                                <button onClick={() => handleClearCart()}>Clear Cart</button>
                            </div>
                        {
                            cartItems.map((d) => (
                                <div className="main-cart-left">
                                    <div className="left-2">
                                    <p className="left-2-name">{d?.card?.info?.name}</p>
                                    <p className="left-2-price">₹{d?.card?.info?.price ? (d?.card?.info?.price / 100) : (d?.card?.info?.defaultPrice / 100)}</p>
                                    </div>
                                    <div className="right-2">
                                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + d.card.info.imageId}/>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        <div className="billing">
                            <div className="heading-billing">
                            <span>Billing Summary</span>
                            <button>Place Order</button>
                            </div>
                            <div className="t-price">
                                <h3 >totalPrice : </h3>
                                <span>₹{totalPrice}</span>
                            </div>
                            <div className="delivery-1">
                                <h3 >Added Tax : </h3>
                                <span>₹{deliveryTax.toFixed(2)}</span>
                            </div>
                            <div className="total">
                                <h3 >Total : </h3>
                                <span>₹{total}</span>
                            </div>
                        </div>
                    </div>
                </div>
                    ) : (
                    <div></div>
                    
                )}
            
            </div>
    )
}
export default Cart