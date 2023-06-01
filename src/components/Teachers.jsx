// eslint-disable-next-line no-unused-vars
import React from 'react';
import { teachers } from '../../helpers/utils';

const Teachers = () => {
  return (
    <div className='flex flex-col gap-3'>
      {teachers.map((teacher) => {
        const { id, img, name, yoe, no } = teacher;
        return (
          <article key={id} className='flex items-center justify-between '>
            <div className='flex items-center gap-3'>
              <img
                src={img}
                alt={name}
                className='h-14 w-14 object-cover rounded-full'
              />
              <div>
                <h4 className='whitespace-nowrap text-sm text-[#6d5f88]'>
                  {name}
                </h4>
                <p className='whitespace-nowrap text-slate-400 text-xs'>
                  {yoe}
                </p>
              </div>
            </div>

            <div>
              <p className='text-[#5257d8]'>{no}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Teachers;
