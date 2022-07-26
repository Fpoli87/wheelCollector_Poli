import { createContext, useState } from "react";

export const cartContext = createContext({
    cart: [],
    addProd: () => {},
    removeProd: () => {},
    clearCarrito: () => {},
    enCarrito: () => {}
})

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProd = (item,count) => {
        if (enCarrito(item.id)){
            let index = cart.findIndex(i => i.item.id === item.id);
            let itemCart = cart[index];
            itemCart.count = itemCart.count + count;
            const newCart = [...cart];
            newCart.splice( index, 1, itemCart );
            setCart([ ...newCart ]);
        }
        else{
            let itemCart = {item,count}
            setCart([...cart, itemCart])
            } 
    }
    console.log(cart)

    const removeProd =  (item) => { 
        const newCart = cart.filter(i => i.item.id !== item.id);
        setCart([ ...newCart ]);  
    }

    const clearCarrito = ( ) => { 
        setCart([])
    }

    const enCarrito = (id) => { 
        return cart.some( (i) => i.item.id === id)
    }

    return (
        <cartContext.Provider value={{ cart,addProd,enCarrito,clearCarrito,removeProd }}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider 