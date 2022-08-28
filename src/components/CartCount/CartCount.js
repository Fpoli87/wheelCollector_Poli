import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export default function CartCount (){
  const { cart, contarCarrito } = useContext(CartContext);
  
  return(
    cart.length === 0 ? <span></span> : <span className="carrito-contador">{contarCarrito()}</span>
  )
}