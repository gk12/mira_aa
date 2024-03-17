const GroupComponent = () => {
  return (
    <div className='w-1/4 fixed right-0 top-[85px] h-full rounded-lg bg-[#fff] shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] flex flex-col justify-start pt-0 px-0 pb-3 box-border min-w-1/5 max-w-full text-center text-xl text-[#333] font-gilroy-bold'>
      <div className='self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border max-w-full'>
        <div className='flex-1 rounded-t-lg rounded-b-none [background:linear-gradient(90deg,_#3f66fb,_#b57bff)] flex flex-row items-start justify-start py-2 px-3 box-border gap-[0px_12px] max-w-full z-[1] mq450:flex-wrap'>
          <img className='h-8 w-8 relative z-[2]' alt='' src='/botLogo.png' />
          {/* <div className="w-[54.1px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
              <img
                className="self-stretch h-4 relative rounded-2xs max-w-full overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/logo.png"
              />
            </div> */}
        </div>
      </div>
      <div className='self-stretch flex flex-row items-start justify-center py-0 px-5 pt-[100px] pb-[50px]'>
        <div className='w-[270px] flex flex-col items-start justify-start gap-[24px_0px]'>
          <div className='self-stretch flex flex-row items-start justify-center py-0 px-5'>
            <img
              className='h-[60px] w-[60px] relative z-[1]'
              loading='lazy'
              alt=''
              src='/group-23.svg'
            />
          </div>
          <h3 className='m-0 self-stretch relative text-inherit leading-[24px] font-normal font-inherit z-[1] mq450:text-base mq450:leading-[19px]'>
            What can I do for you today?
          </h3>
        </div>
      </div>
      <div className='flex flex-col items-start overflow-y-scroll justify-start gap-[24px_0px] max-w-full text-left text-sm text-[#808080] font-gilroy-medium'>
        <div className='self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full'>
          <div className='flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full z-[1]'>
            <div className='rounded-lg box-border flex flex-row items-start justify-start py-3 pr-[11.800000000001091px] pl-[11.899999999999636px] border-[1px] border-solid border-gainsboro'>
              <div className='relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-gainsboro' />
              <div className='relative leading-[24px] inline-block max-w-full z-[1]'>
                "I can run an eligibility check on your profile. Would you like
                to start now?"
              </div>
            </div>
            <div className='rounded-lg box-border flex flex-row items-start justify-start py-3 px-[11.799999999999272px] border-[1px] border-solid border-gainsboro'>
              <div className='relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-gainsboro' />
              <div className='flex-1 relative leading-[24px] inline-block max-w-full z-[1]'>
                “Looking to move forward? I can Request a pre-approval based on
                your profile information.”
              </div>
            </div>
            <div className='rounded-lg box-border flex flex-row items-start justify-start py-3 px-[11.799999999999272px] border-[1px] border-solid border-gainsboro'>
              <div className='relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-gainsboro' />
              <div className='flex-1 relative leading-[24px] inline-block max-w-full z-[1]'>
                "Ready to apply for a loan? Let me guide you through the loan
                application process."
              </div>
            </div>
            <div className='rounded-lg box-border flex flex-row items-start justify-start py-3 px-[11.799999999999272px] border-[1px] border-solid border-gainsboro'>
              <div className='relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-gainsboro' />
              <div className='flex-1 relative leading-[24px] inline-block max-w-full z-[1]'>
                "Compare different loan options to find what best suits your
                needs. Want to give it a try?"
              </div>
            </div>
            <div className='rounded-lg box-border flex flex-row items-start justify-start py-3 px-[11.799999999999272px] border-[1px] border-solid border-gainsboro'>
              <div className='relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-gainsboro' />
              <div className='flex-1 relative leading-[24px] inline-block max-w-full z-[1]'>
                "Get a clear picture of your payments with an amortization
                schedule. Interested?"
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute w-full bottom-20 overflow-hidden self-stretch gap-[12px_0px] max-w-full text-base text-[#808080] font-gilroy-regular'>
        <div className='self-stretch w-full h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro' />
        <div className='relative self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full'>
          <div className='h-10 flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]'>
            <div className='flex flex-col items-start justify-start pt-2 px-0 pb-0'>
              <div className='relative leading-[24px] z-[1]'>
                Write your message...
              </div>
            </div>
            <div className='h-[41px] w-[41px] rounded-8xs bg-[#fff] box-border flex flex-row items-center justify-center py-2 px-[7px] z-[1] border-[1px] border-solid border-[#bfbfbf]'>
              <img
                className='h-6 w-6 relative overflow-hidden shrink-0'
                loading='lazy'
                alt=''
                src='/arrowsarrowup.svg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
