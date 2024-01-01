// import {headerImage} from '../component/images/Lunch1_vlksgq.webp'
import logo from "../assets/images/Lunch1_vlksgq.webp";
import logoSvg from "../assets/images/swiggy.svg";
import {Login } from './Login';
import { SignUp } from './Signup'
import { useState } from "react";
export const HomeScreen = () => {
  const [showlogin, setShowlogin] = useState(false);
  const [showSign, setShowsign] = useState(false);
  const showLogin = () => {
    setShowlogin(true);
    setShowsign(false);
  };
  function showSignup() {
    setShowsign(true);
    setShowlogin(false);
  }
  function closeForm() {
    setShowlogin(false);
    setShowsign(false);
  }
  return (
    <>
      <section className="main_section">
        <div className="container mx-auto lg:max-w-[1200px]">
          <div className="headerOne_wrapper flex ">
            <div className="pt-[40px] pr-[60px] max-w-[680px]">
              <div className="header_Wrapper flex justify-between">
                <div className="logo_wrapper flex items-center  max-w-max">
                  <img src={logoSvg} className="w-10 h-10 " alt="logo" />
                  <div className="text-black font-bold uppercase  font-sans text-2xl ">
                    Fuggy
                  </div>
                </div>
                <div className="wrapper_button">
                  <div className=" flex m-4 gap-3">
                    <button
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      onClick={showLogin}
                    >
                      login
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                      onClick={showSignup}
                    >
                      {" "}
                      sigin up
                    </button>
                  </div>
                  {showlogin ? (
                    <>
                      <div className=" login_button-wrapper flex items-center justify-center w-full absolute h-full  bg-white z-50 top-0 right-0 ">
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
                    </>
                  ) : (
                    ""
                  )}
                  {showSign ? (
                    <>
                      <div className="sign_button_container  flex items-center justify-center  w-full absolute h-full bg-white z-50 top-0 right-0  ">
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
                            or login to your account{" "}
                          </p>
                          <SignUp />
                        </div>
                      </div>
                    </>
                  ) : (
                    " "
                  )}
                </div>
              </div>
              <div className="mt-20">
                <h1> Movie marathon?</h1>
                <p>Order food from favourite restaurants near you.</p>
                <div className="location_Wrapper">
                  <input type="text"></input>
                  <button>Add location</button>
                </div>
                <div>
                  <p>POPULAR CITIES IN INDIA</p>
                  <ul className="flex flex-wrap gap-2">
                    <li>Ahmedabad</li>
                    <li>Bangalore</li>
                    <li>Chennai</li>
                    <li>Delhi</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>& more</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute left-[50% + 80px] transform  right-0 bg-cover bg-no-repeat h-full bg-hsla-26-5-70-20">
              <img
                src={logo}
                className="lg:w-[680px] lg:h-[540px] md:w-3 md:h-3"
                alt="logo"
              />
            </div>
          </div>
          <div className="container mx-auto lg:max-w-[1124px]">
            <div className="headerTwo_wrapper">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="container mx-auto lg:max-w-[1124px] md:max-w-[780px] sm:max-w-[360px]  ">
            <div className="headerThree_wrapper">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
