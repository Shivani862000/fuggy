
import React from "react";
import { useState } from "react";
export const SignUp =()=>{
  const [inputValues, setInputValues] = useState('');
   
    
  const handleClick = () => {
      if(inputValues === "shivani"){
          console.log('push into dashboard page')
      }
      else{
          console.log('you are not sign up')
      }
  //   console.log('Input value:', inputValues);
  };

  const handleChange = (event) => {
    setInputValues(event.target.value);
  };
    return(
        <>
 <div className="flex items-center h-auto w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4">Sign Up</span>      
        <form className="mb-4" action="/" method="post">
          <div className="mb-4 md:w-full">
            <label for="Username" className="block text-xs mb-1">Username </label>
            <input type="username" value={inputValues} onChange={handleChange} className="w-full border rounded p-2 outline-none focus:shadow-outline"  name="Username" id="email" placeholder="Shivani Verma"/>
          </div>
          <div className="mb-4 md:w-full">
            <label for="email" className="block text-xs mb-1">Email</label>
            <input type="email" value={inputValues} onChange={handleChange} className="w-full border rounded p-2 outline-none focus:shadow-outline"  name="email" id="email" placeholder="abcd@gmail.com"/>
          </div>
          <div className="mb-6 md:w-full">
            <label for="password" className="block text-xs mb-1">Password</label>
            <input type="text" value={inputValues} onChange={handleChange} className="w-full border rounded p-2 outline-none focus:shadow-outline" name="password" id="password" placeholder="Password"/>
          </div>
          <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
    </div>
  </div>
        </>
    )
}