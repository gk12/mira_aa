import React from "react";
import logo1 from "../assets/logo/logo1.svg";
import v4 from "../assets/logo/Vector(4).svg";
import Profile from "../assets/logo/profile.svg";
import { MdOutlineDashboard } from "react-icons/md";
import v5 from "../assets/logo/Vector(5).svg";
import v6 from "../assets/logo/Vector(6).svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed bg-black w-1/8 left-0 w-[88px] bg-[#333] shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] flex flex-col items-start justify-start pt-4 px-0 pb-[618px] box-border gap-[49px] z-[1] text-left text-sm text-[#fff] font-gilroy-medium mq450:pb-[261px] mq450:box-border mq1125:pt-5 mq1125:pb-[402px] mq1125:box-border'>
      <div className='self-stretch h-[1117px] relative bg-[#333] shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] hidden' />
      <div className='flex flex-row items-start justify-start py-0 px-[26px]'>
        <img
          className='h-[5rem] w-[5rem] relative z-[1]'
          loading='lazy'
          alt=''
          src={logo1}
        />
      </div>
      <div className='self-stretch flex flex-col items-start justify-start'>
        <div className='flex flex-row items-start justify-start pt-0 px-[7px] pb-[21px]'>
          <div className='flex flex-col items-start justify-start gap-[4px_0px]'>
            <div className='flex flex-row items-start justify-start py-0 pr-6 pl-[25px]'>
              {/* <img
                className='h-6 w-6 relative z-[1]'
                loading='lazy'
                alt=''
                src={logo1}
              /> */}
              <MdOutlineDashboard className='bg-white h-[2rem] w-[2rem] relative z-[1]' />
            </div>
            <div className='relative leading-[18px] z-[1]'>Dashboard</div>
          </div>
        </div>
        <button className='cursor-pointer [border:none] py-[21px] pr-[23px] pl-6 bg-mediumslateblue self-stretch flex flex-col items-start justify-start gap-[4px_0px] z-[1]'>
          <div className='w-[88px] h-[88px] relative bg-mediumslateblue hidden' />
          <div className='flex flex-row items-start justify-start py-0 px-2'>
            <img
              className='h-[3rem] w-[3rem] relative z-[2]'
              alt=''
              src={Profile}
            />
          </div>
          <div className='self-stretch relative text-sm leading-[18px] font-gilroy-bold text-[#fff] text-center z-[2]'>
            Profile
          </div>
        </button>
        <div className='self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px]'>
          <button className='cursor-pointer [border:none] py-[21px] px-[18px]  flex-1 flex flex-col items-start justify-start gap-[4px_0px] z-[1]'>
            <div className='w-[88px] h-[88px] relative  hidden opacity-[0]' />
            <div className='flex flex-row items-start justify-start py-0 px-4'>
              <img
                className='h-[5rem] w-[5rem] relative z-[2]'
                alt=''
                src={v5}
              />
            </div>
            <div className='relative text-sm leading-[18px] font-gilroy-medium text-[#fff] text-left pr-px z-[2]'>
              Pipeline
            </div>
          </button>
        </div>
        <div className='flex flex-row items-start justify-start pt-0 px-[7px] pb-[42px]'>
          <div className='flex flex-col items-start justify-start gap-[4px_0px]'>
            <div className='flex flex-row items-start justify-start py-0 px-[27px]'>
              <img
                className='h-6 w-[19.2px] relative z-[1]'
                loading='lazy'
                alt=''
                src={v6}
              />
            </div>
            <div className='relative leading-[18px] z-[1]'>Documents</div>
          </div>
        </div>
        <div className='flex flex-row items-start justify-start py-0 px-[27px]'>
          <div className='flex flex-col items-start justify-start gap-[4px_0px]'>
            <div className='flex flex-row items-start justify-start py-0 pr-1 pl-[5px]'>
              <img
                className='h-6 w-6 relative z-[1]'
                loading='lazy'
                alt=''
                src={v4}
              />
            </div>
            <div className='relative leading-[18px] z-[1]'>Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
