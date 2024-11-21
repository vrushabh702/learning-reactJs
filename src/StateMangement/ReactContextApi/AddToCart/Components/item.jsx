import React  from "react";
import { useCart } from "../Context/cart";

const Item = (props) =>{
    // const cart = useContext(cartContext);
    const cart = useCart()
    console.log('cart' , cart);

    return (
        <div className="item-card">
            <h4>Item {props.name}</h4>
            <h4>Price: {props.price}</h4>
            <button
                    onClick={()=>{
                        cart.setItems([
                           ...cart.items,
                           {name: props.name, price: props.price}  
                        ])
                    }}
            >Add To Cart</button>
        </div>
    );
};

export default Item;