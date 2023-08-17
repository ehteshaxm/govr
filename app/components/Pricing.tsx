import React from 'react';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div
      id='pricing'
      className='max-w-7xl mx-auto mt-36 lg:mt-48 pt-10 pb-20 text-center relative'
    >
      <div className='z-0 blur-3xl h-96 w-full rounded-full absolute opacity-40 transition animate-pulse bg-gradient-to-t from-gray-900 via-purple-900 to-violet-900'></div>
      <div className='relative z-10'>
        <motion.p
          className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'
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
          Pricing Plans
        </motion.p>
        <motion.h2
          className='text-3xl font-bold mt-3 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent'
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
          Flexible Plans and Features
        </motion.h2>
        <div className='mt-20 max-w-5xl mx-auto flex flex-col lg:flex-row justify-around items-center lg:items-start'>
          <motion.div
            className='bg-neutral-800 rounded-xl p-5 w-72 text-left'
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
            <p className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'>
              Solo Hacker
            </p>
            <p className='mt-2 text-neutral-500 text-md font-semibold'>
              $<span className='text-white font-bold text-4xl'>15</span>/month
            </p>
            <p className='mt-1 text-sm text-neutral-500'>
              Start validating your idea through demographic based user base.
            </p>
            <hr className='my-5 border-neutral-700' />
            <Link href='/contact'>
              <button className='bg-gray-300 hover:bg-white transition w-full text-sm rounded-full p-2 text-black'>
                Get Started <span className='text-purple-500'>{'->'}</span>
              </button>
            </Link>
            <hr className='my-5 border-neutral-700' />
            <div className='mt-7'>
              <p className='font-semibold text-sm'>Usage</p>
              <div className='mt-3'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Upto 5 focus groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Upto 7 people focus groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Real-time Analytics
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <Cross2Icon height={20} width={20} color='#f43f5e' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Anonymous chat groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <Cross2Icon height={20} width={20} color='#f43f5e' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Data Aggregation
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-7'>
              <p className='font-semibold text-sm'>Support</p>
              <div className='mt-1'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Simple Support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='bg-neutral-800 my-14 lg:my-0 ring ring-offset-8 ring-purple-600 ring-offset-neutral-900 shadow-2xl shadow-purple-500 rounded-xl p-5 w-72 text-left'
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
            <p className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'>
              Advanced
            </p>
            <p className='mt-2 text-neutral-500 text-md font-semibold'>
              $<span className='text-white font-bold text-4xl'>25</span>/month
            </p>
            <p className='mt-1 text-sm text-neutral-500'>
              Attain traction and refine your ideas through accurate user
              groups.
            </p>
            <hr className='my-5 border-neutral-700' />
            <Link href='/contact'>
              <button className='bg-purple-500 hover:bg-purple-700 transition w-full text-sm rounded-full p-2'>
                Get Started <span className='text-purple-200'>{'->'}</span>
              </button>
            </Link>
            <hr className='my-5 border-neutral-700' />
            <div className='mt-7'>
              <p className='font-semibold text-sm'>Usage</p>
              <div className='mt-3'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Upto 15 focus groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Upto 12 people focus groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Real-time Analytics
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Anonymous chat groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Data Aggregation
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-7'>
              <p className='font-semibold text-sm'>Support</p>
              <div className='mt-1'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs font-semibold text-neutral-100 ml-3'>
                    Premium Support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='bg-neutral-800 rounded-xl p-5 w-72 text-left'
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
            <p className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'>
              Enterprise
            </p>
            <p className='mt-2 text-neutral-500 text-md font-semibold'>
              <span className='text-white font-bold text-4xl'>PRO</span>
            </p>
            <p className='mt-1 text-sm text-neutral-500'>
              Start validating your idea through demographic based user base.
            </p>
            <hr className='my-5 border-neutral-700' />
            <Link href='/contact'>
              <button className='bg-purple-500 hover:bg-purple-700 transition w-full text-sm rounded-full p-2'>
                Get Started <span className='text-purple-200'>{'->'}</span>
              </button>
            </Link>
            <hr className='my-5 border-neutral-700' />
            <div className='mt-7'>
              <p className='font-semibold text-sm'>Usage</p>
              <div className='mt-3'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    On Demand focus groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Required people focus groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Real-time Analytics
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Anonymous chat groups
                  </p>
                </div>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs text-neutral-100 ml-3'>
                    Data Aggregation
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-7'>
              <p className='font-semibold text-sm'>Support</p>
              <div className='mt-2'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs font-semibold text-neutral-100 ml-3'>
                    Ultimate Support
                  </p>
                </div>
              </div>
              <div className='mt-1'>
                <div className='flex items-center py-2 border-b border-zinc-700'>
                  <CheckIcon height={20} width={20} color='#a855f7' />
                  <p className='text-xs font-semibold text-neutral-100 ml-3'>
                    Instant Access
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
