'use client';
import React from 'react';
import { useScroll, motion, delay } from 'framer-motion';
import Stamp from './Stamp';

const Banner = () => {
  const names = [
    'Artists',
    'Musicians',
    'Designers',
    'Gamers',
    'Filmmakers',
    'Entrepreneurs',
    'Writers',
    'Engineers',
    '_(ッ)_/ you name it...',
  ];

  return (
    <motion.div
      id='learn'
      className='bg-gradient-to-br from-zinc-900 to-zinc-950 py-16 shadow-2xl shadow-purple-500 border-t border-neutral-700'
    >
      <div className='max-w-7xl mx-auto flex-col lg:flex-row flex justify-between items-center px-5 lg:px-0'>
        <div className='max-w-xl'>
          <motion.p
            className='text-md lg:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'
            initial='initial'
            whileInView='animate'
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
            Optimize for users
          </motion.p>
          <motion.h2
            className='text-2xl lg:text-3xl font-bold mt-3'
            initial='initial'
            whileInView='animate'
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              animate: () => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                },
              }),
            }}
          >
            Join founders, investors and engineers like you, In achieving
            product-market fit super fast
          </motion.h2>
          <motion.p
            className='mt-3 text-neutral-500 text-sm lg:text-md'
            initial='initial'
            whileInView='animate'
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              animate: () => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                },
              }),
            }}
          >
            Are you a visionary creator, an innovative mind, or a passionate
            builder of products that wants to validate your product - the
            platform helps creators like you to connect with enthusiastic users,
            gather invaluable insights, and refine your creations for success.
          </motion.p>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex lg:justify-center flex-wrap max-w-lg lg:max-w-md lg:ml-12'>
            {names.map((name, index) => {
              return <Stamp name={name} index={index} key={index} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
