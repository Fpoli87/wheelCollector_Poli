import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import categorias from "../../pages/categorias";


export default function CartCount (){
  const { cart, contarCarrito } = useContext(CartContext);
  
  return(
    cart.length === 0 ? <span></span> : <span className="carrito-contador">{contarCarrito()}</span>
  )
}