import React from "react";
import OnboardingHeader from "./OnboardingHeader";

const UserOnboardingThird = () => {
  const loanOfficers = [
    {
      name: "Kyle Brown",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f715b0da811f0d32c481eb8ce4b77dcb86955464220cf8d5ad3d9d54b6ccacd4?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      alt: "Kyle Brown",
    },
    {
      name: "Daniel Lemieux",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a9c8a271a5c12e1ea1069c0ffd6014c035d3baf2d7ddbfe4139a9754e315963?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      alt: "Daniel Lemieux",
    },
    {
      name: "Harvey Berlin",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d10ef321ee1387a9519313e3f0be3dca4787a57b88224a8f10201a0386ea906d?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      alt: "Harvey Berlin",
    },
    {
      name: "Edna Lewis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5fc3a7dfb0739892f1b4dc3f81e41777a06936f07fe669e2b6fcf0eec4dc6567?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      alt: "Edna Lewis",
    },
    {
      name: "Robin Walters",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3edba9a832e25fd80d8df4e5fcfdfcc0f922371e50ad095588132b5b6b3c9140?apiKey=624c6cf4f6ba4e90906f706736368fa0&",
      alt: "Robin Walters",
    },
  ];
  const OfficerCard = ({ name, image, alt }) => (
    <div className='flex flex-col flex-1 items-center mt-1 text-lg leading-6 text-center text-black'>
      <img
        loading='lazy'
        src={image}
        className='w-12 rounded-full aspect-square'
        alt={alt}
      />
      <div className='mt-4'>
        {name.split(" ").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
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
          Choose a Loan Office, <br /> and we'll assign them to your profile
        </p>
        <section className='flex gap-5 justify-between items-start mt-5 max-md:flex-wrap max-md:mt-5'>
          {loanOfficers.map((officer, index) => {
            if (index == 2) {
              return (
                <div className='flex flex-col flex-1 items-center self-stretch'>
                  <div className='flex overflow-hidden relative flex-col items-start pt-10 pl-12 rounded-full border-4 border-blue-500 border-solid aspect-square'>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/d10ef321ee1387a9519313e3f0be3dca4787a57b88224a8f10201a0386ea906d?apiKey=624c6cf4f6ba4e90906f706736368fa0&'
                      className='object-cover absolute inset-0 size-full bold'
                      alt='Harvey Berlin'
                    />
                  </div>
                  <div className='mt-3 text-lg leading-6 text-center text-black'>
                    Harvey
                    <br />
                    Berlin
                  </div>
                  <div
                    className='mt-6 text-sm leading-6 text-center text-blue-500 underline whitespace-nowrap'
                    tabIndex='0'
                  >
                    {" "}
                    See more{" "}
                  </div>
                </div>
              );
            }
            return <OfficerCard key={index} {...officer} />;
          })}
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

export default UserOnboardingThird;
