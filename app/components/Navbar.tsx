import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.div
      className='max-w-7xl mx-auto px-5 lg:px-0 pt-10 flex justify-between items-center'
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      variants={{
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: () => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.05,
          },
        }),
      }}
    >
      <Link href='/'>
        <div className='flex items-center'>
          <img src='logo.webp' className='w-10 mr-2' />
          <p className='font-thin text-2xl'>GroVr</p>
        </div>
      </Link>
      <div className='lg:flex justify-around items-center w-80 hidden'>
        <a
          href='#learn'
          className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'
        >
          Learn
        </a>
        <Link href='/contact'>
          <p className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'>
            Contact
          </p>
        </Link>
        <a
          href='#pricing'
          className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'
        >
          Pricing
        </a>
        <a
          href='#product'
          className='text-neutral-500 hover:cursor-pointer hover:text-neutral-200 transition delay-400'
        >
          Product
        </a>
      </div>
      <div>
        <Link href={'/contact'}>
          <button className='rounded-full text-sm lg:text-base p-3 py-2 ring ring-purple-500 ring-offset-2 ring-offset-neutral-900 hover:bg-neutral-300 transition bg-white text-black'>
            {'Join Us ->'}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
