import React from 'react';

const Footer = () => {
  return (
    <div className='m-auto flex flex-col justify-center items-start gap-10 pt-5 max-w-6xl p-4 pb-10'>
      <div className='m-auto flex justify-center gap-2 text-xs'>
        <a
          href='https://hyperlinkschool.com/privacy'
          target='_blank'>
          Privacy
        </a>
        <span>|</span>
        <a
          href='https://hyperlinkschool.com/tc'
          target='_blank'>
          T&C
        </a>
      </div>
    </div>
  );
};

export default Footer;
