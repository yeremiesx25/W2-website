import React from 'react';

function PrimaryButton({ text }) {
  return (
    <button
     className='w-40 h-12 bg-primarycolor rounded-3xl text-white font-semibold hover:bg-slate-50 hover:border-2 hover:border-primarycolor hover:text-primarycolor transition-colors duration-500'>
      {text}
    </button>
  );
}

export default PrimaryButton;