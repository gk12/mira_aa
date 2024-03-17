import React from "react";

const OnboardingHeader = () => {
  return (
    <header className='flex gap-5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full'>
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/ba8fd81b0f9225cfa8701fc2f0b8a1d23aaa0924d47e354be1b782bdf3016490?apiKey=baa490de43cc4700b43c12ed49da66f4&'
        alt='Company logo'
        className='shrink-0 max-w-full aspect-[2.44] w-[111px]'
      />
      <div className='flex gap-2 my-auto max-md:flex-wrap w-[60%] max-md:max-w-full'>
        <div className='flex flex-col w-[80%] grow shrink-0 justify-center items-start self-start pr-16 mt-1 bg-gray-100 rounded basis-0 max-md:max-w-full'>
          <div className='shrink-0 h-2 bg-blue-600 rounded w-[198px]' />
        </div>
        <div className='grow w-[20%] text-sm leading-5 text-black'>40%</div>
      </div>
    </header>
  );
};

export default OnboardingHeader;
