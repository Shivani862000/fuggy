import logo from "../assets/images/Lunch1_vlksgq.webp";
import logoSvg from "../assets/images/swiggy.svg";
import { Login } from './Login';
import { SignUp } from './Signup';
import { useState } from "react";

export const HomeScreen = () => {
  const [showlogin, setShowlogin] = useState(false);
  const [showSign, setShowsign] = useState(false);

  const showLogin = () => {
    setShowlogin(true);
    setShowsign(false);
  };

  const showSignup = () => {
    setShowsign(true);
    setShowlogin(false);
  };

  const closeForm = () => {
    setShowlogin(false);
    setShowsign(false);
  };

  return (
    <>
      <section className="main_section ">
        <div className="container mx-auto lg:max-w-[1200px] sm:mx-10 sm:max-w-[100vw]">
          <div className="headerOne_wrapper flex flex-col lg:flex-row">
            <div className="pt-8 lg:pr-8 lg:max-w-[50vw] sm:max-w-[100vw]">
              <div className="header_Wrapper flex justify-between items-center">
                <div className="logo_wrapper flex items-center">
                  <img src={logoSvg} className="w-10 h-10" alt="logo" />
                  <div className="text-black font-bold uppercase font-sans text-2xl ml-2">
                    Fuggy
                  </div>
                </div>
                <div className="wrapper_button lg:ml-auto">
                  <div className="flex gap-3">
                    <button
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      onClick={showLogin}
                    >
                      Login
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                      onClick={showSignup}
                    >
                      Sign up
                    </button>
                  </div>
                  {showlogin && (
                    <div className="login_button-wrapper flex items-center justify-center w-full absolute h-full bg-white z-50 top-0 right-0">
                      <div>
                        <div className="btn-wrapper">
                          <button className="crossbtn" onClick={closeForm}>
                            {" "}
                          </button>
                        </div>
                        <p
                          className="text-red-600 cursor-pointer"
                          onClick={showSignup}
                        >
                          or create an account
                        </p>
                        <Login />
                      </div>
                    </div>
                  )}
                  {showSign && (
                    <div className="sign_button_container flex items-center justify-center w-full absolute h-full bg-white z-50 top-0 right-0">
                      <div>
                        <div className="btn-wrapper">
                          <button className="crossbtn" onClick={closeForm}>
                            {" "}
                          </button>
                        </div>
                        <p
                          className="text-red-600 cursor-pointer"
                          onClick={showLogin}
                        >
                          or login to your account
                        </p>
                        <SignUp />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-20">
                <h1 className="text-4xl font-bold text-center mt-8 mb-6 text-gray-800">
                  Create your <span className="text-green-500">Fuggy</span> account to unlock a personalized dining experience.
                </h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                  Save your favorite restaurants, track your order history, and set your preferences for a seamless, tailored journey through our culinary wonderland.
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute left-[50% + 80px] transform right-0 bg-cover bg-no-repeat h-full bg-hsla-26-5-70-20">
              <img
                src={logo}
                className="lg:w-[40vw] lg:h-[40vw] md:w-3 md:h-3"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
