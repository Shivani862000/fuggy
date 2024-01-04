import React from "react";
import { useState } from "react";
import { database } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const SignUp = () => {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(database, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: displayName
      });
      // console.log(user)
      history('/home');
    } catch (error) {
      console.error('Error creating user:', error.message);
      alert("Your email is already registered");
    }
  };

  return (
    <>
      <div className="flex items-center h-auto w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Sign Up
          </span>
          <form className={`mb-4 o`} onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">
                Username
              </label>
              <input
                type="username"
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                name="name"
                id="name"
                placeholder="Shivani Verma"
              />
            </div>
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
              <label  className="block text-xs mb-1">
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
            <button

              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          <a className="text-blue-700 text-center text-sm" href="/login">
            Forgot password?
          </a>
        </div>
      </div>
    </>
  );
};
