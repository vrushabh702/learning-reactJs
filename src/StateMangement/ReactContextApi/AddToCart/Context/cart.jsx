import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);

// create custom hooks
export const useCart = () =>{
    const cart = useContext(cartContext);
    return cart
}

export const CartProvider = (props) =>{
    const [items, setItems] = useState([])

    return(
        <cartContext.Provider value={{items, setItems}}>
            {props.children}
        </cartContext.Provider>

    );
};