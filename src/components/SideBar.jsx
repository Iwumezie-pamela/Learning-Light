import { useState } from 'react';
import sun from '../assets/images/sun.png';
import { Links } from '../../helpers/utils';
import { FaBook } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className='hidden md:flex w-[13rem] md:flex-col border-r border-slate-200  h-screen lg:h-[92vh]'>
      {/* header */}
      <header className='border-b border-slate-200  flex items-center pl-5 py-4'>
        <img src={sun} alt='sunlight' className='w-6 h-6 mr-1' />
        <h2 className='text-[#646077] text-lg'>LearningLight</h2>
      </header>

      {/* Links */}
      <div className='border-b border-slate-200'>
        <div className='my-8'>
          {Links.map((link, index) => {
            const { icons, text } = link;
            return (
              <ul
                key={index}
                onClick={() => setActiveIndex(index)}
                className={
                  activeIndex === index
                    ? 'flex items-center pl-5 gap-3 mb-3  text-[#5457e2] cursor-pointer '
                    : 'flex items-center pl-5 gap-3 mb-3 text-[#797291] cursor-pointer '
                }
              >
                <span>{icons} </span>
                <li className='text-sm'>{text}</li>
              </ul>
            );
          })}
        </div>
      </div>

      <div className='pl-5 pr-3'>
        {/* Home work */}
        <div className='flex items-center mt-8 mb-5 gap-3'>
          <FaBook style={{ color: '#5457e2' }} />
          <p className='text-[#797291] text-sm mr-5'>Homework</p>
          <HiOutlineArrowNarrowRight size={20} style={{ color: '#5457e2' }} />
        </div>
        {/* end of home work div */}

        {/* Progress Bar */}
        <div className='w-[88%] mb-10'>
          {/* progress bar 1*/}
          <div className='mb-3'>
            <p className='text-xs mb-1 whitespace-nowrap text-[#797291]'>
              Basics of Composition
            </p>
            <div className=' h-[3px] bg-gray-200 rounded-md overflow-hidden'>
              <div
                className='h-full bg-[#5457e2] transition-all duration-300 ease-in-out'
                style={{
                  width: '80%',
                }}
              ></div>
            </div>

            <div className='flex items-center justify-between mt-1'>
              <p className='text-xs text-[#797291]'>4/5</p>
              <p className='text-xs text-[#797291]'>80%</p>
            </div>
          </div>

          {/* progress bar 2 */}
          <div className='mb-3'>
            <p className='text-xs mb-1 whitespace-nowrap text-[#797291]'>
              Typography Basics
            </p>
            <div className=' h-[3px] bg-gray-200 rounded-md overflow-hidden'>
              <div
                className='h-full bg-[#5457e2] transition-all duration-300 ease-in-out'
                style={{
                  width: '60%',
                }}
              ></div>
            </div>

            <div className='flex items-center justify-between mt-1'>
              <p className='text-xs text-[#797291]'>3/5</p>
              <p className='text-xs text-[#797291]'>60%</p>
            </div>
          </div>

          {/* progress bar 3 */}
          <div className='mb-3'>
            <p className='text-xs whitespace-nowrap mb-1 text-[#797291]'>
              Color Basics
            </p>
            <div className=' h-[3px] bg-gray-200 rounded-md overflow-hidden'>
              <div
                className='h-full bg-[#5457e2] transition-all duration-300 ease-in-out'
                style={{
                  width: '40%',
                }}
              ></div>
            </div>

            <div className='flex items-center justify-between mt-1'>
              <p className='text-xs text-[#797291]'>2/5</p>
              <p className='text-xs text-[#797291]'>40%</p>
            </div>
          </div>

          {/* progress bar 4 */}
          <div className=''>
            <p className='text-xs mb-1 text-[#797291] whitespace-nowrap'>
              Modular Mesh
            </p>
            <div className=' h-[3px] bg-gray-200 rounded-md overflow-hidden'>
              <div
                className='h-full bg-[#5457e2] transition-all duration-300 ease-in-out'
                style={{
                  width: '60%',
                }}
              ></div>
            </div>

            <div className='flex items-center justify-between mt-1'>
              <p className='text-xs text-[#797291]'>3/5</p>
              <p className='text-xs text-[#797291]'>60%</p>
            </div>
          </div>
          {/* end of progress bar */}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
