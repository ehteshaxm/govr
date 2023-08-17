import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className='relative mt-36 lg:mt-44'
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
      <div className='z-0 -top-12 blur-3xl h-96 w-full rounded-full absolute opacity-40 transition animate-pulse bg-gradient-to-t from-gray-900 via-purple-900 to-violet-900'></div>
      <div className='z-10 relative max-w-7xl border border-neutral-700 bg-neutral-800 rounded-t-xl mx-auto p-12'>
        <div className='max-w-5xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center'>
          <div className='flex items-center mt-16 lg:mt-0'>
            <img src='/logo.webp' className='w-20 mr-2' />
            <div>
              <h3 className='font-extralight text-3xl'>GroVr</h3>
              <p className='text-sm text-neutral-500'>© All rights reserved</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start w-full lg:w-1/3'>
            <div className='mt-7 text-center lg:text-left'>
              <p className='font-medium text-md'>Resources</p>
              <div className='mt-3 flex flex-col items-center lg:items-start'>
                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  How to get started
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Newsroom
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Tutorials
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Meet the community
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Starters
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  User stories
                </p>
              </div>
            </div>
            <div className='mt-7 text-center lg:text-left'>
              <p className='font-medium text-md'>Socials</p>
              <div className='mt-3 flex flex-col items-center lg:items-start'>
                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Twitter
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Discord{' '}
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Instagram
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Facebook{' '}
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Medium
                </p>
              </div>
            </div>
            <div className='mt-7 text-center lg:text-left'>
              <p className='font-medium text-md'>Company</p>
              <div className='mt-3 flex flex-col items-center lg:items-start'>
                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  About us
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Blog{' '}
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Handbook
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  Careers{' '}
                </p>

                <p className='mb-2 text-sm text-neutral-400 hover:text-neutral-300 transition hover:cursor-pointer'>
                  FAQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
