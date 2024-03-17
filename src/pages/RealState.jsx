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
const RealState = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [instructions, setInstructions] = useState(true);
  const [instructionMessages, setInstructionMessages] = useState([
    "Explore mortgage plans, financial advice, and investment strategies with us.",
    "Need help with finances? Ask about mortgages or loan <br /> rates",
    "Curious about finance? Inquire about mortgages guidance here.",
  ]);
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
  const handleNextButton = () => {
    navigate("/Declaration");
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
            <h3>RealState</h3>
          </div>
          <div className='h-10 w-full'>
            <h2 className='font-bold text-slate-400'>Personal Details</h2>
            <h2 className='mt-2 font-bold text-slate-400'>Loan Infomation</h2>
            <h2 className='mt-2 font-bold text-slate-400'>
              Employment and Income
            </h2>
            <h2 className='mt-2 font-bold text-slate-400'>
              Assets and Other Credits
            </h2>
            <h2 className='mt-2 font-bold text-slate-400'>Liabilities</h2>
            <h2 className='mt-2 font-bold '>Real State Owned</h2>
            <h2>abbbbbbbbbbbbbbbbbbbbbbbbbb</h2>
          </div>

          {/* <div className='flex flex-col items-center h-[60rem] pt-4 pb-20 text-sm leading-5 text-white whitespace-nowrap shadow-lg bg-zinc-800 max-w-[88px]'></div> */}
          <div className='h-[716px] mt-[8rem] mb-[10rem] w-[67%] flex-col bg-white rounded-lg shadow-lg max-w-md:px-5 py-10 px-5'>
            <header className='flex gap-1 self-end text-sm leading-5 text-blue-500 whitespace-nowrap'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/8b14342dfc08e7de3a4080805c8b54aa083b2c096506567f7ba5b5fdf5be1172?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
                className='shrink-0 w-6 aspect-square'
                alt='Add borrower icon'
              />
              <div className='grow my-auto ml-auto'>Add Borrower</div>
            </header>
            <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Occupancy
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Owned by(Borrower's name)
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Property Address
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>

            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col  flex-1'>
                <div className='flex'>
                  <div className='columns'>
                    <div className='text-sm leading-5 text-slate-700'>City</div>
                    <input
                      className='justify-center  px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                      type='text'
                      value={"info.value"}
                    />
                  </div>
                  <div className='columns'>
                    <div className='text-sm leading-5 text-slate-700'>
                      State
                    </div>
                    <input
                      className='justify-center  px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                      type='text'
                      value={"info.value"}
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col mr-auto ml-0 flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Lender Credit
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Rental for Income
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Occupancy
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Owned by(Borrower's name)
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Property Address
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Occupancy
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Owned by(Borrower's name)
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Property Address
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Occupancy
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Owned by(Borrower's name)
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-slate-700'>
                  Property Address
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-7 w-[26rem] max-md:flex-wrap'>
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

export default RealState;
