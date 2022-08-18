import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export default function CartCount (){
  const { cart } = useContext(CartContext);

  const [totalProductos, contarProductos] = useState(0);

useEffect(() => {
  const contarQuantity = ()=>{
    let totalProductos = 0;
    for (let i = 0; i < cart.length; i++) {
      totalProductos += cart[i].count;
  }
  return contarProductos(totalProductos)
  
  }
  contarQuantity();
  }, [cart]);

  return(
    cart.length === 0 ? <span></span> : <span className="carrito-contador">{totalProductos}</span>
  )
}