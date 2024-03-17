import React from "react";
import OnboardingHeader from "./OnboardingHeader";

const UserOnboardinFourth = () => {
  return (
    <main className='flex flex-col items-center pt-6 pr-20 pb-20 pl-8 bg-white max-md:px-5'>
      <OnboardingHeader />
      <section className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pt-6 pr-4 pb-16 pl-4 bg-white md:px-8 lg:px-12'>
        <img
          src='/RebaccaAvatar.png'
          alt='Welcome'
          className='shrink-0 max-w-full aspect-square w-[109px] rounded-full'
          loading='lazy'
        />
        <h1 className='mt-3.5 text-base md:text-lg lg:text-lg leading-6 text-center text-[#344054] whitespace-nowrap'>
          Hello Rebecca!
        </h1>
        <p className='mt-4 text-base md:text-xl lg:text-xl leading-7 text-center text-[#344054] md:max-w-full'>
          Enter your area name & zip code
        </p>
        <div className='flex flex-col justify-center px-3.5 py-2.5 mt-5 w-80 max-w-full text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:mt-10'>
          <div className='flex gap-2'>
            <img
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/ce8f75f9fac46ea9c19d721687c414b5591f8f309e14174308b5cec679370a87?apiKey=624c6cf4f6ba4e90906f706736368fa0&'
              alt='Location Icon'
              className='shrink-0 my-auto w-5 aspect-square'
            />
            <input
              className='flex-auto'
              placeholder='Street address, city'
            ></input>
          </div>
        </div>

        <NavigationButtons />
      </section>
    </main>
  );
};
function NavigationButtons() {
  return (
    <div className='flex gap-4 mt-6 text-sm md:text-base lg:text-lg leading-7 whitespace-nowrap'>
      <button className=' justify-center py-2 bg-white rounded-lg border border-solid shadow-sm border-zinc-500 text-zinc-500 md:px-4'>
        Back
      </button>
      <button className='grow justify-center px-4 py-2 text-white bg-blue-500 rounded-lg border border-blue-500 border-solid shadow-sm'>
        Next
      </button>
    </div>
  );
}
export default UserOnboardinFourth;
