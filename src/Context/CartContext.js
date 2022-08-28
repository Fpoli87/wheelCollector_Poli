import { createContext, useState, useContext } from "react";

export const CartContext = createContext({
    cart: [],
    addProd: () => {},
    removeProd: () => {},
    clearCarrito: () => {},
    enCarrito: () => {},
    contarCarrito: () =>{}
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

    const contarCarrito = () => {
        let totalProductos = 0;
        for (let i = 0; i < cart.length; i++) {
        totalProductos += cart[i].count;
        }
        return totalProductos
    }    

    return (
        <CartContext.Provider value={{ cart,addProd,enCarrito,clearCarrito,removeProd,contarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider 


export const SaveOrder = () => {
    return useContext(CartContext)
}