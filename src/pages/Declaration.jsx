/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/GroupComponent1";
import group22 from "../assets/logo/Group 22.svg";
import mira from "../assets/logo/MIRA.svg";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
const Declaration = () => {
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
    navigate("/DemoGraphy");
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
            <h3>Declaration</h3>
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

          <main className='flex h-[600px] w-[67%] mt-[12rem] flex-col shadow-lg mr-10'>
            <section className='flex justify-center px-7 py-2 rounded-xl bg-zinc-800 w-fit whitespace-nowrap text-white text-base leading-6 max-md:px-5 max-md:max-w-full'>
              5a. About this Property and Your Money for this Loan
            </section>
            <hr className='self-stretch mt-8 w-full border border-solid bg-zinc-600 border-zinc-600 min-h-[1px] max-md:max-w-full' />{" "}
            <section className='px-5 mt-1 w-full'>
              <div className='flex gap-5 h-[180px]'>
                <article className='flex flex-col w-4/5 '>
                  <p className='text-gray-900 text-base leading-6'>
                    Will you occupy the property as your primary residence?
                    <br />
                    If YES, have you had an ownership interest in another
                    property in the last three years? If YES, complete (1) and
                    (2) below:
                    <br />
                    (1) What type of property did you own: primary residence
                    (PR), FHA secondary residence (SR), second home (SH),or
                    investment property (IP)?
                    <br />
                    (2) How did you hold title to the property: by yourself (S),
                    jointly with your spouse (SP), or jointly with another
                    person (O)?
                  </p>
                </article>
                <aside className='flex flex-col ml-5 w-1/5'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex justify-between gap-5'>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>Yes</span>
                      </label>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>No</span>
                      </label>
                    </div>
                    <div className='flex justify-between gap-5 '>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>Yes</span>
                      </label>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>No</span>
                      </label>
                    </div>
                    <div className=''>IP</div>
                    <hr className='shrink-0 h-px bg-black  border-dotted' />
                    <div className=''>SP</div>

                    <hr className='shrink-0 h-px bg-black   border-dotted' />
                  </div>
                </aside>
              </div>
            </section>
            <section className='px-5  w-full mt-12'>
              <div className='flex justify-between items-center'>
                <p className='text-black text-base leading-6'>
                  B. If this is a Purchase Transaction: Do you have a family
                  relationship or business affiliation with the seller of the
                  property?
                </p>

                <aside className='flex flex-col  w-[16%]'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex justify-between  gap-5'>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>Yes</span>
                      </label>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>No</span>
                      </label>
                    </div>
                  </div>
                </aside>
              </div>
            </section>
            <section className='px-5 mt-8 w-full'>
              <div className='flex gap-5'>
                <article className='flex flex-col w-[84%]'>
                  <p className='text-black text-base leading-6'>
                    C. Are you borrowing any money for this real estate
                    transaction (e.g., money for your closing costs or down
                    payment) or obtaining any money from another party, such as
                    the seller or realtor, that you have not disclosed on this
                    loan application?
                    <br />
                    If YES, what is the amount of this money?
                  </p>
                </article>
                <aside className='flex flex-col  ml-3 w-[16%]'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex justify-between  gap-5'>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>Yes</span>
                      </label>
                      <label className='flex gap-2 cursor-pointer'>
                        <div className='shrink-0 w-5 h-5 bg-white rounded-xl border border-gray-300'></div>
                        <span className='my-auto'>No</span>
                      </label>
                    </div>
                    <div className='mt-8'>$</div>
                    <hr className='shrink-0 mt-2 h-px bg-black border border-black border-dashed' />
                  </div>
                </aside>
              </div>
            </section>
            <div className='flex mb-5 mr-4 justify-end'>
              <div className='mt-[2rem] ml-[46rem] w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-black whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm'>
                Back
              </div>
              <div
                onClick={handleNextButton}
                className='mt-[2rem] cursor-pointer ml-3 w-20 text-center self-end px-3.5 py-2 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-blue-500 rounded-lg border border-blue-500 border-solid shadow-sm'
              >
                Next
              </div>
            </div>
          </main>
        </div>
        <GroupComponent />
      </div>
    </div>
  );
};

export default Declaration;
