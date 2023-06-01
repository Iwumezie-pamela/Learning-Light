import React from 'react';

import { IoIosHome } from 'react-icons/io';
import { IoIosSchool } from 'react-icons/io';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { GiPieChart } from 'react-icons/gi';
import { IoSettingsSharp } from 'react-icons/io5';

import edu from '../src/assets/images/education.png';
import tech from '../src/assets/images/tech.png';
import uni from '../src/assets/images/uni.png';
import work from '../src/assets/images/work.png';
import man5 from '../src/assets/images/man5.avif';
import man6 from '../src/assets/images/man6.avif';
import man7 from '../src/assets/images/man7.avif';
import man8 from '../src/assets/images/man8.avif';

export const Links = [
  { id: 1, icons: <IoIosHome size={22} />, text: 'Home' },
  { id: 2, icons: <IoIosSchool size={22} />, text: 'Courses' },
  { id: 3, icons: <RiLightbulbFlashFill size={22} />, text: 'Training' },
  { id: 4, icons: <GiPieChart size={22} />, text: 'Statistics' },
  { id: 5, icons: <IoSettingsSharp size={22} />, text: 'Settings' },
];

// eslint-disable-next-line react-refresh/only-export-components
export const skills = [
  {
    text: 'English',
  },
  {
    text: 'Product',
  },
  {
    text: 'UX/UI Design',
  },
  {
    text: 'Photography',
  },
  {
    text: 'Time management',
  },
  {
    text: 'Development',
  },
  {
    text: 'Graphic design',
  },
  {
    text: 'History of England',
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const themes = [
  {
    id: 1,
    img: edu,
    text: 'Education',
  },
  {
    id: 2,
    img: work,
    text: 'Work',
  },
  {
    id: 3,
    img: uni,
    text: 'University',
  },
  {
    id: 4,
    img: tech,
    text: 'Technology',
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const teachers = [
  {
    id: 1,
    img: man5,
    name: 'Marvin Hawkins',
    yoe: '5 years experience',
    no: '5.0',
  },
  {
    id: 2,
    img: man6,
    name: 'Arthur Mckinney',
    yoe: '6 years experience',
    no: '4.9',
  },
  {
    id: 3,
    img: man7,
    name: 'Bessie Watson',
    yoe: '2 years experience',
    no: '4.8',
  },
  {
    id: 4,
    img: man8,
    name: 'Albert Bell',
    yoe: '3 years experience',
    no: '4.8',
  },
];
