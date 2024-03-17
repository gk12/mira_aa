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
const DemoGraphy = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [instructions, setInstructions] = useState(true);
  const [instructionMessages, setInstructionMessages] = useState([
    "Explore mortgage plans, financial advice, and investment strategies with us.",
    "Need help with finances? Ask about mortgages or loan <br /> rates",
    "Curious about finance? Inquire about mortgages guidance here.",
  ]);
  const handleNextButton = () => {
    navigate("/pipline");
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

  const checkboxOptions = [
    {
      label:
        "Currently serving on active duty with projected expiration date of service/tour",
      name: "activeDuty",
    },
    {
      label: "Currently retired, discharged, or separated from service",
      name: "retired",
    },
    {
      label:
        "Only period of service was non-activated member of the Reserve or National Guard",
      name: "reserve",
    },
    { label: "Surviving Spouse", name: "survivingSpouse" },
  ];

  return (
    <div className='overflow-hidden'>
      <GroupComponent1 />
      <Header />
      <div className='columns ml-[8rem] mt-24 w-full'>
        <div className='columns' style={{ width: "69%" }}>
          <div className='w-[15rem] h-[3rem] bg-white flex '>
            <h3>Dashboard</h3>
            <FaChevronRight className='w-4 h-4 mt-1' />
            <h3>DemoGraphy</h3>
          </div>
          <div className='h-10 w-full'>
            <h2 className='font-bold text-slate-400'>Personal Details</h2>
            <h2 className='mt-2 font-bold text-slate-400'>Loan Information</h2>
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
          <br />
          <section className='flex h-[650px] w-[96%] mt-[10rem] flex-col py-7 bg-white rounded-lg shadow-lg'>
            <header className='flex h-[250px] flex-col px-7 w-full max-md:px-5 max-md:max-w-full'>
              <div className='flex gap-5 justify-between items-start max-md:flex-wrap'>
                <div className='flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full'>
                  <div className='flex gap-0 text-base leading-6 text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full'>
                    <div className='justify-center px-7 py-2.5 rounded-xl bg-zinc-800 max-md:px-5'>
                      {" "}
                      Military Service{" "}
                    </div>
                    <div className='flex-auto self-start mt-8 h-px border border-solid bg-zinc-600 border-zinc-600 max-md:max-w-full' />
                  </div>
                  <div className='flex gap-5 justify-between pr-12 max-md:flex-wrap max-md:pr-5'>
                    <div className='flex flex-col flex-1 self-end mt-7 max-md:max-w-full'>
                      <p className='text-base leading-6 text-gray-900 max-md:max-w-full'>
                        Did you (or your deceased spouse) ever serve, or are you
                        currently serving, in the United States Armed Forces?
                      </p>
                      <p className='mt-5 text-base leading-6 text-gray-900 max-md:max-w-full'>
                        If YES, check all that apply
                      </p>
                      <div className='flex gap-3 mt-3 flex-wrap'>
                        {checkboxOptions.map((option, index) => (
                          <div key={index} className='flex items-center'>
                            <input
                              type='checkbox'
                              id={option.name}
                              className='shrink-0 w-5 h-5 bg-white rounded-md border border-gray-300 border-solid'
                            />
                            <label
                              htmlFor={option.name}
                              className='text-base leading-6 text-gray-900 ml-2'
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt=''
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/996fbb23f7e07eb2b215934d18b3ab6ff0de62dab58cdbb47c59adb6f6ed9da3?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
                className='shrink-0 self-end mt-8 border-solid aspect-[0.01] border-[3px] border-zinc-400 stroke-[3px] stroke-zinc-400 w-[3px]'
              />
            </header>
            <footer className='flex gap-0  mr-6 text-base leading-6 text-white whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full'>
              <div className='justify-center px-7 py-2.5 rounded-xl bg-zinc-800 w-fit max-md:px-5'>
                {" "}
                Demographic Information of Borrower{" "}
              </div>
              <div className='flex-auto self-start mt-8 h-px border border-solid bg-zinc-600 border-zinc-600 max-md:max-w-full' />
            </footer>
            <article className='mt-5 mr-6 text-base leading-6 text-gray-900 max-md:mr-2.5 max-md:max-w-full'>
              <p>
                The purpose of collecting this information is to help ensure
                that all applicants are treated fairly and that the housing
                needs of communities and neighborhoods are being fulfilled. For
                residential mortgage lending, Federal law requires that we ask
                applicants for their demographic information (ethnicity, sex,
                and race) to monitor our compliance with equal credit
                opportunity, fair housing, and home mortgage disclosure laws.
                You are not required to provide this information but are
                encouraged to do so. You may select one or more designations for
                &quot;Ethnicity&quot; and one or more designations for &quot;
                Race.&quot; The law provides that we may not discriminate based
                on this information, or on whether you choose to provide it.
                However, if you choose not to provide the information and you
                have made this application in person, Federal regulations
                require us to note your ethnicity, sex, and race based on visual
                observation or surname. The law also provides that we may not
                discriminate based on age or marital status information you
                provide in this application.
              </p>
            </article>
            <div className='flex gap-3.5-start mt-8 text-base leading-6 text-blue-500 max-md:flex-wrap'>
              <img
                alt='Consent to credit check'
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/428680da40cb8ddfd1912430e20198b9a034d9a10bf61b66edb9051a6c831696?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
                className='shrink-0 w-5 border border-blue-500 border-solid aspect-square'
              />
              <p className='flex-auto my-auto underline max-md:max-w-full'>
                Consent to credit check and acceptance of{" "}
                <span className='text-blue-500 underline'>
                  Terms & Conditions.
                </span>
              </p>
            </div>
            <button
              onClick={handleNextButton}
              className='justify-end cursor-pointer self-end px-3.5 py-2 mt-6 mr-12 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-blue-500 rounded-lg border border-blue-500 border-solid shadow-sm max-md:mr-2.5'
            >
              Complete
            </button>
          </section>
        </div>
        <GroupComponent />
      </div>
    </div>
  );
};

export default DemoGraphy;
