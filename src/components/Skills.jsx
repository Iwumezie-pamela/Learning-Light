import React, { useState } from 'react';
import { skills } from '../../helpers/utils';
import Articles from './Articles';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='mt-8 px-5 lg:px-10 '>
      <div className='grid grid-cols-4 lg:flex md:items-center  lg:flex-wrap gap-3 lg:gap-7'>
        {skills.map((skill, index) => {
          return (
            <p
              key={index}
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? 'bg-[#5457e2] text-center rounded-lg md:p-1.5 text-[13px] text-white cursor-pointer'
                  : 'bg-[#edf0fe] text-center text-[#797291] rounded-lg md:p-1.5 text-[13px] cursor-pointer'
              }
            >
              {skill.text}
            </p>
          );
        })}
      </div>

      <Articles />
    </section>
  );
};

export default Skills;
