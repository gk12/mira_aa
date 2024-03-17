/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/GroupComponent1";
import group22 from "../assets/logo/Group 22.svg";
import mira from "../assets/logo/MIRA.svg";
import { MdOutlineDashboard } from "react-icons/md";
import ChatModel from "../components/ChatModel";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const [instructions, setInstructions] = useState(true);
  const [instructionMessages, setInstructionMessages] = useState([
    "Explore mortgage plans, financial advice, and investment strategies with us.",
    "Need help with finances? Ask about mortgages or loan <br /> rates",
    "Curious about finance? Inquire about mortgages guidance here.",
  ]);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    "aaaaaaaaaaaaaaaaaa",
    "abbbbbbbbbbbbbbbbb",
    "ccccccccccccccccccc",
    "ddddddddddddddddddddddddddd",
    "eddddddddddddddddddddddddd",
    "fddddddddddddddddddddd",
    "gggggggggggggggggggg",
  ]);
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
    navigate("/loan");
  };

  return (
    <div className='overflow-hidden'>
      <GroupComponent1 />
      <Header />
      <div className='columns ml-[8rem] mt-24 w-full'>
        <div className='w-full h-[3rem] bg-white flex '>
          <h3>Dashboard</h3>
          <FaChevronRight className='w-4 h-4 mt-1' />
          <h3>Profile</h3>
        </div>
        <div className='h-12 w-full'>
          <h2 className='font-black text-2xl'>Personal Details</h2>
          <h3 className='text-[#333333] '>
            Lorem ipsum is a placeholder text commonly used in the publishing
            and web design industries.
          </h3>
        </div>
      </div>
      <div className='border-2 h-[70%] absolute top-[15rem] ml-[8rem]'></div>
      <div className='ml-[6rem] relative'>
        <div className='flex mt-2 w-[95%] h-[75%]'>
          <div className='h-[75%] mb-[10rem] w-[77%] flex-col bg-white rounded-lg shadow-lg max-w-md:px-5 py-5 px-5'>
            <div className='flex gap-1 w-[10%] ml-auto self-end text-sm leading-5 text-blue-500 whitespace-nowrap justify-end'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/8b14342dfc08e7de3a4080805c8b54aa083b2c096506567f7ba5b5fdf5be1172?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
                className='shrink-0 w-6 aspect-square '
                alt='Add borrower icon'
              />
              <span className='grow my-auto'>Add Borrower</span>
            </div>
            <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  First Name
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Middle Name
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Last Name
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
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Phone No.
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Email
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Citizenship Status
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
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Date of Birth
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  SSN (Optional)
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Ownership
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
            </div>
            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Present Address
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1 '>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Apt/Suit No. (If Available){" "}
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex  flex-1 '>
                <div className='w-1/2 pr-2'>
                  <div className='text-sm leading-5 text-gray-700 font-black'>
                    City
                  </div>
                  <select
                    className='w-full px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    value={"info.value"}
                  >
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                  </select>
                </div>
                <div className='w-1/2 pl-2'>
                  <div className='text-sm leading-5 text-gray-700 font-black'>
                    State
                  </div>
                  <select
                    className='w-full px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    value={"info.value"}
                  >
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Zip
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Rent
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Years living from
                </div>
                <div className='flex'>
                  <div className='w-1/2 pr-2'>
                    <select
                      className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm w-full'
                      value={"info.value"}
                    >
                      <option value='1'>Option 1</option>
                      <option value='2'>Option 2</option>
                      <option value='3'>Option 3</option>
                    </select>
                  </div>
                  <div className='w-1/2 pl-2'>
                    <select
                      className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm w-full'
                      value={"info.value"}
                    >
                      <option value='1'>Option 1</option>
                      <option value='2'>Option 2</option>
                      <option value='3'>Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-7 w-full flex'>
              <input type='checkbox' id='address' name='address' value='' />
              <label for='address' className='pl-[12px]'>
                {" "}
                If present address is under 2 years, provide previous address
                details
              </label>
            </div>
            <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Previous Address
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  City
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-sm leading-5 text-gray-700 font-black'>
                  Zip
                </div>
                <input
                  className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                  type='text'
                  value={"info.value"}
                />
              </div>
            </div>
            <div
              onClick={handleNextButton}
              className='mt-[2rem] cursor-pointer ml-auto w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-[#3F66FB] rounded-lg border border-[#3F66FB] border-solid shadow-sm'
            >
              Next
            </div>
          </div>
          <GroupComponent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
