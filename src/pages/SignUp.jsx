import React, { useState } from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import logo3 from "../assets/logo/logo3.svg";
import { LuContact2 } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const SignIn = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
  };

  return (
    <div className='flex w-full h-screen flex-col items-center  text-base leading-6 bg-white rounded-3xl text-slate-700 relative'>
      <div className='flex gap-5 justify-between items-start self-stretch mx-7 font-semibold text-white whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/172c87786ecba323465572ed0d80ee30599d3c19669e6bd21ff85120d6443a64?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
          alt='Logo'
          className='shrink-0 mt-2 max-w-full aspect-[2.44] w-[111px]'
        />
        <button className='justify-center mt-5 px-5 py-3 bg-blue-600 rounded-lg border border-blue-600 border-solid shadow-sm'>
          Sign-in
        </button>
      </div>
      <form className='flex flex-col px-5 text-sm leading-5 max-w-[390px] w-[35rem] text-slate-700'>
        <div className='w-full text-xl font-bold text-black'>Sign up</div>
        <div className='mt-3 w-full text-lg text-neutral-500'>
          Please enter your username password to <br /> complete the sign up
          process.
        </div>
        <div className='mt-8'>
          <label htmlFor={"firstName"} className='w-full font-medium'>
            {"Enter Your First Name"}
          </label>
          <div className='flex gap-2 px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'>
            <div className='flex flex-auto gap-2'>
              <LuContact2 className='shrink-0 my-auto aspect-square w-[19px]' />
              <input
                className='flex-auto border-none'
                name='firstName'
                type='text'
                placeholder='Enter'
                value={userForm.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <label htmlFor={"lastName"} className='w-full font-medium'>
            {"Enter your last name"}
          </label>
          <div className='flex gap-2 px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'>
            <div className='flex flex-auto gap-2'>
              <LuContact2 className='shrink-0 my-auto aspect-square w-[19px]' />
              <input
                className='flex-auto border-none'
                name='lastName'
                type='text'
                placeholder='Enter'
                value={userForm.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <label htmlFor={"email"} className='w-full font-medium'>
            {"Enter your mail id"}
          </label>
          <div className='flex gap-2 px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'>
            <div className='flex flex-auto gap-2'>
              <FiMail className='shrink-0 my-auto aspect-square w-[19px]' />
              <input
                className='flex-auto border-none'
                name='email'
                type='email'
                placeholder='Enter'
                value={userForm.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <label htmlFor={"phone"} className='w-full font-medium'>
            {"Enter your phone number"}
          </label>
          <div className='flex gap-2 px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'>
            <div className='flex flex-auto gap-2'>
              <HiDevicePhoneMobile className='shrink-0 my-auto aspect-square w-[19px] border-gray-500' />
              <input
                className='flex-auto border-none'
                name='phone'
                type='number'
                placeholder='Enter'
                value={userForm.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          type='submit'
          onClick={formSubmit}
          className='overflow-hidden relative rounded-lg flex-col items-center py-2 px-16 pb-3 mt-12 w-full text-2xl font-bold text-white whitespace-nowrap aspect-[7.5] bg-blue-600 '
        >
          Sign up
        </button>
      </form>
      <div
        className='bg-cover bg-center w-full h-[5rem] absolute bottom-0'
        style={{ backgroundImage: `url(${logo3})` }}
      ></div>
    </div>
  );
};

export default SignIn;
