import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export default function CartCount (){
  const { cart, contarCarrito } = useContext(CartContext);

  const [totalProductos, contarProductos] = useState(0);
  

useEffect(() => {
  contarProductos(contarCarrito(contarProductos));
  }, [cart]);

  return(
    cart.length === 0 ? <span></span> : <span className="carrito-contador">{totalProductos}</span>
  )
}