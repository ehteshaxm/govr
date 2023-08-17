import React from 'react';

const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-0 pt-10 flex justify-between items-center'>
      <div className='flex items-center'>
        <img src='logo.webp' className='w-10 mr-2' />
        <p className='font-thin text-2xl'>GroVr</p>
      </div>
      <div className='lg:flex justify-around items-center w-80 hidden'>
        <a className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'>
          Learn
        </a>
        <a className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'>
          Contact
        </a>
        <a className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'>
          Pricing
        </a>
        <a className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'>
          Product
        </a>
      </div>
      <div>
        <button className='rounded-full text-sm lg:text-base p-3 py-2 ring ring-purple-500 ring-offset-2 ring-offset-neutral-900 hover:bg-neutral-300 transition bg-white text-black'>
          {'Join Us ->'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
