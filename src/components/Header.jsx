/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "../assets/logo/Avatar.svg";
const Header = () => {
  return (
    <header className='fixed w-full top-0 right-0 self-stretch overflow-hidden opacity-1 bg-[#fff] flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[14px_0px] text-left text-sm text-[#344154] font-text-sm-regular z-10'>
      <div className='self-stretch h-[68px] relative bg-[#fff] hidden' />
      <div className='w-[293px] flex flex-row items-start justify-start py-0 px-6 box-border'>
        <div className='flex-1 flex flex-row items-start justify-start gap-[0px_28px]'>
          <div className='flex flex-col items-start justify-start pt-2 px-0 pb-0'>
            <img
              className='w-6 h-6 relative z-[1]'
              loading='lazy'
              alt=''
              src='/group-21511.svg'
            />
          </div>
          <div className='flex-1 flex flex-row items-start justify-start gap-[0px_12px] z-[1]'>
            <div className="h-10 w-10 rounded-181xl flex flex-row items-start justify-end pt-[30px] pb-0 pr-0 pl-[27px] box-border bg-[url('')] bg-cover bg-no-repeat bg-[top]">
              <div className='h-[13px] w-[13px] relative rounded-8xs bg-limegreen box-border overflow-hidden shrink-0 border-[1.5px] border-solid border-[#fff]' />
            </div>
            <div className='flex-1 flex flex-col items-start justify-start'>
              <div className='self-stretch relative leading-[20px] font-semibold whitespace-nowrap'>
                Rebecca Hardison
              </div>
              <div className='relative leading-[20px] text-[#101828] whitespace-nowrap'>
                rebecca@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-[#e5e5e5]' />
    </header>
  );
};

export default Header;
