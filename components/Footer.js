import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center gap-2 text-xs'>
      <a
        href='https://hyperlinkschool.com/'
        target='_blank'>
        Contact Us
      </a>
      <span>|</span>
      <a
        href='https://hyperlinkschool.com/privacy'
        target='_blank'>
        Privacy
      </a>
      <span>|</span>
      <a
        href='https://hyperlinkschool.com/tc'
        target='_blank'>
        Terms & Conditions
      </a>
      <span>|</span>
      <a
        href='https://hyperlinkschool.com/rp'
        target='_blank'>
        Refund Policy
      </a>
    </div>
  );
};

export default Footer;
