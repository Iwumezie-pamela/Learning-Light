// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import man2 from '../assets/images/man2.avif';
import man3 from '../assets/images/man3.avif';
import man4 from '../assets/images/man4.avif';
import Teachers from './Teachers';
const Video = () => {
  return (
    <section className='mb-8 mt-7'>
      {/* h2 heading */}
      <div className='flex '>
        {' '}
        <h2 className='text-[#6d5f88] flex flex-1 lg:flex-[2.3] mb-3  '>
          Video Lessons
          <span className='font-semibold text-[#5457e2] ml-2'>124</span>
        </h2>
        {/* h2 and arrow */}
        <h2 className='text-[#6d5f88] flex ml-[3rem] lg:ml-0 flex-1 justify-between items-center mb-3'>
          Top Teachers
          <HiOutlineArrowNarrowRight size={20} style={{ color: '#5457e2' }} />
        </h2>
      </div>

      {/* main container wrapping the articles */}
      <div className='lg:flex '>
        {/* 1st article */}
        <article className='flex lg:flex-[2.4] gap-3 '>
          {/* 1st article div */}

          <div className='bg-gradient-to-l from-[#5257d8] to-[#383fbb] to-[#5b60e8] to-[#5b60e9] rounded-lg flex flex-col justify-between flex-1 lg:flex-auto p-5 lg:w-[43%]'>
            <h2 className='text-[18px]'>
              We Create effective <br /> texts for landing
            </h2>
            {/* ceo div */}

            <div className='flex items-center justify-between pt-3 '>
              <div className='flex  gap-3 items-center'>
                <img
                  src={man2}
                  alt=''
                  className='w-12 h-12 object-contain rounded-lg'
                />

                <div className='flex flex-col  '>
                  <h4 className='text-[#fff] text-xs md:text-sm whitespace-nowrap'>
                    Randall Mccoy
                  </h4>
                  <p className='text-xs md:text-sm text-white/40'>
                    CEO, California Tech.
                  </p>
                </div>
              </div>

              <div>
                {' '}
                <p className='text-xs bg-black text-white py-[3px] px-2 rounded-full'>
                  10:08
                </p>
              </div>
            </div>
          </div>
          {/* 2nd article div */}

          <div className='lg:w-[22%] flex flex-1 lg:flex-auto flex-col gap-3'>
            {/* 1st  */}
            <div className='bg-[#5257d8] rounded-lg p-2'>
              <h2 className='mb-7 text-sm'>
                We make a website <br /> business card.Training.
              </h2>

              <div className='flex gap-2'>
                <img
                  src={man3}
                  alt=''
                  className='w-10 h-10 object-contain rounded-lg '
                />
                <div className='flex flex-col flex-1'>
                  <h4 className='text-[#fff] text-xs md:text-sm whitespace-nowrap'>
                    Jorge Murphy
                  </h4>
                  <p className='text-xs md:text-sm text-white/40'>
                    Senior Designer
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className='bg-[#5257d8] rounded-lg p-2'>
              <h2 className='mb-7 text-sm'>
                Web animation. <br /> The basics
              </h2>
              <div className='flex gap-2'>
                <img
                  src={man4}
                  alt=''
                  className='w-10 h-10 object-contain rounded-lg'
                />
                <div className='flex flex-col flex-1'>
                  <h4 className='text-[#fff] text-xs md:text-sm whitespace-nowrap'>
                    Randall Richard
                  </h4>
                  <p className='text-xs md:text-sm text-white/40'>
                    Art Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* 2nd article */}

        <article className='px-7  flex-1 mt-3 lg:mt-0'>
          <Teachers />
        </article>
      </div>
    </section>
  );
};

export default Video;
