import React from "react";
import OnboardingHeader from "./OnboardingHeader";

const UserOnboardingSecond = () => {
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
        <h1 className='mt-3.5 text-base md:text-lg lg:text-lg leading-6 text-center text-black whitespace-nowrap'>
          Hello Rebecca!
        </h1>
        <p className='mt-4 text-base md:text-xl lg:text-xl leading-7 text-center text-[#344054] md:max-w-full'>
          Are you working with any of <br /> our loan officers?
        </p>
        <div>
          {" "}
          <label
            htmlFor={"yes"}
            className={`flex items-center gap-2 px-5 py-4 mt-8 border border-gray-300  md:px-6 md:py-3 md:mt-10 max-w-full text-sm md:text-base lg:text-lg leading-7 whitespace-nowrap rounded-lg w-[260px]`}
          >
            <input
              type='radio'
              id='yes'
              name='choice'
              className='form-checkbox rounded-full h-4 w-4 text-blue-600'
            />
            <span className='flex-auto my-auto cursor-pointer'>Yes</span>
          </label>
          <label
            htmlFor={"yes"}
            className={`flex items-center gap-2 px-5 py-4 mt-8 border border-gray-300  md:px-6 md:py-3 md:mt-10 max-w-full text-sm md:text-base lg:text-lg leading-7 whitespace-nowrap rounded-lg w-[260px]`}
          >
            <input
              type='radio'
              id='no'
              name='choice'
              className='form-checkbox rounded-full h-4 w-4 text-blue-600'
            />
            <span className='flex-auto my-auto cursor-pointer'>No</span>
          </label>
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

export default UserOnboardingSecond;
