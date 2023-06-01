import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import brook from '../assets/images/brook.jpg';
import Skills from './Skills';

const DesignDashBoard = () => {
  return (
    <section className='w-full lg:w-[88%]'>
      <header className='border-b border-slate-200 flex items-center justify-between px-3 md:px-10 gap-2 '>
        <form className='bg-[#edf0fe] sm:w-3/5 rounded-xl my-[.88rem] pl-3 md:pl-5 '>
          <div className='flex items-center h-8 gap-2'>
            <BiSearch
              size={20}
              style={{ color: '#b1acc2', cursor: 'pointer' }}
            />
            <input
              type='text'
              className='text-[#797291] bg-[#edf0fe]  outline-none placeholder:text-[#b1acc2] '
              placeholder='Search'
            />
          </div>
        </form>

        <div className='flex items-center gap-2 md:gap-5'>
          <IoMdNotifications
            size={20}
            md:size={25}
            style={{ color: 'black' }}
          />
          <div className='flex gap-1.5 md:gap-3 items-center '>
            <img
              src={brook}
              alt='An image of a lady'
              className='w-8 h-8 object-cover rounded-full'
            />
            <p className='text-[#797291] whitespace-nowrap'>Debra Cooper</p>
          </div>
        </div>
      </header>

      <Skills />
    </section>
  );
};

export default DesignDashBoard;
