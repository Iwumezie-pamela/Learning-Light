// eslint-disable-next-line no-unused-vars
import React from 'react';
import book from '../assets/images/book.jpeg';
import man1 from '../assets/images/man1.avif';
import woman2 from '../assets/images/woman2.avif';
import globe from '../assets/images/globe.png';
import { AiFillClockCircle } from 'react-icons/ai';
import { themes } from '../../helpers/utils';
import Video from './Video';

const Articles = () => {
  return (
    <section className='mt-7 '>
      <div className='flex'>
        <h2 className='text-[#6d5f88] flex flex-[1.05] lg:flex-[2.3] md:mb-2'>
          Articles{' '}
          <span className='font-semibold text-[#5457e2] ml-2'>162</span>
        </h2>

        <h2 className='text-[#6d5f88]  flex flex-1 md:mb-2'>
          Theme Chart{' '}
          <span className='font-semibold text-[#5457e2] ml-2'>24</span>
        </h2>
      </div>
      <div className='lg:flex'>
        {/* 1st div*/}
        <div className='flex gap-3 '>
          {/* 1st article */}
          <article className='flex items-center w-1/2 lg:w-[55%] bg-[#edf0fe] p-2 md:p-3 rounded-lg'>
            <div>
              <h2 className='text-[#6d5f88] font-normal mb-2'>
                Inclusive Design Principles
              </h2>
              {/* time */}
              <div className='flex items-center w-fit bg-[#e2e3ff] mb-5  md:mb-8 rounded-lg p-1.5'>
                {/* time img */}
                <AiFillClockCircle style={{ color: '#3c3063' }} />
                <p className='text-[#3c3063] text-sm ml-1'>5 min</p>
              </div>
              {/* woman image */}
              <div className='flex items-center gap-3 pt-3'>
                <img
                  src={man1}
                  alt=''
                  className='w-10 h-10 object-contain rounded-md'
                />
                <div>
                  <h4 className='text-[#6d5f88] text-xs md:text-sm whitespace-nowrap'>
                    Rosemary Steward
                  </h4>
                  <p className='text-xs md:text-sm text-[#9b8fb3]'>Feb 11</p>
                </div>
              </div>
            </div>
            {/* img */}
            <div>
              <img src={book} alt='' className='w-28 lg:w-40' />
            </div>
          </article>

          {/* 2nd article */}
          <article className='flex items-center w-1/2 lg:w-[30%] bg-[#edf0fe] p-3 rounded-lg'>
            <div>
              <h2 className='text-[#6d5f88] font-normal mb-2 whitespace-nowrap'>
                Design Trends <br /> in 2020
              </h2>
              {/* time */}
              <div className='flex items-center w-fit bg-[#e2e3ff] mb-8 rounded-lg p-1.1'>
                <AiFillClockCircle style={{ color: '#3c3063' }} />
                <p className='text-[#3c3063] text-sm ml-1'>1 min</p>
              </div>
              {/* woman image */}
              <div className='flex items-center gap-3 pt-3'>
                <img
                  src={woman2}
                  alt=''
                  className='w-10 h-10 object-cover rounded-md'
                />
                <div>
                  <h4 className='text-[#6d5f88] text-xs md:text-sm whitespace-nowrap'>
                    Bessie Bell
                  </h4>
                  <p className='text-xs md:text-sm text-[#9b8fb3]'>Feb 4</p>
                </div>
              </div>
            </div>
            {/* img */}
            <div>
              <img
                src={globe}
                alt='a woman and a globe'
                className='w-28 lg:w-fit object-contain'
              />
            </div>
          </article>
        </div>

        {/* end of first div */}

        {/* 2nd */}

        <div className='grid grid-cols-2 gap-3 mt-7 lg:mt-0 lg:ml-[-3rem]'>
          {themes.map((theme) => {
            const { id, img, text } = theme;
            return (
              <article
                key={id}
                className='bg-[#edf0fe] flex  flex-col  items-center justify-center md:mx-0 md:px-10  rounded-lg'
              >
                <img
                  src={img}
                  alt={text}
                  className='w-32 h-20 object-contain'
                />
                <p className='text-[#6d5f88] text-xs mb-1 text-center'>
                  {text}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <Video />
    </section>
  );
};

export default Articles;
