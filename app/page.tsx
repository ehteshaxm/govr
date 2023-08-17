import Image from 'next/image';
import Navbar from './components/Navbar';
import Stamp from './components/Stamp';
import {
  TargetIcon,
  BarChartIcon,
  RocketIcon,
  MagicWandIcon,
  QuoteIcon,
  CrumpledPaperIcon,
  CheckIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';
import Card from './components/Card';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='bg-neutral-900 overflow-hidden'>
      <div className='min-h-screen'>
        <Navbar />
        <div className='mt-36 px-5 lg:px-0 max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold'>
            Get users to try your product and gather real user feedback
          </h1>
          <div className='max-w-md mx-auto mt-5 text-neutral-500'>
            <p className=''>
              Elevate your product development strategy with direct feedback
              from your ideal customers.
            </p>
          </div>

          <button className='p-[2px] whitespace-nowrap overflow-hidden relative rounded-full mt-7 shadow-2xl shadow-purple-500 hover:cursor-pointer transition'>
            <div className='absolute animate-spin ease-linear glow h-full w-full bg-[conic-gradient(var(--tw-gradient-stops))] from-neutral-900 via-neutral-900 to-white'></div>
            <div className='relative z-10 hover:scale-105 bg-gradient-to-b from-neutral-700 via-neutral-900 to-gray-800 transition p-3 px-5 rounded-full'>
              {'Get Started ->'}
            </div>
          </button>
        </div>
      </div>

      <div className='bg-gradient-to-br from-zinc-900 to-zinc-950 py-16 shadow-2xl shadow-purple-500 border-t border-neutral-700'>
        <div className='max-w-7xl mx-auto flex-col lg:flex-row flex justify-between items-center px-5 lg:px-0'>
          <div className='max-w-xl'>
            <p className='text-md lg:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'>
              Optimize for users
            </p>
            <h2 className='text-2xl lg:text-3xl font-bold mt-3'>
              Join founders, investors and engineers like you, In achieving
              product-market fit super fast
            </h2>
            <p className='mt-3 text-neutral-500 text-sm lg:text-md'>
              Are you a visionary creator, an innovative mind, or a passionate
              builder of products that wants to validate your product - the
              platform helps creators like you to connect with enthusiastic
              users, gather invaluable insights, and refine your creations for
              success.
            </p>
          </div>
          <div className='mt-10 lg:mt-0'>
            <div className='flex lg:justify-center flex-wrap max-w-lg lg:max-w-md lg:ml-12'>
              <Stamp name='Artists' />
              <Stamp name='Musicians' />
              <Stamp name='Designers' />
              <Stamp name='Developers' />
              <Stamp name='Gamers' />
              <Stamp name='Filmmakers' />
              <Stamp name='Entrepreneurs' />
              <Stamp name='Writers' />
              <Stamp name='Engineers' />
              <Stamp name='\_(ッ)_/ you name it...' />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl px-2 lg:px-0 mt-36 lg:mt-44 mx-auto text-center relative'>
        <div className='z-0 h-96 w-96 blur-3xl opacity-20 bg-gradient-to-b from-gray-900 to-neutral-200 absolute top-32 -left-52'></div>
        <div className='z-0 h-96 w-96 blur-3xl opacity-20 bg-gradient-to-b from-gray-900 to-neutral-200 absolute bottom-0 -right-52'></div>
        <p className='z-10 relative text-md lg:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200'>
          Features and Benefits
        </p>
        <h2 className='z-10 px-3 lg:px-0 relative text-2xl lg:text-3xl font-bold mt-3 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent'>
          Elevate your approach towards <br className='hidden lg:block' />{' '}
          creation by leveraging our services
        </h2>
        <div className='z-10 relative mt-24 lg:mt-32 flex justify-center items-end flex-wrap'>
          <Card
            icon={<TargetIcon height={25} width={25} />}
            title={'Targeted User Base'}
            description={
              'Connect with a diverse community of users, Your product deserves to be in the hands of those who truly appreciate its potential.'
            }
          />
          <Card
            icon={<BarChartIcon height={25} width={25} />}
            title={'Data-Driven Decisions'}
            description={
              'Our platform equips you with actionable insights derived from user interactions, helping you make informed decisions to enhance user experience and drive growth.'
            }
          />
          <Card
            icon={<RocketIcon height={25} width={25} />}
            title={'Amplify Your Reach'}
            description={
              'Harness the collective power of our engaged user base to generate organic buzz around your product. Through authentic word-of-mouth recommendations'
            }
          />
          <div className='self-start'>
            <Card
              icon={<MagicWandIcon height={25} width={25} />}
              title={'Seamless User Experience'}
              description={
                "Our user-friendly interface ensures both creators and users have a smooth and enjoyable experience. Effortlessly showcase your product's features, benefits, and uniqueness. Our platform bridges the gap between creators and their target audience, ensuring your product lands in the hands of those who truly matter."
              }
            />
          </div>
          <div className='self-start'>
            <Card
              icon={<QuoteIcon height={25} width={25} />}
              title={'Tailored Feedback'}
              description={
                "Receive targeted feedback from users who align with your product's vision. Whether it's about functionality, design, or user-friendliness, you'll gain insights that propel your product to greatness."
              }
            />
          </div>
          <div className='self-start'>
            <Card
              icon={<CrumpledPaperIcon height={25} width={25} />}
              title={'Hear What Matters Most'}
              description={
                'Genuine user feedback is the cornerstone of progress. Receive invaluable insights straight from the people who matter the most – your potential users. Discover what excites them, what puzzles them, and what resonates deeply, helping you iterate towards perfection.'
              }
            />
          </div>
        </div>
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}
