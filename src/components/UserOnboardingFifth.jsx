import React from "react";
import OnboardingHeader from "./OnboardingHeader";

const UserOnboardingFifth = () => {
  const loanOptions = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77e53dcd81bf98ca4de90d1477e7f73a151ec073fc7d7d508b9ac083cd07c295?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      title: "Purchase",
      description: "Need a mortgage because I'm buying a house.",
      borderColor: "border-blue-500 border",
      iconStyle: "stroke-blue-500 w-[41px]",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd35e200319a94ccf742f1f314ad4ea9041cdcadcbbce863c84ccb714e533e48?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      title: "Refinance",
      description: "Want to refinance my existing mortgage",
      borderColor: "border-neutral-700",
      iconStyle: "stroke-neutral-700 w-[51px]",
    },
  ];

  const LoanOption = ({ iconSrc, title, description, borderColor }) => (
    <div
      className={`flex flex-col grow items-center p-5 w-full text-center text-black bg-white rounded-lg ${borderColor} max-md:px-5 max-md:mt-5`}
    >
      <img
        loading='lazy'
        src={iconSrc}
        alt={title}
        className='aspect-square  w-[34px]'
      />
      <div className='mt-4 text-lg leading-6'>{title}</div>
      <p className='self-stretch mt-4 text-sm leading-7'>{description}</p>
    </div>
  );

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
        <p className='mt-4 text-base md:text-xl lg:text-xl leading-7 text-center text-slate-700 md:max-w-full'>
          What's the purpose your loan?
        </p>

        <section className='mt-5 max-w-full w-[540px] max-md:mt-5'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            {loanOptions.map((option) => (
              <div
                key={option.title}
                className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'
              >
                <LoanOption
                  iconSrc={option.iconSrc}
                  title={option.title}
                  description={option.description}
                  borderColor={option.borderColor}
                />
              </div>
            ))}
          </div>
        </section>
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
export default UserOnboardingFifth;
