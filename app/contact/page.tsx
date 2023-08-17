'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Select, Input, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const toast = useToast();

  return (
    <div className='min-h-screen bg-neutral-900'>
      <Navbar />
      <div className='mt-36 mb-64 px-5 lg:px-0 lg:mt-60 max-w-4xl mx-auto text-center'>
        <motion.h1
          className='text-4xl lg:text-5xl font-bold'
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
          Join the waitlist! <br /> We'll soon be in touch
        </motion.h1>
        <motion.div
          className='max-w-md mx-auto mt-10 text-neutral-500 flex'
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
          <Select
            size={'lg'}
            borderRightRadius={'0'}
            borderLeftRadius={'100px'}
            placeholder='Category'
            bg='#262626'
            borderColor={'#3f3f46'}
            fontSize={14}
            w={'180px'}
            color='#d1d5db'
            focusBorderColor='#a855f7'
          >
            <option value='option1'>Company</option>
            <option value='option2'>Testor</option>
          </Select>
          <Input
            size='lg'
            placeholder='Enter your email'
            borderLeftRadius={'0'}
            borderRightRadius={'100px'}
            borderColor={'#3f3f46'}
            bg={'#0a0a0a'}
            color='white'
            type='email'
            fontSize={14}
            focusBorderColor='#a855f7'
          />
        </motion.div>

        <motion.button
          className='p-[2px] whitespace-nowrap overflow-hidden relative rounded-full mt-7 shadow-2xl shadow-purple-500 hover:cursor-pointer transition'
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
          <div className='absolute animate-spin ease-linear glow h-full w-full bg-[conic-gradient(var(--tw-gradient-stops))] from-neutral-900 via-neutral-900 to-white'></div>
          <div
            className='relative flex items-center justify-between z-10 hover:scale-105 bg-gradient-to-b from-neutral-700 via-neutral-900 to-gray-800 transition p-3 px-5 rounded-full'
            onClick={() => {
              toast({
                title: 'Custom Toast',
                description:
                  'This is a custom toast with a different background color!',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom',
                render: () => (
                  <div className='p-3 bg-black border border-neutral-700 shadow-2xl shadow-purple-500 rounded-xl flex items-center font-semibold'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-5 h-5 text-white mr-2'
                    >
                      <path
                        fillRule='evenodd'
                        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Thank you, You're on the list!
                  </div>
                ),
              });
            }}
          >
            <p className='mr-2'>Submit</p> <PaperPlaneIcon />
          </div>
        </motion.button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
