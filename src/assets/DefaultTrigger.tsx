import React from 'react';

export const DefaultTrigger: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        d="m208 96-80 80-80-80"
      />
    </svg>
  );
};
