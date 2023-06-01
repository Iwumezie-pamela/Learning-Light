// eslint-disable-next-line no-unused-vars
import React from 'react';
import SideBar from './components/SideBar';
import DesignDashBoard from './components/DesignDashBoard';

function App() {
  return (
    <section className='bg-white max-w-7xl mx-auto rounded-2xl text-[#edf0fe] flex md:flex-row'>
      <SideBar />
      <DesignDashBoard />
    </section>
  );
}

export default App;
