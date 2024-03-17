/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/GroupComponent1";
import group22 from "../assets/logo/Group 22.svg";
import mira from "../assets/logo/MIRA.svg";
import { MdOutlineDashboard } from "react-icons/md";
import avtar1 from "../assets/logo/avtar-1.png";
import ChatModel from "../components/ChatModel";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";

const Pipline = () => {
  return (
    <div className='overflow-x-hidden'>
      <GroupComponent1 />
      <Header />
      <div className='columns ml-[8rem] mt-24 w-full'>
        <div className='flex mt-2'>
          <div className='columns  w-[66%]'>
            <div className='h-[3rem] bg-white flex ml-1'>
              <h3>Dashboard</h3>
              <FaChevronRight className='w-4 h-4 mt-1' />
              <h3>Pipline</h3>
            </div>
            <div className='w-full h-full'>
              <div className='ml-1 columns'>
                <div>
                  <h1 className='font-black text-3xl'>Purchase</h1>
                </div>
                <div className='mt-5  overflow-auto'>
                  <div className='w-full h-[3rem] flex items-center bg-[#F4F6F8] border-b-2'>
                    <h3 className='w-[15%] font-black text-[#454F5B]'>
                      Profile ID
                    </h3>
                    <h3 className='w-[15%]  font-black text-[#454F5B]'>Name</h3>
                    <h3 className='w-[20%]  font-black text-[#454F5B] '>
                      Propert Address
                    </h3>
                    <h3 className='w-[20%] font-black text-[#454F5B] '>
                      Loan Officer
                    </h3>
                    <h3 className='w-[20%] font-black text-[#454F5B]'>
                      Amount
                    </h3>
                    <h3 className='w-[20%] font-black text-[#454F5B] '>
                      Status
                    </h3>
                    <h3 className='w-[25%]  font-black text-[#454F5B]'>
                      Actions
                    </h3>
                    <h3 className='w-[25%]  font-black text-[#454F5B] '>
                      Tools
                    </h3>
                  </div>
                </div>
                <div className='mt-5  overflow-auto'>
                  <div className='w-full h-[3rem] flex items-center bg-white'>
                    {/* <h1 className='font-semibold text-[#454F5B] pl-1 pr-1.25'></h1> */}
                    <h3 className='w-[15%] text-[#767778] '>123</h3>
                    <div className='w-[15%] justify-start flex font-black text-[#454F5B]'>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className=' text-[#12151a] font-semibold'>abcd</h3>
                        <h3 className='text-[#767778] '>abcd</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%]  font-black text-[#767778]  '>
                      453 science Way
                    </h3>
                    <div className='w-[20%]  flex font-black text-[#454F5B]'>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className='font-black text-[#454F5B] '>Harvey</h3>
                        <h3 className='text-[#767778] '>Berlin</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%] pl-4 font-black text-[#767778]  '>
                      $450,000
                    </h3>
                    <h3 className='w-[20%] pl-4 text-[#f17f3e] font-black'>
                      Eligible
                    </h3>
                    <select
                      className=' rounded-xl pr-2 pl-4 w-[25%] h-[3rem] font-semibold text-[#454F5B]  bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option
                        value='default'
                        className='rounded-xl text-[#767778] '
                        disabled
                      >
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>

                    <select
                      className=' rounded-xl m-2 w-[25%] h-[3rem] font-semibold text-[#454F5B] bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>
                  </div>
                </div>
                <div className='mt-5  overflow-auto'>
                  <div className='w-full h-[3rem] flex items-center bg-white'>
                    {/* <h1 className='font-semibold text-[#454F5B] pl-1 pr-1.25'></h1> */}
                    <h3 className='w-[15%] font-black text-[#767778] '>123</h3>
                    <div className='w-[15%] justify-start flex font-black text-[#454F5B]'>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className=' text-[#12151a] font-semibold'>abcd</h3>
                        <h3 className='text-[#767778]  '>abcd</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%]  font-black text-[#767778]  '>
                      453 science Way
                    </h3>
                    <div className='w-[20%] flex font-black text-[#767778] '>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className='font-black text-[#454F5B] '>Harvey</h3>
                        <h3 className='text-[#767778] '>Berlin</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%] pl-4 font-black text-[#767778]  '>
                      $450,000
                    </h3>
                    <h3 className='w-[20%] pl-4 text-[#f17f3e] font-black'>
                      Eligible
                    </h3>
                    <select
                      className=' rounded-xl pr-2 pl-4 w-[25%] h-[3rem] font-semibold text-[#454F5B] bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>

                    <select
                      className=' rounded-xl m-2 w-[25%] h-[3rem] font-semibold text-[#454F5B] bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='ml-4 columns mt-[7rem]'>
                <div>
                  <h1 className='font-black text-3xl'>Refinance</h1>
                </div>
                <div className='mt-5 overflow-auto'>
                  <div className='w-full h-[3rem] flex items-center bg-[#F4F6F8] border-b-2'>
                    {/* <h1 className='font-semibold text-[#454F5B] pl-1 pr-1.25'></h1> */}
                    <h3 className='w-[15%] font-black text-[#454F5B]'>
                      Profile ID
                    </h3>
                    <h3 className='w-[15%]  font-black text-[#454F5B]'>Name</h3>
                    <h3 className='w-[20%]  font-black text-[#454F5B] '>
                      Propert Address
                    </h3>
                    <h3 className='w-[20%] font-black text-[#454F5B] '>
                      Loan Officer
                    </h3>
                    <h3 className='w-[20%] font-black text-[#454F5B]'>
                      Amount
                    </h3>
                    <h3 className='w-[20%] font-black text-[#454F5B] '>
                      Status
                    </h3>
                    <h3 className='w-[25%]  font-black text-[#454F5B]'>
                      Actions
                    </h3>
                    <h3 className='w-[25%]  font-black text-[#454F5B] '>
                      Tools
                    </h3>
                  </div>
                </div>
                <div className='mt-5  overflow-auto'>
                  <div className='w-full h-[3rem] flex items-center bg-white'>
                    <h3 className='w-[15%] text-[#767778] '>123</h3>
                    <div className='w-[15%] justify-start flex font-black text-[#454F5B]'>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className=' text-[#12151a] font-semibold'>abcd</h3>
                        <h3 className='text-[#767778] '>abcd</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%]  font-black text-[#767778]  '>
                      453 science Way
                    </h3>
                    <div className='w-[20%]  flex font-black text-[#454F5B]'>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className='font-black text-[#454F5B] '>Harvey</h3>
                        <h3 className='text-[#767778] '>Berlin</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%] pl-4 font-black text-[#767778]  '>
                      $450,000
                    </h3>
                    <h3 className='w-[20%] pl-4 text-[#f17f3e] font-black'>
                      Eligible
                    </h3>
                    <select
                      className=' rounded-xl pr-2 pl-4 w-[25%] h-[3rem] font-semibold text-[#454F5B]  bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option
                        value='default'
                        className='rounded-xl text-[#767778] '
                        disabled
                      >
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>

                    <select
                      className=' rounded-xl m-2 w-[25%] h-[3rem] font-semibold text-[#454F5B] bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>
                  </div>
                </div>
                <div className='mt-5  overflow-auto'>
                  <div className='w-full h-[3rem] flex items-center bg-white'>
                    <h3 className='w-[15%] font-black text-[#767778] '>123</h3>
                    <div className='w-[15%] justify-start flex font-black text-[#454F5B]'>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className=' text-[#12151a] font-semibold'>abcd</h3>
                        <h3 className='text-[#767778]  '>abcd</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%]  font-black text-[#767778]  '>
                      453 science Way
                    </h3>
                    <div className='w-[20%] flex font-black text-[#767778] '>
                      <img src={avtar1} alt='logo' className='w-8 h-8 mr-2' />
                      <div className='columns'>
                        <h3 className='font-black text-[#454F5B] '>Harvey</h3>
                        <h3 className='text-[#767778] '>Berlin</h3>
                      </div>
                    </div>
                    <h3 className='w-[20%] pl-4 font-black text-[#767778]  '>
                      $450,000
                    </h3>
                    <h3 className='w-[20%] pl-4 text-[#f17f3e] font-black'>
                      Eligible
                    </h3>
                    <select
                      className=' rounded-xl pr-2 pl-4 w-[25%] h-[3rem] font-semibold text-[#454F5B] bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>

                    <select
                      className=' rounded-xl m-2 w-[25%] h-[3rem] font-semibold text-[#454F5B] bg-white border-[0.5px] border-[#c7c5c5]'
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Select an option
                      </option>
                      <option value='option1'>Run Eligibility</option>
                      <option value='option2'>Request Pre-approval</option>
                      <option value='option3'>Start Loan Application</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent />
        </div>
      </div>
    </div>
  );
};

export default Pipline;
