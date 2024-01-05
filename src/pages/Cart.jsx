import React from "react";
import UserContenxt from "../utils/UserContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "../component/ItemList";
import { clearItem } from "../utils/cartSlice";
const Cart = () => {
    const name = useContext(UserContenxt)
    const cartItems = useSelector(store=> store.cart.items)
    // console.log(cartItems)
    const distpatch =useDispatch()
    function clearCart(){
      distpatch(clearItem())
    }
  return (
    <>
      <section> 
        <div className=" my-[100px]  mx-auto h-auto lg:max-w-[1200px]">
            <h1 className="text-2xl  font-bold">{name.loggedInUser} Cart</h1>
            {cartItems.length === 0 && ( <p>Your Cart is empty </p>)}
            <div className="my-4">
                <ItemList item={cartItems}/>
                {cartItems.length !== 0   && <button onClick={clearCart} className="text-white bg-black rounded-lg p-2 m-2 ">Clear cart</button>}
            </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
