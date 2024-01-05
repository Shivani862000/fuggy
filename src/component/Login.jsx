
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { database } from "../FirebaseConfig";
import {useNavigate} from 'react-router-dom'

export const Login =()=>{
  const history = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const pass = e.target.password.value;
      signInWithEmailAndPassword(database,email,pass).then(val=>{
        history('/home')
        const dname = val?.user?.displayName
        sessionStorage.setItem("login",true)
        sessionStorage.setItem("Username",dname)
      }).catch(e=>{
        alert("Your email is not sign in ")
      })
    }
    return(
        <>

    <div className="flex items-center h-auto w-full  ">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>      
      <form className={`mb-4 o`} onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4 md:w-full">
              <label  className="block text-xs mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                name="email"
                id="email"
                placeholder="abcd@gmail.com"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xs mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          <button  className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>
    </div>
  </div>
        </>
    )
}
