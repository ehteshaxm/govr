import React from 'react';

interface StampProps {
  name: string;
}

const Stamp: React.FC<StampProps> = ({ name }) => {
  return (
    <div
      className={`p-2 px-4 m-1 text-sm bg-gradient-to-b from-neutral-700 via-neutral-900 to-gray-800 rounded-full border border-neutral-700 hover:scale-105 transition-transform ease-out hover:border-none`}
    >
      {name}
    </div>
  );
};

export default Stamp;
