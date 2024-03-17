/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/GroupComponent1";
import group22 from "../assets/logo/Group 22.svg";
import mira from "../assets/logo/MIRA.svg";
import GroupComponent1 from "../components/GroupComponent1";
import { MdOutlineDashboard } from "react-icons/md";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [instructions, setInstructions] = useState(true);
  const [instructionMessages, setInstructionMessages] = useState([
    "Explore mortgage plans, financial advice, and investment strategies with us.",
    "Need help with finances? Ask about mortgages or loan <br /> rates",
    "Curious about finance? Inquire about mortgages guidance here.",
  ]);
  const handleNextButton = () => {
    navigate("/liability");
  };
  const [messages, setMessages] = useState(["a", "b", "c", "d", "e", "f", "g"]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className='overflow-hidden'>
      <GroupComponent1 />
      <Header />
      <div className='columns ml-[8rem] mt-24 w-full'>
        <div className='columns '>
          <div className='w-[15rem] h-[3rem] bg-white flex '>
            <h3>Dashboard</h3>
            <FaChevronRight className='w-4 h-4 mt-1' />
            <h3>Assests</h3>
          </div>
          <div className='h-40 w-full'>
            <h2 className='font-bold text-[#BFBFBF] text-2xl'>
              Personal Details
            </h2>
            <h2 className='font-bold py-4 text-[#BFBFBF] text-2xl'>
              Loan Infomation
            </h2>
            <h2 className='font-bold py-4 text-[#BFBFBF] text-2xl'>
              Employment and Income
            </h2>
            <h2 className='font-bold text-2xl'>Assets and Other Credits</h2>
            <h3>
              Lorem ipsum is a placeholder text commonly used in the publishing
              and web design industries.
            </h3>
          </div>

          {/* <div className='flex flex-col items-center h-[60rem] pt-4 pb-20 text-sm leading-5 text-white whitespace-nowrap shadow-lg bg-zinc-800 max-w-[88px]'></div> */}
          <div className='h-[800px] mb-[10rem] w-[67%] flex-col bg-white rounded-lg shadow-lg max-w-md:px-5 py-10 px-5'>
            <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Account Type
                </div>
                <select
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm w-full'
                  value={"info.value"}
                >
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </select>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Bank Name
                </div>
                <select
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm w-full'
                  value={"info.value"}
                >
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </select>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Account Number
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>

            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>Balance</div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Account Type
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>Source</div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>Balance</div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Realtor Credit
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Seller Credit
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Lender Credit
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Other Credit
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='mt-[2rem] ml-[46rem] w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-black whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm'>
                Back
              </div>
              <div
                onClick={handleNextButton}
                className='mt-[2rem] cursor-pointer ml-[2rem] w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-blue-500 rounded-lg border border-blue-500 border-solid shadow-sm'
              >
                Next
              </div>
            </div>
          </div>
        </div>
        <GroupComponent />
      </div>
    </div>
  );
};

export default Profile;
