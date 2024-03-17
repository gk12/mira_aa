import React from "react";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import DoughnutChart from "../components/DoughnutChart";
import { IoCloudUploadOutline } from "react-icons/io5";
const Tool1 = () => {
  const handleFileUpload = () => {
    console.log("handle upload");
  };
  return (
    <div className='overflow-x-hidden  overflow-y-hidden'>
      <GroupComponent1 />
      <Header />
      <div className='columns relative ml-[8rem] mt-24 w-full'>
        <div className='flex mt-2'>
          <div className='columns  w-[66%]'>
            <div className='h-[3rem] bg-white flex ml-1'>
              <h3>Dashboard</h3>
              <FaChevronRight className='w-4 h-4 mt-1' />
              <h3>Pipline</h3>
            </div>
            <div className='w-full h-[50rem]'>
              <div className='ml-1 columns'>
                <div>
                  <h1 className='font-black text-3xl'>Tools</h1>
                </div>
                <div className='flex w-full mt-3 h-[2rem]'>
                  <div className='w-[200px]  border-2 text-center rounded-t-lg border-black bg-black text-white'>
                    Loan Comparison{" "}
                  </div>
                  <div className='w-[200px] rounded-t-lg text-center border-none bg-white text-[#575757]'>
                    Amortization Schedule
                  </div>
                </div>
                <div className='w-full relative h-full border-b-2 border-[grey-300]' />
                <div className='w-[70%] flex h-[80%] absolute mt-4 shadow-md'>
                  <div
                    className='w-[30%] border-2 border-black'
                    style={{ borderRight: "1px solid gray" }}
                  >
                    <h2 className='font-bold ml-[2rem]'>Current Offer</h2>
                    <div className='flex'>
                      <div className='w-[50%] h-[15px] ml-4 mt-5'>
                        {" "}
                        <DoughnutChart />
                      </div>
                      <div className=' columns  w-[10rem] h-[10rem] mt-16 ml-4'>
                        <div className='flex mt-6'>
                          <div className='w-4 h-4 ml-2 mt-1 rounded-xl bg-yellow-400'></div>
                          <h3 className='px-2 text-gray-500'>P & I: 45%</h3>{" "}
                        </div>
                        <div className='flex mt-2'>
                          <div className='w-4 h-4 ml-2 mt-1 rounded-xl bg-blue-600'></div>
                          <h3 className='px-2 text-gray-500'>Taxes: 32%</h3>{" "}
                        </div>
                        <div className='flex mt-2'>
                          <div className='w-4 h-4 ml-2 mt-1 rounded-xl bg-green-500'></div>
                          <h3 className='px-2 text-gray-500'>PMI: 0%</h3>{" "}
                        </div>
                      </div>
                    </div>

                    <div className='columns'>
                      <div className='flex mt-[3rem] ml-10 space-x-[10rem] w-full'>
                        <h3 className='text-gray-600'>Estimated value</h3>
                        <span className='text-gray-600'>$650,000</span>
                      </div>
                      <div className='flex mt-[3rem] ml-10 space-x-[10rem] w-full'>
                        <h3 className='text-gray-600'>Estimated value</h3>
                        <span className='text-gray-600'>$650,000</span>
                      </div>
                      <div className='flex mt-[3rem] ml-10 space-x-[10rem] w-full'>
                        <h3 className='text-gray-600'>Estimated value</h3>
                        <span className='text-gray-600'>$650,000</span>
                      </div>
                      <div className='flex mt-[3rem] ml-10 space-x-[10rem] w-full'>
                        <h3 className='text-gray-600'>Estimated value</h3>
                        <span className='text-gray-600'>$650,000</span>
                      </div>

                      <div className='flex mt-[3rem] ml-10 space-x-[10rem] w-full'>
                        <h3 className='text-gray-600'>Estimated value</h3>
                        <span className='text-gray-600'>$650,000</span>
                      </div>
                    </div>
                  </div>
                  <div className='w-[1px] ml-2 mr-2 border-2 border-[grey-300]'></div>
                  <div className='w-[62%] columns border-2 border-black'>
                    <h2 className='font-bold'>Compare Offer</h2>
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
                    </div>
                    <div className='flex gap-5 justify-between mt-5 max-md:flex-wrap'>
                      <div className='flex flex-col  flex-1'>
                        <div className='flex w-[15rem]'>
                          <div className='columns '>
                            <div className='text-sm  leading-5 text-slate-700'>
                              City
                            </div>
                            <select
                              className='justify-center h-[3rem] w-[12rem] px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                              value={"info.value"}
                            >
                              <option value='option1'>Option 1</option>
                              <option value='option2'>Option 2</option>
                              <option value='option3'>Option 3</option>
                            </select>
                          </div>
                          <div className='columns pl-4 '>
                            <div className='text-sm leading-5 text-slate-700'>
                              State
                            </div>
                            <select
                              className='justify-center w-[12rem] h-[3rem] px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                              value={"info.value"}
                            >
                              <option value='option1'>Option 1</option>
                              <option value='option2'>Option 2</option>
                              <option value='option3'>Option 3</option>
                            </select>
                          </div>
                        </div>
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
                        <select
                          className='justify-center h-[3rem] px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm'
                          value={"info.value"}
                        >
                          <option value='option1'>Option 1</option>
                          <option value='option2'>Option 2</option>
                          <option value='option3'>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className='justify-end ml-auto flex w-[30%] py-4 space-x-[1rem]'>
                      <button className='w-[40%] h-[2.5rem] rounded-lg bg-white border-gray-300'>
                        Reset
                      </button>
                      <button className='w-[60%] h-[2.5rem] rounded-lg bg-blue-700 text-white border-none'>
                        Compare
                      </button>
                    </div>
                    <div className='w-full border-[10rem] z-10 border-gray-700'></div>
                    <div className='w-full h-[35%] '>
                      <h2>Compare with Other Offer</h2>
                      <div
                        className='w-full h-[20%] rounded-lg'
                        // style={{ border: "2px solid red" }}
                      >
                        <div
                          onClick={handleFileUpload}
                          className='w-[90%] cursor-pointer  columns h-[25%] mt-3 ml-5'
                        >
                          <IoCloudUploadOutline className='ml-[50%] w-7 h-7 mt-3' />
                          <h3 className='text-center mt-4'>
                            <span className='text-[#3F66FB]'>
                              Click to upload{" "}
                            </span>
                            <span className='text-gray-500'>
                              or drag and drop
                            </span>
                          </h3>
                          <h3 className='text-center text-gray-500'>
                            PDF,PNG or JPG (max.10 MB)
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className='w-[12%] h-[10%] ml-auto justify-end'>
                      <button className='w-[100%] h-[55%] bg-blue-600 text-white rounded-lg border-none '>
                        Compare
                      </button>
                    </div>
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

export default Tool1;
