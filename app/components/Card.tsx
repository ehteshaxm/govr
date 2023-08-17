import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    // <div className='text-left max-w-sm m-4'>
    //   <div className='flex items-end'>
    //     {icon}
    //     <h3 className='text-md ml-2'>{title}</h3>
    //   </div>
    //   <p className='font-thin text-sm text-neutral-300 mt-2'>{description}</p>
    // </div>
    <div className='text-left max-w-sm m-2 bg-neutral-800 p-5 rounded-xl shadow-lg shadow-indigo50'>
      <div className='mb-3 bg-purple-600 p-3 rounded-xl max-w-min'>{icon}</div>
      <h3 className='text-md'>{title}</h3>
      <p className='mt-1 text-neutral-500 text-sm md:text-md'>{description}</p>
    </div>
  );
};

export default Card;
