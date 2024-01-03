import { useState, useContext, useEffect} from "react";
import Mylogo from "../assets/images/swiggy.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
import UserContenxt from "../utils/UserContext";
import { signOut } from "firebase/auth";
import { database } from "../FirebaseConfig";
import {  useNavigate } from "react-router-dom";
const Title = () => (
  <Link className=" " to="/">  <div className="text-white flex items-center mx-4">
    <img data-testid="logo" className=" h-10" src={Mylogo} alt="" />
    <h1 className="font-serif font-bold text-2xl m-0 mx-1">Fuggy </h1>
  </div>
  </Link>

);


const Header = () => {
   const useCont = useContext(UserContenxt)
  const location = useLocation();
  var homePath = location.pathname == '/'
  const cartItems = useSelector(store => store.cart.items);
  const history = useNavigate()
  function handleLogout(){
    signOut( database).then(val=>{
     history('/')
     sessionStorage.clear()
    })
  }
  useEffect(()=>{
    if(!sessionStorage.getItem("login")){
      history('/')
      console.log('workomng')
    }
  },[])


  return (
    
    <>
    {!homePath && 
   <div className={`font-Lato w-full  fixed top-0 z-50`}>
         <div className="bg-fixed items-center bg-black shadow-xl flex flex-col sm:justify-between sm:flex-row ">
           <Title />
           <div className="nav-items py-5 whitespace-nowrap">
             <ul className="flex text-white space-x-1 mx-4 ">
              
               <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800  `}>
                 <Link className=" " to="/about">About</Link>
               </li>
               <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800` }>
                 <Link className="" to="/help">Help</Link>
               </li>
               <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800  `}>
                 <Link data-testid="cart" className="" to="/cart">
                   Cart {`(${cartItems?.length})`}
                 </Link>
               </li>
               <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800 hover:scale-110`}>
                 <button
                   className="login"
                   onClick={handleLogout}
                 >
                   Logout
                 </button>
               </li>
               <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800   `}>
                 <Link className=" " to="/dashboard">{useCont.loggedInUser} </Link>
               </li>
             </ul>
           </div>
         </div>
       </div>}
    </>
   

  );
};
export default Header;
