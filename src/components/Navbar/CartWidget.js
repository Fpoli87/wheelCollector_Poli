import React from "react";
import CartCount from "./CartCount";
import './cart.css'

const CartWidget = () => {
    return (
        <button className="btn btn-online-success ms-auto text-bg-primary cart-cart">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="feather feather-shopping-cart">
                
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <div className="cart-count">
                <CartCount />
            </div>
        </button>
    )
}

export default CartWidget;