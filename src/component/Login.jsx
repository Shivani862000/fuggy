
import React from "react";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";


export const Login =()=>{
    const [inputValue, setInputValue] = useState('');
    let navigate = useNavigate();
    const handleClick = () => {

    navigate("/dashboard");
     sessionStorage.setItem('login',true)
    };

  
    const handleChange = (event) => {
      setInputValue(event.target.value);

    };
    return(
        <>

    <div className="flex items-center h-auto w-full  ">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>      
        <form className="mb-4" >
          <div className="mb-4 md:w-full">
            <label for="email" className="block text-xs mb-1">Username or Email</label>
            <input type="email" value={inputValue} onChange={handleChange} className="w-full border rounded p-2 outline-none focus:shadow-outline"  name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div className="mb-6 md:w-full">
            <label for="password" className="block text-xs mb-1">Password</label>
            <input type="password" value={inputValue} onChange={handleChange} className="w-full border rounded p-2 outline-none focus:shadow-outline"  name="password" id="password" placeholder="Password"/>
          </div>
          <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
    </div>
  </div>
        </>
    )
}