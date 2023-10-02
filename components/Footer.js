import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center gap-2 text-xs'>
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
  );
};

export default Footer;
