import Item from "./item";
import Cart from "./cart";


function AppAddToCart(){
    return <div className="App">
        <Item name="MacBook Pro" price={10000}></Item>
        <Item name="Harddisk ssd" price={4000}></Item>
        <Item name="Mobile" price={7000}></Item>
        <Cart/>
    </div>
}

export default AppAddToCart;