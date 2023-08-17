import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className='text-left max-w-sm m-2 bg-neutral-800 p-5 rounded-xl shadow-lg shadow-indigo50'
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
            delay: 0.05 * index,
          },
        }),
      }}
    >
      <div className='mb-3 bg-purple-600 p-3 rounded-xl max-w-min'>{icon}</div>
      <h3 className='text-md'>{title}</h3>
      <p className='mt-1 text-neutral-500 text-sm md:text-md'>{description}</p>
    </motion.div>
  );
};

export default Card;
