/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/GroupComponent1";
import group22 from "../assets/logo/Group 22.svg";
import mira from "../assets/logo/MIRA.svg";
import { MdOutlineDashboard } from "react-icons/md";
import GroupComponent1 from "../components/GroupComponent1";
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
  const [messages, setMessages] = useState(["a", "b", "c", "d", "e", "f", "g"]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNextButton = () => {
    navigate("/assest");
  };
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };
  const infos = [
    { label: "Name of Employer", value: "Rebecca" },
    { label: "Designation", value: "Bradd" },
    { label: "Address of Employer", value: "Hardison" },
    { label: "City", value: "217-732-9597" },
    { label: "State", value: "rebecca@gmail.com" },
    { label: "HR or Company Email(For verification)", value: "H1B" },
    { label: "Years working with Employer", value: "10/7/1986" },
    { label: "LOB Work Years", value: "322-72-2548" },
    { label: "Base Income", value: "Rent" },
    { label: "Of Income", value: "abcdefg" },
    { label: "Bonus Income", value: "abcdefg" },
    { label: "Other Income", value: "abcdfeghj" },
    { label: "Name of Employer", value: "abcdefg" },
    { label: "Designation", value: "abcdefg" },
    { label: "Address of Emplyer", value: "abcdfeghj" },
  ];
  const infos2 = [
    { label: "Present Address", value: "4531 Scenic Way" },
    { label: "Apt/Suit No. (If Available)", value: "1104" },
    { label: "Zip", value: "54304" },
    { label: "Rent", value: "$1800" },
    { label: "City", value: "Lincoln" },
    { label: "State", value: "IL" },
    { label: "Years living from", value: "1" },
    { label: "to", value: "6" },
  ];

  return (
    <div className='overflow-hidden'>
      <GroupComponent1 />
      <Header />
      <div className='columns ml-[8rem] mt-24 w-full'>
        <div className='w-full h-[3rem] bg-white flex'>
          <h3>Dashboard</h3>
          <FaChevronRight className='w-4 h-4 mt-1' />
          <h3>Employee</h3>
        </div>
        <div className='h-30 w-full'>
          <h2 className='font-black text-[#BFBFBF] text-2xl'>
            Personal Details
          </h2>
          <h2 className='font-bold py-4 text-[#BFBFBF] text-2xl'>
            Loan Infomation
          </h2>
          <h2 className='font-bold text-2xl'>Employment and Income</h2>
          <h3>
            Lorem ipsum is a placeholder text commonly used in the publishing
            and web design industries.
          </h3>
        </div>
      </div>
      {/* <div className='border-2 h-[75%] absolute top-[14rem] ml-[8rem]'></div> */}
      <div className='ml-[6rem] relative'>
        <div className='flex mt-2 '>
          <div className='columns '>
            {/* <div className='flex flex-col items-center h-[60rem] pt-4 pb-20 text-sm leading-5 text-white whitespace-nowrap shadow-lg bg-zinc-800 max-w-[88px]'></div> */}
            <div className='h-[800px] mb-[10rem] w-[128%] ml-[2rem] flex-col bg-white rounded-lg shadow-lg max-w-md:px-5 py-10 px-5'>
              <div className='flex gap-1 w-[10%] ml-auto self-end text-sm leading-5 text-blue-500 whitespace-nowrap justify-end'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/8b14342dfc08e7de3a4080805c8b54aa083b2c096506567f7ba5b5fdf5be1172?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
                  className='shrink-0 w-6 aspect-square '
                  alt='Add borrower icon'
                />
                <span className='grow my-auto'>Add Additional Employer</span>
              </div>
              <div className='flex '>
                <input
                  type='checkbox'
                  id='checkboxA'
                  name='checkboxA'
                  className='rounded-full mt-1 appearance-none h-4 w-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent'
                />
                <label htmlFor='checkboxA' className='ml-2 mr-2'>
                  Current
                </label>
                <input
                  type='checkbox'
                  id='checkboxB'
                  name='checkboxB'
                  className='rounded-full mt-1 appearance-none h-4 w-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent'
                />
                <label htmlFor='checkboxB' className='ml-2 mr-2'>
                  Employed
                </label>
                <input
                  type='checkbox'
                  id='checkboxC'
                  name='checkboxC'
                  className='rounded-full mt-1 appearance-none h-4 w-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent'
                />
                <label htmlFor='checkboxC' className='ml-2 mr-2'>
                  Self Employed
                </label>
              </div>
              <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Name of Employer
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Designation
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Address of Employer
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
                  <div className='text-sm leading-5 text-slate-700'>City</div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>State</div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    HR or Company Email(For verification)
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
                    Years working with Employer
                  </div>
                  <div className='flex'>
                    <div className='w-1/2'>
                      <select
                        className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm w-full'
                        value={"info.value"}
                      >
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                      </select>
                    </div>
                    <div className='w-1/2'>
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
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    LOB Work Years
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Base Income{" "}
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
                    Of Income
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Bonus Income
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Other Income
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
              </div>
              <div className='mt-7 w-full flex'>
                <input type='checkbox' id='address' name='address' value='' />
                <label for='address' className='pl-[12px]'>
                  {" "}
                  If employed with current employer for less than 2 years,
                  please provide details of previous employer.
                </label>
              </div>
              <div className='flex gap-5 justify-between mt-7 max-md:flex-wrap'>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Name of Employer
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Designation
                  </div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Address of Emplyer
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
                  <div className='text-sm leading-5 text-slate-700'>City</div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>State</div>
                  <input
                    className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                    type='text'
                    value={"info.value"}
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='text-sm leading-5 text-slate-700'>
                    Years Working Previous Employer
                  </div>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <select
                        className='justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm w-full'
                        value={"info.value"}
                      >
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                      </select>
                    </div>
                    <div className='w-1/2 ml-2'>
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
              <div className='flex justify-end'>
                <div className='mt-[2rem] ml-[46rem] w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-black whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm'>
                  Back
                </div>
                <div
                  onClick={handleNextButton}
                  className='mt-[2rem] cursor-pointer ml-[2rem] w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-[#3F66FB] rounded-lg border border-[#3F66FB] border-solid shadow-sm'
                >
                  Next
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

export default Profile;
