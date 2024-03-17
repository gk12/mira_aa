import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingHeader from "./OnboardingHeader";
const UserOnboardingSixth = () => {
  const navigate = useNavigate();
  const employmentOptions = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc2c65db9d370a8b08edf2bd5a5d4d94486e1f353ced095e5a03acc17282e100?apiKey=baa490de43cc4700b43c12ed49da66f4&",
      label: "Employed",
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5449a210bf7cb53ef34645e5c20023f85a29261dffecf04f2847868270eeb77?apiKey=baa490de43cc4700b43c12ed49da66f4&",
      label: "Self Employed",
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/db463d5822057074b4dbafa154098fcaa12faf0e438c9c1815581bcaba201080?apiKey=baa490de43cc4700b43c12ed49da66f4&",
      label: "Retired or on SSN",
    },
  ];
  const onClickButton = () => {
    navigate("/profile");
  };
  return (
    <main className='flex flex-col items-center pt-6 pr-20 pb-20 pl-8 bg-white max-md:px-5'>
      <OnboardingHeader />
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/cb106332beb42b250191ba0dffa24a6132ade491574b41e2526eb04e56ffffe6?apiKey=baa490de43cc4700b43c12ed49da66f4&'
        alt='User avatar'
        className='mt-40 w-24 rounded-full aspect-square max-md:mt-10'
      />
      <h1 className='mt-3.5 text-2xl leading-6 text-center text-black whitespace-nowrap'>
        Hello Rebecca!
      </h1>
      <h2 className='mt-6 text-4xl leading-10 text-center text-slate-700 max-md:max-w-full'>
        What is your current employment status?
      </h2>
      <section className='mt-14 max-w-full w-[822px] max-md:mt-10'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          {employmentOptions.map((option) => (
            <div
              key={option.id}
              className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'
            >
              <div
                className={`flex flex-col grow px-20 py-11 w-full text-2xl leading-9 text-center text-black whitespace-nowrap bg-white rounded-lg border ${
                  option.id === 1
                    ? "border-blue-500 border-solid shadow-lg"
                    : "border-none"
                }  max-md:px-5 max-md:mt-5`}
              >
                <img
                  loading='lazy'
                  src={option.icon}
                  alt={`${option.label} icon`}
                  className='self-center aspect-[0.98] w-[47px]'
                />
                <div className='mt-9'>{option.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className='flex gap-5 mt-9 text-lg leading-7 whitespace-nowrap'>
        <button
          type='button'
          className='grow justify-center px-7 py-4 bg-white rounded-lg border border-solid shadow-sm border-zinc-500 text-zinc-500 max-md:px-5'
        >
          Back
        </button>
        <button
          type='button'
          onClick={onClickButton}
          className='grow cursor-pointer justify-center px-7 py-4 text-white bg-blue-500 rounded-lg border border-blue-500 border-solid shadow-sm max-md:px-5'
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default UserOnboardingSixth;
