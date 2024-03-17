import React from "react";
import OnboardingHeader from "./OnboardingHeader";

const UserOnboardFirst = () => {
  return (
    <main className='flex flex-col items-center pt-6 pr-20 pb-20 pl-8 bg-white max-md:px-5'>
      <OnboardingHeader />
      <section className='fixed inset-0 flex items-center justify-center'>
        <div className='flex gap-5 md:flex-row md:gap-0 max-w-[404px] bg-white rounded-lg p-5'>
          <figure className='flex flex-col w-[29%] md:w-full items-center'>
            <img
              src='/RebaccaAvatar.png' // Your image source here
              alt='Welcome'
              className='shrink-0 max-w-full aspect-square w-[109px] rounded-full'
              loading='lazy'
            />
          </figure>
          <div className='flex flex-col ml-5 w-[71%] md:ml-5 md:w-full'>
            <header className='flex flex-col self-stretch my-auto'>
              <h1 className='text-4xl leading-6 text-black whitespace-nowrap'>
                Hello Rebecca!
              </h1>
              <p className='mt-4 text-xl leading-7 text-neutral-500'>
                Mira Welcomes you
              </p>
            </header>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserOnboardFirst;
