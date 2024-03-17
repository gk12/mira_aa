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
import { RiDeleteBin6Line, RiH3 } from "react-icons/ri";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Documents = () => {
  const [inputValue, setInputValue] = useState("");
  const [instructions, setInstructions] = useState(true);
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [instructionMessages, setInstructionMessages] = useState([
    "Explore mortgage plans, financial advice, and investment strategies with us.",
    "Need help with finances? Ask about mortgages or loan <br /> rates",
    "Curious about finance? Inquire about mortgages guidance here.",
  ]);
  const [messages, setMessages] = useState(["a", "b", "c", "d", "e", "f", "g"]);

  const handleAddDoc = () => {
    setToggleModel(!toggleModel);
  };
  const handleAddFiles = () => {};
  const handleCancle = () => {
    setToggleModel(!toggleModel);
  };
  const toggleHandle = () => {
    setToggleIcon(!toggleIcon);
  };
  const handleFileUpload = () => {
    console.log("upload file");
  };

  return (
    <div className='overflow-x-hidden'>
      <GroupComponent1 />
      <Header />
      {toggleModel && (
        <div className='w-full border-2  h-full z-30  bg-gray-500 bg-opacity-35 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center'>
          <div className='w-[26%]  rounded-xl h-[65%] bg-white z-40'>
            <div className='w-[90%] mt-4 h-[10%] ml-5'>
              <h2 className='font-bold'>Add Files</h2>
              <h3>Upload or attach files</h3>
            </div>
            <div
              onClick={handleFileUpload}
              className='w-[90%] cursor-pointer rounded-lg columns h-[25%] mt-3 ml-5 border-2  border-black'
            >
              <IoCloudUploadOutline className='ml-[50%] w-7 h-7 mt-3' />
              <h2 className='text-center mt-4'>
                <span className='text-[#3F66FB]'>Click to upload</span> or{" "}
                <span className='text-black'>drag and drop</span>
              </h2>
              <h2 className='text-center '>PDF,PNG or JPG (max.10 MB)</h2>
            </div>
            <div className='w-[90%] rounded-lg h-[20%] mt-3 ml-5 border-2 flex border-gray-300'>
              <div className='w-8 h-8 mt-2 bg-blue-100 ml-4  rounded-2xl border-black'>
                <IoDocumentOutline className='w-6 h-6 mt-1 ml-1 text-blue-700' />
              </div>
              <div className='columns mt-2 ml-4'>
                <h3 className=''>Paystub-1</h3>
                <h3 className='text-[grey]'>200 KB</h3>
                <div className='flex w-[22rem]'>
                  <div className='h-4 w-[20rem] mt-2 rounded-lg bg-blue-700 border-2 '></div>
                  <div className='ml-2'>100%</div>
                </div>
              </div>
              <IoMdCheckmark className='mt-1 mr-2 w-4 ml-auto h-4 rounded-lg text-white bg-blue-700' />
            </div>
            <div className='w-[90%] rounded-lg h-[20%] mt-3 ml-5 border-2 flex border-gray-300'>
              <div className='w-8 h-8 mt-2 bg-blue-100 ml-4  rounded-2xl border-black'>
                <IoDocumentOutline className='w-6 h-6 mt-1 ml-1 text-blue-700' />
              </div>{" "}
              <div className='columns mt-2 ml-4'>
                <h3 className=''>Paystub-1</h3>
                <h3 className='text-[grey]'>200 KB</h3>
                <div className='flex w-[22rem]'>
                  <div className='h-4 w-[20rem] mt-2 rounded-lg bg-gray-200 border-2 '>
                    <div
                      className='h-full bg-blue-700 rounded-lg'
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                  <div className='ml-2'>40%</div>
                </div>
              </div>
              <RiDeleteBin6Line className='mt-1 cursor-pointer mr-2 ml-auto w-6 h-6 text-gray-500 rounded-lg' />
            </div>
            <div className='w-[90%] flex rounded-lg h-[15%] py-2 ml-5  '>
              <button
                onClick={handleCancle}
                className='w-[50%] mt-[0.5rem] mr-1 rounded-lg border-2 h-[70%] border-gray-300'
              >
                Cancle
              </button>
              <button
                onClick={handleAddFiles}
                className='w-[50%] text-white h-[70%] mt-[0.5rem] ml-1 rounded-lg border-2 border-gray-300 bg-[#3F66FB]'
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
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
                  <h1 className='font-black text-3xl'>Documents</h1>
                </div>
                <div className='flex mt-5'>
                  <select
                    className='w-[22rem] h-[2.5rem]  rounded-lg bg-white border border-gray-300 font-medium  pl-8'
                    defaultValue='default'
                  >
                    <option value='default' disabled>
                      Select an option
                    </option>
                    <option value='option1'>Refinance</option>
                    <option value='option2'>Purchase</option>
                  </select>
                  <select
                    className='w-[22rem] h-[2.5rem] rounded-lg ml-[2rem] bg-white border border-gray-300 font-medium text-[#454F5B] pl-8'
                    defaultValue='default'
                  >
                    <option value='default' disabled>
                      Select an option
                    </option>
                    <option value='option1'>
                      <div className='flex items-center'>
                        {/* <img
                          src={avtar1}
                          alt='Avatar'
                          className='w-6 h-6 mr-2'
                        />{" "} */}
                        Bradd Hardison
                      </div>
                    </option>
                    <option value='option2'>Rebecca Hardison</option>
                  </select>
                  <div className='relative'>
                    <div className='absolute inset-y-0 ml-auto flex items-center pl-3 pointer-events-none'>
                      <CiSearch className='h-5 w-5 text-gray-400' />
                    </div>{" "}
                    <input
                      type='text'
                      placeholder='Seach Document'
                      className='px-3 ml-[13rem] w-[22rem] mr-10 py-2 text-base leading-6 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
                    />
                  </div>
                  <button
                    onClick={handleAddDoc}
                    className='px-3 justify-end ml-auto w-[15rem] py-2 text-base leading-6 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring bg-[#3F66FB] mb-4'
                  >
                    Add Documents
                  </button>
                </div>
                <div className='mt-5  overflow-auto'>
                  <div className='w-full flex items-center bg-[#F4F6F8] border-b-2 py-3'>
                    {/* <h1 className='font-semibold text-[#454F5B] pl-4 pr-5'></h1> */}
                    <h3 className='w-[50%]  ml-3 font-black text-[#454F5B]'>
                      Document Name{" "}
                    </h3>
                    <h3 className='w-[15%]  font-black text-[#454F5B] pl-8 ml-auto'>
                      Date Uploaded
                    </h3>
                    <h3 className='w-[20%]  font-black text-[#454F5B] pl-8 ml-auto'>
                      Status
                    </h3>
                    <h3 className='w-[10%] font-black text-[#454F5B] pl-8 ml-auto'>
                      Action
                    </h3>
                  </div>
                </div>
                <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5'>
                  <MdOutlineKeyboardArrowDown />
                  <h3 className='w-[50%]   ml-auto text-[#454F5B]'>
                    Income Documents{" "}
                  </h3>
                  <h3 className='w-[15%]  ml-auto text-[#454F5B] pl-8'>
                    22-10-2024
                  </h3>
                  <h3 className='w-[20%] ml-auto font-medium text-[#0b633f] shadow-sm rounded-lg bg-[#edf8f3] pl-8'>
                    Uploaded
                  </h3>
                  <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                    <IoEyeOutline />
                    <RiDeleteBin6Line />
                    <FaArrowUpFromBracket />
                  </div>
                </div>
                <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5 '>
                  <MdOutlineKeyboardArrowDown />
                  <h3 className='w-[50%] ml-auto  text-[#454F5B]'>
                    Personal information{" "}
                  </h3>
                  <h3 className='w-[15%] ml-auto  text-[#454F5B] pl-8'>
                    22-10-2024
                  </h3>
                  <h3 className='w-[20%] ml-auto font-medium text-[#B42318] shadow-sm rounded-lg bg-[#f4e2e0] pl-8'>
                    Pending
                  </h3>

                  <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                    <IoEyeOutline />
                    <RiDeleteBin6Line />
                    <FaArrowUpFromBracket />
                  </div>
                </div>
                <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5 '>
                  <MdOutlineKeyboardArrowDown />
                  <h3 className='w-[50%] ml-auto  text-[#454F5B]'>
                    Asset Documents{" "}
                  </h3>
                  <h3 className='w-[15%] ml-auto  text-[#454F5B] pl-8'>
                    22-10-2024
                  </h3>
                  <h3 className='w-[20%] ml-auto font-medium text-[#B42318] shadow-sm rounded-lg bg-[#f4e2e0] pl-8'>
                    Pending
                  </h3>
                  <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                    <IoEyeOutline />
                    <RiDeleteBin6Line />
                    <FaArrowUpFromBracket />
                  </div>
                </div>
                <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5 '>
                  <MdOutlineKeyboardArrowDown />
                  <h3 className='w-[50%] ml-auto  text-[#454F5B]'>
                    Property & RIO{" "}
                  </h3>
                  <h3 className='w-[15%] ml-auto  text-[#454F5B] pl-8'>
                    22-10-2024
                  </h3>
                  <h3 className='w-[20%] ml-auto font-medium text-[#B42318] shadow-sm rounded-lg bg-[#f4e2e0] pl-8'>
                    1 Document Required
                  </h3>
                  <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                    <IoEyeOutline />
                    <RiDeleteBin6Line />
                    <FaArrowUpFromBracket />
                  </div>
                </div>
                <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5'>
                  {!toggleIcon ? (
                    <div onClick={toggleHandle}>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  ) : (
                    <div onClick={toggleHandle}>
                      <IoIosArrowUp />
                    </div>
                  )}
                  <h3 className='w-[50%]   ml-auto text-[#454F5B]'>
                    Income Documents{" "}
                  </h3>
                  <h3 className='w-[15%]  ml-auto text-[#454F5B] pl-8'>
                    22-10-2024
                  </h3>
                  <h3 className='w-[20%] ml-auto font-medium text-[#0b633f] shadow-sm rounded-lg bg-[#edf8f3] pl-8'>
                    Uploaded
                  </h3>
                  <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                    <IoEyeOutline />
                    <RiDeleteBin6Line />
                    <FaArrowUpFromBracket />
                  </div>
                </div>
                {toggleIcon && (
                  <div className='columns'>
                    <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5 '>
                      <div className='w-[50%] ml-auto  text-[#454F5B]'>
                        <h3 className='ml-7 text-[#454F5B]'>
                          Statement of all Property{" "}
                        </h3>
                      </div>
                      <h3 className='w-[15%] ml-auto  text-[#454F5B] pl-8'>
                        22-10-2024
                      </h3>
                      <h3 className='w-[20%] ml-auto font-medium text-[#0b633f] shadow-sm rounded-lg bg-[#edf8f3] pl-8'>
                        Uploaded
                      </h3>
                      <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                        <IoEyeOutline />
                        <RiDeleteBin6Line />
                        <FaArrowUpFromBracket />
                      </div>
                    </div>
                    <div className='w-full h-[5rem] flex items-center bg-white cursor-pointer border-b-2 py-2.5 '>
                      <div className='w-[50%] ml-auto  text-[#454F5B]'>
                        <h3 className='ml-7 text-[#454F5B]'>
                          Statement of all Property{" "}
                        </h3>
                      </div>
                      <h3 className='w-[15%] ml-auto  text-[#454F5B] pl-8'>
                        22-10-2024
                      </h3>
                      <h3 className='w-[20%] ml-auto font-medium text-[#0b633f] shadow-sm rounded-lg bg-[#edf8f3] pl-8'>
                        Uploaded
                      </h3>
                      <div className='w-[10%] ml-auto space-x-4  flex font-black text-[#454F5B] pl-8'>
                        <IoEyeOutline />
                        <RiDeleteBin6Line />
                        <FaArrowUpFromBracket />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <GroupComponent />
        </div>
      </div>
    </div>
  );
};

export default Documents;
