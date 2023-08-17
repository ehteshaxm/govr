import React from 'react';
import { motion } from 'framer-motion';

interface StampProps {
  name: string;
  index: number;
}

const Stamp: React.FC<StampProps> = ({ name, index }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.div
      className={`p-2 px-4 m-1 text-sm bg-gradient-to-b from-neutral-700 via-neutral-900 to-gray-800 rounded-full border border-neutral-700 hover:scale-105 transition-transform ease-out hover:border-none`}
      key={index}
      initial='initial'
      whileInView='animate'
      variants={fadeInAnimationVariants}
      custom={index}
    >
      {name}
    </motion.div>
  );
};

export default Stamp;
