'use client';
import Navbar from './components/Navbar';
import {
  TargetIcon,
  BarChartIcon,
  RocketIcon,
  MagicWandIcon,
  QuoteIcon,
  CrumpledPaperIcon,
} from '@radix-ui/react-icons';
import Card from './components/Card';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const fadeInAnimationVariants = {
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
  };

  return (
    <div className='bg-neutral-900 overflow-hidden'>
      <div className='min-h-screen'>
        <Navbar />
        <div className='mt-36 lg:mt-60 px-5 lg:px-0 max-w-4xl mx-auto text-center'>
          <motion.h1
            className='text-4xl lg:text-5xl font-bold'
            initial='initial'
            whileInView='animate'
            variants={fadeInAnimationVariants}
          >
            Get users to try your product and gather real user feedback
          </motion.h1>
          <motion.div
            className='max-w-md mx-auto mt-5 text-neutral-500'
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
            <p className=''>
              Elevate your product development strategy with direct feedback
              from your ideal customers.
            </p>
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
            <Link href='/contact'>
              <div className='relative z-10 hover:scale-105 bg-gradient-to-b from-neutral-700 via-neutral-900 to-gray-800 transition p-3 px-5 rounded-full'>
                {'Get Started ->'}
              </div>
            </Link>
          </motion.button>
        </div>
      </div>
      <Banner />
      <div
        id='product'
        className='max-w-7xl px-2 lg:px-0 mt-36 lg:mt-44 mx-auto text-center relative'
      >
        <div className='z-0 h-96 w-96 blur-3xl opacity-20 bg-gradient-to-b from-gray-900 to-neutral-200 absolute top-32 -left-52'></div>
        <div className='z-0 h-96 w-96 blur-3xl opacity-20 bg-gradient-to-b from-gray-900 to-neutral-200 absolute bottom-0 -right-52'></div>
        <motion.p
          className='z-10 relative text-md lg:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'
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
          Features and Benefits
        </motion.p>
        <motion.h2
          className='z-10 px-3 lg:px-0 relative text-2xl lg:text-3xl font-bold mt-3 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent'
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
          Elevate your approach towards <br className='hidden lg:block' />{' '}
          creation by leveraging our services
        </motion.h2>
        <div className='z-10 relative mt-24 lg:mt-32 flex justify-center items-end flex-wrap'>
          <Card
            icon={<TargetIcon height={25} width={25} />}
            title={'Targeted User Base'}
            description={
              'Connect with a diverse community of users, Your product deserves to be in the hands of those who truly appreciate its potential.'
            }
            index={0}
          />
          <Card
            icon={<BarChartIcon height={25} width={25} />}
            title={'Data-Driven Decisions'}
            description={
              'Our platform equips you with actionable insights derived from user interactions, helping you make informed decisions to enhance user experience and drive growth.'
            }
            index={1}
          />
          <Card
            icon={<RocketIcon height={25} width={25} />}
            title={'Amplify Your Reach'}
            description={
              'Harness the collective power of our engaged user base to generate organic buzz around your product. Through authentic word-of-mouth recommendations'
            }
            index={2}
          />
          <div className='self-start'>
            <Card
              icon={<MagicWandIcon height={25} width={25} />}
              title={'Seamless User Experience'}
              description={
                "Our user-friendly interface ensures both creators and users have a smooth and enjoyable experience. Effortlessly showcase your product's features, benefits, and uniqueness. Our platform bridges the gap between creators and their target audience, ensuring your product lands in the hands of those who truly matter."
              }
              index={3}
            />
          </div>
          <div className='self-start'>
            <Card
              icon={<QuoteIcon height={25} width={25} />}
              title={'Tailored Feedback'}
              description={
                "Receive targeted feedback from users who align with your product's vision. Whether it's about functionality, design, or user-friendliness, you'll gain insights that propel your product to greatness."
              }
              index={4}
            />
          </div>
          <div className='self-start'>
            <Card
              icon={<CrumpledPaperIcon height={25} width={25} />}
              title={'Hear What Matters Most'}
              description={
                'Genuine user feedback is the cornerstone of progress. Receive invaluable insights straight from the people who matter the most – your potential users. Discover what excites them, what puzzles them, and what resonates deeply, helping you iterate towards perfection.'
              }
              index={5}
            />
          </div>
        </div>
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}
