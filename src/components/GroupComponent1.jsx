import React from "react";
import { useNavigate } from "react-router-dom";

const GroupComponent1 = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[88px] h-full fixed bg-[#333] shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] flex flex-col items-start justify-start pt-4 px-0 box-border gap-[49px] text-left text-sm text-[#fff] font-gilroy-medium mq450:box-border mq1125:pt-5 mq1125:box-border z-[111]'>
      <div className='self-stretch relative bg-[#333] shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] hidden' />
      <div className='flex flex-row items-start justify-start py-0 px-[26px]'>
        <img
          className='h-9 w-9 relative z-[1]'
          loading='lazy'
          alt=''
          src='/logo.png'
        />
      </div>
      <div className='self-stretch flex flex-col items-start justify-start'>
        <div className='flex flex-row items-start justify-start pt-0 px-[7px] pb-[21px]'>
          <div className='flex flex-col items-start justify-start gap-[4px_0px]'>
            <div className='flex flex-row items-start justify-start py-0 pr-6 pl-[25px]'>
              <img
                className='h-6 w-6 relative z-[1]'
                loading='lazy'
                alt=''
                src='/Vector.png'
                onClick={navigate()}
              />
            </div>
            <div className='relative leading-[18px] z-[1]'>Dashboard</div>
          </div>
        </div>
        <div
          onClick={() => navigate("/profile")}
          className='self-stretch cursor-pointer h-[88px] bg-mediumslateblue flex flex-col items-start justify-start py-3.5 px-1.5 box-border gap-[4px_0px] z-[1] text-center font-gilroy-bold'
        >
          <div className='w-[88px] h-[88px] relative bg-mediumslateblue hidden' />
          <div className='flex flex-row items-start justify-start py-0 px-[26px]'>
            <img
              className='h-6 w-6 relative z-[2]'
              alt=''
              src='/LoanInfo.png'
            />
          </div>
          <div className='self-stretch flex-1 relative leading-[18px] z-[2]'>
            <p className='m-0'>Profile</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/pipline")}
          className='self-stretch cursor-pointer h-[88px] flex flex-col items-start justify-start py-3.5 px-1.5 box-border gap-[4px_0px] z-[1] text-center font-gilroy-bold'
        >
          <div className='w-[88px] h-[88px] relative hidden' />
          <div className='flex flex-row items-start justify-start py-0 px-[26px]'>
            <img
              className='h-6 w-6 relative z-[2]'
              alt=''
              src='/Pipeline.png'
            />
          </div>
          <div className='self-stretch flex-1 relative leading-[18px] z-[2]'>
            <p className='m-0'>Pipeline</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/doc")}
          className='self-stretch cursor-pointer h-[88px] flex flex-col items-start justify-start py-3.5 px-1.5 box-border gap-[4px_0px] z-[1] text-center font-gilroy-bold'
        >
          <div className='w-[88px] h-[88px] relativ hidden' />
          <div className='flex flex-row items-start justify-start py-0 px-[26px]'>
            <img
              className='h-6 w-6 relative z-[2]'
              alt=''
              src='/QuickPrice.png'
              onClick={navigate("/doc")}
            />
          </div>
          <div className='self-stretch flex-1 relative leading-[18px] z-[2]'>
            <p className='m-0'>Documents</p>
          </div>
        </div>
        {/* <LoopNode vector="/Pipeline.png" pipeline="Pipeline" />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px]">
          <LoopNode
            vector="/QuickPrice.png"
            pipeline="Quick Price"
            propPadding="12px 8px 30px"
            propFlex="1"
            propTextAlign="center"
            propPaddingRight="unset"
          />
        </div> */}
        <div
          onClick={() => navigate("/tools")}
          className='flex cursor-pointer flex-row items-start justify-start py-0 px-[27px]'
        >
          <div className='flex flex-col items-start justify-start gap-[4px_0px]'>
            <div className='flex flex-row items-start justify-start py-0 pr-1 pl-[5px]'>
              <img className='h-6 w-6 relative z-[1]' alt='' src='/Tools.png' />
            </div>
            <div className='relative leading-[18px] z-[1]'>Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
