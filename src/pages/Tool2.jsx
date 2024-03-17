import React, { useState } from "react";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import DoughnutChart from "../components/DoughnutChart";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
const Tool1 = () => {
  const [toggleModel, setToggleModel] = useState(false);
  const handleFileUpload = () => {
    console.log("handle upload");
  };
  const data = [
    {
      name: 359,
      date: "",
      rate: "6,125",
      montly: "940,14920",
      principal: "428,393.01",
      interest: "511,756.19",
      mtg: "0.00",
      balance: "2606.99",
    },
    {
      name: 359,
      date: "",
      rate: "6,125",
      montly: "940,14920",
      principal: "428,393.01",
      interest: "511,756.19",
      mtg: "0.00",
      balance: "2606.99",
    },
  ];
  const data1 = [
    {
      name: 12,
      date: "",
      rate: "6,125",
      montly: "2618.80",
      principal: "5170.38",
      interest: "26,255.22",
      mtg: "",
      balance: "425,829.62",
    },
    {
      name: 24,
      date: "",
      rate: "6,125",
      montly: "2618.80",
      principal: "5170.38",
      interest: "26,255.22",
      mtg: "",
      balance: "425,829.62",
    },
    {
      name: 24,
      date: "",
      rate: "6,125",
      montly: "2618.80",
      principal: "5170.38",
      interest: "26,255.22",
      mtg: "",
      balance: "425,829.62",
    },
    {
      name: 24,
      date: "",
      rate: "6,125",
      montly: "2618.80",
      principal: "5170.38",
      interest: "26,255.22",
      mtg: "",
      balance: "425,829.62",
    },
    {
      name: 24,
      date: "",
      rate: "6,125",
      montly: "2618.80",
      principal: "5170.38",
      interest: "26,255.22",
      mtg: "",
      balance: "425,829.62",
    },
    {
      name: 24,
      date: "",
      rate: "6,125",
      montly: "2618.80",
      principal: "5170.38",
      interest: "26,255.22",
      mtg: "",
      balance: "425,829.62",
    },
  ];
  return (
    <div className='overflow-x-hidden  overflow-y-hidden'>
      <GroupComponent1 />
      <Header />
      {toggleModel && (
        <div className='w-full border-2  h-full z-30  bg-gray-500 bg-opacity-35 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center'>
          <div className='w-[46%]  rounded-xl h-[93%] bg-white z-40'>
            <div className='w-full mt-4 h-[10%]'>
              <h2 className='font-bold text-center'>
                Compared Loan Information
              </h2>
            </div>
            <div className='flex'>
              <div className='w-[50%] h-full shadow-gray-500'>
                <h3 className='text-center'>MPF - CONFORMING 30 Year Fixed</h3>
              </div>
              <div className='w-[50%] h-full shadow-gray-500'>
                <h3 className='text-center'>Conventional 30 Year Fixed</h3>
              </div>
            </div>

            {/* <div
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
            </div> */}
          </div>
        </div>
      )}
      <div className='columns  ml-[8rem] mt-20 w-full'>
        <div className='flex'>
          <div className='columns  w-[66%]'>
            <div className='h-[3rem] bg-white flex ml-1'>
              <h3>Dashboard</h3>
              <FaChevronRight className='w-4 h-4 mt-1' />
              <h3>Tools</h3>
            </div>
            <div className='w-full h-[50rem]'>
              <div className='ml-1 columns'>
                <div>
                  <h1 className='font-black text-3xl'>Tools</h1>
                </div>

                <div className='flex w-full mt-3 h-[2rem]'>
                  <div className='w-[200px] shadow-md rounded-t-lg text-center border-none bg-white text-[#575757]'>
                    Loan Comparison{" "}
                  </div>
                  <div className='w-[200px]  border-2 text-center rounded-t-lg border-black bg-black text-white'>
                    Amortization Schedule
                  </div>
                </div>
                <div className='w-full  h-full border-b-2 border-[grey-300]' />
                <div className='w-full flex h-[80%]  mt-4 shadow-md'>
                  <div className='w-[30%] border-2 border-black'>
                    <h2 className='font-bold ml-[2rem]'>Loan Program</h2>
                    <div className='columns'>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[4rem] w-full'>
                        <h3 className='text-gray-600'>Loan Amount Buydown</h3>
                        <span className='text-gray-600'>$431,000</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[12rem] w-full'>
                        <h3 className='text-gray-600'>Interest</h3>
                        <span className='text-gray-600'>$6.125%</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>Term/Due In</h3>
                        <span className='text-gray-600'></span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>1st PMT Date</h3>
                        <span className='text-gray-600'></span>
                      </div>

                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>Qual Rate</h3>
                        <span className='text-gray-600'>360/360 months</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[13rem] w-full'>
                        <h3 className='text-gray-600'>APR</h3>
                        <span className='text-gray-600'>6.125 %</span>
                      </div>
                    </div>
                    <h2 className='font-bold ml-[2rem] mt-5'>
                      Rate Adjustment
                    </h2>
                    <div className='columns mt-5'>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[4rem] w-full'>
                        <h3 className='text-gray-600'>Loan Amount Buydown</h3>
                        <span className='text-gray-600'>$431,000</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[12rem] w-full'>
                        <h3 className='text-gray-600'>Interest</h3>
                        <span className='text-gray-600'>$6.125%</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>Term/Due In</h3>
                        <span className='text-gray-600'></span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>1st PMT Date</h3>
                        <span className='text-gray-600'></span>
                      </div>

                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>Qual Rate</h3>
                        <span className='text-gray-600'>360/360 months</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[13rem] w-full'>
                        <h3 className='text-gray-600'>APR</h3>
                        <span className='text-gray-600'>6.125 %</span>
                      </div>
                    </div>
                    <h2 className='font-bold ml-[2rem] mt-5'>
                      Payment Adjustment
                    </h2>
                    <div className='columns mt-5'>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[4rem] w-full'>
                        <h3 className='text-gray-600'>Loan Amount Buydown</h3>
                        <span className='text-gray-600'>$431,000</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[12rem] w-full'>
                        <h3 className='text-gray-600'>Interest</h3>
                        <span className='text-gray-600'>$6.125%</span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>Term/Due In</h3>
                        <span className='text-gray-600'></span>
                      </div>
                      <div className='flex mt-[0.5rem] ml-[2rem] space-x-[8rem] w-full'>
                        <h3 className='text-gray-600'>1st PMT Date</h3>
                        <span className='text-gray-600'></span>
                      </div>
                    </div>
                  </div>

                  <div className='w-[1px] ml-2 mr-2 border-2 border-[grey-300]'></div>
                  <div className='w-[70%] columns border-2 border-black'>
                    <h2 className='font-bold'>Summary</h2>
                    <div className='flex mt-5 max-md:flex-wrap'>
                      <table className='border border-collapse border-black'>
                        <tr className='bg-gray-200'>
                          <th className='p-2'>No</th>
                          <th className='p-2'>Pmt Date</th>
                          <th className='p-2'>Int Rate</th>
                          <th className='p-2'>Montly Payment</th>
                          <th className='p-2'>Principal Paid</th>
                          <th className='p-2'>Interest Paid</th>
                          <th className='p-2'>Mtg Insurance</th>
                          <th className='p-2'>Balance</th>
                        </tr>
                        {data.map((val, key) => {
                          return (
                            <tr key={key}>
                              <td className='p-2'>{val.name}</td>
                              <td className='p-2'>{val.date}</td>
                              <td className='p-2'>{val.rate}</td>
                              <td className='p-2'>{val.montly}</td>
                              <td className='p-2'>{val.principal}</td>
                              <td className='p-2'>{val.interest}</td>
                              <td className='p-2'>{val.mtg}</td>
                              <td className='p-2'>{val.balance}</td>
                            </tr>
                          );
                        })}
                        <tr className='bg-gray-200'>
                          <td className='p-2 font-black'>Total</td>
                          <td className='p-2'></td>
                          <td className='p-2'></td>
                          <td className='p-2 font-black'>942,769.50</td>
                          <td className='p-2 font-black'>431,000.00</td>
                          <td className='p-2 font-black'>511,769.50</td>
                          <td className='p-2'></td>
                          <td className='p-2'></td>
                        </tr>
                      </table>
                    </div>
                    <hr className='mt-8' />
                    <div className='w-full h-[35%] mt-4'>
                      <h2>Yearly Schedule</h2>
                      <div className='flex mt-5 max-md:flex-wrap'>
                        <table className='border border-collapse border-black'>
                          <tr className='bg-gray-200'>
                            <th className='p-2'>No</th>
                            <th className='p-2'>Pmt Date</th>
                            <th className='p-2'>Int Rate</th>
                            <th className='p-2'>Montly Payment</th>
                            <th className='p-2'>Principal Paid</th>
                            <th className='p-2'>Interest Paid</th>
                            <th className='p-2'>Mtg Insurance</th>
                            <th className='p-2'>Balance</th>
                          </tr>
                          {data1.map((val, key) => {
                            return (
                              <tr key={key}>
                                <td className='p-2'>{val.name}</td>
                                <td className='p-2'>{val.date}</td>
                                <td className='p-2'>{val.rate}</td>
                                <td className='p-2'>{val.montly}</td>
                                <td className='p-2'>{val.principal}</td>
                                <td className='p-2'>{val.interest}</td>
                                <td className='p-2'>{val.mtg}</td>
                                <td className='p-2'>{val.balance}</td>
                              </tr>
                            );
                          })}
                          <tr className='bg-gray-200'>
                            <td className='p-2 font-black'>Total</td>
                            <td className='p-2'></td>
                            <td className='p-2'></td>
                            <td className='p-2 font-black'>942,769.50</td>
                            <td className='p-2 font-black'>431,000.00</td>
                            <td className='p-2 font-black'>511,769.50</td>
                            <td className='p-2'></td>
                            <td className='p-2'></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className='w-[30%] ml-[57%] flex h-[10%]  mt-[7rem] space-x-5 justify-end'>
                      <button className='w-[100%] h-[55%] bg-white text-black shadow-md rounded-lg border-none '>
                        Reset
                      </button>
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
