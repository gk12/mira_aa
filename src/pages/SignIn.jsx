import React, { useState } from "react";
import logo1 from "../assets/logo/logo1.svg";
import logo2 from "../assets/logo/logo2.svg";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleRememberMeToggle = () => setRememberMe(!rememberMe);
  const handleSignIn = () => {
    navigate("/onBoarding/1");
    navigate("/profile");
    console.log("sign in success");
  };

  return (
    <div className='flex items-center justify-center h-screen w-full h-full bg-gray-100'>
      <button className='justify-center absolute top-0 right-0 mt-5 mr-5 px-5 py-3 text-base font-semibold leading-6 text-white whitespace-nowrap bg-blue-600 rounded-lg border border-blue-600 border-solid shadow-sm'>
        Sign up
      </button>
      <div className='flex w-full h-full mx-auto bg-white shadow-lg'>
        <div
          className='w-3/5 bg-cover bg-center'
          style={{ backgroundImage: `url(${logo2})` }}
        >
          {/* <img
            src={logo2}
            alt='Sign In'
            className='object-cover w-full h-full'
          /> */}
        </div>
        <div className='w-[30%] p-8 relative'>
          <div className='absolute top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2'>
            <img className='w-25 h-25 m-auto' src={logo1} alt=''></img>
            <h2 className='text-4xl font-bold mt-2'>Sign In</h2>
            <p className='mb-8 text-gray-600'>
              Please enter your username and password to access the portal.
            </p>
            <form className='flex flex-col gap-5  bg-white rounded-lg '>
              <input
                type='email'
                placeholder='name@mail.com'
                className='p-3 text-xl rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
              />
              <input
                type='password'
                placeholder='Password'
                className='p-3 text-xl rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
              />
              <label className='flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  className='form-checkbox h-5 w-5 text-blue-600'
                  onChange={handleRememberMeToggle}
                  checked={rememberMe}
                />
                <span className='ml-2 text-lg text-gray-700'>Remember me</span>
              </label>
              <button
                type='submit'
                onClick={handleSignIn}
                className='flex justify-center items-center px-16 py-3 text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
              >
                Sign-in
              </button>
              <button className='flex items-center font-black'>
                Forgot Password?
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
